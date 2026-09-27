"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Plus,
  Trash2,
  Shield,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Key,
} from "lucide-react";

// Types
interface SubAdmin {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
  last_login: string | null;
  created_by: number;
}

interface Permission {
  id: number;
  name: string;
  module: string;
  description: string;
}

interface ModulePermission {
  module: string;
  permissions: Permission[];
}

export default function SubAdminsPage() {
  // Initialize all states with default values
  const [subAdmins, setSubAdmins] = useState<SubAdmin[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [selectedSubAdmin, setSelectedSubAdmin] = useState<SubAdmin | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  // Initialize permissions as empty array
  const [permissions, setPermissions] = useState<ModulePermission[]>([]);
  const [selectedPermissions, setSelectedPermissions] = useState<{
    [key: string]: { view: boolean; create: boolean; edit: boolean; delete: boolean };
  }>({});

  useEffect(() => {
    fetchSubAdmins();
    fetchPermissions();
  }, [currentPage]);

  const fetchSubAdmins = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/sub-admins?page=${currentPage}`);
      const data = await response.json();
      
      if (data.success) {
        setSubAdmins(data.data.subAdmins || []);
        setTotalPages(data.data.totalPages || 1);
      } else {
        setSubAdmins([]);
        toast.error(data.message || "Failed to fetch sub admins");
      }
    } catch (error) {
      console.error("Error fetching sub admins:", error);
      setSubAdmins([]);
      toast.error("Failed to fetch sub admins");
    } finally {
      setLoading(false);
    }
  };

  const fetchPermissions = async () => {
    try {
      const response = await fetch("/api/admin/permissions");
      const data = await response.json();
      
      if (data.success && data.data && Array.isArray(data.data)) {
        // Group permissions by module
        const grouped = data.data.reduce((acc: any, perm: Permission) => {
          if (!acc[perm.module]) {
            acc[perm.module] = { module: perm.module, permissions: [] };
          }
          acc[perm.module].permissions.push(perm);
          return acc;
        }, {});
        setPermissions(Object.values(grouped));
      } else {
        setPermissions([]);
      }
    } catch (error) {
      console.error("Error fetching permissions:", error);
      setPermissions([]);
    }
  };

  const handleCreateSubAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await fetch("/api/admin/sub-admins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          permissions: selectedPermissions,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Sub admin created successfully");
        setShowCreateModal(false);
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setSelectedPermissions({});
        fetchSubAdmins();
      } else {
        toast.error(data.message || "Failed to create sub admin");
      }
    } catch (error) {
      console.error("Error creating sub admin:", error);
      toast.error("Failed to create sub admin");
    }
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/admin/sub-admins/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success(`Sub admin ${status} successfully`);
        fetchSubAdmins();
      } else {
        toast.error(data.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleDeleteSubAdmin = async (id: number) => {
    if (!confirm("Are you sure you want to delete this sub admin?")) return;
    
    try {
      const response = await fetch(`/api/admin/sub-admins/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success("Sub admin deleted successfully");
        fetchSubAdmins();
      } else {
        toast.error(data.message || "Failed to delete sub admin");
      }
    } catch (error) {
      console.error("Error deleting sub admin:", error);
      toast.error("Failed to delete sub admin");
    }
  };

  const handlePermissionChange = (
    permissionName: string,
    action: string,
    value: boolean
  ) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [permissionName]: {
        ...prev[permissionName],
        [action]: value,
      },
    }));
  };

  const getStatusBadge = (status: string) => {
    const badges: { [key: string]: string } = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800",
      suspended: "bg-red-100 text-red-800",
    };
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badges[status] || badges.inactive}`}>
        {status || "inactive"}
      </span>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sub Admins</h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage sub admins with limited access permissions
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Sub Admin
          </button>
        </div>
      </div>

      {/* Sub Admins Table */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subAdmins.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <Shield className="w-12 h-12 text-gray-300" />
                        <p>No sub admins found</p>
                        <button
                          onClick={() => setShowCreateModal(true)}
                          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                        >
                          Create your first sub admin
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  subAdmins.map((admin) => (
                    <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{admin.name}</span>
                        </div>
                       </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{admin.email}</td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{admin.role || "sub_admin"}</span>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(admin.status)}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {admin.last_login ? new Date(admin.last_login).toLocaleDateString() : "Never"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {admin.created_at ? new Date(admin.created_at).toLocaleDateString() : "N/A"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedSubAdmin(admin);
                              setShowPermissionsModal(true);
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Permissions"
                          >
                            <Key className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleUpdateStatus(admin.id, admin.status === "active" ? "suspended" : "active")}
                            className={admin.status === "active" ? "text-yellow-600 hover:text-yellow-900" : "text-green-600 hover:text-green-900"}
                            title={admin.status === "active" ? "Suspend" : "Activate"}
                          >
                            {admin.status === "active" ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => handleDeleteSubAdmin(admin.id)}
                            className="text-red-600 hover:text-red-900"
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
            <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create Sub Admin Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Create Sub Admin</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubAdmin}>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter password (min 6 characters)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Create Sub Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Permissions Modal */}
      {showPermissionsModal && selectedSubAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto m-4">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Permissions - {selectedSubAdmin.name}
              </h2>
              <button onClick={() => setShowPermissionsModal(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">Access permissions for this sub admin</p>
              {!permissions || permissions.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No permissions available</p>
              ) : (
                <div className="space-y-4">
                  {permissions.map((module) => (
                    <div key={module.module} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                        <h4 className="font-medium text-gray-900">{module.module}</h4>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.permissions.map((perm) => (
                            <div key={perm.id} className="text-sm text-gray-600">
                              • {perm.description}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}