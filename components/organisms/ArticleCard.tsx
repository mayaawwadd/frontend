"use client";

import { Article } from "@/data/mockArticles";

interface ArticleCardProps {
    article: Article;
    onOpen: (article: Article) => void;
}

export default function ArticleCard({ article, onOpen }: ArticleCardProps) {
    const getCategoryColor = (category: string) => {
        const map: Record<string, string> = {
            "AI Governance": "bg-blue-500/20 text-blue-300",
            GenAI: "bg-purple-500/20 text-purple-300",
            "AI Security": "bg-red-500/20 text-red-300",
            "AI Strategy": "bg-green-500/20 text-green-300",
            LLMs: "bg-indigo-500/20 text-indigo-300",
            "AI in Audit": "bg-orange-500/20 text-orange-300",
            "AI in Consulting": "bg-teal-500/20 text-teal-300",
            "AI Regulation": "bg-yellow-500/20 text-yellow-200",
            MLOps: "bg-cyan-500/20 text-cyan-300",
            "Data & Analytics": "bg-emerald-500/20 text-emerald-300",
        };
        return map[category] ?? "bg-border text-foreground-muted";
    };

    return (
        <div
            className="group relative rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            onClick={() => onOpen(article)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onOpen(article)}
            aria-label={`Open article: ${article.title}`}
        >
            {/* Cover image */}
            <div className="relative h-48 overflow-hidden bg-background-surface">
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
                    <span
                        className={`text-[10px] font-semibold px-2 py-1 rounded-full ${getCategoryColor(
                            article.category
                        )}`}
                    >
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Text content */}
            <div className="bg-background-elevated p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-foreground-subtle">{article.date}</span>
                    <span className="text-xs text-foreground-subtle truncate max-w-[50%] text-right">
                        {article.source}
                    </span>
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