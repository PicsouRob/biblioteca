import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/libs/prisma.config";
import { ReservationProps } from "@/types/model";

export async function GET(request: NextRequest) {
    try {
        const url: URL = new URL(request.url);
        const userId = url.searchParams.get('userId')!;
        
        const reservedBook: ReservationProps[] = await prisma.reservation.findMany({
            where: { userId }
        });

        if (reservedBook.length < 1) {
            throw new Error("Este usuario no tiene libro reservado libro disponible");
        }

        return NextResponse.json(JSON.stringify({
            reservedBook, 
            message: "Libro(s) reservado(s) encontrado exitosamente."
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