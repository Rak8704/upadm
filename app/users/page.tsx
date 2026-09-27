"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Trash2, Ban, Check, Eye } from "lucide-react";
import { toast } from "sonner";
import { useConfirm } from "@/hooks/useConfirm";

interface ModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

const UserDetailsModal = ({ user, isOpen, onClose }: ModalProps) => {
  if (!isOpen || !user) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
     <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">User Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white">
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-400">Phone Number</p>
            <p className="font-semibold">{user.phone_number}</p>
          </div>
          <div>
            <p className="text-gray-400">Status</p>
            <p
              className={`font-semibold ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {user.status}
            </p>
          </div>
          <div>
            <p className="text-gray-400">Balance</p>
            <p className="font-semibold">৳{user.balance.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400">Turn Over</p>
            <p className="font-semibold">৳{user.turn_over.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-400">User Code</p>
            <p className="font-semibold">{user.user_code}</p>
          </div>
          <div>
            <p className="text-gray-400">IP Address</p>
            <p className="font-semibold">{user.ip}</p>
          </div>
          <div>
            <p className="text-gray-400">FP ID</p>
            <p className="font-semibold">{user.fp_id}</p>
          </div>
          <div>
            <p className="text-gray-400">Invite Code</p>
            <p className="font-semibold">{user.invite_code || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-400">Created At</p>
            <p className="font-semibold">
              {new Date(user.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface User {
  id: number;
  phone_number: string;
  status: string;
  balance: number;
  turn_over: number;
  createdAt: string;
  user_code: string;
  password: string;
  fp_id: string;
  ip: string;
  invite_code?: string;
  total_bet?: number;
  total_win?: number;
}

async function getUsers(page: number, phoneSearch: string = "") {
  const response = await fetch(
    `/api/users?page=${page}&limit=50${
      phoneSearch ? `&phone=${phoneSearch}` : ""
    }`
  );
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
}

async function deleteUser(userId: number) {
  const response = await fetch(`/api/user/delete?id=${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete user");
  return response.json();
}

async function suspendUser(userId: number) {
  const response = await fetch("/api/user/suspend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });
  if (!response.ok) throw new Error("Failed to suspend user");
  return response.json();
}

export default function UsersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const [users, setUsers] = useState<User[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchPhone, setSearchPhone] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const confirm = useConfirm();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers(currentPage, searchPhone);
      setUsers(data.users);
      setTotalPages(Math.ceil(data.total / 50));
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage, searchPhone]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    try {
      router.push("/users?page=1");
      const data = await getUsers(1, searchPhone);
      setUsers(data.users);
      setTotalPages(Math.ceil(data.total / 50));
    } catch (error) {
      toast.error("Failed to search users");
    } finally {
      setIsSearching(false);
    }
  };

  const handleDelete = async (userId: number) => {
    const ok = await confirm({
      title: "Delete user",
      description:
        "This action will permanently remove the user. Are you sure?",
      confirmText: "Delete",
      cancelText: "Cancel",
    });
    if (!ok) return;

    try {
      await deleteUser(userId);
      toast.success("User deleted successfully");
      await fetchUsers();
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const handleSuspend = async (userId: number) => {
    const ok = await confirm({
      title: "Suspend user",
      description:
        "Suspend this user? They will not be able to access their account.",
      confirmText: "Suspend",
      cancelText: "Cancel",
    });
    if (!ok) return;

    try {
      await suspendUser(userId);
      toast.success("User suspended successfully");
      await fetchUsers();
      router.refresh();
    } catch (error) {
      toast.error("Failed to suspend user");
    }
  };

  const handleActivate = async (userId: number) => {
    const ok = await confirm({
      title: "Activate user",
      description: "Activate this user and restore access?",
      confirmText: "Activate",
      cancelText: "Cancel",
    });
    if (!ok) return;

    try {
      const res = await fetch("/api/user/active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      if (!res.ok) throw new Error("Failed to activate user");
      toast.success("User activated successfully");
      await fetchUsers();
      router.refresh();
    } catch (error) {
      toast.error("Failed to activate user");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Users Management</h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search by phone number..."
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
            className="flex-1 max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isSearching ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </button>
        </form>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-lg shadow">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-white border-b border-gray-200">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Phone Number
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Balance
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Turn Over
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Total Bets
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Total Wins
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Joined
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((user) => (
        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {user.phone_number}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                user.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {user.status}
            </span>
           </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            ৳{user.balance.toLocaleString()}
           </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            ৳{user.turn_over.toLocaleString()}
           </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            ৳{(user.total_bet || 0).toLocaleString()}
           </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            ৳{(user.total_win || 0).toLocaleString()}
           </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {new Date(user.createdAt).toLocaleDateString()}
           </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <div className="flex space-x-2">
              {user.status === "Active" ? (
                <button
                  onClick={() => handleSuspend(user.id)}
                  className="text-yellow-600 hover:text-yellow-900 transition-colors"
                  title="Suspend User"
                >
                  <Ban className="h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => handleActivate(user.id)}
                  className="text-green-600 hover:text-green-900 transition-colors"
                  title="Activate User"
                >
                  <Check className="h-5 w-5" />
                </button>
              )}

              <button
                onClick={() => {
                  setSelectedUser(user);
                  setIsModalOpen(true);
                }}
                className="text-blue-600 hover:text-blue-900 transition-colors"
                title="View Details"
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>
           </td>
         </tr>
      ))}
    </tbody>
  </table>
</div>

{/* User Details Modal */}
<UserDetailsModal
  user={selectedUser}
  isOpen={isModalOpen}
  onClose={() => {
    setIsModalOpen(false);
    setSelectedUser(null);
  }}
/>

{/* Pagination */}
<div className="flex justify-center space-x-2 mt-4">
  <button
    onClick={() => router.push(`/users?page=${currentPage - 1}`)}
    disabled={currentPage === 1}
    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
  >
    Previous
  </button>
  <span className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium">
    Page {currentPage} of {totalPages}
  </span>
  <button
    onClick={() => router.push(`/users?page=${currentPage + 1}`)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
  >
    Next
  </button>
</div>
</div>
    </div>
  );
}