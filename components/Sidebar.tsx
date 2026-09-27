"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Receipt,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ReceiptIcon,
  Image,
  Share2,
  DollarSign,
  UserCheck,
  ChevronDown,
  UserCog,
  ShieldCheck,
  Gamepad2,
  Activity,
  Gift,
  BadgeCheck,
  Crown,
  Handshake,
  Radio,
  KeyRound,
  ShieldAlert,
  FileText,
  Settings,
  Smartphone,
  UserPlus,
  UserCircle,
} from "lucide-react";

// ===============================
// Type Definitions
// ===============================

interface MenuItem {
  id: number;
  label: string;
  icon: React.ElementType;
  link?: string;
  submenu?: boolean;
  children?: SubMenuItem[];
}

interface SubMenuItem {
  id: number;
  label: string;
  icon: React.ElementType;
  link: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

// ===============================
// Main Menu
// ===============================

const mainMenu: MenuItem[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: Home,
    link: "/",
  },
  {
    id: 2,
    label: "User Management",
    icon: Users,
    link: "/users",
  },
  {
    id: 3,
    label: "Agents & Commission",
    icon: UserCog,
    link: "/agents",
  },
];

// ===============================
// Operations
// ===============================

const operationsMenu: MenuItem[] = [
  {
    id: 10,
    label: "KYC Verification",
    icon: ShieldCheck,
    link: "/kyc",
  },
  {
    id: 11,
    label: "Game Manage",
    icon: Gamepad2,
    link: "/games",
  },
  {
    id: 12,
    label: "GGR Panel",
    icon: Activity,
    link: "/ggr",
  },
  {
    id: 13,
    label: "Daily Bonus Settings",
    icon: Gift,
    link: "/daily-bonus",
  },
  {
    id: 14,
    label: "Deposit Bonus Settings",
    icon: BadgeCheck,
    link: "/deposit-bonus",
  },
  {
    id: 15,
    label: "VIP Settings",
    icon: Crown,
    link: "/vip",
  },
  {
    id: 16,
    label: "Referral Management",
    icon: Handshake,
    link: "/referral",
  },
  {
    id: 17,
    label: "Live Support",
    icon: MessageCircle,
    link: "/live-support",
  },
];

// ===============================
// Control Center
// ===============================

const controlCenterMenu: MenuItem[] = [
  {
    id: 20,
    label: "Providers & API",
    icon: Radio,
    link: "/providers",
  },
  {
    id: 21,
    label: "Game API Key",
    icon: KeyRound,
    link: "/game-api-key",
  },
  {
    id: 22,
    label: "Risk & Security",
    icon: ShieldAlert,
    link: "/risk-security",
  },
];

// ===============================
// Finance & Logs
// ===============================

const financeMenu: MenuItem[] = [
  {
    id: 30,
    label: "Transactions",
    icon: Receipt,
    link: "/transactions",
  },
  {
    id: 31,
    label: "Audit Logs",
    icon: FileText,
    link: "/audit-logs",
  },
];

// ===============================
// System
// ===============================

const systemMenu: MenuItem[] = [
  {
    id: 40,
    label: "Settings",
    icon: Settings,
    link: "/settings",
  },
  {
    id: 41,
    label: "PWA App",
    icon: Smartphone,
    link: "/pwa",
  },
  {
    id: 42,
    label: "Add Admin",
    icon: UserPlus,
    link: "/add-admin",
  },
  {
    id: 43,
    label: "My Profile",
    icon: UserCircle,
    link: "/profile",
  },
];

// ===============================
// Existing Menu
// ===============================

const existingMenu: MenuItem[] = [
  {
    id: 50,
    label: "Vouchers",
    icon: ReceiptIcon,
    link: "/vouchers",
  },
  {
    id: 51,
    label: "Images",
    icon: Image,
    link: "/images",
  },
  {
    id: 52,
    label: "Support",
    icon: MessageCircle,
    link: "/support",
  },
  {
    id: 53,
    label: "Affiliates",
    icon: Share2,
    submenu: true,
    children: [
      {
        id: 531,
        label: "All Affiliates",
        icon: Users,
        link: "/affiliates",
      },
      {
        id: 532,
        label: "Commissions",
        icon: DollarSign,
        link: "/affiliates/commissions",
      },
      {
        id: 533,
        label: "Referrals",
        icon: UserCheck,
        link: "/affiliates/referrals",
      },
    ],
  },
  {
    id: 54,
    label: "sub-admins",
    icon: UserCog,
    link: "/sub-admins",
  },
];

