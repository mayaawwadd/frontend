"use client";

import { SkeletonBox } from "@/components/atoms";

interface SkeletonCardProps {
  index?: number;
}

export default function SkeletonCard({ index = 0 }: SkeletonCardProps) {
  const baseDelay = index * 0.1;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#2A2A2A",
        borderRadius: "6px",
        border: "1px solid #3A3A3A",
        height: "480px",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 p-8"
        style={{ height: "55%" }}
      >
        {/* Title Skeleton */}
        <SkeletonBox
          height="50px"
          delay={`${baseDelay}s`}
          className="mb-3"
        />

        {/* Summary Skeleton */}
        <div className="mb-4 space-y-2">
          <SkeletonBox width="100%" delay={`${baseDelay + 0.1}s`} />
          <SkeletonBox width="95%" delay={`${baseDelay + 0.2}s`} />
          <SkeletonBox width="80%" delay={`${baseDelay + 0.3}s`} />
        </div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between">
          <SkeletonBox width="120px" height="12px" delay={`${baseDelay + 0.4}s`} />
          <SkeletonBox width="100px" height="12px" delay={`${baseDelay + 0.5}s`} />
        </div>
      </div>
    </div>
  );
}
