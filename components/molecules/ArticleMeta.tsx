"use client";

interface ArticleMetaProps {
  source: string;
  publishDate: string;
}

export default function ArticleMeta({ source, publishDate }: ArticleMetaProps) {
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between flex-wrap gap-2">
      <span
        className="font-medium"
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#B0B0B0",
          fontSize: "12px",
          letterSpacing: "0.01em",
          textShadow: "0 1px 3px rgba(0,0,0,0.4)",
        }}
      >
        {source}
      </span>

      <span
        style={{
          fontFamily: "Inter, sans-serif",
          color: "#999999",
          fontSize: "12px",
          textShadow: "0 1px 3px rgba(0,0,0,0.4)",
        }}
      >
        {formattedDate}
      </span>
    </div>
  );
}
