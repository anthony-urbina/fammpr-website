import Link from "next/link";
import { getAllArticles, formatDate } from "@/lib/news";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 2);

  return (
    <div className="overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        style={{ background: "var(--color-bg)" }}
      >
        {/* Background grid */}
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

        {/* Diagonal blue shape */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-15"
          style={{
            background: `linear-gradient(135deg, transparent 40%, var(--color-pr-blue) 40%)`,
          }}
        />

        {/* Red vertical accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: "var(--color-pr-red)" }}
        />

        {/* Floating stars decoration */}
        <div
          className="absolute right-12 top-32 w-16 h-16 opacity-10 pr-star"
          style={{ background: "var(--color-pr-red)" }}
        />
        <div
          className="absolute right-40 bottom-40 w-8 h-8 opacity-8 pr-star"
          style={{ background: "white" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div
                className="w-8 h-0.5"
                style={{ background: "var(--color-pr-red)" }}
              />
              <span
                className="font-display text-xs uppercase tracking-widest text-pr-red"
                style={{ fontWeight: 700, letterSpacing: "0.2em" }}
              >
                Puerto Rico National Team
              </span>
            </div>

            {/* Main title stacked */}
            <h1
              className="font-display leading-none mb-8"
              style={{ fontWeight: 900 }}
            >
              <span
                className="block text-[clamp(5rem,14vw,11rem)] uppercase tracking-tight"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(240,242,245,0.15)",
                  animationDelay: "0.1s",
                }}
              >
                TEAM
              </span>
              <span
                className="block text-[clamp(5rem,14vw,11rem)] uppercase tracking-tight animate-fade-up"
                style={{
                  color: "var(--color-pr-red)",
                  lineHeight: 0.85,
                  animationDelay: "0.2s",
                }}
              >
                PUERTO
              </span>
              <span
                className="block text-[clamp(5rem,14vw,11rem)] uppercase tracking-tight animate-fade-up"
                style={{
                  color: "var(--color-fg)",
                  lineHeight: 0.85,
                  animationDelay: "0.35s",
                }}
              >
                RICO
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg text-fg-muted max-w-xl leading-relaxed mb-10 animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              Puerto Rico&apos;s official national MMA federation. Developing
              champions, representing the island, competing on the world stage
              under GAMMA International.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.65s", opacity: 0 }}
            >
              <Link
                href="/news"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display font-700 text-white transition-all hover:brightness-110 active:scale-95"
                style={{
                  background: "var(--color-pr-red)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                Latest News
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display font-700 text-fg transition-all hover:bg-surface-2 active:scale-95"
                style={{
                  border: "1px solid var(--color-border)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
              >
                Support the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-6 flex items-center gap-2 text-fg-muted">
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "var(--color-pr-red)" }}
          />
          <span
            className="font-display text-xs uppercase tracking-widest"
            style={{ fontWeight: 600, letterSpacing: "0.15em" }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section
        className="py-24 relative"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-6 h-0.5"
                  style={{ background: "var(--color-pr-red)" }}
                />
                <span
                  className="font-display text-xs uppercase tracking-widest text-pr-red"
                  style={{ fontWeight: 700, letterSpacing: "0.2em" }}
                >
                  About
                </span>
              </div>
              <h2
                className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none mb-6 text-fg"
                style={{ fontWeight: 900 }}
              >
                The Federation
              </h2>
              <div
                className="w-12 h-0.5 mb-8"
                style={{ background: "var(--color-pr-red)" }}
              />
              <p className="text-fg-muted leading-relaxed mb-4">
                FAMMPR — the Federación de Artes Marciales Mixtas de Puerto Rico
                — is Puerto Rico&apos;s official governing body for mixed martial
                arts, proudly affiliated with{" "}
                <span style={{ color: "var(--color-fg)" }}>
                  GAMMA International
                </span>
                , the global authority for MMA.
              </p>
              <p className="text-fg-muted leading-relaxed">
                We develop athletes at every level — youth to elite —
                representing Puerto Rico on the international stage and building
                a legacy of excellence in combat sports.
              </p>
            </div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  number: "GAMMA",
                  label: "International Affiliate",
                  accent: "var(--color-pr-red)",
                },
                {
                  number: "2026",
                  label: "Pan American Championships",
                  accent: "var(--color-pr-blue-light)",
                },
                {
                  number: "Youth\n+\nElite",
                  label: "One Team. One Trip.",
                  accent: "var(--color-pr-red)",
                },
                {
                  number: "Bogotá",
                  label: "Colombia — Our Next Stage",
                  accent: "var(--color-pr-blue-light)",
                },
              ].map(({ number, label, accent }, i) => (
                <div
                  key={i}
                  className="p-6 flex flex-col gap-2"
                  style={{
                    background: "var(--color-surface-2)",
                    borderTop: `3px solid ${accent}`,
                  }}
                >
                  <span
                    className="font-display text-2xl leading-tight text-fg whitespace-pre-line"
                    style={{ fontWeight: 900 }}
                  >
                    {number}
                  </span>
                  <span className="text-xs text-fg-muted leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2026 PAN AMERICANS CALLOUT ───────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "var(--color-pr-blue)" }}>
        {/* Subtle diagonal */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, transparent 50%, rgba(239,51,64,0.4) 50%)`,
          }}
        />
        {/* Grid */}
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
                <span
                  className="font-display text-xs uppercase tracking-widest text-white opacity-60"
                  style={{ fontWeight: 700, letterSpacing: "0.2em" }}
                >
                  Upcoming Event
                </span>
              </div>
              <h2
                className="font-display text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none text-white mb-3"
                style={{ fontWeight: 900 }}
              >
                GAMMA Pan American
                <br />
                Championships
              </h2>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-1 h-8"
                    style={{ background: "var(--color-pr-red)" }}
                  />
                  <div>
                    <p
                      className="font-display text-2xl text-white"
                      style={{ fontWeight: 800 }}
                    >
                      2026
                    </p>
                    <p className="text-xs text-white opacity-50 uppercase tracking-wider">
                      Year
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-1 h-8"
                    style={{ background: "var(--color-pr-red)" }}
                  />
                  <div>
                    <p
                      className="font-display text-2xl text-white"
                      style={{ fontWeight: 800 }}
                    >
                      Bogotá
                    </p>
                    <p className="text-xs text-white opacity-50 uppercase tracking-wider">
                      Colombia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 min-w-48">
              <p className="text-white opacity-70 text-sm leading-relaxed max-w-xs">
                Team Puerto Rico will compete at the 2026 GAMMA Pan American
                Championships — our youth and adult athletes traveling together
                as one unified delegation.
              </p>
              <Link
                href="/sponsors"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display font-700 text-pr-blue bg-white hover:bg-fg transition-colors"
                style={{ fontWeight: 700, letterSpacing: "0.1em" }}
              >
                Help Send the Team
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
                  <div
                    className="w-6 h-0.5"
                    style={{ background: "var(--color-pr-red)" }}
                  />
                  <span
                    className="font-display text-xs uppercase tracking-widest text-pr-red"
                    style={{ fontWeight: 700, letterSpacing: "0.2em" }}
                  >
                    Latest
                  </span>
                </div>
                <h2
                  className="font-display text-[clamp(2rem,4vw,3.5rem)] uppercase leading-none text-fg"
                  style={{ fontWeight: 900 }}
                >
                  News
                </h2>
              </div>
              <Link
                href="/news"
                className="text-sm text-fg-muted hover:text-fg transition-colors uppercase tracking-widest font-display"
                style={{ fontWeight: 600, letterSpacing: "0.12em" }}
              >
                All News →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group block p-8 transition-all hover:border-pr-red"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderTop: "3px solid var(--color-pr-red)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs uppercase tracking-widest font-display text-pr-red"
                      style={{ fontWeight: 700, letterSpacing: "0.15em" }}
                    >
                      {article.category}
                    </span>
                    <span className="text-fg-muted">·</span>
                    <span className="text-xs text-fg-muted">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3
                    className="font-display text-2xl uppercase leading-tight text-fg mb-3 group-hover:text-pr-red transition-colors"
                    style={{ fontWeight: 800 }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-6">
                    <span
                      className="text-xs uppercase tracking-widest font-display text-pr-red"
                      style={{ fontWeight: 700 }}
                    >
                      Read More
                    </span>
                    <svg
                      className="w-3 h-3 text-pr-red transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
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
