"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";
import { useConfirm } from "@/hooks/useConfirm";

interface Tx {
  id: number;
  amount: number;
  type: string;
  trx_id?: string | null;
  sign?: string | null;
  status: string;
  user_id: number;
  user: { id: number; phone_number: string } | null;
  createdAt: string;
}

async function getTransactions(page: number, limit = 50) {
  const res = await fetch(`/api/transactions?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch transactions");
  return res.json();
}

async function completeTransaction(transactionId: number) {
  const res = await fetch("/api/transaction/complete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transactionId }),
  });
  if (!res.ok) throw new Error("Failed to complete transaction");
  return res.json();
}

async function cancelTransaction(transactionId: number) {
  const res = await fetch("/api/transaction/canceled", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transactionId }),
  });
  if (!res.ok) throw new Error("Failed to cancel transaction");
  return res.json();
}

export default function TransactionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransactionsPageComponent />
    </Suspense>
  );
}

function TransactionsPageComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  const [transactions, setTransactions] = useState<Tx[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const confirm = useConfirm();

  const fetchList = async () => {
    try {
      setLoading(true);
      const data = await getTransactions(currentPage);
      setTransactions(data.transactions);
      setTotalPages(Math.ceil(data.total / 50));
    } catch (error) {
      toast.error("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, [currentPage]);

  const handleComplete = async (id: number) => {
    const ok = await confirm({
      title: "Complete transaction",
      description: "Mark this transaction as completed?",
    });
    if (!ok) return;

    try {
      await completeTransaction(id);
      toast.success("Transaction marked completed");
      await fetchList();
      router.refresh();
    } catch (error) {
      toast.error("Failed to complete transaction");
    }
  };

  const handleCancel = async (id: number) => {
    const ok = await confirm({
      title: "Cancel transaction",
      description: "Mark this transaction as cancelled?",
    });
    if (!ok) return;

    try {
      await cancelTransaction(id);
      toast.success("Transaction cancelled");
      await fetchList();
      router.refresh();
    } catch (error) {
      toast.error("Failed to cancel transaction");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y ">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                User
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                Type
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                Trx ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                Created
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-slate-900">
                <td className="px-4 py-3 text-sm ">{t.id}</td>
                <td className="px-4 py-3 text-sm ">
                  {t.user?.phone_number || "—"}
                </td>
                <td className="px-4 py-3 text-sm ">
                  ৳{t.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-sm ">{t.type}</td>
                <td className="px-4 py-3 text-sm ">{t.trx_id || "—"}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      t.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : t.status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm ">
                  {new Date(t.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-3 text-sm ">
                  <div className="flex items-center justify-between max-w-12 gap-3">
                    {t.status !== "completed" ? (
                      <button
                        onClick={() => handleComplete(t.id)}
                        title="Mark completed"
                        className="text-green-600 hover:text-green-900"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </button>
                    ) : (
                      <div></div>
                    )}
                    {t.status !== "cancelled" && (
                      <button
                        onClick={() => handleCancel(t.id)}
                        title="Cancel"
                        className="text-red-600 hover:text-red-900"
                      >
                        <XCircle className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={() => router.push(`/transactions?page=${currentPage - 1}`)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-slate-800 disabled:opacity-40"
        >
          Previous
        </button>
        <span className="px-4 py-2 rounded-lg bg-indigo-500 text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => router.push(`/transactions?page=${currentPage + 1}`)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-slate-800 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
