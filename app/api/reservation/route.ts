import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { prisma } from "@/libs/prisma.config";
import { User } from "@/types/model";

export async function GET(request: Request) {
    try {
        const { name, email, password } = (await request.json()) as User;

        
    } catch(error: any) {
        return NextResponse.json(
            JSON.stringify({
                message: error.message,
            }), {
            status: 500
        });
    }
};