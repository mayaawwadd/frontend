"use client";

import { useState, useMemo, useEffect } from "react";
import { mockNewsArticles, categories } from "@/lib/news";

import { NewsTemplate } from "@/components/templates";
import { NewsGrid, NewsSkeleton, NewsEmpty } from "@/components/organisms";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);

  // simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // filter toggle logic
  const toggleFilter = (category: string) => {
    if (category === "All") {
      setSelectedFilters(["All"]);
      return;
    }

    const next = selectedFilters.includes(category)
      ? selectedFilters.filter((c) => c !== category)
      : [...selectedFilters.filter((c) => c !== "All"), category];

    setSelectedFilters(next.length === 0 ? ["All"] : next);
  };

  // filtering logic
  const filteredArticles = useMemo(() => {
    let results = mockNewsArticles;

    if (!selectedFilters.includes("All")) {
      results = results.filter((a) => selectedFilters.includes(a.category));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (a) =>
          a.headline.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.source.toLowerCase().includes(q),
      );
    }

    return results;
  }, [selectedFilters, searchQuery]);

  return (
    <NewsTemplate
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      selectedFilters={selectedFilters}
      toggleFilter={toggleFilter}
      categories={categories}
      isHeaderCollapsed={isHeaderCollapsed}
      setIsHeaderCollapsed={setIsHeaderCollapsed}
    >
      {isLoading ? (
        <NewsSkeleton />
      ) : filteredArticles.length > 0 ? (
        <NewsGrid articles={filteredArticles} />
      ) : (
        <NewsEmpty />
      )}
    </NewsTemplate>
  );
}
