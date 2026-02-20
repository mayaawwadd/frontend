interface PreferencesTemplateProps {
  children: React.ReactNode;
}

export default function PreferencesTemplate({ children }: PreferencesTemplateProps) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
