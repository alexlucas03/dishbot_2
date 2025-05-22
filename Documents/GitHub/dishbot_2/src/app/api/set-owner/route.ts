import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const GROUP_ID = process.env.GROUPME_GROUP_ID;
const GROUPME_ACCESS_TOKEN = process.env.GROUPME_ACCESS_TOKEN;

export async function POST(request: NextRequest) {
    const { newOwner } = await request.json();

    try {
        // First, find the new admin
        const newAdmin = await prisma.people2.findFirst({
            where: { groupmeid: newOwner },
            select: {
                groupmeid: true,
            }
        });

        if (!newAdmin) {
            console.error("User not found with groupmeid:", newOwner);
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        console.log("Found user, attempting to change owner to:", newAdmin.groupmeid);

        // Find the current admin
        const currentAdmin = await prisma.people2.findFirst({
            where: { admin: true },
            select: {
                groupmeid: true,
            }
        });

        // Update admin status in database (transaction to ensure atomicity)
        await prisma.$transaction(async (prisma: any) => {
            // If there was a previous admin, set them to non-admin
            if (currentAdmin) {
                await prisma.people2.update({
                    where: { groupmeid: currentAdmin.groupmeid },
                    data: { admin: false }
                });
                
                console.log("Set previous admin to false:", currentAdmin.groupmeid);
            }
            
            // Set the new admin
            await prisma.people2.update({
                where: { groupmeid: newAdmin.groupmeid },
                data: { admin: true }
            });
            
            console.log("Set new admin to true:", newAdmin.groupmeid);
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("GroupMe error:", err);
        return NextResponse.json({ error: "Failed to update admin" }, { status: 500 });
    }
}