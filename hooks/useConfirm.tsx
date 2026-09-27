"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { createPortal } from "react-dom";

type ConfirmOptions = {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
};

type ConfirmFn = (opts?: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn | null>(null);

export function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions>({});
  const [resolver, setResolver] = useState<((v: boolean) => void) | null>(null);

  const confirm = useCallback((opts: ConfirmOptions = {}) => {
    setOptions(opts);
    setIsOpen(true);

    return new Promise<boolean>((resolve) => {
      setResolver(() => resolve);
    });
  }, []);

  const handleClose = (result: boolean) => {
    setIsOpen(false);
    if (resolver) resolver(result);
    setResolver(null);
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {typeof window !== "undefined" && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <div
                className="fixed inset-0 bg-black/40"
                onClick={() => handleClose(false)}
              />

              <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {options.title || "Confirm"}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {options.description ||
                      "Are you sure you want to continue?"}
                  </p>

                  <div className="mt-4 flex justify-end gap-3">
                    <button
                      className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
                      onClick={() => handleClose(false)}
                    >
                      {options.cancelText || "Cancel"}
                    </button>
                    <button
                      className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                      onClick={() => handleClose(true)}
                    >
                      {options.confirmText || "Confirm"}
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const ctx = useContext(ConfirmContext);
  if (!ctx) throw new Error("useConfirm must be used within a ConfirmProvider");
  return ctx;
}
