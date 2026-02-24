interface LoginTemplateProps {
  children: React.ReactNode;
}

export default function LoginTemplate({ children }: LoginTemplateProps) {
  return <div className="min-h-screen bg-background flex flex-col">{children}</div>;
}
