import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { format } from "date-fns";

const GROUPME_ACCESS_TOKEN = process.env.GROUPME_ACCESS_TOKEN!;
const GROUPME_GROUP_ID = process.env.GROUPME_GROUP_ID!;

const monthMap: Record<number, any> = {
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
    12: prisma.december
};

export async function GET() {
    try {
        const now = new Date();
        now.setHours(now.getHours() - 8); // Adjust timezone

        const year = now.getFullYear().toString();
        const month = now.getMonth() + 1;
        const day = now.getDate().toString().padStart(2, "0");

        const model = monthMap[month];
        if (!model) throw new Error("Invalid month model");

        const dishes = await model.findMany({
            where: { year, day }
        });

        const people = await prisma.people2.findMany();

        // Map usernames to { name, groupmeid }
        const ownerMap = new Map(
            people.map((p: { username: string; name: string; groupmeid: string }) => [
                p.username,
                { name: p.name, groupmeid: p.groupmeid }
            ])
        );

        // Build formatted lines and mention indices
        let currentIndex = `Today's Dishes (${format(now, "MMMM do, yyyy")}):\n`.length;
        const groupmeIds: string[] = [];
        const indices: [number, number][] = [];

        const formattedLines = dishes.map((dish: { owner: string; type: string }) => {
            const ownerInfo = ownerMap.get(dish.owner);
            const visibleName = ownerInfo?.name || "(unassigned)";
            const line = `${dish.type}: ${visibleName}`;

            if (ownerInfo?.groupmeid) {
                groupmeIds.push(ownerInfo.groupmeid);
                indices.push([
                    currentIndex + dish.type.length + 2, // after "type: "
                    currentIndex + dish.type.length + 2 + visibleName.length
                ]);
            }

            currentIndex += line.length + 1; // +1 for newline
            return line;
        });

        const messageText = `Today's Dishes (${format(now, "MMMM do, yyyy")}):\n` + formattedLines.join("\n");

        const messagePayload: any = {
            text: messageText
        };

        if (groupmeIds.length > 0) {
            messagePayload.attachments = [
                {
                    type: "mentions",
                    user_ids: groupmeIds,
                    indices: indices
                }
            ];
        }

        const response = await fetch(`https://api.groupme.com/v3/groups/${GROUPME_GROUP_ID}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Access-Token": GROUPME_ACCESS_TOKEN
            },
            body: JSON.stringify({ message: messagePayload })
        });

        if (!response.ok) throw new Error("Failed to send message");

        return NextResponse.json({ success: true, message: messageText });

    } catch (error) {
        console.error("Error sending today's dishes:", error);
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}
