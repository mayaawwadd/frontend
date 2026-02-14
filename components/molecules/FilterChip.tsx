"use client";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  size?: "sm" | "md";
}

export default function FilterChip({
  label,
  isActive,
  onClick,
  size = "md",
}: FilterChipProps) {
  const sizeStyles = {
    sm: {
      fontSize: "11px",
      padding: "6px 12px",
    },
    md: {
      fontSize: "13px",
      padding: "10px 20px",
    },
  };

  return (
    <button
      onClick={onClick}
      className="rounded-full transition-all duration-200"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        letterSpacing: "0.01em",
        backgroundColor: isActive ? "rgba(255, 230, 0, 0.12)" : "transparent",
        color: isActive ? "#FFE600" : "#888888",
        border: isActive ? "1px solid #FFE600" : "1px solid #444444",
        ...sizeStyles[size],
      }}
    >
      {label}
    </button>
  );
}
