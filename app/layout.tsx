import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "FAMMPR — Federación de Artes Marciales Mixtas de Puerto Rico",
    template: "%s | FAMMPR",
  },
  description:
    "Puerto Rico's official national MMA federation. Proudly affiliated with GAMMA International.",
  metadataBase: new URL("https://fammpr.com"),
  openGraph: {
    siteName: "FAMMPR",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${ibmPlex.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-fg font-body antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
