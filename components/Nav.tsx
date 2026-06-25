"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative w-8 h-8 pr-star"
            style={{ background: "var(--color-pr-red)" }}
          />
          <span
            className="font-display font-900 text-2xl tracking-widest uppercase text-fg group-hover:text-pr-red transition-colors"
            style={{ fontWeight: 900, letterSpacing: "0.15em" }}
          >
            FAMMPR
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-display font-700 text-sm uppercase tracking-widest transition-colors ${
                    active
                      ? "text-pr-red"
                      : "text-fg-muted hover:text-fg"
                  }`}
                  style={{ fontWeight: 700, letterSpacing: "0.12em" }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
              className="font-display font-700 text-lg uppercase tracking-widest text-fg-muted hover:text-pr-red transition-colors"
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
