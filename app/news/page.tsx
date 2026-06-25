import { getAllArticles } from "@/lib/news";
import NewsContent from "@/components/NewsContent";

export default function NewsPage() {
  const articles = getAllArticles();
  return <NewsContent articles={articles} />;
}
