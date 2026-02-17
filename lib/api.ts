import { NewsArticle } from "./news";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

// Backend article shape from CosmosDB
interface BackendArticle {
  id: string;
  title: string;
  url: string;
  summary: string;
  date: string;
  categories: string[];
  image_url: string;
  local_image_path: string;
  source: string;
  _ts?: number;
}

// Default placeholder image
const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800";

/**
 * Maps backend article to frontend NewsArticle format
 */
function mapArticle(backend: BackendArticle): NewsArticle {
  const categories = backend.categories?.length ? backend.categories : ["General"];
  return {
    id: backend.id,
    headline: backend.title || "Untitled Article",
    summary: backend.summary || "No summary available.",
    source: backend.source || "Unknown Source",
    publishDate: backend.date || new Date().toISOString().split("T")[0],
    category: categories[0],           // Primary category for display
    categories: categories,             // All categories for filtering
    imageUrl: backend.image_url || backend.local_image_path || PLACEHOLDER_IMAGE,
    url: backend.url || "#",
  };
}

/**
 * Fetch all news articles from the backend
 */
export async function fetchArticles(): Promise<NewsArticle[]> {
  const response = await fetch(`${API_URL}/news/`);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const data: BackendArticle[] = await response.json();
  return data.map(mapArticle);
}

/**
 * Fetch top N recent articles from the backend
 */
export async function fetchTopArticles(count: number): Promise<NewsArticle[]> {
  const response = await fetch(`${API_URL}/news/top/${count}`);
  if (!response.ok) {
    throw new Error("Failed to fetch top articles");
  }
  const data: BackendArticle[] = await response.json();
  return data.map(mapArticle);
}

/**
 * Fetch articles by category from the backend
 */
export async function fetchArticlesByCategory(category: string): Promise<NewsArticle[]> {
  const response = await fetch(`${API_URL}/news/${encodeURIComponent(category)}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch articles for category: ${category}`);
  }
  const data: BackendArticle[] = await response.json();
  return data.map(mapArticle);
}

/**
 * Fetch all available categories from the backend
 */
export async function fetchCategories(): Promise<string[]> {
  const response = await fetch(`${API_URL}/news/categories/all`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data.categories || [];
}
