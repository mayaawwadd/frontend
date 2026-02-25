"use client";

import { useEffect, useRef, useState } from "react";
import { Article } from "@/data/mockArticles";
import { Share2, ExternalLink, Mail, Copy, Check } from "lucide-react";

interface ArticlePreviewModalProps {
    article: Article;
    onClose: () => void;
    onViewSource: () => void;
}

export default function ArticlePreviewModal({
    article,
    onClose,
    onViewSource,
}: ArticlePreviewModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
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

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(article.articleUrl);
            setShowLinkCopied(true);
            setTimeout(() => setShowLinkCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleShareTeams = () => {
        const text = encodeURIComponent(`Check out this article: ${article.title}`);
        const url = encodeURIComponent(article.articleUrl);
        window.open(`https://teams.microsoft.com/share?url=${url}&title=${text}`, "_blank");
    };

    const handleShareLinkedIn = () => {
        const url = encodeURIComponent(article.articleUrl);
        const title = encodeURIComponent(article.title);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    };

    const handleShareTwitter = () => {
        const text = encodeURIComponent(`${article.title} ${article.articleUrl}`);
        window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
    };

    const handleShareEmail = () => {
        const subject = encodeURIComponent(article.title);
        const body = encodeURIComponent(
            `${article.title}\n\n${article.summary}\n\nRead more: ${article.articleUrl}`
        );
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    const getCategoryColor = (category: string) => {
        return "bg-accent/20 text-accent";
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{
                background: "hsl(var(--background-overlay) / 0.7)",
                backdropFilter: "blur(4px)",
            }}
        >
            <div
                ref={dialogRef}
                className="w-full max-w-3xl bg-background-elevated border border-border rounded-2xl shadow-lg animate-slide-up overflow-hidden max-h-[90vh] overflow-y-auto"
            >
                {/* Header gradient bar */}
                <div className="h-1 bg-gradient-to-r from-accent via-accent-hover to-accent/50" />

                {/* Close button (top-right) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer z-10 w-8 h-8 rounded-lg hover:bg-background-surface border border-transparent hover:border-border text-foreground-muted hover:text-foreground transition-all flex items-center justify-center"
                    aria-label="Close preview"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Article Image */}
                <div className="relative h-40 sm:h-64 overflow-hidden bg-background-surface">
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-elevated via-transparent" />

                    {/* Category badge - positioned in image area */}
                    <div className="absolute top-4 left-4">
                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getCategoryColor(article.category)}`}>
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                    {/* Metadata row */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-foreground-subtle">
                        <span className="font-medium">{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>{article.source}</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight">
                        {article.title}
                    </h1>

                    {/* Summary */}
                    <p className="text-sm text-foreground-muted leading-relaxed">
                        {article.summary}
                    </p>

                    {/* Article URL display */}
                    <div className="flex items-center gap-2 px-3 py-2.5 bg-background-surface rounded-lg border border-border">
                        <svg className="w-3.5 h-3.5 text-foreground-subtle shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                            />
                        </svg>
                        <span className="text-xs text-foreground-muted truncate flex-1">
                            {article.articleUrl.replace(/^https?:\/\//, "")}
                        </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        {/* View Source button */}
                        <button
                            onClick={onViewSource}
                            className="flex-1 h-11 cursor-pointer rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            <span className="hidden sm:inline">View Source</span>
                            <span className="sm:hidden">View</span>
                        </button>

                        {/* Share button with dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShareOpen(!shareOpen)}
                                className="h-11 px-4 cursor-pointer rounded-lg border border-border text-foreground-muted hover:text-foreground hover:bg-background-surface transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                                aria-label="Share article"
                            >
                                <Share2 size={16} />
                                <span>Share</span>
                            </button>

                            {/* Share dropdown menu */}
                            {shareOpen && (
                                <div className="absolute top-full right-0 mt-2 w-56 bg-background-elevated border border-border rounded-xl shadow-lg z-10 overflow-hidden animate-slide-up">
                                    <button
                                        onClick={handleCopyLink}
                                        className="w-full px-4 py-3 cursor-pointer flex items-center gap-3 hover:bg-background-surface transition-colors text-left"
                                    >
                                        {showLinkCopied ? (
                                            <Check size={16} className="text-accent shrink-0" />
                                        ) : (
                                            <Copy size={16} className="text-foreground-muted shrink-0" />
                                        )}
                                        <div>
                                            <p className="text-sm font-medium text-foreground">
                                                {showLinkCopied ? "Copied!" : "Copy link"}
                                            </p>
                                            <p className="text-xs text-foreground-muted">
                                                {showLinkCopied ? "Link copied to clipboard" : "Copy to clipboard"}
                                            </p>
                                        </div>
                                    </button>

                                    <div className="border-t border-border" />

                                    <button
                                        onClick={handleShareTeams}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-background-surface transition-colors text-left"
                                    >
                                        <svg className="w-4 h-4 text-foreground-muted shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6.5 3C5.12 3 4 4.12 4 5.5V18.5C4 19.88 5.12 21 6.5 21H17.5C18.88 21 20 19.88 20 18.5V5.5C20 4.12 18.88 3 17.5 3H6.5ZM8 6H10V9H8V6ZM11 6H13V9H11V6ZM14 6H16V9H14V6ZM8 10H10V13H8V10ZM11 10H13V13H11V10ZM14 10H16V13H14V10Z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">Share to Teams</p>
                                            <p className="text-xs text-foreground-muted">Share in Microsoft Teams</p>
                                        </div>
                                    </button>

                                    <button
                                        onClick={handleShareLinkedIn}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-background-surface transition-colors text-left"
                                    >
                                        <svg className="w-4 h-4 text-foreground-muted shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.746 0-9.637h3.554v1.364c.429-.662 1.196-1.608 2.906-1.608 2.123 0 3.716 1.388 3.716 4.368v5.513zM5.337 9.433c-1.144 0-1.915-.755-1.915-1.699 0-.943.77-1.699 1.915-1.699 1.144 0 1.915.756 1.915 1.699 0 .944-.771 1.699-1.915 1.699zm1.575 10.019H3.762V9.816h3.15v9.636zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">Share to LinkedIn</p>
                                            <p className="text-xs text-foreground-muted">Share on LinkedIn</p>
                                        </div>
                                    </button>

                                    <button
                                        onClick={handleShareTwitter}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-background-surface transition-colors text-left"
                                    >
                                        <svg className="w-4 h-4 text-foreground-muted shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">Share to Twitter/X</p>
                                            <p className="text-xs text-foreground-muted">Share on Twitter/X</p>
                                        </div>
                                    </button>

                                    <button
                                        onClick={handleShareEmail}
                                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-background-surface transition-colors text-left"
                                    >
                                        <Mail size={16} className="text-foreground-muted shrink-0" />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">Share via Email</p>
                                            <p className="text-xs text-foreground-muted">Send to colleagues</p>
                                        </div>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Copy link button */}
                        <button
                            onClick={handleCopyLink}
                            className="h-11 px-4 rounded-lg border border-border text-foreground-muted hover:text-foreground hover:bg-background-surface transition-all flex items-center justify-center w-full sm:w-auto"
                            aria-label="Copy link"
                            title="Copy article link"
                        >
                            {showLinkCopied ? (
                                <Check size={16} className="text-accent" />
                            ) : (
                                <Copy size={16} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
