"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TOPICS, SOURCES, FREQUENCIES, REGIONS } from "@/data/mockArticles";
import { setPreferences } from "@/lib/appState";
import SectionLabel from "@/components/atoms/SectionLabel";
import Chip from "@/components/atoms/Chip";
import ToggleChip from "@/components/atoms/ToggleChip";
import PreferencesTemplate from "@/components/templates/PreferencesTemplate";

export default function PreferencesPage() {
    const router = useRouter();

    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [selectedSources, setSelectedSources] = useState<string[]>([]);
    const [frequency, setFrequency] = useState<string>("Daily");
    const [selectedRegions, setSelectedRegions] = useState<string[]>(["Global"]);

    const toggle = (value: string, list: string[], setList: (v: string[]) => void) => {
        setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
    };

    const toggleSingle = (value: string, current: string, setVal: (v: string) => void) => {
        if (current !== value) setVal(value);
    };

    const progress = useMemo(() => {
        return Math.round(
            (((selectedTopics.length > 0 ? 1 : 0) +
                (selectedSources.length > 0 ? 1 : 0) +
                (selectedRegions.length > 0 ? 1 : 0)) /
                3) *
            100
        );
    }, [selectedTopics.length, selectedSources.length, selectedRegions.length]);

    const handleSave = () => {
        setPreferences({
            topics: selectedTopics.length ? selectedTopics : TOPICS,
            sources: selectedSources.length ? selectedSources : SOURCES,
            frequency,
            regions: selectedRegions.length ? selectedRegions : ["Global"],
        });

        router.push("/feed");
    };

    const handleSkip = () => router.push("/feed");

    return (
        <PreferencesTemplate>
            {/* Header */}
            <header className="border-b border-border px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <Image src="/assets/ai-pulse-logo.png" alt="AI Pulse" width={28} height={28} className="object-contain" />
                    <span className="font-display font-semibold text-base tracking-tight">
                        AI <span className="text-accent">Pulse</span>
                    </span>
                </div>
                <button onClick={handleSkip} className="text-sm text-foreground-subtle hover:text-foreground transition-colors">
                    Skip for now →
                </button>
            </header>

            <main className="max-w-2xl mx-auto px-6 py-12 animate-slide-up">
                {/* Progress */}
                <div className="mb-2 flex justify-between items-center">
                    <p className="text-xs text-foreground-subtle uppercase tracking-widest font-semibold">
                        Personalise your feed
                    </p>
                    <span className="text-xs text-accent font-semibold">{progress}% done</span>
                </div>
                <div className="h-0.5 bg-border rounded-full mb-10 overflow-hidden">
                    <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>

                <h1 className="font-display text-2xl font-bold mb-1">What matters to you?</h1>
                <p className="text-foreground-muted text-sm mb-10">
                    Select your interests to personalise AI Pulse. You can always update these later.
                </p>

                {/* Topics */}
                <section className="mb-10">
                    <SectionLabel title="Topics" subtitle="Select all that apply" />
                    <div className="flex flex-wrap gap-2 mt-3">
                        {TOPICS.map((topic) => (
                            <Chip
                                key={topic}
                                label={topic}
                                selected={selectedTopics.includes(topic)}
                                onClick={() => toggle(topic, selectedTopics, setSelectedTopics)}
                            />
                        ))}
                    </div>
                </section>

                {/* Sources */}
                <section className="mb-10">
                    <SectionLabel title="Sources" subtitle="Where should we pull content from?" />
                    <div className="flex flex-wrap gap-2 mt-3">
                        {SOURCES.map((source) => (
                            <Chip
                                key={source}
                                label={source}
                                selected={selectedSources.includes(source)}
                                onClick={() => toggle(source, selectedSources, setSelectedSources)}
                            />
                        ))}
                    </div>
                </section>

                {/* Frequency */}
                <section className="mb-10">
                    <SectionLabel title="Digest Frequency" subtitle="How often do you want updates?" />
                    <div className="flex gap-2 mt-3 flex-wrap">
                        {FREQUENCIES.map((f) => (
                            <ToggleChip
                                key={f}
                                label={f}
                                selected={frequency === f}
                                onClick={() => toggleSingle(f, frequency, setFrequency)}
                            />
                        ))}
                    </div>
                </section>

                {/* Regions */}
                <section className="mb-12">
                    <SectionLabel title="Regions" subtitle="Focus on content relevant to your coverage area" />
                    <div className="flex flex-wrap gap-2 mt-3">
                        {REGIONS.map((region) => (
                            <Chip
                                key={region}
                                label={region}
                                selected={selectedRegions.includes(region)}
                                onClick={() => toggle(region, selectedRegions, setSelectedRegions)}
                            />
                        ))}
                    </div>
                </section>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleSave}
                        className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-200 hover:brightness-110 hover:shadow-accent-glow"
                    >
                        Save Preferences
                    </button>
                    <button onClick={handleSkip} className="px-6 py-3 text-foreground-muted text-sm hover:text-foreground transition-colors">
                        Skip for now
                    </button>
                </div>
            </main>
        </PreferencesTemplate>
    );
}
