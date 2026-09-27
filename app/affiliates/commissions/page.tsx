"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  DollarSign,
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
  AlertCircle,
  Calendar,
  Filter,
  Wallet,
  ArrowUpDown,
  FileText,
  Users,
  Receipt,
  Settings,
} from "lucide-react";

// Types
type Commission = {
  id: number;
  affiliate_id: number;
  affiliate_name: string;
  affiliate_email: string;
  affiliate_code: string;
  order_id: number;
  order_amount: number;
  amount: number;
  rate: number;
  status: "pending" | "paid" | "cancelled";
  created_at: string;
  paid_at: string | null;
  notes: string | null;
};

type CommissionStats = {
  totalCommissions: number;
  totalAmount: number;
  pendingAmount: number;
  paidAmount: number;
  avgCommissionRate: number;
  totalAffiliates: number;
  monthlyGrowth: number;
};

type PayoutRequest = {
  id: number;
  affiliate_id: number;
  affiliate_name: string;
  amount: number;
  status: "pending" | "approved" | "rejected" | "completed";
  payment_method: string;
  payment_details: string;
  created_at: string;
  processed_at: string | null;
};

export default function CommissionsPage() {
  // State
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [stats, setStats] = useState<CommissionStats | null>(null);
  const [payoutRequests, setPayoutRequests] = useState<PayoutRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"commissions" | "payouts">("commissions");
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  
  // Modal states
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCommission, setSelectedCommission] = useState<Commission | null>(null);
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState("");
  const [selectedAffiliateId, setSelectedAffiliateId] = useState<number | null>(null);
  const [processingPayout, setProcessingPayout] = useState(false);

  useEffect(() => {
    fetchCommissions();
    fetchStats();
    fetchPayoutRequests();
  }, [currentPage, statusFilter, searchTerm, dateRange, sortBy, sortOrder]);

  const fetchCommissions = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "20",
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter !== "all" && { status: statusFilter }),
        ...(dateRange.from && { from_date: dateRange.from }),
        ...(dateRange.to && { to_date: dateRange.to }),
        sort_by: sortBy,
        sort_order: sortOrder,
      });

      const response = await fetch(`/api/admin/affiliates/commissions?${params}`);
      const data = await response.json();

      if (data.success) {
        setCommissions(data.data.commissions);
        setTotalPages(data.data.totalPages);
      } else {
        toast.error(data.message || "Failed to fetch commissions");
      }
    } catch (error) {
      console.error("Error fetching commissions:", error);
      toast.error("Failed to fetch commissions");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/affiliates/commissions/stats");
      const data = await response.json();

      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchPayoutRequests = async () => {
    try {
      const response = await fetch("/api/admin/affiliates/payouts");
      const data = await response.json();

      if (data.success) {
        setPayoutRequests(data.data);
      }
    } catch (error) {
      console.error("Error fetching payout requests:", error);
    }
  };

  const handleMarkAsPaid = async (commissionId: number) => {
    try {
      const response = await fetch(`/api/admin/affiliates/commissions/${commissionId}/pay`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "paid" }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Commission marked as paid");
        fetchCommissions();
        fetchStats();
      } else {
        toast.error(data.message || "Failed to update commission");
      }
    } catch (error) {
      console.error("Error updating commission:", error);
      toast.error("Failed to update commission");
    }
  };

  const handleBulkPay = async () => {
    if (!confirm("Mark all pending commissions as paid?")) return;

    try {
      const response = await fetch("/api/admin/affiliates/commissions/bulk-pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "paid" }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(`Successfully paid ${data.data.count} commissions`);
        fetchCommissions();
        fetchStats();
      } else {
        toast.error(data.message || "Failed to process bulk payment");
      }
    } catch (error) {
      console.error("Error processing bulk payment:", error);
      toast.error("Failed to process bulk payment");
    }
  };

  const handleProcessPayout = async () => {
    if (!selectedAffiliateId || !payoutAmount) {
      toast.error("Please enter payout amount");
      return;
    }

    setProcessingPayout(true);
    try {
      const response = await fetch("/api/admin/affiliates/payouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          affiliate_id: selectedAffiliateId,
          amount: parseFloat(payoutAmount),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Payout request created successfully");
        setShowPayoutModal(false);
        setPayoutAmount("");
        fetchPayoutRequests();
      } else {
        toast.error(data.message || "Failed to create payout request");
      }
    } catch (error) {
      console.error("Error creating payout:", error);
      toast.error("Failed to create payout request");
    } finally {
      setProcessingPayout(false);
    }
  };

  const handleUpdatePayoutStatus = async (payoutId: number, status: string) => {
    try {
      const response = await fetch(`/api/admin/affiliates/payouts/${payoutId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(`Payout ${status} successfully`);
        fetchPayoutRequests();
      } else {
        toast.error(data.message || "Failed to update payout");
      }
    } catch (error) {
      console.error("Error updating payout:", error);
      toast.error("Failed to update payout");
    }
  };

  const exportCommissions = async () => {
    try {
      const response = await fetch("/api/admin/affiliates/commissions/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: statusFilter,
          from_date: dateRange.from,
          to_date: dateRange.to,
        }),
      });

      if (!response.ok) throw new Error("Export failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `commissions_export_${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success("Export completed successfully");
    } catch (error) {
      console.error("Error exporting commissions:", error);
      toast.error("Failed to export commissions");
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock },
      paid: { color: "bg-green-100 text-green-800", icon: CheckCircle },
      cancelled: { color: "bg-red-100 text-red-800", icon: XCircle },
    };
    const badge = badges[status as keyof typeof badges] || badges.pending;
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {status}
      </span>
    );
  };

  const getPayoutStatusBadge = (status: string) => {
    const badges = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-blue-100 text-blue-800",
      rejected: "bg-red-100 text-red-800",
      completed: "bg-green-100 text-green-800",
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badges[status as keyof typeof badges]}`}>
        {status}
      </span>
    );
  };

  const StatCard = ({ title, value, icon: Icon, color, subtitle }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Commissions Management</h1>
              <p className="text-sm text-gray-600 mt-1">
                Track affiliate commissions, process payouts, and manage earnings
              </p>
            </div>
            <button
              onClick={() => {
                fetchCommissions();
                fetchStats();
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white px-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("commissions")}
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "commissions"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            Commissions
          </button>
          <button
            onClick={() => setActiveTab("payouts")}
            className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "payouts"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <Wallet className="w-4 h-4" />
            Payout Requests
            {payoutRequests.filter((r) => r.status === "pending").length > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {payoutRequests.filter((r) => r.status === "pending").length}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Stats Cards - Commissions Tab */}
      {activeTab === "commissions" && stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <StatCard
            title="Total Commissions"
            value={`$${stats.totalAmount?.toFixed(2) || "0.00"}`}
            icon={DollarSign}
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            subtitle={`${stats.totalCommissions || 0} transactions`}
          />
          <StatCard
            title="Pending Amount"
            value={`$${stats.pendingAmount?.toFixed(2) || "0.00"}`}
            icon={Clock}
            color="bg-gradient-to-r from-yellow-500 to-yellow-600"
          />
          <StatCard
            title="Paid Amount"
            value={`$${stats.paidAmount?.toFixed(2) || "0.00"}`}
            icon={CheckCircle}
            color="bg-gradient-to-r from-green-500 to-green-600"
          />
          <StatCard
            title="Avg Commission Rate"
            value={`${stats.avgCommissionRate?.toFixed(1) || "0"}%`}
            icon={TrendingUp}
            color="bg-gradient-to-r from-purple-500 to-purple-600"
          />
        </div>
      )}

      {/* Commissions Tab Content */}
      {activeTab === "commissions" && (
        <>
          {/* Filters */}
          <div className="px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by affiliate name, email or code..."
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
                <option value="paid">Paid</option>
                <option value="cancelled">Cancelled</option>
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
                onClick={exportCommissions}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </button>

              <button
                onClick={handleBulkPay}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Mark All as Paid
              </button>
            </div>
          </div>

          {/* Commissions Table */}
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
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Commission
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center">
                        <div className="flex justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                      </td>
                    </tr>
                  ) : commissions.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                        No commissions found
                      </td>
                    </tr>
                  ) : (
                    commissions.map((commission) => (
                      <tr key={commission.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(commission.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{commission.affiliate_name}</div>
                            <div className="text-xs text-gray-500">{commission.affiliate_code}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-mono">#{commission.order_id}</span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          ${commission.order_amount?.toFixed(2) || "0.00"}
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-semibold text-green-600">
                            ${commission.amount?.toFixed(2) || "0.00"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">{commission.rate}%</td>
                        <td className="px-6 py-4">{getStatusBadge(commission.status)}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => {
                                setSelectedCommission(commission);
                                setShowDetailsModal(true);
                              }}
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            {commission.status === "pending" && (
                              <button
                                onClick={() => handleMarkAsPaid(commission.id)}
                                className="text-green-600 hover:text-green-700 transition-colors"
                                title="Mark as Paid"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
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
        </>
      )}

      {/* Payout Requests Tab */}
      {activeTab === "payouts" && (
        <div className="p-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Payout Requests</h3>
              <button
                onClick={() => setShowPayoutModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                <Wallet className="w-4 h-4" />
                New Payout
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Affiliate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Requested
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payoutRequests.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                        No payout requests found
                      </td>
                    </tr>
                  ) : (
                    payoutRequests.map((request) => (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{request.affiliate_name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg font-semibold text-green-600">
                            ${request.amount.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">{request.payment_method || "Bank Transfer"}</td>
                        <td className="px-6 py-4">{getPayoutStatusBadge(request.status)}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(request.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            {request.status === "pending" && (
                              <>
                                <button
                                  onClick={() => handleUpdatePayoutStatus(request.id, "approved")}
                                  className="text-blue-600 hover:text-blue-700 text-sm"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleUpdatePayoutStatus(request.id, "rejected")}
                                  className="text-red-600 hover:text-red-700 text-sm"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            {request.status === "approved" && (
                              <button
                                onClick={() => handleUpdatePayoutStatus(request.id, "completed")}
                                className="text-green-600 hover:text-green-700 text-sm"
                              >
                                Mark Completed
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
               </table>
            </div>
          </div>
        </div>
      )}

      {/* Commission Details Modal */}
      {showDetailsModal && selectedCommission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Commission Details</h2>
              <button onClick={() => setShowDetailsModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Affiliate</label>
                  <p className="mt-1 font-medium">{selectedCommission.affiliate_name}</p>
                  <p className="text-sm text-gray-500">{selectedCommission.affiliate_email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Affiliate Code</label>
                  <p className="mt-1 font-mono text-sm">{selectedCommission.affiliate_code}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Order ID</label>
                  <p className="mt-1">#{selectedCommission.order_id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Order Amount</label>
                  <p className="mt-1">${selectedCommission.order_amount?.toFixed(2)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Commission Rate</label>
                  <p className="mt-1">{selectedCommission.rate}%</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Commission Amount</label>
                  <p className="mt-1 text-xl font-bold text-green-600">${selectedCommission.amount?.toFixed(2)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <div className="mt-1">{getStatusBadge(selectedCommission.status)}</div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Created At</label>
                  <p className="mt-1 text-sm">{new Date(selectedCommission.created_at).toLocaleString()}</p>
                </div>
                {selectedCommission.paid_at && (
                  <div className="col-span-2">
                    <label className="text-sm font-medium text-gray-500">Paid At</label>
                    <p className="mt-1 text-sm">{new Date(selectedCommission.paid_at).toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payout Modal */}
      {showPayoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Create Payout Request</h2>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Affiliate
              </label>
              <select
                value={selectedAffiliateId || ""}
                onChange={(e) => setSelectedAffiliateId(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              >
                <option value="">Select Affiliate</option>
                {commissions
                  .filter((c, index, self) => 
                    self.findIndex(t => t.affiliate_id === c.affiliate_id) === index
                  )
                  .map((commission) => (
                    <option key={commission.affiliate_id} value={commission.affiliate_id}>
                      {commission.affiliate_name} - {commission.affiliate_code}
                    </option>
                  ))}
              </select>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                step="0.01"
                value={payoutAmount}
                onChange={(e) => setPayoutAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowPayoutModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleProcessPayout}
                  disabled={processingPayout}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {processingPayout ? "Processing..." : "Create Payout"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}