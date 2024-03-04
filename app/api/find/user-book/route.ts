import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/libs/prisma.config";
import { Loan } from "@/types/model";

export async function GET(request: NextRequest) {
    try {
        const url: URL = new URL(request.url);
        const userId = url.searchParams.get('userId')!;
        
        const userBook: any[] = await prisma.loan.findMany({
            where: { userId }
        });

        if (userBook.length < 1) {
            throw new Error("Este usuario no tiene libro prestado libro disponible");
        }

        return NextResponse.json(JSON.stringify({
            userBook, 
            message: "Libro(e) encontrado exitosamente."
        }), { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            JSON.stringify({
                message: error.message,
            }), {
            status: 500
        });
    }
}