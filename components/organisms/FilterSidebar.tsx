"use client";

import { useState } from "react";
import { TOPICS } from "@/data/mockArticles";

interface FilterSidebarProps {
    selectedTopics: string[];
    onTopicChange: (topics: string[]) => void;
    onReset: () => void;
    fullWidth?: boolean;
}

export default function FilterSidebar({
    selectedTopics,
    onTopicChange,
    onReset,
    fullWidth = false,
}: FilterSidebarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleItem = (item: string, list: string[], setList: (v: string[]) => void) => {
        setList(list.includes(item) ? list.filter((v) => v !== item) : [...list, item]);
    };

    const hasFilters = selectedTopics.length > 0;

    return (
        <aside className={fullWidth ? "w-full" : "w-56 shrink-0"}>
            {/* Mobile toggle (hide this when used as fullWidth overlay, because FeedPage already controls it) */}
            {!fullWidth && (
                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    className="lg:hidden mb-3 flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 4h18M6 8h12M9 12h6M12 16h0"
                        />
                    </svg>
                    {mobileOpen ? "Hide Filters" : "Show Filters"}
                </button>
            )}

            <div className={`${fullWidth ? "block" : mobileOpen ? "block" : "hidden"} lg:block space-y-6`}>
                {/* Header */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
                        Filters
                    </span>
                    {hasFilters && (
                        <button onClick={onReset} className="text-xs text-accent hover:underline">
                            Reset all
                        </button>
                    )}
                </div>

                <FilterGroup
                    title="Topics"
                    items={TOPICS}
                    selected={selectedTopics}
                    onToggle={(item) => toggleItem(item, selectedTopics, onTopicChange)}
                />
            </div>
        </aside>
    );
}

function FilterGroup({
    title,
    items,
    selected,
    onToggle,
}: {
    title: string;
    items: string[];
    selected: string[];
    onToggle: (item: string) => void;
}) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <button
                onClick={() => setCollapsed((v) => !v)}
                className="flex items-center justify-between w-full cursor-pointer text-xs font-semibold uppercase tracking-widest text-foreground-subtle mb-2 hover:text-foreground-muted transition-colors"
            >
                <span>{title}</span>
                <span>{collapsed ? "+" : "−"}</span>
            </button>

            {!collapsed && (
                <div className="space-y-0.5">
                    {items.map((item) => {
                        const isSelected = selected.includes(item);
                        return (
                            <button
                                key={item}
                                onClick={() => onToggle(item)}
                                className={`flex items-center cursor-pointer gap-2.5 w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors ${isSelected
                                    ? "text-accent bg-accent/10"
                                    : "text-foreground-muted hover:text-foreground hover:bg-background-surface"
                                    }`}
                            >
                                <span
                                    className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-all ${isSelected ? "bg-accent border-accent" : "border-border"
                                        }`}
                                >
                                    {isSelected && (
                                        <svg viewBox="0 0 10 8" fill="none" className="w-2 h-2">
                                            <path
                                                d="M1 4l2.5 2.5L9 1"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </span>
                                <span className="truncate text-xs">{item}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}