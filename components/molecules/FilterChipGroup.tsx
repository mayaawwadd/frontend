"use client";

import FilterChip from "./FilterChip";

interface FilterChipGroupProps {
  categories: string[];
  selectedFilters: string[];
  onToggle: (category: string) => void;
  size?: "sm" | "md";
  limit?: number;
}

export default function FilterChipGroup({
  categories,
  selectedFilters,
  onToggle,
  size = "md",
  limit,
}: FilterChipGroupProps) {
  const displayCategories = limit ? categories.slice(0, limit) : categories;

  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {displayCategories.map((category) => (
        <FilterChip
          key={category}
          label={category}
          isActive={selectedFilters.includes(category)}
          onClick={() => onToggle(category)}
          size={size}
        />
      ))}
    </div>
  );
}
