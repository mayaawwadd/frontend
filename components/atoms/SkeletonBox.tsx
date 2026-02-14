"use client";

interface SkeletonBoxProps {
  width?: string;
  height?: string;
  delay?: string;
  className?: string;
}

export default function SkeletonBox({
  width = "100%",
  height = "16px",
  delay = "0s",
  className = "",
}: SkeletonBoxProps) {
  return (
    <div
      className={`animate-heartbeat ${className}`}
      style={{
        width,
        height,
        backgroundColor: "rgba(255, 230, 0, 0.12)",
        borderRadius: "3px",
        animationDelay: delay,
      }}
    />
  );
}
