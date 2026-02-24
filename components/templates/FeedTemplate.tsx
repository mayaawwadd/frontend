interface FeedTemplateProps {
  children: React.ReactNode;
}

export default function FeedTemplate({ children }: FeedTemplateProps) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
