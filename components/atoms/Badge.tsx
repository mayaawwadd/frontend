"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md";
}

export default function Badge({
  children,
  variant = "default",
  size = "sm",
}: BadgeProps) {
  const sizeStyles = {
    sm: {
      fontSize: "11px",
      padding: "6px 12px",
    },
    md: {
      fontSize: "12px",
      padding: "8px 16px",
    },
  };

  const variantStyles = {
    default: {
      backgroundColor: "rgba(255, 230, 0, 0.15)",
      border: "1px solid rgba(255, 230, 0, 0.3)",
    },
    outline: {
      backgroundColor: "rgba(255, 230, 0, 0.1)",
      border: "1px solid rgba(255, 230, 0, 0.2)",
    },
  };

  return (
    <span
      className="inline-block rounded-full"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        color: "#FFE600",
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  );
}
