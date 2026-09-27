"use client";

import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  CheckCircle,
  Clock,
  Crown,
  DollarSign,
  Download,
  FileText,
  Gamepad2,
  Gift,
  Handshake,
  Info,
  KeyRound,
  MessageCircle,
  Percent,
  Radio,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  TrendingDown,
  TrendingUp,
  UserCheck,
  UserCircle,
  UserCog,
  UserPlus,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";

interface Card {
  Label: string;
  Value: string;
  Icon: string;
}

interface AdminPageProps {
  title: string;
  description: string;
  icon: string;
  cards: Card[];
}

const icons: Record<string, any> = {
  Activity,
  AlertTriangle,
  BadgeCheck,
  CheckCircle,
  Clock,
  Crown,
  DollarSign,
  Download,
  FileText,
  Gamepad2,
  Gift,
  Handshake,
  Info,
  KeyRound,
  MessageCircle,
  Percent,
  Radio,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  TrendingDown,
  TrendingUp,
  UserCheck,
  UserCircle,
  UserCog,
  UserPlus,
  Users,
  Wallet,
  XCircle,
};

export default function AdminPage({
  title,
  description,
  icon,
  cards,
}: AdminPageProps) {
  const PageIcon = icons[icon] || Settings;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <PageIcon size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {title}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const CardIcon = icons[card.Icon] || Activity;

          return (
            <div
              key={card.Label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {card.Label}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {card.Value}
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <CardIcon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage and configure this section from here.
          </p>
        </div>

        <div className="p-6">
          <div className="flex min-h-[280px] items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <PageIcon size={26} />
              </div>

              <h3 className="mt-4 text-base font-semibold text-gray-800">
                {title}
              </h3>

              <p className="mt-2 max-w-md text-sm text-gray-500">
                This page is ready. Connect your database/API here
                to display and manage real data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
