import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles, formatDate } from "@/lib/news";
import { ArticleHeader, ArticleFooter } from "@/components/ArticleChrome";
import ArticleBody from "@/components/ArticleBody";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Pre-render both language MDX bodies on the server
  const bodyEn = <MDXRemote source={article.content} />;
  const bodyEs = article.contentEs
    ? <MDXRemote source={article.contentEs} />
    : null;

  return (
    <div style={{ background: "var(--color-bg)" }}>
      <ArticleHeader
        category={article.category}
        categoryEs={article.categoryEs}
        date={formatDate(article.date)}
        author={article.author}
        title={article.title}
        titleEs={article.titleEs}
        excerpt={article.excerpt}
        excerptEs={article.excerptEs}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose-article max-w-2xl">
          <ArticleBody bodyEn={bodyEn} bodyEs={bodyEs} />
        </article>
        <ArticleFooter />
      </div>
    </div>
  );
}
