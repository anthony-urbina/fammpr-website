"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";

const currentSponsors = [
  { name: "Healing Hands Chiropractic", logo: "/sponsor-healing-hand.svg", badge: "Presenting Sponsor", badgeColor: "#EF3340" },
  { name: "AutomationKit", logo: "/sponsor-automationkit.png", badge: "Bronze Sponsor", badgeColor: "#CD7F32" },
];

const packageColors = ["#CD7F32", "#7A7A7A", "#D4AF37", "#EF3340"];
const packageFeatured = [false, false, true, false];
const packageExclusive = [false, false, false, true];

export default function SponsorsPage() {
  const { tr } = useLang();
  const s = tr.sponsors;

  return (
    <div style={{ background: "var(--color-bg)" }}>
      {/* Header */}
      <div
        className='relative pt-32 pb-16 overflow-hidden'
        style={{ background: "var(--color-surface)" }}
      >
        <div
          className='absolute left-0 top-0 bottom-0 w-1'
          style={{ background: "var(--color-pr-red)" }}
        />
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `
              linear-gradient(var(--color-border) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className='relative max-w-6xl mx-auto px-6'>
          <div className='flex items-center gap-3 mb-4'>
            <div
              className='w-6 h-0.5'
              style={{ background: "var(--color-pr-red)" }}
            />
            <span
              className='font-display text-xs uppercase tracking-widest text-pr-red'
              style={{ fontWeight: 700, letterSpacing: "0.2em" }}
            >
              {s.eyebrow}
            </span>
          </div>
          <h1
            className='font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-none text-fg mb-4'
            style={{ fontWeight: 900 }}
          >
            {s.heading}
          </h1>
          <p className='text-fg-muted max-w-xl leading-relaxed'>{s.subheading}</p>
        </div>
      </div>

      {/* Current sponsors grid */}
      <section className='py-20 max-w-6xl mx-auto px-6'>
        <div className='flex items-center gap-3 mb-10'>
          <div
            className='w-6 h-0.5'
            style={{ background: "var(--color-pr-red)" }}
          />
          <span
            className='font-display text-xs uppercase tracking-widest text-fg-muted'
            style={{ fontWeight: 700, letterSpacing: "0.2em" }}
          >
            {s.current_eyebrow}
          </span>
        </div>

        <div className='flex flex-wrap gap-4'>
          {currentSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className='relative flex flex-col items-center justify-center gap-2 p-6 w-full sm:w-[240px]'
              style={{
                background: "var(--color-surface)",
                border: `1px solid ${sponsor.badge ? sponsor.badgeColor + "66" : "var(--color-border)"}`,
                minHeight: "140px",
              }}
            >
              {sponsor.badge && (
                <div
                  className='absolute -top-3 left-4 px-3 py-0.5 text-white text-xs font-display uppercase tracking-widest'
                  style={{ background: sponsor.badgeColor!, fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  {sponsor.badge}
                </div>
              )}
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={180}
                height={72}
                className='max-h-16 w-auto object-contain'
              />
              <span
                className='font-display text-xs uppercase tracking-widest text-fg-muted'
                style={{ fontWeight: 700, letterSpacing: "0.12em" }}
              >
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

        <p className='mt-6 text-sm text-fg-muted'>
          {s.filling}{" "}
          <Link
            href='#packages'
            className='underline underline-offset-2 hover:text-fg transition-colors'
            style={{ color: "var(--color-pr-red)" }}
          >
            {s.cta_secure}
          </Link>
        </p>
      </section>

      {/* Campaign promise */}
      <section
        className='py-16 relative overflow-hidden'
        style={{ background: "var(--color-pr-blue)" }}
      >
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <p
            className='font-display text-[clamp(1.4rem,3vw,2.2rem)] uppercase text-white leading-snug max-w-3xl mx-auto'
            style={{ fontWeight: 800 }}
          >
            {s.banner.split(". ").map((sentence, i, arr) =>
              i === 0 ? (
                <span key={i}>
                  {sentence}. <br />
                </span>
              ) : (
                <span
                  key={i}
                  style={{ color: "var(--color-pr-red)" }}
                >
                  {sentence}
                  {i < arr.length - 1 ? ". " : ""}
                </span>
              ),
            )}
          </p>
          <p className='mt-4 text-white opacity-60 text-sm max-w-xl mx-auto'>{s.banner_sub}</p>
        </div>
      </section>

      {/* Packages */}
      <section
        id='packages'
        className='py-24 max-w-6xl mx-auto px-6'
      >
        <div className='flex items-center gap-3 mb-4'>
          <div
            className='w-6 h-0.5'
            style={{ background: "var(--color-pr-red)" }}
          />
          <span
            className='font-display text-xs uppercase tracking-widest text-pr-red'
            style={{ fontWeight: 700, letterSpacing: "0.2em" }}
          >
            {s.packages_eyebrow}
          </span>
        </div>
        <h2
          className='font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none text-fg mb-12'
          style={{ fontWeight: 900 }}
        >
          {s.packages_heading}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
          {s.packages.map((pkg, i) => {
            const color = packageColors[i];
            const featured = packageFeatured[i];
            const exclusive = packageExclusive[i];
            const perks = s.perks[i];

            return (
              <div
                key={pkg.tier}
                className='relative flex flex-col p-6'
                style={{
                  background: featured ? "var(--color-surface-2)" : "var(--color-surface)",
                  border: `1px solid ${featured ? color + "44" : "var(--color-border)"}`,
                  borderTop: `3px solid ${color}`,
                  opacity: exclusive ? 0.5 : 1,
                  pointerEvents: exclusive ? "none" : "auto",
                }}
              >
                {exclusive && (
                  <div
                    className='absolute -top-3 right-4 px-3 py-0.5 text-white text-xs font-display uppercase tracking-widest'
                    style={{ background: "var(--color-border)", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    CLAIMED
                  </div>
                )}

                <div className='mb-4'>
                  <span
                    className='font-display text-xs uppercase tracking-widest'
                    style={{ color, fontWeight: 700, letterSpacing: "0.15em" }}
                  >
                    {pkg.tier}
                  </span>
                </div>

                <p
                  className='font-display text-3xl text-fg mb-1 leading-none'
                  style={{ fontWeight: 900 }}
                >
                  {pkg.price}
                </p>
                <p className='text-xs text-fg-muted mb-6 leading-snug'>{pkg.ideal}</p>

                <div
                  className='w-full h-px mb-6'
                  style={{ background: "var(--color-border)" }}
                />

                <ul className='flex-1 space-y-2.5 mb-8'>
                  {perks.map((perk) => (
                    <li
                      key={perk}
                      className='flex items-start gap-2 text-sm'
                    >
                      <span
                        className='mt-0.5 text-xs font-bold shrink-0'
                        style={{ color }}
                      >
                        ✓
                      </span>
                      <span className='text-fg-muted leading-snug'>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={exclusive ? undefined : 'mailto:federacionmmapr@gmail.com?subject=Sponsorship Inquiry — FAMMPR'}
                  className='block text-center py-2.5 text-sm uppercase tracking-widest font-display'
                  style={{
                    background: exclusive ? "var(--color-border)" : "transparent",
                    color: exclusive ? "var(--color-fg-muted)" : color,
                    border: `1px solid ${exclusive ? "var(--color-border)" : color}`,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  {exclusive ? "Unavailable" : s.get_started}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className='py-20 relative overflow-hidden'
        style={{ background: "var(--color-surface)" }}
      >
        <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
          <div>
            <h2
              className='font-display text-[clamp(2rem,4vw,3rem)] uppercase leading-tight text-fg mb-2'
              style={{ fontWeight: 900 }}
            >
              {s.ready_heading}
            </h2>
            <p className='text-fg-muted max-w-lg'>{s.ready_sub}</p>
          </div>
          <div className='flex flex-col gap-3 shrink-0'>
            <a
              href='mailto:federacionmmapr@gmail.com?subject=Sponsorship Inquiry — FAMMPR'
              className='inline-flex items-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-display text-white hover:brightness-110 transition-all'
              style={{ background: "var(--color-pr-red)", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              {s.email_btn}
            </a>
            <a
              href='tel:+19392385257'
              className='text-xs text-center text-fg-muted hover:text-fg transition-colors'
            >
              {s.call}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
