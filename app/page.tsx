import { getAllArticles } from "@/lib/news";
import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 2);
  return <HomeContent articles={articles} />;
}
