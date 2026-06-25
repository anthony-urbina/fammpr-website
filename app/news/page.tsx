import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, formatDate } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and announcements from FAMMPR.",
};

export default function NewsPage() {
  const articles = getAllArticles();

  return (
    <div style={{ background: "var(--color-bg)" }}>
      {/* Page header */}
      <div
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "var(--color-surface)" }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "var(--color-pr-red)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-6 h-0.5"
              style={{ background: "var(--color-pr-red)" }}
            />
            <span
              className="font-display text-xs uppercase tracking-widest text-pr-red"
              style={{ fontWeight: 700, letterSpacing: "0.2em" }}
            >
              FAMMPR
            </span>
          </div>
          <h1
            className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-none text-fg"
            style={{ fontWeight: 900 }}
          >
            News
          </h1>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {articles.length === 0 ? (
          <p className="text-fg-muted text-center py-24">
            No articles yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-px">
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-6 py-8 border-b border-border hover:bg-surface transition-colors px-4 -mx-4"
              >
                {/* Index number */}
                <span
                  className="font-display text-4xl leading-none text-border group-hover:text-pr-red transition-colors hidden sm:block pt-1 w-16 shrink-0 text-right"
                  style={{ fontWeight: 900 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs uppercase tracking-widest font-display text-pr-red"
                      style={{ fontWeight: 700, letterSpacing: "0.15em" }}
                    >
                      {article.category}
                    </span>
                    <span className="text-border">·</span>
                    <span className="text-xs text-fg-muted">
                      {formatDate(article.date)}
                    </span>
                    {article.author && (
                      <>
                        <span className="text-border">·</span>
                        <span className="text-xs text-fg-muted">
                          {article.author}
                        </span>
                      </>
                    )}
                  </div>
                  <h2
                    className="font-display text-[clamp(1.4rem,3vw,2rem)] uppercase leading-tight text-fg mb-2 group-hover:text-pr-red transition-colors"
                    style={{ fontWeight: 800 }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-sm text-fg-muted leading-relaxed max-w-2xl">
                    {article.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-end sm:pt-2 shrink-0">
                  <svg
                    className="w-5 h-5 text-border group-hover:text-pr-red group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
