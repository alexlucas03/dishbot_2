import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { format } from "date-fns";

export async function GET(request: NextRequest) {
    try {
        // Get all non-admin users with names
        const users = await prisma.people2.findMany({
            where: {
                admin: false
            },
            select: {
                username: true,
                name: true,
                totalpoints: true,
                pickorder: true
            }
        });

        // Get start and end date records
        const startDateRecord = await prisma.startend2.findFirst({ where: { id: 1 } });
        const endDateRecord = await prisma.startend2.findFirst({ where: { id: 2 } });

        if (!startDateRecord?.date || !endDateRecord?.date) {
            return NextResponse.json({ error: "Start or end date not found" }, { status: 400 });
        }

        const results = [];

        const startDate = new Date(startDateRecord.date);
        const endDate = new Date(endDateRecord.date);
        const startMonth = startDate.getMonth() + 1;
        const endMonth = endDate.getMonth() + 1;

        const modelMap: Record<number, any> = {
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

        for (const user of users) {
            let dishes: any[] = [];

            for (let i = startMonth; i <= endMonth; i++) {
                const model = modelMap[i];
                if (!model) continue;

                const dishesByMonth = await model.findMany({
                    where: { owner: user.username }
                });

                dishes = [
                    ...dishes,
                    ...dishesByMonth.map((dish: any) => ({
                        ...dish,
                        month: i,
                    }))
                ];
            }

            // Calculate earned points
            let earnedPoints = 0;
            for (const dish of dishes) {
                const dishDate = new Date(dish.year, dish.month - 1, dish.day);
                const dishDay = format(dishDate, 'EEEE');

                if (dishDay !== 'Sunday') {
                    earnedPoints += (dish.type === 'dinner' || dish.type === 'lunch') ? 2 : 1;
                } else {
                    earnedPoints += (dish.type === 'dinner') ? 3 : 1;
                }
            }

            results.push({
                name: user.name, // use full name
                totalPoints: parseInt(user.totalpoints || '0'),
                earnedPoints: earnedPoints,
                differential: parseInt(user.totalpoints || '0') - earnedPoints,
                pickOrder: parseInt(user.pickorder || '0')
            });
        }

        results.sort((a, b) => a.pickOrder - b.pickOrder);

        return NextResponse.json({
            success: true,
            users: results
        });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}
