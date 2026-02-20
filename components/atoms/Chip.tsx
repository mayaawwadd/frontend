interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function Chip({ label, selected, onClick }: ChipProps) {
  return (
    <button onClick={onClick} className={`chip ${selected ? "selected" : ""}`}>
      {selected && (
        <svg className="w-3 h-3 mr-1.5" viewBox="0 0 12 12" fill="currentColor">
          <path
            d="M10 3L5 8.5 2 5.5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      )}
      {label}
    </button>
  );
}
