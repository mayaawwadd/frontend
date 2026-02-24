"use client";

interface ToggleChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function ToggleChip({ label, selected, onClick }: ToggleChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-between w-full gap-3 px-3 py-2 rounded-lg border border-border bg-background-elevated hover:bg-background-surface transition-colors"
      aria-pressed={selected}
    >
      <span className="text-sm text-foreground-muted">{label}</span>

      {/* switch */}
      <span
        className={[
          "relative inline-flex items-center",
          "w-12 h-6 rounded-full",
          "transition-colors duration-200",
          selected ? "bg-accent" : "bg-[hsl(0_0%_80%)]",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 left-0.5",
            "w-5 h-5 rounded-full",
            "bg-white shadow-sm",
            "transition-transform duration-200",
            selected ? "translate-x-6" : "translate-x-0",
          ].join(" ")}
        />
      </span>
    </button>
  );
}