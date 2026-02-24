"use client";

import { useState } from "react";
import Image from "next/image";
import { Article } from "@/data/mockArticles";

interface ArticleCardProps {
    article: Article;
    onOpen: (article: Article) => void;
}

export default function ArticleCard({ article, onOpen }: ArticleCardProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const getCategoryColor = (category: string) => {
        return "bg-accent/20 text-accent";
    };

    return (
        <div
            className="group relative rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onMouseMove={handleMouseMove}
            onClick={() => onOpen(article)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onOpen(article)}
            aria-label={`Open article: ${article.title}`}
        >
            {/* Cover image */}
            <div className="relative h-48 overflow-hidden bg-background-surface">
                {/* next/image needs domain allowlist for external images; we keep it simple with <img> for now */}
                <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 card-overlay" />

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${getCategoryColor(article.category)}`}>
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Text content */}
            <div className="bg-background-elevated p-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-foreground-subtle">{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs text-foreground-subtle truncate">{article.source}</span>
                </div>

                <h3 className="font-display text-sm font-semibold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                    {article.title}
                </h3>

                <p className="text-xs text-foreground-muted leading-relaxed line-clamp-3 mb-3">
                    {article.summary}
                </p>

                <div className="flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                    <span>Read more</span>
                    <span>→</span>
                </div>
            </div>

            {/* Hover tooltip with source */}
            {showTooltip && (
                <div
                    className="pointer-events-none absolute z-20 px-3 py-2 rounded-lg text-xs max-w-[220px] animate-fade-in"
                    style={{
                        left: Math.min(tooltipPos.x + 12, 180),
                        top: tooltipPos.y - 48,
                        background: "hsl(var(--background-overlay))",
                        border: "1px solid hsl(var(--border))",
                        borderLeft: "2px solid hsl(var(--accent))",
                        boxShadow: "var(--shadow-toast)",
                    }}
                >
                    <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-accent font-semibold text-[10px] uppercase tracking-wide">
                            Source
                        </span>
                    </div>
                    <span className="text-foreground-muted break-all leading-relaxed">
                        {article.source}
                    </span>
                </div>
            )}
        </div>
    );
}

// Skeleton card for loading state
export function ArticleCardSkeleton() {
    return (
        <div className="rounded-xl overflow-hidden shadow-card">
            <div className="h-48 skeleton-shimmer" />
            <div className="bg-background-elevated p-4 space-y-2">
                <div className="flex gap-2">
                    <div className="h-3 w-16 skeleton-shimmer rounded" />
                    <div className="h-3 w-20 skeleton-shimmer rounded" />
                </div>
                <div className="h-4 w-full skeleton-shimmer rounded" />
                <div className="h-4 w-4/5 skeleton-shimmer rounded" />
                <div className="h-3 w-full skeleton-shimmer rounded mt-1" />
                <div className="h-3 w-5/6 skeleton-shimmer rounded" />
                <div className="h-3 w-3/4 skeleton-shimmer rounded" />
            </div>
        </div>
    );
}
