"use client";

interface NewsCardProps {
  article: {
    id: string;
    category: string;
    headline: string;
    summary: string;
    source: string;
    publishDate: string;
    imageUrl: string;
  };
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article
      className="relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px]"
      style={{
        backgroundColor: "#2A2A2A",
        borderRadius: "6px",
        border: "1px solid #3A3A3A",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
        height: "480px",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${article.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content Area */}
      <div className="absolute bottom-0 left-0 right-0" style={{ minHeight: "60%" }}>
        {/* Blur Layer */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
            backgroundColor: "rgba(0,0,0,0.15)",
          }}
        />

        {/* Text Area */}
        <div
          className="relative p-8 flex flex-col justify-end"
          style={{ minHeight: "100%" }}
        >
          {/* Category Tag */}
          <div className="mb-3 flex gap-2 flex-wrap">
            <span
              className="inline-block px-3 py-1.5 rounded-full"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                backgroundColor: "rgba(255,230,0,0.15)",
                color: "#FFE600",
                border: "1px solid rgba(255,230,0,0.3)",
              }}
            >
              {article.category}
            </span>
          </div>

          {/* Headline */}
          <h3
            className="mb-3"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.4",
              letterSpacing: "-0.01em",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              overflowWrap: "break-word",
            }}
          >
            {article.headline}
          </h3>

          {/* Summary */}
          <p
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#E0E0E0",
              fontSize: "14px",
              fontWeight: "300",
              lineHeight: "1.6",
              textShadow: "0 1px 4px rgba(0,0,0,0.4)",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.summary}
          </p>

          {/* Footer */}
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
              {article.source}
            </span>

            <span
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#999999",
                fontSize: "12px",
                textShadow: "0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}