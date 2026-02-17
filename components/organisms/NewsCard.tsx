"use client";
 
import { useState } from "react";
import { Badge, Modal } from "@/components/atoms";
import { ArticleMeta } from "@/components/molecules";
 
interface NewsCardProps {
  article: {
    id: string;
    category: string;
    headline: string;
    summary: string;
    source: string;
    publishDate: string;
    imageUrl: string;
    url: string;
  };
}
 
export default function NewsCard({ article }: NewsCardProps) {
  const [showModal, setShowModal] = useState(false);
 
  // Extract domain from URL for display
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return "external site";
    }
  };
 
  const handleCardClick = () => {
    setShowModal(true);
  };
 
  const handleConfirm = () => {
    setShowModal(false);
    window.open(article.url, "_blank", "noopener,noreferrer");
  };
 
  return (
    <>
      <article
        onClick={handleCardClick}
        className="relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] cursor-pointer hover:brightness-110"
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
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ minHeight: "60%" }}
        >
          {/* Blur Layer */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
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
              <Badge size="sm">{article.category}</Badge>
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
            <ArticleMeta source={article.source} publishDate={article.publishDate} />
          </div>
        </div>
      </article>
 
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
        title="Leaving AI Pulse"
        message={`You're about to visit ${getDomain(article.url)}. This will open in a new tab.`}
        confirmText="Open Article"
        cancelText="Stay Here"
      />
    </>
  );
}