"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getUser, logout } from "@/lib/appState";

interface NavbarProps {
    searchQuery: string;
    onSearch: (q: string) => void;
}

export default function Navbar({ searchQuery, onSearch }: NavbarProps) {
    const router = useRouter();
    const user = getUser();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border">
            <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center gap-4">
                {/* Logo */}
                <button
                    onClick={() => router.push("/feed")}
                    className="flex items-center gap-2 shrink-0 mr-2"
                >
                    <Image
                        src="/assets/ai-pulse-logo.png"
                        alt="AI Pulse"
                        width={28}
                        height={28}
                        className="object-contain"
                    />
                    <span className="font-display font-semibold text-base tracking-tight hidden sm:block">
                        AI <span className="text-accent">Pulse</span>
                    </span>
                </button>

                {/* Search bar */}
                <div className="flex-1 max-w-md relative">
                    <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-subtle"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="8" strokeWidth="2" />
                        <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                    <input
                        type="text"
                        placeholder="Search topics, sources…"
                        value={searchQuery}
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full h-9 pl-9 pr-4 bg-background-elevated border border-border rounded-lg text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 transition-colors"
                    />
                </div>

                <div className="flex-1" />

                {/* Profile */}
                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="w-9 h-9 rounded-full bg-accent text-accent-foreground font-semibold text-sm flex items-center justify-center hover:brightness-110 transition-all"
                        aria-label="Profile menu"
                    >
                        {user?.avatar ?? "?"}
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 top-11 w-52 bg-background-elevated border border-border rounded-xl shadow-card py-1 animate-fade-in z-50">
                            <div className="px-4 py-3 border-b border-border">
                                <p className="text-sm font-medium text-foreground truncate">{user?.name}</p>
                                <p className="text-xs text-foreground-subtle truncate">{user?.email}</p>
                            </div>

                            <button
                                onClick={() => {
                                    setMenuOpen(false);
                                    router.push("/preferences");
                                }}
                                className="w-full px-4 py-2.5 text-left text-sm text-foreground-muted hover:text-foreground hover:bg-background-surface transition-colors"
                            >
                                ⚙ Preferences
                            </button>

                            <button
                                onClick={handleLogout}
                                className="w-full px-4 py-2.5 text-left text-sm text-foreground-muted hover:text-foreground hover:bg-background-surface transition-colors"
                            >
                                → Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
