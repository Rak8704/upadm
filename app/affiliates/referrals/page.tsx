"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Users,
  UserPlus,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Download,
  Eye,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Filter,
  ArrowUpDown,
  Link2,
  Mail,
  Phone,
  MapPin,
  Activity,
  Award,
  Target,
  BarChart3,
} from "lucide-react";

// Types
type Referral = {
  id: number;
  affiliate_id: number;
  affiliate_name: string;
  affiliate_code: string;
  referred_user_id: number;
  referred_user_name: string;
  referred_user_email: string;
  referred_user_phone?: string;
  status: "pending" | "converted" | "expired";
  created_at: string;
  converted_at: string | null;
  expires_at: string;
  order_id?: number;
  order_amount?: number;
  commission_amount?: number;
};

type ReferralStats = {
  totalReferrals: number;
  convertedReferrals: number;
  pendingReferrals: number;
  expiredReferrals: number;
  conversionRate: number;
  totalCommission: number;
  activeAffiliates: number;
  monthlyGrowth: number;
  topAffiliate: {
    name: string;
    referrals: number;
    conversions: number;
  } | null;
};

export default function ReferralsPage() {
  // State
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [stats, setStats] = useState<ReferralStats | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [affiliateFilter, setAffiliateFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  
  // Modal states
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedReferral, setSelectedReferral] = useState<Referral | null>(null);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  
  // Affiliates list for filter
  const [affiliates, setAffiliates] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    fetchReferrals();
    fetchStats();
    fetchAffiliates();
  }, [currentPage, statusFilter, searchTerm, dateRange, sortBy, sortOrder, affiliateFilter]);

  const fetchReferrals = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "20",
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter !== "all" && { status: statusFilter }),
        ...(affiliateFilter !== "all" && { affiliate_id: affiliateFilter }),
        ...(dateRange.from && { from_date: dateRange.from }),
        ...(dateRange.to && { to_date: dateRange.to }),
        sort_by: sortBy,
        sort_order: sortOrder,
      });

      const response = await fetch(`/api/admin/affiliates/referrals?${params}`);
      const data = await response.json();

      if (data.success) {
        setReferrals(data.data.referrals);
        setTotalPages(data.data.totalPages);
      } else {
        toast.error(data.message || "Failed to fetch referrals");
      }
    } catch (error) {
      console.error("Error fetching referrals:", error);
      toast.error("Failed to fetch referrals");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/affiliates/referrals/stats");
      const data = await response.json();

      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchAffiliates = async () => {
    try {
      const response = await fetch("/api/admin/affiliates/list");
      const data = await response.json();

      if (data.success) {
        setAffiliates(data.data);
      }
    } catch (error) {
      console.error("Error fetching affiliates:", error);
    }
  };

  const exportReferrals = async () => {
    try {
      const response = await fetch("/api/admin/affiliates/referrals/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: statusFilter,
          affiliate_id: affiliateFilter,
          from_date: dateRange.from,
          to_date: dateRange.to,
        }),
      });

      if (!response.ok) throw new Error("Export failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `referrals_export_${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success("Export completed successfully");
    } catch (error) {
      console.error("Error exporting referrals:", error);
      toast.error("Failed to export referrals");
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Pending" },
      converted: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Converted" },
      expired: { color: "bg-red-100 text-red-800", icon: XCircle, label: "Expired" },
    };
    const badge = badges[status as keyof typeof badges] || badges.pending;
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {badge.label}
      </span>
    );
  };

  const StatCard = ({ title, value, icon: Icon, color, trend, subtitle }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
          {trend && (
            <p className={`text-xs mt-2 ${trend >= 0 ? "text-green-600" : "text-red-600"}`}>
              {trend >= 0 ? "↑" : "↓"} {Math.abs(trend)}% from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const getDaysRemaining = (expiresAt: string) => {
    const expiryDate = new Date(expiresAt);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Referral Management</h1>
              <p className="text-sm text-gray-600 mt-1">
                Track affiliate referrals, monitor conversions, and analyze performance
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAnalyticsModal(true)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Analytics
              </button>
              <button
                onClick={() => {
                  fetchReferrals();
                  fetchStats();
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <StatCard
            title="Total Referrals"
            value={stats.totalReferrals.toLocaleString()}
            icon={Users}
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            trend={stats.monthlyGrowth}
            subtitle={`${stats.activeAffiliates} active affiliates`}
          />
          <StatCard
            title="Conversion Rate"
            value={`${stats.conversionRate.toFixed(1)}%`}
            icon={Target}
            color="bg-gradient-to-r from-green-500 to-green-600"
            subtitle={`${stats.convertedReferrals} converted`}
          />
          <StatCard
            title="Pending Referrals"
            value={stats.pendingReferrals.toLocaleString()}
            icon={Clock}
            color="bg-gradient-to-r from-yellow-500 to-yellow-600"
          />
          <StatCard
            title="Total Commission"
            value={`$${stats.totalCommission?.toFixed(2) || "0.00"}`}
            icon={Award}
            color="bg-gradient-to-r from-purple-500 to-purple-600"
          />
        </div>
      )}

      {/* Top Affiliate Banner */}
      {stats?.topAffiliate && (
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Top Performing Affiliate</p>
                  <p className="text-xl font-bold">{stats.topAffiliate.name}</p>
                  <p className="text-sm opacity-90">
                    {stats.topAffiliate.referrals} referrals • {stats.topAffiliate.conversions} conversions
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">{stats.topAffiliate.referrals}</p>
                  <p className="text-xs opacity-90">Total Referrals</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">
                    {((stats.topAffiliate.conversions / stats.topAffiliate.referrals) * 100).toFixed(0)}%
                  </p>
                  <p className="text-xs opacity-90">Conversion Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by affiliate or referred user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="converted">Converted</option>
            <option value="expired">Expired</option>
          </select>

          <select
            value={affiliateFilter}
            onChange={(e) => setAffiliateFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[150px]"
          >
            <option value="all">All Affiliates</option>
            {affiliates.map((affiliate) => (
              <option key={affiliate.id} value={affiliate.id}>
                {affiliate.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={dateRange.from}
            onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="From Date"
          />

          <input
            type="date"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="To Date"
          />

          <button
            onClick={exportReferrals}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Referrals Table */}
      <div className="bg-white mx-6 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => {
                      setSortBy("created_at");
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    }}
                    className="flex items-center gap-1 hover:text-gray-700"
                  >
                    Date
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Affiliate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Referred User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expires In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  </td>
                </tr>
              ) : referrals.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <Users className="w-12 h-12 text-gray-300" />
                      <p>No referrals found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                referrals.map((referral) => {
                  const daysRemaining = getDaysRemaining(referral.expires_at);
                  return (
                    <tr key={referral.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(referral.created_at).toLocaleDateString()}
                       </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{referral.affiliate_name}</div>
                          <div className="text-xs text-gray-500">{referral.affiliate_code}</div>
                        </div>
                       </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{referral.referred_user_name}</div>
                          <div className="text-xs text-gray-500">{referral.referred_user_email}</div>
                          {referral.referred_user_phone && (
                            <div className="text-xs text-gray-400">{referral.referred_user_phone}</div>
                          )}
                        </div>
                       </td>
                      <td className="px-6 py-4">{getStatusBadge(referral.status)}</td>
                      <td className="px-6 py-4">
                        {referral.status === "pending" ? (
                          <div className={`text-sm ${daysRemaining <= 7 ? "text-red-600 font-medium" : "text-gray-500"}`}>
                            {daysRemaining} days
                          </div>
                        ) : referral.status === "converted" && referral.converted_at ? (
                          <div className="text-sm text-gray-500">
                            {new Date(referral.converted_at).toLocaleDateString()}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500">-</div>
                        )}
                       </td>
                      <td className="px-6 py-4">
                        {referral.commission_amount ? (
                          <span className="text-sm font-semibold text-green-600">
                            ${referral.commission_amount.toFixed(2)}
                          </span>
                        ) : (
                          <span className="text-sm text-gray-400">-</span>
                        )}
                       </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedReferral(referral);
                            setShowDetailsModal(true);
                          }}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center bg-gray-50">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors flex items-center gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Referral Details Modal */}
      {showDetailsModal && selectedReferral && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Referral Details</h2>
              <button onClick={() => setShowDetailsModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-6">
                {/* Affiliate Information */}
                <div className="col-span-2">
                  <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Link2 className="w-4 h-4" />
                    Affiliate Information
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Name:</span>
                      <span className="text-sm font-medium">{selectedReferral.affiliate_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Code:</span>
                      <code className="text-sm">{selectedReferral.affiliate_code}</code>
                    </div>
                  </div>
                </div>

                {/* Referred User Information */}
                <div className="col-span-2">
                  <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Referred User
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Name:</span>
                      <span className="text-sm font-medium">{selectedReferral.referred_user_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Email:</span>
                      <span className="text-sm">{selectedReferral.referred_user_email}</span>
                    </div>
                    {selectedReferral.referred_user_phone && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Phone:</span>
                        <span className="text-sm">{selectedReferral.referred_user_phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Referral Details */}
                <div className="col-span-2">
                  <h3 className="text-md font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Referral Details
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Status:</span>
                      {getStatusBadge(selectedReferral.status)}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Created:</span>
                      <span className="text-sm">{new Date(selectedReferral.created_at).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Expires:</span>
                      <span className="text-sm">{new Date(selectedReferral.expires_at).toLocaleString()}</span>
                    </div>
                    {selectedReferral.converted_at && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Converted:</span>
                        <span className="text-sm">{new Date(selectedReferral.converted_at).toLocaleString()}</span>
                      </div>
                    )}
                    {selectedReferral.order_id && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Order ID:</span>
                          <span className="text-sm font-mono">#{selectedReferral.order_id}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Order Amount:</span>
                          <span className="text-sm">${selectedReferral.order_amount?.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Commission Earned:</span>
                          <span className="text-sm font-semibold text-green-600">
                            ${selectedReferral.commission_amount?.toFixed(2)}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalyticsModal && stats && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Referral Analytics</h2>
              <button onClick={() => setShowAnalyticsModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Conversion Overview</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Conversion Rate</span>
                        <span className="font-medium">{stats.conversionRate.toFixed(1)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 rounded-full h-2" 
                          style={{ width: `${Math.min(stats.conversionRate, 100)}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{stats.convertedReferrals}</p>
                        <p className="text-xs text-gray-500">Converted</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-600">{stats.pendingReferrals}</p>
                        <p className="text-xs text-gray-500">Pending</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-red-600">{stats.expiredReferrals}</p>
                        <p className="text-xs text-gray-500">Expired</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">${stats.totalCommission.toFixed(2)}</p>
                        <p className="text-xs text-gray-500">Total Commission</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Conversion Time</span>
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Click-through Rate</span>
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Affiliates</span>
                      <span className="text-sm font-medium">{stats.activeAffiliates}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Growth</span>
                      <span className={`text-sm font-medium ${stats.monthlyGrowth >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {stats.monthlyGrowth >= 0 ? "+" : ""}{stats.monthlyGrowth}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {stats.topAffiliate && (
                <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">🏆 Top Affiliate Performance</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{stats.topAffiliate.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Referrals</p>
                      <p className="font-medium text-xl">{stats.topAffiliate.referrals}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Conversions</p>
                      <p className="font-medium text-xl text-green-600">{stats.topAffiliate.conversions}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}