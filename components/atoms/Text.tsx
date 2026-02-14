"use client";

import { CSSProperties } from "react";

interface TextProps {
  children: React.ReactNode;
  variant?: "hero" | "heading" | "subheading" | "body" | "caption" | "meta";
  color?: "primary" | "secondary" | "tertiary" | "accent";
  className?: string;
  style?: CSSProperties;
}

export default function Text({
  children,
  variant = "body",
  color = "primary",
  className = "",
  style = {},
}: TextProps) {
  const variantStyles = {
    hero: {
      fontSize: "clamp(48px, 8vw, 80px)",
      fontWeight: "700",
      lineHeight: "1.1",
      letterSpacing: "-0.03em",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "1.4",
      letterSpacing: "-0.01em",
    },
    subheading: {
      fontSize: "clamp(18px, 2vw, 22px)",
      fontWeight: "300",
      lineHeight: "1.7",
      letterSpacing: "-0.01em",
    },
    body: {
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "1.6",
      letterSpacing: "0",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "1.4",
      letterSpacing: "0.01em",
    },
    meta: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "1.4",
      letterSpacing: "0.01em",
    },
  };

  const colorStyles = {
    primary: "#FFFFFF",
    secondary: "#A0A0A0",
    tertiary: "#666666",
    accent: "#FFE600",
  };

  const Tag = variant === "hero" ? "h1" : variant === "heading" ? "h3" : "p";

  return (
    <Tag
      className={className}
      style={{
        fontFamily: "Inter, sans-serif",
        color: colorStyles[color],
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
