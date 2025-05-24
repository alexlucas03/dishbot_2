import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const username = body.username as string;
        
        // Get start and end date records
        const startDateRecord = await prisma.startend2.findFirst({
            where: { id: 1 }
        });
        
        const endDateRecord = await prisma.startend2.findFirst({
            where: { id: 2 }
        });
        
        if (!startDateRecord?.date || !endDateRecord?.date) {
            return NextResponse.json({ error: "Start or end date not found" }, { status: 400 });
        }
        
        // Extract months from date objects
        const startDate = new Date(startDateRecord.date);
        const endDate = new Date(endDateRecord.date);
        const startMonth = startDate.getMonth() + 1;
        const endMonth = endDate.getMonth() + 1;
        
        let dishes: any[] = [];

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

        for (let i = startMonth; i <= endMonth; i++) {
            const model = modelMap[i];
            const dishesByMonth = await model.findMany({
                where: { owner: username }
            });
            dishes = [
                ...dishes,
                ...dishesByMonth.map((dish: any) => ({
                    ...dish,
                    month: i,
                }))
            ];
        }

        return NextResponse.json({
            success: true,
            dishes: dishes
                .sort((a: any, b: any) => a.id - b.id)
                .map((dish: any) => {
                    const date = new Date(dish.year, dish.month - 1, dish.day);
                    date.setDate(date.getDate() + 1);
                    return {
                        date,
                        type: dish.type,
                        id: dish.id
                    };
                })

        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}