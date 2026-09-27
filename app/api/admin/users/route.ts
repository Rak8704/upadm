import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

type Message = {
  id: number;
  sender: string | number;
  receiver: string;
  content: string | null;
  fileUrl: string | null;
  seen: boolean;
  createdAt: Date;
};

export async function GET(req: NextRequest) {
  try {
    // Get all messages including those sent by server
    const msgs = await prisma.message.findMany({
      where: {
        OR: [{ receiver: "server" }, { sender: "server" }],
      },
      orderBy: { createdAt: "desc" },
    });

    // map users to their latest message
    let usersMap: Record<string, Message> = {};
    msgs.forEach((m) => {
      const userId = m.sender === "server" ? m.receiver : m.sender;
      if (!usersMap[userId]) {
        usersMap[userId] = m;
      }
    });

    // Fetch user details for all senders
    const userDetails = await prisma.user.findMany({
      where: {
        id: {
          in: Object.keys(usersMap).map((id) => Number(id)),
        },
      },
      select: {
        id: true,
        phone_number: true,
      },
    });

    // Create a map of user_code to phone_number
    const phoneNumberMap = userDetails.reduce((acc, user) => {
      if (user.id && user.phone_number) {
        acc[user.id] = user.phone_number;
      }
      return acc;
    }, {} as Record<string, string>);

    const users = Object.keys(usersMap)
      .map((uid) => ({
        id: uid,
        phone_number: phoneNumberMap[uid] || uid, // fallback to uid if phone not found
        lastMessage: usersMap[uid],
        unseenCount: 0, // will be updated live
      }))
      .sort((a, b) => {
        const dateA = new Date(a.lastMessage.createdAt).getTime();
        const dateB = new Date(b.lastMessage.createdAt).getTime();
        return dateB - dateA; // Sort in descending order (newest first)
      });

    console.log(users);

    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "error fetching data",
    });
  }
}
