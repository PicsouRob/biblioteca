import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
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
                    if(!credentials.email || !credentials.password) {
                        throw new Error("El correo o la contraseña es incorrecto.");
                    }

                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials.email
                        }
                    }) as any;

                    if(!user) {
                        throw new Error("Ninguna cuenta pertenece a este correo.");
                    }

                    const isMatch = await bcrypt.compare(credentials.password, user?.password!);

                    if(!isMatch) {
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

                    return NextResponse.json(JSON.stringify({
                        message: "Loggeado exitosamente",
                        user: userWithoutPassword,
                        jwtUserId
                    }), {status: 500 });
                } catch (error: any) {
                    console.log(`${error.message}`);
                    throw new Error(error.message);
                }
            },
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },

        async jwt({ token, user, account }: any) {
            if(user) {
                token.id = user.id;
                token.role = user.role;
                token.accessToken = user.jwtUserId;
            }

            return token;
        },

        async session({ session, token }: any) {
            if(session?.user) {
                session.user.role = token.role;
                session.user.id = token.id;
                session.accessToken = token.accessToken || "";
            }

            return session;
        },
    },
};