import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-[64px] py-[110px] flex-1">
      <div className="max-w-[1200px] w-full">
        {/* Badge */}
        <div className="mb-6">
          <span
            className="inline-block px-4 py-2 rounded-full"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              backgroundColor: "rgba(255, 230, 0, 0.1)",
              color: "#FFE600",
              border: "1px solid rgba(255, 230, 0, 0.2)",
            }}
          >
            Enterprise Intelligence
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-5xl md:text-[80px] font-bold tracking-tight mb-8"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#FFFFFF",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
          }}
        >
          Intelligence for the{" "}
          <span style={{ color: "#FFE600" }}>AI era</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg md:text-[22px] mb-12 md:mb-16 max-w-[700px] font-light"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#A0A0A0",
            lineHeight: "1.7",
            letterSpacing: "-0.01em",
          }}
        >
          Curated AI intelligence for enterprise decision-makers. Stay informed
          with structured insights from across the industry.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/news">
            <button
              className="px-10 py-4 transition-all duration-300 hover:opacity-85"
              style={{
                fontFamily: "Inter, sans-serif",
                border: "1px solid #FFE600",
                backgroundColor: "#FFE600",
                color: "#1F1F1F",
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "0.01em",
                borderRadius: "4px",
              }}
            >
              Access Intelligence Feed
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}