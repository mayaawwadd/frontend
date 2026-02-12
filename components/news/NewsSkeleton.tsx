"use client";

export default function NewsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
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
            <div
              className="mb-3 animate-heartbeat"
              style={{
                height: "50px",
                backgroundColor: "rgba(255, 230, 0, 0.15)",
                borderRadius: "4px",
              }}
            />

            {/* Summary Skeleton */}
            <div className="mb-4 space-y-2">
              <div
                className="animate-heartbeat"
                style={{
                  height: "16px",
                  width: "100%",
                  backgroundColor: "rgba(255, 230, 0, 0.12)",
                  borderRadius: "3px",
                  animationDelay: "0.2s",
                }}
              />
              <div
                className="animate-heartbeat"
                style={{
                  height: "16px",
                  width: "95%",
                  backgroundColor: "rgba(255, 230, 0, 0.12)",
                  borderRadius: "3px",
                  animationDelay: "0.3s",
                }}
              />
              <div
                className="animate-heartbeat"
                style={{
                  height: "16px",
                  width: "80%",
                  backgroundColor: "rgba(255, 230, 0, 0.12)",
                  borderRadius: "3px",
                  animationDelay: "0.4s",
                }}
              />
            </div>

            {/* Footer Skeleton */}
            <div className="flex items-center justify-between">
              <div
                className="animate-heartbeat"
                style={{
                  height: "12px",
                  width: "120px",
                  backgroundColor: "rgba(255, 230, 0, 0.1)",
                  borderRadius: "3px",
                  animationDelay: "0.5s",
                }}
              />
              <div
                className="animate-heartbeat"
                style={{
                  height: "12px",
                  width: "100px",
                  backgroundColor: "rgba(255, 230, 0, 0.1)",
                  borderRadius: "3px",
                  animationDelay: "0.6s",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}