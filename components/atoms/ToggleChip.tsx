interface ToggleChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function ToggleChip({ label, selected, onClick }: ToggleChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
        selected
          ? "bg-accent text-accent-foreground border-accent"
          : "bg-transparent text-foreground-muted border-border hover:border-accent/50"
      }`}
    >
      {label}
    </button>
  );
}
