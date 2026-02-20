interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index: number;
}

export default function FeatureCard({ icon, title, desc, index }: FeatureCardProps) {
  return (
    <div
      className="group p-6 rounded-xl border border-border bg-background-elevated hover:border-accent/30 hover:bg-background-surface transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/15 transition-colors">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-sm text-foreground mb-2">{title}</h3>
      <p className="text-xs text-foreground-muted leading-relaxed">{desc}</p>
    </div>
  );
}
