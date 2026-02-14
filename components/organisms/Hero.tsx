import Link from "next/link";
import { Badge, Button, Text } from "@/components/atoms";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-[64px] py-[110px] flex-1">
      <div className="max-w-[1200px] w-full">
        {/* Badge */}
        <div className="mb-6">
          <Badge variant="outline" size="md">
            Enterprise Intelligence
          </Badge>
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
        <Text variant="subheading" color="secondary" className="mb-12 md:mb-16 max-w-[700px]">
          Curated AI intelligence for enterprise decision-makers. Stay informed
          with structured insights from across the industry.
        </Text>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/news">
            <Button variant="primary" size="lg">
              Access Intelligence Feed
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
