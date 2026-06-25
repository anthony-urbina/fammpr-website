import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "news");

export interface ArticleMeta {
  slug: string;
  title: string;
  titleEs?: string;
  date: string;
  excerpt: string;
  excerptEs?: string;
  category: string;
  categoryEs?: string;
  author?: string;
}

export interface Article extends ArticleMeta {
  content: string;
  contentEs?: string;
}

function ensureDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }
}

export function getAllArticles(): ArticleMeta[] {
  ensureDir();
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => (f.endsWith(".mdx") || f.endsWith(".md")) && !f.includes(".es."));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
      const { data } = matter(raw);

      // Try to read Spanish version for meta
      const esPath = path.join(CONTENT_DIR, `${slug}.es.mdx`);
      const esData = fs.existsSync(esPath)
        ? matter(fs.readFileSync(esPath, "utf-8")).data
        : null;

      return {
        slug,
        title: data.title ?? "Untitled",
        titleEs: esData?.title,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        excerptEs: esData?.excerpt,
        category: data.category ?? "News",
        categoryEs: esData?.category,
        author: data.author,
      } as ArticleMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  ensureDir();
  const candidates = [
    path.join(CONTENT_DIR, `${slug}.mdx`),
    path.join(CONTENT_DIR, `${slug}.md`),
  ];
  const filePath = candidates.find((p) => fs.existsSync(p));
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // Try Spanish version
  const esPath = path.join(CONTENT_DIR, `${slug}.es.mdx`);
  let contentEs: string | undefined;
  let esData: Record<string, unknown> | null = null;
  if (fs.existsSync(esPath)) {
    const esParsed = matter(fs.readFileSync(esPath, "utf-8"));
    contentEs = esParsed.content;
    esData = esParsed.data;
  }

  return {
    slug,
    title: data.title ?? "Untitled",
    titleEs: esData?.title as string | undefined,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    excerptEs: esData?.excerpt as string | undefined,
    category: data.category ?? "News",
    categoryEs: esData?.category as string | undefined,
    author: data.author,
    content,
    contentEs,
  };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
