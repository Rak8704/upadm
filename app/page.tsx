"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

type Summary = {
  totalUsers: number;
  totalTransactions: number;
  usersPerDay: number[];
  txPerDay: number[];
  labels: string[];
};

function SmallStat({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div className="flex-1 rounded-xl bg-linear-to-tl from-slate-800 to-gray-950 border border-indigo-100 shadow-sm p-5 min-w-40 hover:shadow-md transition">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-3xl font-bold text-indigo-700">{value}</div>
    </div>
  );
}

function OgiveChart({
  data,
  labels,
  height = 160,
}: {
  data: number[];
  labels?: string[];
  height?: number;
}) {
  const n = data.length;
  const cum: number[] = [];
  data.reduce((acc, cur, i) => {
    const next = acc + cur;
    cum[i] = next;
    return next;
  }, 0);

  const max = Math.max(...cum, 1);
  const width = Math.max(420, n * 30);
  const padLeft = 28;
  const padRight = 12;
  const padTop = 12;
  const padBottom = 28;
  const innerW = width - padLeft - padRight;
  const innerH = height - padTop - padBottom;

  // build points
  const points = cum.map((v, i) => {
    const x = padLeft + (i * innerW) / Math.max(n - 1, 1);
    const y = padTop + (1 - v / max) * innerH;
    return `${x},${y}`;
  });

  const polyline = points.join(" ");

  // area path for fill
  const areaPath = `M ${padLeft},${padTop + innerH} L ${points.join(" L ")} L ${
    padLeft + innerW
  },${padTop + innerH} Z`;

  return (
    <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        className="rounded-lg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line
          x1={padLeft}
          y1={padTop + innerH}
          x2={padLeft + innerW}
          y2={padTop + innerH}
          stroke="#E5E7EB"
          strokeWidth={1}
        />

        {/* area */}
        <path d={areaPath} fill="url(#lineGrad)" opacity={0.12} />

        {/* ogive polyline */}
        <polyline
          points={polyline}
          fill="none"
          stroke="#0ea5a6"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* points */}
        {cum.map((v, i) => {
          const x = padLeft + (i * innerW) / Math.max(n - 1, 1);
          const y = padTop + (1 - v / max) * innerH;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={3.5} fill="#0ea5a6">
                <title>{`${labels?.[i] ?? i}: ${v.toLocaleString()}`}</title>
              </circle>
            </g>
          );
        })}

        {/* x labels - show first, middle, last */}
        {labels &&
          labels.length > 0 &&
          [0, Math.floor((labels.length - 1) / 2), labels.length - 1].map(
            (idx, k) => {
              const x = padLeft + (idx * innerW) / Math.max(n - 1, 1);
              const y = padTop + innerH + 18;
              return (
                <text
                  key={k}
                  x={x}
                  y={y}
                  fontSize={10}
                  textAnchor="middle"
                  fill="#6b7280"
                >
                  {labels[idx].slice(5)}
                </text>
              );
            }
          )}
      </svg>
    </div>
  );
}

export default function Home() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/dashboard/summary");
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setSummary(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load dashboard summary");
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, []);

  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold ">Welcome back 👋</h1>
        <p className="text-gray-500 mt-2">
          Here's what's happening on your platform this month.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <SmallStat
          title="Total Users"
          value={summary ? summary.totalUsers : "—"}
        />
        <SmallStat
          title="Total Transactions"
          value={summary ? summary.totalTransactions : "—"}
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl shadow p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                This Month — Users
              </h3>
              <p className="text-sm text-gray-500">Daily new users</p>
            </div>
            <div className="text-sm text-gray-600">Last 15 days</div>
          </div>

          {loading || !summary ? (
            <div className="h-36 flex items-center justify-center text-gray-400">
              Loading...
            </div>
          ) : (
            <OgiveChart
              data={summary.usersPerDay}
              labels={summary.labels}
              height={160}
            />
          )}
        </div>

        <div className="rounded-xl  shadow p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                This Month — Transactions
              </h3>
              <p className="text-sm text-gray-500">Daily transactions</p>
            </div>
            <div className="text-sm text-gray-600">Last 15 days</div>
          </div>

          {loading || !summary ? (
            <div className="h-36 flex items-center justify-center text-gray-400">
              Loading...
            </div>
          ) : (
            <OgiveChart
              data={summary.txPerDay}
              labels={summary.labels}
              height={160}
            />
          )}
        </div>
      </section>
    </div>
  );
}
