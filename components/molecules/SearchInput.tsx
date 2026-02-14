"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/atoms";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: "sm" | "lg";
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  size = "sm",
}: SearchInputProps) {
  const sizeStyles = {
    sm: {
      iconSize: 16,
      iconLeft: "16px",
      paddingLeft: "44px",
      inputPadding: "10px 16px 10px 44px",
    },
    lg: {
      iconSize: 20,
      iconLeft: "20px",
      paddingLeft: "56px",
      inputPadding: "20px 24px 20px 56px",
    },
  };

  const styles = sizeStyles[size];

  return (
    <div className="relative">
      <Search
        className="absolute top-1/2 transform -translate-y-1/2"
        size={styles.iconSize}
        style={{ color: "#666666", left: styles.iconLeft }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full focus:outline-none transition-all"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: size === "sm" ? "13px" : "15px",
          fontWeight: "400",
          color: "#FFFFFF",
          backgroundColor: "#2A2A2A",
          border: "1px solid #3A3A3A",
          borderRadius: "4px",
          padding: styles.inputPadding,
        }}
      />
    </div>
  );
}
