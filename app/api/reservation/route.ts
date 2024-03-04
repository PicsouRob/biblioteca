import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma.config";
import { Reservation } from "@prisma/client";

export async function POST(request: Request) {
    try {
        const { userId, recuperationDate, comment, bookId, image, title } = (await request.json()) as Reservation;

        if(!userId || !recuperationDate || !bookId || !title) {
            throw new Error("Todos los campos(title, userId, recuperationDate, bookId) son obligatorios!");
        }

        const existReservation = await prisma.reservation.findFirst({
            where: { bookId, state: "Reservado" }
        });

        if(existReservation) {
            throw new Error("Este libro ya ha sido reservado!");
        }

        const reservation = await prisma.reservation.create({
            data: {
                title, image, userId, recuperationDate, comment, bookId
            }
        });

        return NextResponse.json(JSON.stringify({
            ...reservation, 
            message: "Reservación creado exitosamente."
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