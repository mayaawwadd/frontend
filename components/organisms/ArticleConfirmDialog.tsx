"use client";

import { useEffect, useRef } from "react";
import { Article } from "@/data/mockArticles";

interface ArticleConfirmDialogProps {
    article: Article;
    onClose: () => void;
    onOpen: () => void;
}

export default function ArticleConfirmDialog({
    article,
    onClose,
    onOpen,
}: ArticleConfirmDialogProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

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

    return (
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
            style={{
                background: "hsl(var(--background-overlay) / 0.7)",
                backdropFilter: "blur(4px)",
            }}
        >
            <div
                ref={dialogRef}
                className="w-full max-w-sm bg-background-elevated border border-border rounded-2xl shadow-toast animate-slide-up overflow-hidden"
            >
                <div className="h-0.5 bg-accent w-full" />

                <div className="p-5">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground mb-1">
                                Open this article in a new page?
                            </p>
                            <p className="text-xs text-foreground-muted leading-relaxed line-clamp-2">
                                {article.title}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 bg-background-surface rounded-lg border border-border mb-5">
                        <svg className="w-3 h-3 text-foreground-subtle shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                        </svg>
                        <span className="text-xs text-foreground-subtle truncate">
                            {article.articleUrl.replace(/^https?:\/\//, "")}
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 h-10 rounded-lg border border-border text-foreground-muted text-sm font-medium hover:text-foreground hover:border-border/80 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onOpen}
                            className="flex-1 h-10 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 hover:shadow-accent-glow transition-all"
                        >
                            Open →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
