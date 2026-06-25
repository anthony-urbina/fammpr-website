import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-border mt-auto"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Red top stripe */}
      <div className="h-0.5 w-full" style={{ background: "var(--color-pr-red)" }} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 pr-star"
                style={{ background: "var(--color-pr-red)" }}
              />
              <span
                className="font-display text-xl text-fg"
                style={{ fontWeight: 900, letterSpacing: "0.15em" }}
              >
                FAMMPR
              </span>
            </div>
            <p className="text-sm text-fg-muted leading-relaxed">
              Federación de Artes Marciales Mixtas de Puerto Rico.
              <br />
              Affiliated with GAMMA International.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3
              className="font-display text-xs uppercase tracking-widest text-fg-muted"
              style={{ fontWeight: 700 }}
            >
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/news", label: "News" },
                { href: "/sponsors", label: "Sponsors" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-fg-muted hover:text-fg transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3
              className="font-display text-xs uppercase tracking-widest text-fg-muted"
              style={{ fontWeight: 700 }}
            >
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-fg-muted">
              <li>
                <a
                  href="tel:+19392385257"
                  className="hover:text-fg transition-colors"
                >
                  (939) 238-5257
                </a>
              </li>
              <li>
                <a
                  href="mailto:federacionmmapr@gmail.com"
                  className="hover:text-fg transition-colors"
                >
                  federacionmmapr@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://fammpr.com"
                  className="hover:text-fg transition-colors"
                >
                  fammpr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <p className="text-xs text-fg-muted">
            © {new Date().getFullYear()} FAMMPR. All rights reserved.
          </p>
          <p className="text-xs text-fg-muted">
            Official member of{" "}
            <span style={{ color: "var(--color-pr-red)" }}>
              GAMMA International
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
