interface SectionLabelProps {
  title: string;
  subtitle: string;
}

export default function SectionLabel({ title, subtitle }: SectionLabelProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <h2 className="font-semibold text-sm text-foreground">{title}</h2>
      </div>
      <p className="text-xs text-foreground-subtle mt-0.5 ml-3.5">{subtitle}</p>
    </div>
  );
}
