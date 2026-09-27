'use client';

import { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  UserCheck,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Ban,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  MoreVertical
} from 'lucide-react';

export default function AffiliatesManagement() {
  const [affiliates, setAffiliates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalAffiliates, setTotalAffiliates] = useState(0);
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [stats, setStats] = useState({
    totalAffiliates: 0,
    activeAffiliates: 0,
    pendingAffiliates: 0,
    suspendedAffiliates: 0,
    totalPaidOut: 0,
    avgCommissionRate: 0,
    totalReferrals: 0
  });
  const [bulkAction, setBulkAction] = useState(null);
  const [selectedAffiliates, setSelectedAffiliates] = useState([]);
  const [editingAffiliate, setEditingAffiliate] = useState({
    commission_rate: 0,
    status: 'pending'
  });
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [activeTab, setActiveTab] = useState('overview');
  const [viewingReferrals, setViewingReferrals] = useState(null);
  const [viewingCommissions, setViewingCommissions] = useState(null);

  useEffect(() => {
    fetchAffiliates();
    fetchStats();
  }, [currentPage, searchTerm, statusFilter]);

  const fetchAffiliates = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage,
        limit: 10,
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter !== 'all' && { status: statusFilter })
      });
      
      const response = await fetch(`/api/admin/affiliates?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setAffiliates(data.data.affiliates);
        setTotalPages(data.data.totalPages);
        setTotalAffiliates(data.data.total);
      } else {
        showToast(data.message || 'Failed to fetch affiliates', 'error');
      }
    } catch (error) {
      console.error('Error fetching affiliates:', error);
      showToast('Failed to fetch affiliates', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/affiliates/stats');
      const data = await response.json();
      
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/admin/affiliates/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchAffiliates();
        fetchStats();
        showToast(`Affiliate status updated to ${newStatus}`, 'success');
      } else {
        showToast(data.message || 'Failed to update status', 'error');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      showToast('Failed to update affiliate status', 'error');
    }
  };

  const handleUpdateCommission = async (id, commissionRate) => {
    try {
      const response = await fetch(`/api/admin/affiliates/${id}/commission`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commission_rate: commissionRate })
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchAffiliates();
        showToast('Commission rate updated successfully', 'success');
      } else {
        showToast(data.message || 'Failed to update commission', 'error');
      }
    } catch (error) {
      console.error('Error updating commission:', error);
      showToast('Failed to update commission rate', 'error');
    }
  };

  const handleDeleteAffiliate = async (id) => {
    try {
      const response = await fetch(`/api/admin/affiliates/${id}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchAffiliates();
        fetchStats();
        setShowDeleteConfirm(false);
        setSelectedAffiliate(null);
        showToast('Affiliate deleted successfully', 'success');
      } else {
        showToast(data.message || 'Failed to delete affiliate', 'error');
      }
    } catch (error) {
      console.error('Error deleting affiliate:', error);
      showToast('Failed to delete affiliate', 'error');
    }
  };

  const handleBulkAction = async () => {
    if (!bulkAction || selectedAffiliates.length === 0) return;
    
    try {
      const response = await fetch('/api/admin/affiliates/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: bulkAction,
          affiliateIds: selectedAffiliates
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        fetchAffiliates();
        fetchStats();
        setSelectedAffiliates([]);
        setBulkAction(null);
        showToast(`Bulk ${bulkAction} completed successfully`, 'success');
      } else {
        showToast(data.message || 'Failed to perform bulk action', 'error');
      }
    } catch (error) {
      console.error('Error performing bulk action:', error);
      showToast('Failed to perform bulk action', 'error');
    }
  };

  const exportAffiliates = async () => {
    try {
      const response = await fetch('/api/admin/affiliates/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          status: statusFilter,
          search: searchTerm 
        })
      });
      
      if (!response.ok) throw new Error('Export failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `affiliates_export_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      showToast('Export completed successfully', 'success');
    } catch (error) {
      console.error('Error exporting affiliates:', error);
      showToast('Failed to export affiliates', 'error');
    }
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const StatCard = ({ title, value, icon: Icon, color, trend }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          {trend && (
            <p className="text-xs text-green-600 mt-1">{trend}</p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const getStatusBadge = (status) => {
    const badges = {
      active: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: AlertCircle },
      suspended: { color: 'bg-red-100 text-red-800', icon: Ban },
      deleted: { color: 'bg-gray-100 text-gray-800', icon: XCircle }
    };
    const badge = badges[status] || badges.pending;
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {status}
      </span>
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedAffiliates(affiliates.map(a => a.id));
    } else {
      setSelectedAffiliates([]);
    }
  };

  const handleSelectAffiliate = (id) => {
    if (selectedAffiliates.includes(id)) {
      setSelectedAffiliates(selectedAffiliates.filter(aid => aid !== id));
    } else {
      setSelectedAffiliates([...selectedAffiliates, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`rounded-lg shadow-lg p-4 ${
            toast.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center">
              {toast.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              )}
              <p className={`text-sm ${toast.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                {toast.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Affiliate Management</h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage your affiliate partners, track commissions, and monitor performance
              </p>
            </div>
            <button
              onClick={() => fetchAffiliates()}
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
          {['overview', 'affiliates', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <StatCard
              title="Total Affiliates"
              value={stats.totalAffiliates}
              icon={Users}
              color="bg-gradient-to-r from-blue-500 to-blue-600"
              trend="+12% this month"
            />
            <StatCard
              title="Active Affiliates"
              value={stats.activeAffiliates}
              icon={UserCheck}
              color="bg-gradient-to-r from-green-500 to-green-600"
            />
            <StatCard
              title="Total Payout"
              value={`$${stats.totalPaidOut?.toFixed(2) || '0.00'}`}
              icon={DollarSign}
              color="bg-gradient-to-r from-purple-500 to-purple-600"
            />
            <StatCard
              title="Avg Commission"
              value={`${stats.avgCommissionRate?.toFixed(1) || '0'}%`}
              icon={TrendingUp}
              color="bg-gradient-to-r from-indigo-500 to-indigo-600"
            />
          </div>

          {/* Recent Affiliates Table */}
          <div className="px-6 pb-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Affiliates</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affiliate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {affiliates.slice(0, 5).map((affiliate) => (
                      <tr key={affiliate.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{affiliate.user_name}</div>
                            <div className="text-sm text-gray-500">{affiliate.user_email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{affiliate.affiliate_code}</code>
                        </td>
                        <td className="px-6 py-4">{affiliate.commission_rate}%</td>
                        <td className="px-6 py-4">{getStatusBadge(affiliate.status)}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(affiliate.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === 'affiliates' && (
        <>
          {/* Actions Bar */}
          <div className="px-6 py-4 bg-white border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              
              <div className="flex gap-3">
                {selectedAffiliates.length > 0 && (
                  <div className="flex gap-2">
                    <select
                      value={bulkAction || ''}
                      onChange={(e) => setBulkAction(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Bulk Actions ({selectedAffiliates.length})</option>
                      <option value="activate">Activate</option>
                      <option value="suspend">Suspend</option>
                      <option value="delete">Delete</option>
                    </select>
                    {bulkAction && (
                      <button
                        onClick={handleBulkAction}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                )}
                <button
                  onClick={exportAffiliates}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Affiliates Table */}
          <div className="bg-white mx-6 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={selectedAffiliates.length === affiliates.length && affiliates.length > 0}
                        onChange={handleSelectAll}
                        className="rounded border-gray-300 focus:ring-blue-500"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affiliate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commission</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referrals</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="9" className="px-6 py-12 text-center">
                        <div className="flex justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                      </td>
                    </tr>
                  ) : affiliates.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="px-6 py-12 text-center text-gray-500">
                        No affiliates found
                      </td>
                    </tr>
                  ) : (
                    affiliates.map((affiliate) => (
                      <tr key={affiliate.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedAffiliates.includes(affiliate.id)}
                            onChange={() => handleSelectAffiliate(affiliate.id)}
                            className="rounded border-gray-300 focus:ring-blue-500"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{affiliate.user_name}</div>
                            <div className="text-sm text-gray-500">{affiliate.user_email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                            {affiliate.affiliate_code}
                          </code>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{affiliate.commission_rate}%</span>
                            <button
                              onClick={() => {
                                setEditingAffiliate(affiliate);
                                setShowEditModal(true);
                              }}
                              className="text-gray-400 hover:text-blue-600"
                            >
                              <Edit className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm">{affiliate.referral_count || 0}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              ${affiliate.total_earnings?.toFixed(2) || '0.00'}
                            </div>
                            <div className="text-xs text-gray-500">
                              Pending: ${affiliate.pending_earnings?.toFixed(2) || '0.00'}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getStatusBadge(affiliate.status)}
                            <select
                              value={affiliate.status}
                              onChange={(e) => handleStatusChange(affiliate.id, e.target.value)}
                              className="text-xs border border-gray-300 rounded px-1 py-0.5"
                            >
                              <option value="active">Active</option>
                              <option value="pending">Pending</option>
                              <option value="suspended">Suspended</option>
                            </select>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(affiliate.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => {
                                setSelectedAffiliate(affiliate);
                                setShowDetailsModal(true);
                              }}
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                setSelectedAffiliate(affiliate);
                                setShowDeleteConfirm(true);
                              }}
                              className="text-gray-600 hover:text-red-600 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
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
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages} • {totalAffiliates} total affiliates
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
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

      {/* Details Modal */}
      {showDetailsModal && selectedAffiliate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Affiliate Details</h2>
                <p className="text-sm text-gray-500">{selectedAffiliate.user_name}</p>
              </div>
              <button onClick={() => setShowDetailsModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Affiliate Code</label>
                    <p className="mt-1 font-mono text-sm">{selectedAffiliate.affiliate_code}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Commission Rate</label>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{selectedAffiliate.commission_rate}%</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Total Earnings</label>
                    <p className="mt-1 text-lg font-semibold text-green-600">
                      ${selectedAffiliate.total_earnings?.toFixed(2) || '0.00'}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Referrals</label>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{selectedAffiliate.referral_count || 0}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Status</label>
                    <div className="mt-1">{getStatusBadge(selectedAffiliate.status)}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Joined Date</label>
                    <p className="mt-1 text-sm">{new Date(selectedAffiliate.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editingAffiliate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Edit Commission Rate</h2>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Commission Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={editingAffiliate.commission_rate}
                onChange={(e) => setEditingAffiliate({ ...editingAffiliate, commission_rate: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleUpdateCommission(editingAffiliate.id, editingAffiliate.commission_rate);
                    setShowEditModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && selectedAffiliate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Delete Affiliate</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Are you sure you want to delete affiliate <strong>{selectedAffiliate.user_name}</strong>?
                This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteAffiliate(selectedAffiliate.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}