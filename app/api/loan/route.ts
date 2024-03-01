import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma.config";
import { Loan } from "@/types/model";

export async function POST(request: Request) {
    try {
        const { userId, dateReturned, comment, bookId } = (await request.json()) as Loan;

        if(!userId || !dateReturned || !bookId) {
            throw new Error("Todos los campos(userId, dateReturned, bookId, dateCreated) son obligatorios!");
        }

        const existedLoanBook = await prisma.loan.findFirst({
            where: { bookId, userId }
        });

        if(existedLoanBook) {
            throw new Error("Ya has hecho este prestamo!");
        }

        const loan = await prisma.loan.create({
            data: {
                userId, dateReturned, comment, bookId
            }
        });

        return NextResponse.json(JSON.stringify({
            ...loan, 
            message: "Prestamo creado exitosamente."
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