import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from "bcrypt";

import { prisma } from "@/libs/prisma.config";
import { signJwt } from "@/libs/jsonWebToken";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/signin",
        signOut: '/auth/signout',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.JWT_USER_ID_SECRET,
    },
    debug: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProviders({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials: any): Promise<any> {
                try {
                    if (!credentials.email || !credentials.password) {
                        throw new Error("El correo o la contraseña es incorrecto.");
                    }

                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email
                        }
                    }) as any;

                    if (!user) {
                        throw new Error("Ninguna cuenta pertenece a este correo.");
                    }

                    const isMatch = await bcrypt.compare(credentials.password, user?.password!);

                    if (!isMatch) {
                        throw new Error("La contraseña es incorrecto!");
                    }

                    const jwtUserId: string = signJwt({
                        id: user.id
                    }, {
                        expiresIn: "30d",
                        noTimestamp: true,
                    });

                    const {
                        password, ...userWithoutPassword
                    } = user;

                    return { ...userWithoutPassword, jwtUserId };
                } catch (error: any) {
                    console.log(`${error.message}`);
                    
                    throw new Error(error.message);
                }
            },
        }),

        GoogleProvider({
            id: "google",
            name: "Google",
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            allowDangerousEmailAccountLinking: true,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
            async profile(profile): Promise<any> {
                try {
                    const isUserExist: any = await prisma.user.findUnique({
                        where: {
                            email: profile?.email
                        }
                    });

                    if (!isUserExist) {
                        const hashedPassword: string = await bcrypt.hash(profile.sub, 10);
                        const newUser = await prisma.user.create({
                            data: {
                                name: profile.name,
                                email: profile.email,
                                password: hashedPassword
                            }
                        });

                        return { ...newUser };
                    }

                    return { ...isUserExist };
                } catch (error) {
                    console.log("Error checking if user exists: ", error);

                    return NextResponse.json(
                        JSON.stringify({
                            message: `Il s'est passé un problème: ${error}`,
                        }), { status: 500 });
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account?.provider === "google") {
                return true;
            }

            return true;
        },

        async redirect({ url, baseUrl }) {
            return baseUrl
        },

        async jwt({ token, user, account }: any) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.accessToken = user.jwtUserId || account?.access_token;
            }

            return token;
        },

        async session({ session, token }: any) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.id = token.id;
                session.accessToken = token.accessToken;
            }

            return session;
        },
    },
};