"use client";

import { useEffect, useRef, useState } from "react";
import { Article } from "@/data/mockArticles";
import { Share2, ExternalLink, Mail, Copy, Check, X, Link2 } from "lucide-react";

interface ArticlePreviewModalProps {
    article: Article;
    onClose: () => void;
}

export default function ArticlePreviewModal({ article, onClose }: ArticlePreviewModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const shareWrapRef = useRef<HTMLDivElement>(null);

    const [showLinkCopied, setShowLinkCopied] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onClose]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [onClose]);

    // Close share dropdown when clicking anywhere else (inside modal OR outside),
    // except clicks inside the share button/dropdown itself.
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!shareOpen) return;
            const target = e.target as Node;
            if (shareWrapRef.current && shareWrapRef.current.contains(target)) return;
            setShareOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [shareOpen]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(article.articleUrl);
            setShowLinkCopied(true);
            setTimeout(() => setShowLinkCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleViewSource = () => {
        window.open(article.articleUrl, "_blank", "noopener,noreferrer");
    };

    const handleShareTeams = () => {
        const text = encodeURIComponent(`Check out this article: ${article.title}`);
        const url = encodeURIComponent(article.articleUrl);
        window.open(`https://teams.microsoft.com/share?url=${url}&title=${text}`, "_blank", "noopener,noreferrer");
    };

    const handleShareLinkedIn = () => {
        const url = encodeURIComponent(article.articleUrl);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
    };

    const handleShareTwitter = () => {
        const text = encodeURIComponent(`${article.title} ${article.articleUrl}`);
        window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "noopener,noreferrer");
    };

    const handleShareEmail = () => {
        const subject = encodeURIComponent(article.title);
        const body = encodeURIComponent(`${article.title}\n\n${article.summary}\n\nRead more: ${article.articleUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

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
        return map[category] ?? "bg-accent/20 text-accent";
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background-overlay/80 backdrop-blur-sm" />

            {/* Dialog */}
            <div
                ref={dialogRef}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background-elevated shadow-card-hover animate-slide-up"
            >
                {/* Accent top bar */}
                <div className="h-1 w-full bg-accent rounded-t-2xl" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background-overlay/60 backdrop-blur-sm border border-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-background-surface transition-all"
                    aria-label="Close"
                >
                    <X size={16} />
                </button>

                {/* Article image */}
                <div className="relative h-48 overflow-hidden">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 card-overlay" />

                    {/* Category badge */}
                    <div className="absolute bottom-3 left-4">
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${getCategoryColor(article.category)}`}>
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                    {/* Metadata */}
                    <div className="flex items-center gap-2 text-xs text-foreground-subtle">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{article.source}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{article.region}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-lg font-semibold text-foreground leading-snug">{article.title}</h2>

                    {/* Summary */}
                    <p className="text-sm text-foreground-muted leading-relaxed">{article.summary}</p>

                    {/* URL display */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-surface border border-border">
                        <Link2 size={14} className="text-foreground-subtle shrink-0" />
                        <span className="text-xs text-foreground-muted truncate">
                            {article.articleUrl.replace(/^https?:\/\//, "")}
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        {/* View Source */}
                        <button
                            onClick={handleViewSource}
                            className="h-11 px-5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all flex-1"
                        >
                            <ExternalLink size={16} />
                            <span className="hidden sm:inline">View Source</span>
                            <span className="sm:hidden">View</span>
                        </button>

                        {/* Share button + dropdown */}
                        <div className="relative" ref={shareWrapRef}>
                            <button
                                onClick={() => setShareOpen(!shareOpen)}
                                className="h-11 px-4 rounded-lg border border-border text-foreground-muted hover:text-foreground hover:bg-background-surface transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                                aria-label="Share article"
                            >
                                <Share2 size={16} />
                                <span className="text-sm">Share</span>
                            </button>

                            {shareOpen && (
                                <div className="absolute bottom-full mb-2 right-0 w-56 rounded-xl border border-border bg-background-elevated shadow-card-hover p-1.5 animate-fade-in z-50">
                                    {/* Copy link */}
                                    <button
                                        onClick={handleCopyLink}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-surface transition-colors text-left"
                                    >
                                        {showLinkCopied ? (
                                            <Check size={16} className="text-green-400 shrink-0" />
                                        ) : (
                                            <Copy size={16} className="text-foreground-subtle shrink-0" />
                                        )}
                                        <div>
                                            <p className="text-sm text-foreground">{showLinkCopied ? "Copied!" : "Copy link"}</p>
                                            <p className="text-[10px] text-foreground-subtle">
                                                {showLinkCopied ? "Link copied to clipboard" : "Copy to clipboard"}
                                            </p>
                                        </div>
                                    </button>

                                    <div className="h-px bg-border my-1" />

                                    {/* Teams */}
                                    <button
                                        onClick={handleShareTeams}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-surface transition-colors text-left"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground-subtle shrink-0" fill="currentColor">
                                            <path d="M19.2 6.4h-2.4V4.8A2.4 2.4 0 0 0 14.4 2.4h-4.8A2.4 2.4 0 0 0 7.2 4.8v1.6H4.8A2.4 2.4 0 0 0 2.4 8.8v9.6a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4V8.8a2.4 2.4 0 0 0-2.4-2.4zM9.6 4.8h4.8v1.6H9.6V4.8z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-foreground">Share to Teams</p>
                                            <p className="text-[10px] text-foreground-subtle">Share in Microsoft Teams</p>
                                        </div>
                                    </button>

                                    {/* LinkedIn */}
                                    <button
                                        onClick={handleShareLinkedIn}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-surface transition-colors text-left"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground-subtle shrink-0" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C0 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-foreground">Share to LinkedIn</p>
                                            <p className="text-[10px] text-foreground-subtle">Share on LinkedIn</p>
                                        </div>
                                    </button>

                                    {/* Twitter/X */}
                                    <button
                                        onClick={handleShareTwitter}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-surface transition-colors text-left"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground-subtle shrink-0" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-foreground">Share to Twitter/X</p>
                                            <p className="text-[10px] text-foreground-subtle">Share on Twitter/X</p>
                                        </div>
                                    </button>

                                    {/* Email */}
                                    <button
                                        onClick={handleShareEmail}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-surface transition-colors text-left"
                                    >
                                        <Mail size={16} className="text-foreground-subtle shrink-0" />
                                        <div>
                                            <p className="text-sm text-foreground">Share via Email</p>
                                            <p className="text-[10px] text-foreground-subtle">Send to colleagues</p>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Copy link button */}
                        <button
                            onClick={handleCopyLink}
                            className="h-11 w-11 rounded-lg border border-border text-foreground-muted hover:text-foreground hover:bg-background-surface transition-all flex items-center justify-center shrink-0"
                            aria-label="Copy link"
                        >
                            {showLinkCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}