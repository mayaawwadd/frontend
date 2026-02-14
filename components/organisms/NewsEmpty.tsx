"use client";

import { Text } from "@/components/atoms";

export default function NewsEmpty() {
  return (
    <div className="text-center py-32">
      <Text variant="subheading" color="tertiary">
        No articles found matching your criteria
      </Text>
    </div>
  );
}
