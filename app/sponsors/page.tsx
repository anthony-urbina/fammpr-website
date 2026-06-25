import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Support Team Puerto Rico at the 2026 GAMMA Pan American Championships. Become an official sponsor of FAMMPR.",
};

const packages = [
  {
    tier: "Bronze",
    price: "$300 – $500",
    color: "#CD7F32",
    ideal: "Restaurants, gyms, supplement stores, chiropractors",
    perks: [
      "Logo on sponsor graphic",
      "1 dedicated sponsor thank-you story",
      "Mention in post caption",
      "Business tagged in posts",
    ],
  },
  {
    tier: "Silver",
    price: "$750 – $1,000",
    color: "#7A7A7A",
    ideal: "Local businesses looking for consistent visibility",
    perks: [
      "Everything in Bronze",
      "Featured in 2–3 posts",
      "Logo on travel announcement graphics",
      "One dedicated sponsor spotlight reel",
      "Story mentions throughout the trip",
    ],
  },
  {
    tier: "Gold",
    price: "$1,500 – $2,000",
    color: "#D4AF37",
    ideal: "Larger local businesses seeking campaign-level exposure",
    perks: [
      "Everything in Silver",
      "Featured throughout the entire campaign",
      "Logo in every sponsor graphic",
      "Multiple reels with sponsor recognition",
      "Dedicated appreciation post",
      "Priority placement",
    ],
    featured: true,
  },
  {
    tier: "Presenting",
    price: "$3,000+",
    color: "#EF3340",
    ideal: "One exclusive spot available",
    perks: [
      "Top logo placement on all content",
      "Mention on every sponsor graphic",
      "Dedicated feature video",
      "Multiple tagged posts throughout campaign",
      "Press / media mentions where applicable",
      "Priority recognition at every opportunity",
      'Title: "Official Presenting Sponsor of Team Puerto Rico"',
    ],
    exclusive: true,
  },
];

const placeholderSpots = 8;

export default function SponsorsPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      {/* Header */}
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
              2026 GAMMA Pan American Championships
            </span>
          </div>
          <h1
            className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-none text-fg mb-4"
            style={{ fontWeight: 900 }}
          >
            Our Sponsors
          </h1>
          <p className="text-fg-muted max-w-xl leading-relaxed">
            These businesses believe in Team Puerto Rico. Their support makes it
            possible for our athletes to compete on the international stage.
          </p>
        </div>
      </div>

      {/* Current sponsors grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-6 h-0.5"
            style={{ background: "var(--color-pr-red)" }}
          />
          <span
            className="font-display text-xs uppercase tracking-widest text-fg-muted"
            style={{ fontWeight: 700, letterSpacing: "0.2em" }}
          >
            Current Sponsors
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: placeholderSpots }).map((_, i) => (
            <div
              key={i}
              className="aspect-video flex items-center justify-center"
              style={{
                background: "var(--color-surface)",
                border: "1px dashed var(--color-border)",
              }}
            >
              <span
                className="font-display text-xs uppercase tracking-widest text-fg-muted opacity-40"
                style={{ fontWeight: 600, letterSpacing: "0.12em" }}
              >
                Your Brand
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-fg-muted">
          Sponsorship spots are filling in.{" "}
          <Link
            href="#packages"
            className="underline underline-offset-2 hover:text-fg transition-colors"
            style={{ color: "var(--color-pr-red)" }}
          >
            Secure yours below.
          </Link>
        </p>
      </section>

      {/* Campaign promise */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "var(--color-pr-blue)" }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className="font-display text-[clamp(1.4rem,3vw,2.2rem)] uppercase text-white leading-snug max-w-3xl mx-auto"
            style={{ fontWeight: 800 }}
          >
            You&apos;re not buying an ad impression.
            <br />
            <span style={{ color: "var(--color-pr-red)" }}>
              You&apos;re becoming part of Puerto Rico&apos;s journey to the
              international stage.
            </span>
          </p>
          <p className="mt-4 text-white opacity-60 text-sm max-w-xl mx-auto">
            Sponsor recognition across our full social media coverage — before,
            during, and after the 2026 GAMMA Pan American Championships in
            Bogotá, Colombia.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-6 h-0.5"
            style={{ background: "var(--color-pr-red)" }}
          />
          <span
            className="font-display text-xs uppercase tracking-widest text-pr-red"
            style={{ fontWeight: 700, letterSpacing: "0.2em" }}
          >
            Sponsorship Packages
          </span>
        </div>
        <h2
          className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none text-fg mb-12"
          style={{ fontWeight: 900 }}
        >
          Choose Your Level
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              className="relative flex flex-col p-6"
              style={{
                background: pkg.featured
                  ? "var(--color-surface-2)"
                  : "var(--color-surface)",
                border: `1px solid ${pkg.featured ? pkg.color + "44" : "var(--color-border)"}`,
                borderTop: `3px solid ${pkg.color}`,
              }}
            >
              {pkg.exclusive && (
                <div
                  className="absolute -top-3 right-4 px-3 py-0.5 text-white text-xs font-display uppercase tracking-widest"
                  style={{
                    background: "var(--color-pr-red)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  1 Spot Only
                </div>
              )}

              <div className="mb-4">
                <span
                  className="font-display text-xs uppercase tracking-widest"
                  style={{ color: pkg.color, fontWeight: 700, letterSpacing: "0.15em" }}
                >
                  {pkg.tier}
                </span>
              </div>

              <p
                className="font-display text-3xl text-fg mb-1 leading-none"
                style={{ fontWeight: 900 }}
              >
                {pkg.price}
              </p>
              <p className="text-xs text-fg-muted mb-6 leading-snug">
                {pkg.ideal}
              </p>

              <div
                className="w-full h-px mb-6"
                style={{ background: "var(--color-border)" }}
              />

              <ul className="flex-1 space-y-2.5 mb-8">
                {pkg.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-0.5 text-xs font-bold shrink-0"
                      style={{ color: pkg.color }}
                    >
                      ✓
                    </span>
                    <span className="text-fg-muted leading-snug">{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:federacionmmapr@gmail.com?subject=Sponsorship Inquiry — FAMMPR"
                className="block text-center py-2.5 text-sm uppercase tracking-widest font-display transition-all hover:opacity-90"
                style={{
                  background: pkg.exclusive ? "var(--color-pr-red)" : "transparent",
                  color: pkg.exclusive ? "#fff" : pkg.color,
                  border: `1px solid ${pkg.color}`,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2
              className="font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-tight text-fg mb-2"
              style={{ fontWeight: 900 }}
            >
              Ready to become an official partner?
            </h2>
            <p className="text-fg-muted max-w-lg">
              Reach out and we&apos;ll find the right package for your business.
              Limited spots available.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="mailto:federacionmmapr@gmail.com?subject=Sponsorship Inquiry — FAMMPR"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display text-white hover:brightness-110 transition-all"
              style={{
                background: "var(--color-pr-red)",
                fontWeight: 700,
                letterSpacing: "0.1em",
              }}
            >
              Email Us
            </a>
            <a
              href="tel:+19392385257"
              className="text-xs text-center text-fg-muted hover:text-fg transition-colors"
            >
              or call (939) 238-5257
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
