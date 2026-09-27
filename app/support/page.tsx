"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

// Message type
type Message = {
  id: number;
  user_id: number;
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
  status: "pending" | "replied" | "resolved";
  created_at: string;
  admin_reply?: string;
  replied_at?: string;
};

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState("");
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replying, setReplying] = useState(false);

  // ✅ সঠিকভাবে API URL সেট করুন
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      // ✅ সঠিক API এন্ডপয়েন্ট ব্যবহার করুন
      const response = await fetch(`${API_BASE_URL}/admin/support/messages`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setMessages(data.data);
      } else {
        toast.error(data.message || "Failed to load messages");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to fetch support messages");
      // Mock data for testing
      setMessages([
        {
          id: 1,
          user_id: 101,
          user_name: "John Doe",
          user_email: "john@example.com",
          subject: "Account Issue",
          message: "I cannot login to my account",
          status: "pending",
          created_at: new Date().toISOString(),
        },
        {
          id: 2,
          user_id: 102,
          user_name: "Jane Smith",
          user_email: "jane@example.com",
          subject: "Payment Problem",
          message: "My payment was deducted but not credited",
          status: "replied",
          created_at: new Date().toISOString(),
          admin_reply: "We are looking into it",
          replied_at: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (messageId: number, reply: string) => {
    setReplying(true);
    try {
      const response = await fetch(`${API_BASE_URL}/admin/support/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message_id: messageId,
          reply: reply,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Reply sent successfully");
        fetchMessages(); // Refresh messages
        setShowReplyModal(false);
        setReplyText("");
      } else {
        toast.error(data.message || "Failed to send reply");
      }
    } catch (error) {
      console.error("Error sending reply:", error);
      toast.error("Failed to send reply");
    } finally {
      setReplying(false);
    }
  };

  const updateMessageStatus = async (messageId: number, status: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/support/messages/${messageId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(`Message marked as ${status}`);
        fetchMessages();
      } else {
        toast.error(data.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: "bg-yellow-100 text-yellow-800",
      replied: "bg-blue-100 text-blue-800",
      resolved: "bg-green-100 text-green-800",
    };
    return (
      <span className={`px-2 py-1 text-xs rounded-full ${badges[status as keyof typeof badges] || badges.pending}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Support Messages</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage user support tickets and respond to inquiries
        </p>
      </div>

      {/* Messages List */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      </div>
                    </td>
                  </tr>
                ) : messages.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No support messages found
                    </td>
                  </tr>
                ) : (
                  messages.map((message) => (
                    <tr key={message.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{message.user_name}</div>
                          <div className="text-sm text-gray-500">{message.user_email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{message.subject}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-md truncate">
                          {message.message}
                        </div>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(message.status)}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(message.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setSelectedMessage(message);
                              setShowReplyModal(true);
                            }}
                            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                          >
                            Reply
                          </button>
                          {message.status !== "resolved" && (
                            <button
                              onClick={() => updateMessageStatus(message.id, "resolved")}
                              className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                            >
                              Resolve
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

      {/* Reply Modal */}
      {showReplyModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Reply to Message</h2>
              <button
                onClick={() => setShowReplyModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">From:</label>
                <p className="text-gray-900">{selectedMessage.user_name}</p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                <p className="text-gray-900">{selectedMessage.subject}</p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Original Message:</label>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-gray-700">{selectedMessage.message}</p>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Reply:</label>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your reply here..."
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowReplyModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleReply(selectedMessage.id, replyText)}
                  disabled={replying || !replyText.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {replying ? "Sending..." : "Send Reply"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}