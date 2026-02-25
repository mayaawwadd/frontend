"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import FeatureCard from "@/components/molecules/FeatureCard";
import LandingTemplate from "@/components/templates/LandingTemplate";
import MarketingNavbar from "@/components/organisms/MarketingNavbar";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.314-2.686 6-6 6a6 6 0 116-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "Fast Search",
    desc: "Search across titles, summaries, sources, and topics to find the AI updates you need in seconds.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h18M6 8h12M9 12h6M6 16h12M3 20h18" />
      </svg>
    ),
    title: "Practical Filters",
    desc: "Filter by topic, source, and region—so your feed stays focused and relevant to your work.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 3h7v7m0-7L10 14" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
      </svg>
    ),
    title: "Open Source Links Safely",
    desc: "Preview the source URL on hover, confirm before opening, then jump to the original article to read more.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Clean, Minimal UI",
    desc: "A calm, distraction-free layout designed for professional services teams—no clutter, no noise.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11V7m0 4l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Always Up-To-Date Feed",
    desc: "A single place to check the latest AI intelligence—quick to scan, easy to follow, and ready for daily use.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0v4" />
      </svg>
    ),
    title: "Company SSO Login",
    desc: "Sign in securely using your firm credentials — no separate accounts, passwords, or onboarding required.",
  },
];

const topics = [
  "AI Governance",
  "GenAI",
  "AI Security",
  "AI Strategy",
  "LLMs",
  "AI in Audit",
  "AI in Consulting",
  "AI Regulation",
  "MLOps",
  "Data & Analytics",
];

const steps = [
  { num: "01", title: "Sign in with SSO", desc: "Authenticate with your firm credentials — no new account required." },
  { num: "02", title: "Set your preferences", desc: "Pick your topics, sources, and regions. Takes under 60 seconds." },
  { num: "03", title: "Read what matters", desc: "A personalised AI intelligence feed, updated daily." },
];

const stats = [
  { value: "12+", label: "Topic verticals" },
  { value: "4", label: "Source categories" },
  { value: "4", label: "Global regions" },
  { value: "Daily", label: "Update cadence" },
];

export default function LandingPage() {
  const router = useRouter();

  return (
    <LandingTemplate>
      {/* ── NAV ── */}
      <MarketingNavbar />

      {/* ── HERO ── */}
      <section className="relative pt-14 min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-30">
          <Image src="/assets/hero-bg.png" alt="" fill className="object-cover object-center" priority />
        </div>

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">Internal Intelligence Platform</span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              The AI signal,
              <br />
              <span className="text-accent">without the noise.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-foreground-muted leading-relaxed max-w-xl mb-10 animate-slide-up" style={{ animationDelay: "200ms" }}>
              AI Pulse delivers curated, expert-vetted AI intelligence to professional services teams — personalised by topic, region, and role. Stay
              informed, stay ahead.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <button
                onClick={() => router.push("/login")}
                className="px-7 py-3.5 bg-accent cursor-pointer text-accent-foreground font-semibold rounded-lg hover:brightness-110 hover:shadow-accent-glow transition-all text-sm"
              >
                Sign in with your EY account
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs text-foreground-subtle tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, hsl(var(--foreground-subtle)), transparent)" }} />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-border bg-background-elevated">
        <div className="max-w-screen-xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold text-accent mb-1">{s.value}</div>
                <div className="text-xs text-foreground-subtle uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS MARQUEE ── */}
      <section className="py-12 overflow-hidden border-b border-border/40">
        <div className="flex items-center gap-3 marquee-track" style={{ width: "max-content" }}>
          {[...topics, ...topics, ...topics].map((t, i) => (
            <span
              key={i}
              className="shrink-0 px-4 py-2 rounded-full border border-border text-xs text-foreground-muted bg-background-elevated"
            >
              {t}
            </span>
          ))}
        </div>
      </section>


      {/* ── FEATURES ── */}
      <section id="features" className="py-28 max-w-screen-xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <div className="w-8 h-0.5 bg-accent rounded-full mb-5" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">Built for the pace of professional services</h2>
          <p className="text-foreground-muted text-base leading-relaxed">
            No generic news aggregator. AI Pulse is designed for the information velocity, compliance sensitivity, and strategic focus of Big Four
            environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-28 bg-background-elevated border-y border-border">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="w-8 h-0.5 bg-accent rounded-full mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Up and running in 60 seconds</h2>
            <p className="text-foreground-muted max-w-md mx-auto text-sm leading-relaxed">
              No onboarding calls, no IT tickets. Sign in, set your preferences, start reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+1.5rem)] w-full h-px border-t border-dashed border-border z-0" />
                )}
                <div className="relative z-10 w-10 h-10 rounded-full border border-accent/40 bg-accent/5 flex items-center justify-center mb-4">
                  <span className="font-display text-xs font-bold text-accent">{step.num}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-32 max-w-screen-xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden border border-accent/20 bg-background-elevated text-center px-8 py-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-accent rounded-b-full opacity-60 blur-sm" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5">Ready to start?</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-5 leading-tight">
              Your AI intelligence feed
              <br />
              <span className="text-accent">awaits.</span>
            </h2>
            <p className="text-foreground-muted text-base mb-10 max-w-md mx-auto leading-relaxed">
              Join your colleagues on AI Pulse and stop missing the developments that matter to your practice.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                onClick={() => router.push("/login")}
                className="px-8 py-3.5 cursor-pointer bg-accent text-accent-foreground font-semibold rounded-lg hover:brightness-110 hover:shadow-accent-glow transition-all"
              >
                Sign in with your EY account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-10">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/assets/ai-pulse-logo.png"
              alt="AI Pulse"
              width={20}
              height={20}
              className="object-contain opacity-60"
            />
            <span className="text-sm text-foreground-subtle font-medium">AI Pulse</span>
          </div>
          <p className="text-xs text-foreground-subtle">© 2026 AI Pulse — Internal Use Only · Confidential</p>
          <div className="flex items-center gap-5">
            <a href="#features" className="text-xs text-foreground-subtle hover:text-foreground-muted transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-xs text-foreground-subtle hover:text-foreground-muted transition-colors">
              How it works
            </a>
            <button onClick={() => router.push("/login")} className="text-xs text-accent hover:underline">
              Sign in
            </button>
          </div>
        </div>
      </footer>
    </LandingTemplate>
  );
}
