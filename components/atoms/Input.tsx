"use client";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Input({
  value,
  onChange,
  placeholder = "",
  size = "md",
  className = "",
}: InputProps) {
  const sizeStyles = {
    sm: {
      fontSize: "13px",
      padding: "10px 16px",
    },
    md: {
      fontSize: "14px",
      padding: "12px 20px",
    },
    lg: {
      fontSize: "15px",
      padding: "20px 24px",
    },
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full focus:outline-none transition-all ${className}`}
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "#FFFFFF",
        backgroundColor: "#2A2A2A",
        border: "1px solid #3A3A3A",
        borderRadius: "4px",
        ...sizeStyles[size],
      }}
    />
  );
}
