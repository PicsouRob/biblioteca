import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prisma } from "@/libs/prisma.config";
import { User } from "@/types/model";

export async function POST(request: Request) {
    try {
        const { name, email, password } = (await request.json()) as User;

        if(!name || !email || !password) {
            throw new Error("Todos los campos son obligatorios!");
        }

        const existedUser = await prisma.user.findUnique({
            where: { email }
        });

        if(existedUser) {
            throw new Error("Ya existe esta cuenta!");
        }

        const hashedPassword: string = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name, email, password: hashedPassword
            }
        }) as User;

        return NextResponse.json(JSON.stringify({
            ...user, 
            message: "Usaurio creado exitosamente."
        }), { status: 201 });
    } catch(error: any) {
        return NextResponse.json(
            JSON.stringify({
                message: error.message,
            }), {
            status: 500
        });
    }
};