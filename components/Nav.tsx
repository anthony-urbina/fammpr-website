"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, setLang, tr } = useLang();

  const links = [
    { href: "/", label: tr.nav.home },
    { href: "/news", label: tr.nav.news },
    { href: "/sponsors", label: tr.nav.sponsors },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(6, 8, 15, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(26, 37, 64, 0.6)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="FAMMPR Logo"
            width={44}
            height={44}
            className="object-contain"
            priority
          />
          <span
            className="font-display text-2xl tracking-widest uppercase text-fg group-hover:text-pr-red transition-colors"
            style={{ fontWeight: 900, letterSpacing: "0.15em" }}
          >
            FAMMPR
          </span>
        </Link>

        {/* Desktop links + lang toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-display text-sm uppercase tracking-widest transition-colors ${
                      active ? "text-pr-red" : "text-fg-muted hover:text-fg"
                    }`}
                    style={{ fontWeight: 700, letterSpacing: "0.12em" }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Language toggle */}
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-fg transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-fg transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-fg transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-5"
          style={{ background: "rgba(6, 8, 15, 0.97)" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-display text-lg uppercase tracking-widest text-fg-muted hover:text-pr-red transition-colors"
              style={{ fontWeight: 700 }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "en" | "es";
  setLang: (l: "en" | "es") => void;
}) {
  return (
    <div
      className="flex items-center gap-0 overflow-hidden"
      style={{ border: "1px solid var(--color-border)" }}
    >
      <button
        onClick={() => setLang("en")}
        className="px-2.5 py-1 font-display text-xs uppercase tracking-widest transition-all"
        style={{
          fontWeight: 700,
          letterSpacing: "0.1em",
          background: lang === "en" ? "var(--color-pr-red)" : "transparent",
          color: lang === "en" ? "#fff" : "var(--color-fg-muted)",
        }}
      >
        EN
      </button>
      <div
        className="w-px h-4"
        style={{ background: "var(--color-border)" }}
      />
      <button
        onClick={() => setLang("es")}
        className="px-2.5 py-1 font-display text-xs uppercase tracking-widest transition-all"
        style={{
          fontWeight: 700,
          letterSpacing: "0.1em",
          background: lang === "es" ? "var(--color-pr-red)" : "transparent",
          color: lang === "es" ? "#fff" : "var(--color-fg-muted)",
        }}
      >
        ES
      </button>
    </div>
  );
}
