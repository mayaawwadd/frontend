"use client";
 
import { useEffect } from "react";
 
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}
 
export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Continue",
  cancelText = "Cancel",
}: ModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);
 
  if (!isOpen) return null;
 
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full mx-4 p-6 rounded-lg animate-scale-in"
        style={{
          backgroundColor: "#2A2A2A",
          border: "1px solid #3A3A3A",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255, 230, 0, 0.15)" }}
          >
            <span style={{ color: "#FFE600", fontSize: "16px" }}>↗</span>
          </div>
          <h3
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              fontWeight: "600",
              color: "#FFFFFF",
            }}
          >
            {title}
          </h3>
        </div>
 
        {/* Message */}
        <p
          className="mb-6"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            color: "#A0A0A0",
            lineHeight: "1.6",
          }}
        >
          {message}
        </p>
 
        {/* Buttons */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded transition-all duration-200 hover:opacity-80"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: "500",
              color: "#888888",
              backgroundColor: "transparent",
              border: "1px solid #444444",
            }}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded transition-all duration-200 hover:opacity-85"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              color: "#1F1F1F",
              backgroundColor: "#FFE600",
              border: "1px solid #FFE600",
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}