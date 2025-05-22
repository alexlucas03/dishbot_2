import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  eachDayOfInterval,
  format,
  addDays
} from "date-fns";

// Define a type for the database entry
interface MonthEntry {
  id: string;
  year: string;
  day: string;
  owner: string;
  type: string;
}

export async function POST(request: NextRequest) {
  try {
    const { startDate, endDate } = await request.json();
    const start = new Date(startDate);
    const end = new Date(endDate);


    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json({ error: "Invalid start or end date" }, { status: 400 });
    }

    const days = eachDayOfInterval({ start, end });
    const years = [...new Set(days.map(day => day.getFullYear()))];
    const latestYear = Math.max(...years);

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

    const stats = {
      totalAppointmentsCreated: 0,
      monthsProcessed: 0,
      clearedPriorYears: 0,
      monthsCleared: [] as string[]
    };

    // Organize days by month
    const daysByMonth: Record<number, typeof days> = {};
    for (const day of days) {
      const month = day.getMonth() + 1;
      if (!daysByMonth[month]) daysByMonth[month] = [];
      daysByMonth[month].push(day);
    }

    for (const [monthStr, days] of Object.entries(daysByMonth)) {
      const month = parseInt(monthStr);
      const model = modelMap[month];
      const monthName = new Date(0, month - 1).toLocaleString('default', { month: 'long' });

      if (!model) continue;
      stats.monthsProcessed++;

      // Step 1: Remove prior year data from this table
      const existingYears = await model.findMany({
        select: { year: true },
        distinct: ['year']
      });

      const priorYears = existingYears.map((y: { year: any; }) => y.year).filter((y: string) => parseInt(y) != latestYear);

      if (priorYears.length > 0) {
        await model.deleteMany({
          where: { year: { in: priorYears } }
        });
        stats.clearedPriorYears += priorYears.length;
        stats.monthsCleared.push(monthName);
      }

      // Step 2: Add new data only if not already present
      for (const day of days) {
        const dayStr = String(day.getDate());
        const yearStr = day.getFullYear().toString();
        const dayOfWeek = format(day, "EEEE");

        let typesToAdd: string[] = [];
        if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(dayOfWeek)) {
          typesToAdd = ["lunch", "dinner", "x1"];
        } else if (dayOfWeek === "Sunday") {
          typesToAdd = ["dinner", "x1"];
        }

        if (typesToAdd.length === 0) continue;

        const existing = await model.findMany({
          where: { day: dayStr, year: yearStr }
        });

        const existingTypes = new Set(existing.map((e: { type: any; }) => e.type));

        for (const type of typesToAdd) {
          if (!existingTypes.has(type)) {
            await model.create({
              data: {
                id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
                year: yearStr,
                day: dayStr,
                type,
                owner: "null"
              }
            });
            stats.totalAppointmentsCreated++;
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Created ${stats.totalAppointmentsCreated} appointments. Cleared ${stats.clearedPriorYears} year(s) of outdated data.`,
      stats
    });

  } catch (error) {
    console.error("Error creating appointments:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create appointment slots",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
