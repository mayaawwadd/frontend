"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

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
  // collapse logic (moves from page.tsx)
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
            <div className="flex items-center gap-4">
              <div
                className="rounded-full animate-heartbeat transition-all duration-700 ease-in-out"
                style={{
                  width: isHeaderCollapsed ? "12px" : "20px",
                  height: isHeaderCollapsed ? "12px" : "20px",
                  backgroundColor: "#FFE600",
                }}
              />

              <h1
                className="font-bold tracking-tight hover:opacity-70 transition-all duration-700 ease-in-out cursor-pointer"
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
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  size={16}
                  style={{ color: "#666666" }}
                />

                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 pr-4 py-2.5 focus:outline-none transition-all"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                    backgroundColor: "#2A2A2A",
                    border: "1px solid #3A3A3A",
                    borderRadius: "4px",
                    width: "240px",
                  }}
                />
              </div>

              {/* Compact Filter Chips */}
              <div className="flex gap-2">
                {categories.slice(0, 5).map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleFilter(category)}
                    className="px-3 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                      backgroundColor: selectedFilters.includes(category)
                        ? "rgba(255, 230, 0, 0.12)"
                        : "transparent",
                      color: selectedFilters.includes(category)
                        ? "#FFE600"
                        : "#888888",
                      border: selectedFilters.includes(category)
                        ? "1px solid #FFE600"
                        : "1px solid #444444",
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* EXPANDED SEARCH + FILTERS */}
        {!isHeaderCollapsed && (
          <div className="animate-fadeIn">
            <p
              className="font-light max-w-[700px] transition-all duration-700 ease-in-out"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#A0A0A0",
                lineHeight: "1.6",
                fontSize: "18px",
                marginTop: "24px",
                marginBottom: "48px",
              }}
            >
              Curated AI intelligence for enterprise decision-makers
            </p>

            {/* search bar */}
            <div className="mb-8">
              <div className="relative max-w-[800px]">
                <Search
                  className="absolute left-5 top-1/2 transform -translate-y-1/2"
                  size={20}
                  style={{ color: "#666666" }}
                />
                <input
                  type="text"
                  placeholder="Search intelligence..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 focus:outline-none transition-all"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#FFFFFF",
                    backgroundColor: "#2A2A2A",
                    border: "1px solid #3A3A3A",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </div>

            {/* expanded filter chips */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleFilter(category)}
                  className="px-5 py-2.5 rounded-full transition-all duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    fontWeight: "500",
                    letterSpacing: "0.01em",
                    backgroundColor: selectedFilters.includes(category)
                      ? "rgba(255, 230, 0, 0.12)"
                      : "transparent",
                    color: selectedFilters.includes(category)
                      ? "#FFE600"
                      : "#888888",
                    border: selectedFilters.includes(category)
                      ? "1px solid #FFE600"
                      : "1px solid #444444",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}