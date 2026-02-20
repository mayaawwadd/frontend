"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loginAsGuest, loginAsSSO } from "@/lib/appState";
import SSOIcon from "@/components/atoms/SSOIcon";
import LoginTemplate from "@/components/templates/LoginTemplate";


export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSSO = () => {
        setLoading(true);
        setTimeout(() => {
            const user = loginAsSSO();
            setLoading(false);
            router.push(user.preferencesSet ? "/feed" : "/preferences");
        }, 1200);
    };

    const handleGuest = () => {
        loginAsGuest();
        router.push("/feed");
    };

    return (
        <LoginTemplate>
            {/* Top bar */}
            <header className="px-8 py-5 flex items-center">
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/assets/ai-pulse-logo.png"
                        alt="AI Pulse"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                    <span className="font-display font-semibold text-lg tracking-tight">
                        AI <span className="text-accent">Pulse</span>
                    </span>
                </div>
            </header>

            {/* Centered card */}
            <main className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md animate-slide-up">
                    <div className="w-10 h-0.5 bg-accent rounded-full mb-8" />

                    <h1 className="font-display text-3xl font-bold leading-tight mb-2">
                        Welcome to AI Pulse
                    </h1>
                    <p className="text-foreground-muted text-base mb-10 leading-relaxed">
                        Your curated AI intelligence feed, built for professional services.
                    </p>

                    <div className="bg-background-elevated border border-border rounded-xl p-8 shadow-card">
                        <p className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle mb-6">
                            Sign in to continue
                        </p>

                        <button
                            onClick={handleSSO}
                            disabled={loading}
                            className="w-full h-12 bg-accent text-accent-foreground font-semibold rounded-lg flex items-center justify-center gap-3 transition-all duration-200 hover:brightness-110 hover:shadow-accent-glow disabled:opacity-70 disabled:cursor-not-allowed mb-4"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8H4z"
                                        />
                                    </svg>
                                    Authenticating…
                                </span>
                            ) : (
                                <>
                                    <SSOIcon />
                                    Sign in with Company SSO
                                </>
                            )}
                        </button>

                        <div className="flex items-center gap-3 my-5">
                            <div className="flex-1 h-px bg-border" />
                            <span className="text-xs text-foreground-subtle">or</span>
                            <div className="flex-1 h-px bg-border" />
                        </div>

                        <button
                            onClick={handleGuest}
                            className="w-full h-11 bg-transparent border border-border text-foreground-muted hover:border-accent/50 hover:text-foreground rounded-lg font-medium text-sm transition-all duration-200"
                        >
                            Continue as Guest (Preview)
                        </button>
                    </div>

                    <p className="mt-6 text-xs text-foreground-subtle text-center leading-relaxed">
                        By signing in, you agree to the internal usage policies.
                        <br />
                        Your data stays within the firm's secure environment.
                    </p>
                </div>
            </main>

            <div className="pb-8 text-center">
                <p className="text-xs text-foreground-subtle">© 2026 AI Pulse — Internal Use Only</p>
            </div>
        </LoginTemplate>
    );
}
