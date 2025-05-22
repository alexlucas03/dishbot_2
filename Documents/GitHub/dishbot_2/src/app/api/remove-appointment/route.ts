import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { format } from "date-fns"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const type = body.type;
        const day = format(body.date, "d");''
        const month = Number(format(body.date, "MM"));

        const modelMap: Record<string, any> = {
            1: prisma.january,
            2: prisma.february,
            3: prisma.march,
            4: prisma.april,
            5: prisma.may,
            6: prisma.june,
            7: prisma.july,
            8: prisma.august,
            9: prisma.september,
            10: prisma.october,
            11: prisma.november,
            12: prisma.december,
        };

        const model = modelMap[month];

        const record = await model.findFirst({
            where: {
                day: day,
                type: type
            }
        });

        await model.update({
            where: {
                id: record.id
            },
            data: {
                owner: 'null'
            },
        })

        return NextResponse.json({
            success: true
        })
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}