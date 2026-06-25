"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import type { ArticleMeta } from "@/lib/news";

interface Props {
  articles: ArticleMeta[];
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomeContent({ articles }: Props) {
  const { tr, lang } = useLang();
  const h = tr.home;

  return (
    <div className="overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        style={{ background: "var(--color-bg)" }}
      >
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
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-15"
          style={{ background: `linear-gradient(135deg, transparent 40%, var(--color-pr-blue) 40%)` }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "var(--color-pr-red)" }} />
        <div className="absolute right-12 top-32 w-16 h-16 opacity-10 pr-star" style={{ background: "var(--color-pr-red)" }} />
        <div className="absolute right-40 bottom-40 w-8 h-8 opacity-8 pr-star" style={{ background: "white" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-8 h-0.5" style={{ background: "var(--color-pr-red)" }} />
              <span className="font-display text-xs uppercase tracking-widest text-pr-red" style={{ fontWeight: 700, letterSpacing: "0.2em" }}>
                {h.eyebrow}
              </span>
            </div>

            <h1 className="font-display leading-none mb-8" style={{ fontWeight: 900 }}>
              <span
                className="block text-[clamp(5rem,14vw,11rem)] uppercase tracking-tight"
                style={{ color: "transparent", WebkitTextStroke: "2px rgba(240,242,245,0.15)" }}
              >
                TEAM
              </span>
              <span
                className="block text-[clamp(5rem,14vw,11rem)] uppercase tracking-tight animate-fade-up"
                style={{ color: "var(--color-pr-red)", lineHeight: 0.85, animationDelay: "0.2s" }}
              >
                PUERTO
              </span>
              <span
                className="block text-[clamp(5rem,14vw,11rem)] uppercase tracking-tight animate-fade-up"
                style={{ color: "var(--color-fg)", lineHeight: 0.85, animationDelay: "0.35s" }}
              >
                RICO
              </span>
            </h1>

            <p
              className="text-lg text-fg-muted max-w-xl leading-relaxed mb-10 animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              {h.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.65s", opacity: 0 }}>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display text-white transition-all hover:brightness-110 active:scale-95"
                style={{ background: "var(--color-pr-red)", fontWeight: 700, letterSpacing: "0.12em" }}
              >
                {h.cta_news}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display text-fg transition-all hover:bg-surface-2 active:scale-95"
                style={{ border: "1px solid var(--color-border)", fontWeight: 700, letterSpacing: "0.12em" }}
              >
                {h.cta_support}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 flex items-center gap-2 text-fg-muted">
          <div className="w-px h-12 animate-pulse" style={{ background: "var(--color-pr-red)" }} />
          <span className="font-display text-xs uppercase tracking-widest" style={{ fontWeight: 600, letterSpacing: "0.15em" }}>
            {h.scroll}
          </span>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section className="py-24 relative" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-0.5" style={{ background: "var(--color-pr-red)" }} />
                <span className="font-display text-xs uppercase tracking-widest text-pr-red" style={{ fontWeight: 700, letterSpacing: "0.2em" }}>
                  {h.about_eyebrow}
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none mb-6 text-fg" style={{ fontWeight: 900 }}>
                {h.about_heading}
              </h2>
              <div className="w-12 h-0.5 mb-8" style={{ background: "var(--color-pr-red)" }} />
              <p className="text-fg-muted leading-relaxed mb-4">
                {h.about_p1}{" "}
                <span style={{ color: "var(--color-fg)" }}>{h.about_p1_highlight}</span>
                {h.about_p1_end}
              </p>
              <p className="text-fg-muted leading-relaxed">{h.about_p2}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {h.stats.map(({ number, label }, i) => (
                <div
                  key={i}
                  className="p-6 flex flex-col gap-2"
                  style={{
                    background: "var(--color-surface-2)",
                    borderTop: `3px solid ${i % 2 === 0 ? "var(--color-pr-red)" : "var(--color-pr-blue-light)"}`,
                  }}
                >
                  <span className="font-display text-2xl leading-tight text-fg whitespace-pre-line" style={{ fontWeight: 900 }}>
                    {number}
                  </span>
                  <span className="text-xs text-fg-muted leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026 PAN AMERICANS ───────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--color-pr-blue)" }}>
        <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, transparent 50%, rgba(239,51,64,0.4) 50%)` }} />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 bg-white opacity-40" />
                <span className="font-display text-xs uppercase tracking-widest text-white opacity-60" style={{ fontWeight: 700, letterSpacing: "0.2em" }}>
                  {h.event_eyebrow}
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none text-white mb-3" style={{ fontWeight: 900 }}>
                {h.event_heading.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
              </h2>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                {[{ value: "2026", label: h.event_year_label }, { value: "Bogotá", label: h.event_city_label }].map(({ value, label }) => (
                  <div key={value} className="flex items-center gap-2">
                    <div className="w-1 h-8" style={{ background: "var(--color-pr-red)" }} />
                    <div>
                      <p className="font-display text-2xl text-white" style={{ fontWeight: 800 }}>{value}</p>
                      <p className="text-xs text-white opacity-50 uppercase tracking-wider">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 min-w-48">
              <p className="text-white opacity-70 text-sm leading-relaxed max-w-xs">{h.event_desc}</p>
              <Link
                href="/sponsors"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display text-pr-blue bg-white hover:bg-fg transition-colors"
                style={{ fontWeight: 700, letterSpacing: "0.1em" }}
              >
                {h.event_cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ──────────────────────────────────────────── */}
      {articles.length > 0 && (
        <section className="py-24" style={{ background: "var(--color-bg)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5" style={{ background: "var(--color-pr-red)" }} />
                  <span className="font-display text-xs uppercase tracking-widest text-pr-red" style={{ fontWeight: 700, letterSpacing: "0.2em" }}>
                    {h.news_eyebrow}
                  </span>
                </div>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-none text-fg" style={{ fontWeight: 900 }}>
                  {h.news_heading}
                </h2>
              </div>
              <Link href="/news" className="text-sm text-fg-muted hover:text-fg transition-colors uppercase tracking-widest font-display" style={{ fontWeight: 600, letterSpacing: "0.12em" }}>
                {h.news_all}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group block p-8 transition-all"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-pr-red)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs uppercase tracking-widest font-display text-pr-red" style={{ fontWeight: 700, letterSpacing: "0.15em" }}>
                      {article.category}
                    </span>
                    <span className="text-fg-muted">·</span>
                    <span className="text-xs text-fg-muted">{formatDate(article.date)}</span>
                  </div>
                  <h3 className="font-display text-2xl uppercase leading-tight text-fg mb-3 group-hover:text-pr-red transition-colors" style={{ fontWeight: 800 }}>
                    {(lang === "es" && article.titleEs) ? article.titleEs : article.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {(lang === "es" && article.excerptEs) ? article.excerptEs : article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <span className="text-xs uppercase tracking-widest font-display text-pr-red" style={{ fontWeight: 700 }}>
                      {h.news_read_more}
                    </span>
                    <svg className="w-3 h-3 text-pr-red transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
