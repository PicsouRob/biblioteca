import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/libs/prisma.config";

export async function GET(request: NextRequest) {
    try {
        const url: URL = new URL(request.url);
        const id = url.searchParams.get('id');
        
        const loanBook = await prisma.loan.findFirst({
            where: { bookId: id! }
        });

        if (!loanBook) {
            throw new Error("Este libro esta disponible");
        }

        return NextResponse.json(JSON.stringify({
            ...loanBook, 
            message: "Libro encontrado exitosamente."
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