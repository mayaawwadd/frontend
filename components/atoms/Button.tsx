"use client";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "filter" | "filterActive";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  const sizeStyles = {
    sm: {
      fontSize: "11px",
      padding: "6px 12px",
    },
    md: {
      fontSize: "13px",
      padding: "10px 20px",
    },
    lg: {
      fontSize: "15px",
      padding: "16px 40px",
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: "#FFE600",
      color: "#1F1F1F",
      border: "1px solid #FFE600",
      borderRadius: "4px",
    },
    filter: {
      backgroundColor: "transparent",
      color: "#888888",
      border: "1px solid #444444",
      borderRadius: "9999px",
    },
    filterActive: {
      backgroundColor: "rgba(255, 230, 0, 0.12)",
      color: "#FFE600",
      border: "1px solid #FFE600",
      borderRadius: "9999px",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`transition-all duration-200 hover:opacity-85 ${className}`}
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: variant === "primary" ? "600" : "500",
        letterSpacing: "0.01em",
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
    >
      {children}
    </button>
  );
}
