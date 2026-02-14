import { Header, Hero, Footer } from "@/components/organisms";

export default function HomeTemplate() {
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
