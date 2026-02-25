"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import EYLogo from "@/components/atoms/EYLogo";

export default function MarketingNavbar() {
    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
            <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Left: EY | AI Pulse */}
                <div className="flex items-center">
                    <div className="flex items-center leading-none">
                        <EYLogo width={58} className="block h-7 w-auto" />
                    </div>

                    <div className="mx-4 h-8 w-px bg-[hsl(var(--foreground-subtle)/0.35)]" />

                    <div className="flex items-center gap-2.5 leading-none">
                        <Image
                            src="/assets/ai-pulse-logo.png"
                            alt="AI Pulse"
                            width={28}
                            height={28}
                            className="block object-contain"
                        />
                        <span className="font-display font-semibold text-base tracking-tight">
                            AI <span className="text-accent">Pulse</span>
                        </span>
                    </div>
                </div>

                {/* Right: links + CTA */}
                <div className="flex items-center gap-6">
                    <a
                        href="#features"
                        className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
                    >
                        Features
                    </a>
                    <a
                        href="#how-it-works"
                        className="text-sm text-foreground-muted hover:text-foreground transition-colors hidden sm:block"
                    >
                        How it works
                    </a>
                    <button
                        onClick={() => router.push("/login")}
                        className="px-4 py-2 text-sm cursor-pointer font-semibold bg-accent text-accent-foreground rounded-lg hover:brightness-110 transition-all hover:shadow-accent-glow"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </nav>
    );
}