"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Logo, Text } from "@/components/atoms";
import { SearchInput, FilterChipGroup } from "@/components/molecules";

interface NewsHeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedFilters: string[];
  toggleFilter: (category: string) => void;
  categories: string[];
  isHeaderCollapsed: boolean;
  setIsHeaderCollapsed: (value: boolean) => void;
}

export default function NewsHeader({
  searchQuery,
  setSearchQuery,
  selectedFilters,
  toggleFilter,
  categories,
  isHeaderCollapsed,
  setIsHeaderCollapsed,
}: NewsHeaderProps) {
  // collapse logic
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 100) setIsHeaderCollapsed(true);
      else if (y < 50) setIsHeaderCollapsed(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsHeaderCollapsed]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out"
      style={{
        backgroundColor: "#1F1F1F",
        borderBottom: "1px solid #353535",
      }}
    >
      <div
        className="max-w-[1600px] mx-auto px-16 transition-all duration-700 ease-in-out"
        style={{
          paddingTop: isHeaderCollapsed ? "20px" : "60px",
          paddingBottom: isHeaderCollapsed ? "20px" : "60px",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div
              className="flex items-center gap-4 hover:opacity-70 transition-all duration-700 ease-in-out cursor-pointer"
            >
              <div
                className="rounded-full animate-heartbeat transition-all duration-700 ease-in-out"
                style={{
                  width: isHeaderCollapsed ? "12px" : "20px",
                  height: isHeaderCollapsed ? "12px" : "20px",
                  backgroundColor: "#FFE600",
                }}
              />
              <h1
                className="font-bold tracking-tight transition-all duration-700 ease-in-out"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#FFFFFF",
                  fontSize: isHeaderCollapsed ? "20px" : "48px",
                  letterSpacing: "-0.02em",
                }}
              >
                AI <span style={{ color: "#FFE600" }}>Pulse</span>
              </h1>
            </div>
          </Link>

          {/* COLLAPSED SEARCH + FILTERS */}
          {isHeaderCollapsed && (
            <div className="flex items-center gap-4 animate-fadeIn">
              {/* Compact Search */}
              <div style={{ width: "240px" }}>
                <SearchInput
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search..."
                  size="sm"
                />
              </div>

              {/* Compact Filter Chips */}
              <FilterChipGroup
                categories={categories}
                selectedFilters={selectedFilters}
                onToggle={toggleFilter}
                size="sm"
                limit={5}
              />
            </div>
          )}
        </div>

        {/* EXPANDED SEARCH + FILTERS */}
        {!isHeaderCollapsed && (
          <div className="animate-fadeIn">
            <Text
              variant="subheading"
              color="secondary"
              className="max-w-[700px] transition-all duration-700 ease-in-out"
              style={{
                marginTop: "24px",
                marginBottom: "48px",
              }}
            >
              Curated AI intelligence for enterprise decision-makers
            </Text>

            {/* search bar */}
            <div className="mb-8 max-w-[800px]">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search intelligence..."
                size="lg"
              />
            </div>

            {/* expanded filter chips */}
            <FilterChipGroup
              categories={categories}
              selectedFilters={selectedFilters}
              onToggle={toggleFilter}
              size="md"
            />
          </div>
        )}
      </div>
    </header>
  );
}