// ===============================
// Sidebar Component
// ===============================

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const pathname = usePathname();

  const toggleSubmenu = (id: number) => {
    if (openSubmenu === id) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(id);
    }
  };

  // ===============================
  // Menu Item Renderer
  // ===============================

  const renderMenuItem = (item: MenuItem) => {
    const isActive =
      pathname === item.link ||
      (item.link !== "/" &&
        item.link &&
        pathname.startsWith(item.link));

    // Submenu
    if (item.submenu) {
      return (
        <div key={item.id}>
          <button
            onClick={() => !isCollapsed && toggleSubmenu(item.id)}
            className={`w-full flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
              openSubmenu === item.id
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <div className="flex items-center">
              <item.icon size={20} />

              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-4 text-sm"
                >
                  {item.label}
                </motion.span>
              )}
            </div>

            {!isCollapsed && (
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openSubmenu === item.id ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          <AnimatePresence>
            {!isCollapsed && openSubmenu === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-gray-800/50 overflow-hidden"
              >
                {item.children?.map((child) => (
                  <Link
                    key={child.id}
                    href={child.link}
                    className={`flex items-center px-4 py-2 pl-12 cursor-pointer transition-colors ${
                      pathname === child.link
                        ? "bg-indigo-600 text-white"
                        : "text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <child.icon size={16} />

                    <span className="ml-3 text-xs">
                      {child.label}
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    // Normal Menu
    return (
      <Link
        key={item.id}
        href={item.link || "#"}
        className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
          isActive
            ? "bg-indigo-600 text-white"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`}
      >
        <item.icon size={20} />

        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-4 text-sm"
          >
            {item.label}
          </motion.span>
        )}
      </Link>
    );
  };

  // ===============================
  // Section Header
  // ===============================

  const renderSectionTitle = (title: string) => {
    if (isCollapsed) return null;

    return (
      <div className="px-4 pt-5 pb-2">
        <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">
          {title}
        </p>
      </div>
    );
  };

  // ===============================
  // Render
  // ===============================

  return (
    <motion.div
      animate={{
        width: isCollapsed ? "64px" : "260px",
      }}
      className="min-h-screen bg-gray-900 text-white relative transition-all duration-300"
    >
      {/* ===============================
          Toggle Button
      =============================== */}

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-indigo-600 rounded-full p-1.5 cursor-pointer hover:bg-indigo-700 transition-colors z-50"
      >
        {isCollapsed ? (
          <ChevronRight size={16} />
        ) : (
          <ChevronLeft size={16} />
        )}
      </button>

      {/* ===============================
          Logo
      =============================== */}

      <div className="p-4 flex items-center justify-center h-14 border-b border-gray-800 overflow-hidden">
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Admin Panel
          </motion.span>
        )}

        {isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-indigo-400"
          >
            AP
          </motion.span>
        )}
      </div>

      {/* ===============================
          Menu
      =============================== */}

      <nav className="mt-2 overflow-y-auto h-[calc(100vh-80px)] pb-24">

        {/* ===============================
            Main
        =============================== */}

        {!isCollapsed && (
          <div className="px-4 pt-3 pb-2">
            <p className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">
              Main
            </p>
          </div>
        )}

        {mainMenu.map(renderMenuItem)}

        {/* ===============================
            Operations
        =============================== */}

        {renderSectionTitle("Operations")}

        {operationsMenu.map(renderMenuItem)}

        {/* ===============================
            Control Center
        =============================== */}

        {renderSectionTitle("Control Center")}

        {controlCenterMenu.map(renderMenuItem)}

        {/* ===============================
            Finance & Logs
        =============================== */}

        {renderSectionTitle("Finance & Logs")}

        {financeMenu.map(renderMenuItem)}

        {/* ===============================
            System
        =============================== */}

        {renderSectionTitle("System")}

        {systemMenu.map(renderMenuItem)}

        {/* ===============================
            Existing Menu
        =============================== */}

        {renderSectionTitle("Existing")}

        {existingMenu.map(renderMenuItem)}
      </nav>

      {/* ===============================
          Footer / User Info
      =============================== */}

      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-xs font-bold">
                AD
              </span>
            </div>

            <div className="flex-1">
              <p className="text-xs font-medium text-white">
                Admin User
              </p>

              <p className="text-xs text-gray-400">
                admin@example.com
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}