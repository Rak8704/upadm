"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, AlertCircle, Loader } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const [adminSecret, setAdminSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminSecret }),
        credentials: "include", // Important: ensures cookies are sent
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid admin secret");
        toast.error(data.message || "Login failed");
        return;
      }

      toast.success("Login successful! Redirecting...");
      setAdminSecret("");
      // Redirect to dashboard after successful login
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      let errorMessage = "An error occurred during login";
      if (err instanceof Error) {
        errorMessage = err.message || "An error occurred";
      }
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Gradient Background - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(59, 130, 246), rgb(139, 92, 246))",
          }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(236, 72, 153), rgb(59, 130, 246))",
          }}
        ></div>
      </div>

      {/* Login Card */}
      <div
        className="w-full max-w-md z-10 animate-fadeIn"
        style={{
          animation: "fadeIn 0.5s ease-in-out",
        }}
      >
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
            }
          }

          .card-glass {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          @media (prefers-color-scheme: dark) {
            .card-glass {
              background: rgba(15, 15, 15, 0.95);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
          }

          .input-field {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(59, 130, 246, 0.2);
            transition: all 0.3s ease;
          }

          .input-field:focus {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgb(59, 130, 246);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }

          @media (prefers-color-scheme: dark) {
            .input-field {
              background: rgba(255, 255, 255, 0.05);
              border-color: rgba(59, 130, 246, 0.3);
            }

            .input-field:focus {
              background: rgba(255, 255, 255, 0.1);
            }
          }

          .btn-submit {
            background: linear-gradient(135deg, rgb(59, 130, 246), rgb(139, 92, 246));
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .btn-submit:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
          }

          .btn-submit:active:not(:disabled) {
            transform: translateY(0);
          }

          .btn-submit:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
        `}</style>

        {/* Card Container */}
        <div className="card-glass rounded-2xl shadow-2xl p-8 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
              style={{
                background:
                  "linear-gradient(135deg, rgb(59, 130, 246), rgb(139, 92, 246))",
              }}
            >
              <Lock className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Admin Login</h1>
            <p className="text-sm opacity-60">
              Enter your admin secret to access the dashboard
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="mb-6 p-4 rounded-lg flex items-start gap-3 border-l-4"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                borderColor: "rgb(239, 68, 68)",
              }}
            >
              <AlertCircle
                className="w-5 h-5 mt-0.5 shrink-0"
                style={{ color: "rgb(239, 68, 68)" }}
              />
              <p className="text-sm" style={{ color: "rgb(239, 68, 68)" }}>
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Admin Secret Input */}
            <div>
              <label
                htmlFor="adminSecret"
                className="block text-sm font-medium mb-2"
              >
                Admin Secret
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 opacity-70">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="adminSecret"
                  type="password"
                  value={adminSecret}
                  onChange={(e) => setAdminSecret(e.target.value)}
                  placeholder="Enter admin secret"
                  className="input-field w-full pl-12 pr-4 py-3 rounded-lg font-sans text-sm focus:outline-none"
                  disabled={loading}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !adminSecret.trim()}
              className="btn-submit w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 sm:text-base"
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Login
                </>
              )}
            </button>
          </form>

          {/* Footer Info */}
          <div
            className="mt-8 pt-6 border-t"
            style={{
              borderColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <p className="text-xs text-center opacity-50">
              Your session is secure and encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
