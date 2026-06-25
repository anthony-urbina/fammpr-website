"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

interface Props {
  category: string;
  date: string;
  author?: string;
  title: string;
  excerpt: string;
}

export function ArticleHeader({ category, date, author, title, excerpt }: Props) {
  const { tr } = useLang();
  const a = tr.article;

  return (
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
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs text-fg-muted hover:text-fg transition-colors uppercase tracking-widest font-display mb-8"
          style={{ fontWeight: 600, letterSpacing: "0.12em" }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16L3 12m0 0l4-4m-4 4h18" />
          </svg>
          {a.back}
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="text-xs uppercase tracking-widest font-display text-pr-red"
            style={{ fontWeight: 700, letterSpacing: "0.15em" }}
          >
            {category}
          </span>
          <span style={{ color: "var(--color-border)" }}>·</span>
          <span className="text-xs text-fg-muted">{date}</span>
          {author && (
            <>
              <span style={{ color: "var(--color-border)" }}>·</span>
              <span className="text-xs text-fg-muted">{a.by} {author}</span>
            </>
          )}
        </div>

        <h1
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-tight text-fg mb-6"
          style={{ fontWeight: 900 }}
        >
          {title}
        </h1>

        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#7A93B5" }}>
          {excerpt}
        </p>

        <div className="mt-8 w-16 h-0.5" style={{ background: "var(--color-pr-red)" }} />
      </div>
    </div>
  );
}

export function ArticleFooter() {
  const { tr } = useLang();
  const a = tr.article;

  return (
    <>
      <div
        className="mt-16 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{
          background: "var(--color-surface)",
          borderTop: "3px solid var(--color-pr-red)",
        }}
      >
        <div>
          <p className="font-display text-lg uppercase text-fg mb-1" style={{ fontWeight: 800 }}>
            {a.cta_heading}
          </p>
          <p className="text-sm text-fg-muted">{a.cta_sub}</p>
        </div>
        <Link
          href="/sponsors"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm uppercase tracking-widest font-display text-white hover:brightness-110 transition-all"
          style={{ background: "var(--color-pr-red)", fontWeight: 700, letterSpacing: "0.1em" }}
        >
          {a.cta_btn}
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors uppercase tracking-widest font-display"
          style={{ fontWeight: 600 }}
        >
          ← {a.back}
        </Link>
      </div>
    </>
  );
}
