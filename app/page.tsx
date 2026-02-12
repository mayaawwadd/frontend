import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Pulse",
  description: "Enterprise Intelligence Platform",
};

export default function HomePage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#1F1F1F" }}
    >
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}