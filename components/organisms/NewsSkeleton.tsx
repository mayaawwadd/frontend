"use client";

import { SkeletonCard } from "@/components/molecules";

export default function NewsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <SkeletonCard key={i} index={i} />
      ))}
    </div>
  );
}
