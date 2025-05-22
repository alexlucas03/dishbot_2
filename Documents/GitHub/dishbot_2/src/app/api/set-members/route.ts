import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

function generateUsernames(people: any[]): any[] {
    const usernameCount: Record<string, number> = {};

    return people.map(person => {
        const parts = person.name.trim().toLowerCase().split(" ");
        const base = parts.length >= 2
            ? `${parts[0][0]}${parts[1].replace(/[^a-z0-9]/gi, '')}`
            : parts[0];

        let username = base;
        let count = usernameCount[base] || 0;

        if (count > 0) {
            username = `${base}${count}`;
        }

        usernameCount[base] = count + 1;

        return {
            ...person,
            username,
            originalName: person.name
        };
    });
}

export async function POST(request: NextRequest) {
    const { people } = await request.json();

    try {
        const withUsernames = generateUsernames(people);
        const groupmeIds = withUsernames.map(p => p.groupmeid);

        // Fetch current records to preserve admin values
        const existingPeople = await prisma.people2.findMany({
            where: {
                groupmeid: { in: groupmeIds }
            },
            select: {
                groupmeid: true,
                admin: true
            }
        });

        const adminMap: Record<string, boolean> = {};
        existingPeople.forEach(p => {
            adminMap[p.groupmeid] = p.admin;
        });

        await prisma.$transaction([
            ...withUsernames.map(person =>
                prisma.people2.upsert({
                    where: { groupmeid: person.groupmeid },
                    update: {
                        name: person.originalName,
                        username: person.username,
                        pickorder: person.pickorder,
                        totalpoints: person.totalpoints,
                        admin: adminMap[person.groupmeid] ?? person.admin  // preserve existing
                    },
                    create: {
                        groupmeid: person.groupmeid,
                        name: person.originalName,
                        username: person.username,
                        pickorder: person.pickorder,
                        totalpoints: person.totalpoints,
                        admin: person.admin  // only set on create
                    }
                })
            ),
            // Delete people not in the current list
            prisma.people2.deleteMany({
                where: {
                    groupmeid: { notIn: groupmeIds }
                }
            })
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error saving to DB:", error);
        return NextResponse.json({ error: "Insert failed" }, { status: 500 });
    }
}
