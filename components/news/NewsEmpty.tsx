"use client";

export default function NewsEmpty() {
  return (
    <div className="text-center py-32">
      <p
        className="text-xl font-light"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#666666",
        }}
      >
        No articles found matching your criteria
      </p>
    </div>
  );
}