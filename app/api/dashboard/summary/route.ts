import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function startOfDay(d = new Date()) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
}

function addDays(d: Date, days: number) {
  return new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate() + days,
    0,
    0,
    0,
    0
  );
}

export async function GET() {
  try {
    // build last 15 days window (oldest -> newest)
    const days = 15;
    const end = addDays(startOfDay(new Date()), 1); // exclusive upper bound: tomorrow
    const start = addDays(startOfDay(new Date()), -(days - 1)); // oldest day

    const totalUsers = await prisma.user.count({});
    const totalTransactions = await prisma.transaction.count({});

    // fetch users & transactions created in the last 15 days
    const users = await prisma.user.findMany({
      where: { createdAt: { gte: start, lt: end } },
      select: { id: true, createdAt: true },
    });

    const transactions = await prisma.transaction.findMany({
      where: { createdAt: { gte: start, lt: end } },
      select: { id: true, createdAt: true },
    });

    const usersPerDay = new Array(days).fill(0);
    const txPerDay = new Array(days).fill(0);
    const labels: string[] = [];

    for (let i = 0; i < days; i++) {
      const d = addDays(start, i);
      labels.push(d.toISOString().slice(0, 10));
    }

    users.forEach((u) => {
      const date = new Date(u.createdAt);
      const diff = Math.floor(
        (startOfDay(date).getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diff >= 0 && diff < days) usersPerDay[diff] += 1;
    });

    transactions.forEach((t) => {
      const date = new Date(t.createdAt);
      const diff = Math.floor(
        (startOfDay(date).getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diff >= 0 && diff < days) txPerDay[diff] += 1;
    });

    return NextResponse.json(
      { totalUsers, totalTransactions, usersPerDay, txPerDay, labels },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error building dashboard summary", error);
    return NextResponse.json(
      { error: "Failed to build dashboard summary" },
      { status: 500 }
    );
  }
}
