"use client";

import NewsCard from "./NewsCard";

interface NewsGridProps {
  articles: {
    id: string;
    category: string;
    headline: string;
    summary: string;
    source: string;
    publishDate: string;
    imageUrl: string;
  }[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}