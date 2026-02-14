"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizeStyles = {
    sm: {
      dotSize: "12px",
      fontSize: "20px",
      gap: "12px",
    },
    md: {
      dotSize: "12px",
      fontSize: "20px",
      gap: "12px",
    },
    lg: {
      dotSize: "20px",
      fontSize: "48px",
      gap: "16px",
    },
  };

  const styles = sizeStyles[size];

  return (
    <div className="flex items-center" style={{ gap: styles.gap }}>
      <div
        className="rounded-full animate-heartbeat"
        style={{
          width: styles.dotSize,
          height: styles.dotSize,
          backgroundColor: "#FFE600",
        }}
      />
      <h1
        className="font-bold tracking-tight"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#FFFFFF",
          fontSize: styles.fontSize,
          letterSpacing: "-0.02em",
        }}
      >
        AI <span style={{ color: "#FFE600" }}>Pulse</span>
      </h1>
    </div>
  );
}
