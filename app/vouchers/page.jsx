"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function VouchersPage() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [vouchers, setVouchers] = useState([]);
  const [dialogCode, setDialogCode] = useState(null);

  const fetchVouchers = async () => {
    try {
      const res = await fetch("/api/vouchers");
      const json = await res.json();
      if (json.success) setVouchers(json.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load vouchers");
    }
  };

  useEffect(() => {
    fetchVouchers();
  }, []);

  const handleCreate = async () => {
    if (!amount || isNaN(Number(amount))) return toast("Enter a valid amount");
    setLoading(true);
    try {
      const res = await fetch("/api/vouchers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone || undefined,
          amount: Number(amount),
          message: message || undefined,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setDialogCode(json.code);
        setPhone("");
        setAmount("");
        setMessage("");
        await fetchVouchers();
      } else {
        toast(json.message || "Failed to create voucher");
      }
    } catch (err) {
      console.error(err);
      toast("Failed to create voucher");
    } finally {
      setLoading(false);
    }
  };

  const copyCode = async () => {
    if (!dialogCode) return;
    try {
      await navigator.clipboard.writeText(dialogCode);
      toast.success("Copied to clipboard");
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vouchers</h1>

      <div className="mb-6 max-w-md">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          onWheel={(e) => {
            e.currentTarget.blur();
          }}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full px-3 py-2 border rounded mb-3"
        />

        <label className="block mb-1">Phone (optional)</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="User phone number"
          className="w-full px-3 py-2 border rounded mb-3"
        />

        <label className="block mb-1">Message (optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Optional message to attach to the voucher"
          className="w-full px-3 py-2 border rounded mb-3 h-24"
        />

        <div className="flex items-center gap-2">
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Voucher"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Collected
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Collected By
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Message
              </th>
            </tr>
          </thead>
          <tbody className=" bg-gray-800 divide-y">
            {vouchers.map((v) => (
              <tr key={v.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {v.code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  ৳{Number(v.amount).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {v.collected ? "Yes" : "No"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {v.user?.phone_number ||
                    (v.collected_by ? String(v.collected_by) : "-")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {new Date(v.createdAt).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {v.message || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog */}
      {dialogCode && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className=" bg-slate-800 rounded-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold mb-2">Voucher Created</h2>
            <p className="mb-4">
              Code: <span className="font-mono">{dialogCode}</span>
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setDialogCode(null);
                }}
                className="px-4 py-2 rounded"
              >
                Close
              </button>
              <button
                onClick={copyCode}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
