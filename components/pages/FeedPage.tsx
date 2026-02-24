"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";

import { getUser } from "@/lib/appState";
import { mockArticles, Article, TOPICS } from "@/data/mockArticles";

import Navbar from "@/components/organisms/Navbar";
import FilterSidebar from "@/components/organisms/FilterSidebar";
import ArticleCard, { ArticleCardSkeleton } from "@/components/organisms/ArticleCard";
import ArticlePreviewModal from "@/components/organisms/ArticlePreviewModal";
import FeedEmptyState from "@/components/molecules/FeedEmptyState";
import FeedTemplate from "@/components/templates/FeedTemplate";

export default function FeedPage() {
    const router = useRouter();

    const [userReady, setUserReady] = useState(false);
    const [user, setUser] = useState<ReturnType<typeof getUser>>(null);

    useEffect(() => {
        const u = getUser();
        setUser(u);
        setUserReady(true);
    }, []);

    useEffect(() => {
        if (!userReady) return;
        if (!user) router.replace("/");
    }, [userReady, user, router]);

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [selectedSources, setSelectedSources] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [confirmArticle, setConfirmArticle] = useState<Article | null>(null);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(t);
    }, []);

    const filteredArticles = useMemo(() => {
        return mockArticles.filter((a) => {
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                if (
                    !a.title.toLowerCase().includes(q) &&
                    !a.summary.toLowerCase().includes(q) &&
                    !a.category.toLowerCase().includes(q) &&
                    !a.source.toLowerCase().includes(q)
                ) {
                    return false;
                }
            }
            if (selectedTopics.length > 0 && !selectedTopics.includes(a.category)) return false;
            if (selectedSources.length > 0 && !selectedSources.includes(a.source)) return false;
            if (selectedRegions.length > 0 && !selectedRegions.includes(a.region)) return false;
            return true;
        });
    }, [searchQuery, selectedTopics, selectedSources, selectedRegions]);

    const handleReset = () => {
        setSelectedTopics([]);
        setSelectedSources([]);
        setSelectedRegions([]);
        setSearchQuery("");
    };

    const trendingTopics = TOPICS.slice(0, 6);
    const activeFilterCount =
        selectedTopics.length + selectedSources.length + selectedRegions.length;

    if (!userReady) return null;
    if (!user) return null;

    return (
        <FeedTemplate>
            <div className="min-h-screen bg-background">
                <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />

                <div className="max-w-screen-xl mx-auto px-6 py-8">
                    <div className="flex gap-8">
                        {/* ✅ LEFT sidebar — Desktop filters */}
                        <div className="hidden lg:flex flex-col shrink-0">
                            {sidebarOpen && (
                                <FilterSidebar
                                    selectedTopics={selectedTopics}
                                    selectedSources={selectedSources}
                                    selectedRegions={selectedRegions}
                                    onTopicChange={setSelectedTopics}
                                    onSourceChange={setSelectedSources}
                                    onRegionChange={setSelectedRegions}
                                    onReset={handleReset}
                                />
                            )}
                        </div>

                        {/* Main feed */}
                        <main className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h2 className="font-display font-semibold text-lg">
                                        {searchQuery ? `Results for "${searchQuery}"` : "Latest Intelligence"}
                                    </h2>
                                    <p className="text-xs text-foreground-subtle mt-0.5">
                                        {isLoading
                                            ? "Loading…"
                                            : `${filteredArticles.length} article${filteredArticles.length !== 1 ? "s" : ""}${activeFilterCount > 0
                                                ? ` · ${activeFilterCount} filter${activeFilterCount > 1 ? "s" : ""} active`
                                                : ""
                                            }`}
                                    </p>
                                </div>

                                {/* Filter toggle — mobile drawer / desktop sidebar */}
                                <button
                                    onClick={() => {
                                        if (window.innerWidth < 1024) {
                                            setMobileFiltersOpen((v) => !v);
                                        } else {
                                            setSidebarOpen((v) => !v);
                                        }
                                    }}
                                    className="p-2 rounded-lg hover:bg-background-surface border border-border text-foreground-muted hover:text-foreground transition-colors relative"
                                    aria-label={sidebarOpen || mobileFiltersOpen ? "Close filters" : "Open filters"}
                                >
                                    <SlidersHorizontal size={18} />
                                    {activeFilterCount > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                                            {activeFilterCount}
                                        </span>
                                    )}
                                </button>
                            </div>

                            {mobileFiltersOpen && (
                                <div className="lg:hidden">
                                    {/* overlay */}
                                    <div
                                        className="fixed inset-0 z-40"
                                        style={{ background: "hsl(var(--background-overlay) / 0.6)", backdropFilter: "blur(4px)" }}
                                        onClick={() => setMobileFiltersOpen(false)}
                                    />

                                    {/* ✅ full-width drawer */}
                                    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-background-elevated border-r border-border shadow-toast animate-slide-up">
                                        <div className="p-4">
                                            <FilterSidebar
                                                selectedTopics={selectedTopics}
                                                selectedSources={selectedSources}
                                                selectedRegions={selectedRegions}
                                                onTopicChange={setSelectedTopics}
                                                onSourceChange={setSelectedSources}
                                                onRegionChange={setSelectedRegions}
                                                onReset={handleReset}
                                                fullWidth
                                            />

                                            <button
                                                onClick={() => setMobileFiltersOpen(false)}
                                                className="mt-4 w-full py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
                                            >
                                                Apply filters
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Grid — hidden on mobile when filters are open */}
                            {!mobileFiltersOpen && (
                                <>
                                    {isLoading ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                                            {Array.from({ length: 6 }).map((_, i) => (
                                                <ArticleCardSkeleton key={i} />
                                            ))}
                                        </div>
                                    ) : filteredArticles.length === 0 ? (
                                        <FeedEmptyState
                                            hasFilters={activeFilterCount > 0 || !!searchQuery}
                                            onReset={handleReset}
                                        />
                                    ) : (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 animate-fade-in">
                                            {filteredArticles.map((article) => (
                                                <ArticleCard key={article.id} article={article} onOpen={setConfirmArticle} />
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </main>

                        {/* Trending sidebar */}
                        <aside className="hidden xl:block w-52 shrink-0">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-1 h-4 bg-accent rounded-full" />
                                    <span className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">
                                        Trending
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    {trendingTopics.map((topic, i) => (
                                        <button
                                            key={topic}
                                            onClick={() => setSelectedTopics([topic])}
                                            className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg bg-background-elevated hover:bg-background-surface border [border-color:hsl(var(--border))] transition-colors group hover-border-accent"
                                        >
                                            <span className="text-xs text-foreground-subtle w-4 shrink-0">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-xs text-foreground-muted group-hover:text-foreground transition-colors truncate">
                                                {topic}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

                {confirmArticle && (
                    <ArticlePreviewModal
                        article={confirmArticle}
                        onClose={() => setConfirmArticle(null)}
                        onViewSource={() => {
                            window.open(confirmArticle.articleUrl, "_blank", "noopener,noreferrer");
                            setConfirmArticle(null);
                        }}
                    />
                )}
            </div>
        </FeedTemplate>
    );
}