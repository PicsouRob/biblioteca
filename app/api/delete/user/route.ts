import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/libs/prisma.config";
import { User } from "@/types/model";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id: string = searchParams.get("userId")!;

        const existedUser = await prisma.user.findUnique({
            where: { id }
        }) as User;

        if(!existedUser) {
            throw new Error(`Ningun usuario pertenece a este id: ${id}`);
        }

        await prisma.user.delete({ where: { id } });

        return NextResponse.json(JSON.stringify({
            message: "Su cuenta ha sido borrado exitosamente!."
        }), { status: 201 });
    } catch(error: any) {
        console.log(error.message);
        return NextResponse.json(
            JSON.stringify({
                message: error.message,
            }), {
            status: 500
        });
    }
}