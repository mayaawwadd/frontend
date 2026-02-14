import { Logo } from "@/components/atoms";

export default function Header() {
  return (
    <header
      className="px-8 md:px-16 py-6"
      style={{ borderBottom: "1px solid #2A2A2A" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <Logo size="sm" />
      </div>
    </header>
  );
}
