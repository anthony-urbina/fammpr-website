import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles, formatDate } from "@/lib/news";

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

  return (
    <div style={{ background: "var(--color-bg)" }}>
      {/* Article header */}
      <div
        className="relative pt-32 pb-12 overflow-hidden"
        style={{ background: "var(--color-surface)" }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "var(--color-pr-red)" }}
        />
        <div
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs text-fg-muted hover:text-fg transition-colors uppercase tracking-widest font-display mb-8"
            style={{ fontWeight: 600, letterSpacing: "0.12em" }}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16L3 12m0 0l4-4m-4 4h18"
              />
            </svg>
            All News
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs uppercase tracking-widest font-display text-pr-red"
              style={{ fontWeight: 700, letterSpacing: "0.15em" }}
            >
              {article.category}
            </span>
            <span style={{ color: "var(--color-border)" }}>·</span>
            <span className="text-xs text-fg-muted">
              {formatDate(article.date)}
            </span>
            {article.author && (
              <>
                <span style={{ color: "var(--color-border)" }}>·</span>
                <span className="text-xs text-fg-muted">
                  By {article.author}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-tight text-fg mb-6"
            style={{ fontWeight: 900 }}
          >
            {article.title}
          </h1>

          {/* Excerpt / lead */}
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#7A93B5" }}
          >
            {article.excerpt}
          </p>

          <div
            className="mt-8 w-16 h-0.5"
            style={{ background: "var(--color-pr-red)" }}
          />
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose-article max-w-2xl">
          <MDXRemote source={article.content} />
        </article>

        {/* Footer CTA */}
        <div
          className="mt-16 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{
            background: "var(--color-surface)",
            borderTop: "3px solid var(--color-pr-red)",
          }}
        >
          <div>
            <p
              className="font-display text-lg uppercase text-fg mb-1"
              style={{ fontWeight: 800 }}
            >
              Ready to get involved?
            </p>
            <p className="text-sm text-fg-muted">
              Support Team Puerto Rico or learn about competing under FAMMPR.
            </p>
          </div>
          <Link
            href="/sponsors"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm uppercase tracking-widest font-display text-white hover:brightness-110 transition-all"
            style={{
              background: "var(--color-pr-red)",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            Support the Team →
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors uppercase tracking-widest font-display"
            style={{ fontWeight: 600 }}
          >
            ← All News
          </Link>
        </div>
      </div>
    </div>
  );
}
