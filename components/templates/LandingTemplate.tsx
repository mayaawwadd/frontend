interface LandingTemplateProps {
  children: React.ReactNode;
}

export default function LandingTemplate({ children }: LandingTemplateProps) {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">{children}</div>;
}
