"use client";

import { ReactNode } from "react";
import { NewsHeader } from "@/components/organisms";

interface NewsTemplateProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedFilters: string[];
  toggleFilter: (category: string) => void;
  categories: string[];
  isHeaderCollapsed: boolean;
  setIsHeaderCollapsed: (value: boolean) => void;
  children: ReactNode;
}

export default function NewsTemplate({
  searchQuery,
  setSearchQuery,
  selectedFilters,
  toggleFilter,
  categories,
  isHeaderCollapsed,
  setIsHeaderCollapsed,
  children,
}: NewsTemplateProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1F1F1F" }}>
      <NewsHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedFilters={selectedFilters}
        toggleFilter={toggleFilter}
        categories={categories}
        isHeaderCollapsed={isHeaderCollapsed}
        setIsHeaderCollapsed={setIsHeaderCollapsed}
      />

      {/* spacer for fixed header */}
      <div
        style={{
          height: isHeaderCollapsed ? "140px" : "480px",
          transition: "height 0.7s ease-in-out",
        }}
      />

      <main className="px-16 py-16">
        <div className="max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
