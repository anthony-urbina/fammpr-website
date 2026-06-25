import { ImageResponse } from "next/og";
import { OG_SIZE, loadLogoBase64, loadBarlowFont } from "@/lib/og";
import { getArticleBySlug, getAllArticles } from "@/lib/news";

export const alt = "FAMMPR News Article";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  const title = article?.title ?? "FAMMPR News";
  const category = article?.category ?? "News";
  const excerpt = article?.excerpt ?? "";

  const [logo, fontData] = await Promise.all([loadLogoBase64(), loadBarlowFont()]);

  // Truncate title for display
  const displayTitle = title.length > 52 ? title.slice(0, 50) + "…" : title;
  const displayExcerpt = excerpt.length > 100 ? excerpt.slice(0, 98) + "…" : excerpt;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%",
          display: "flex",
          background: "#06080F",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle blue right panel */}
        <div
          style={{
            position: "absolute", right: 0, top: 0,
            width: 340, height: "100%",
            background: "linear-gradient(to left, rgba(0,45,98,0.6), transparent)",
          }}
        />

        {/* Grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(26,37,64,0.4) 59px, rgba(26,37,64,0.4) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(26,37,64,0.4) 59px, rgba(26,37,64,0.4) 60px)",
          }}
        />

        {/* Red top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "#EF3340" }} />
        {/* Red left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 8, height: "100%", background: "#EF3340" }} />

        {/* Logo bottom right */}
        <img
          src={logo}
          width={200}
          height={200}
          style={{ position: "absolute", right: 60, bottom: 80, opacity: 0.85 }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex", flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 72, paddingRight: 380,
            gap: 0,
          }}
        >
          {/* Category badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ width: 32, height: 3, background: "#EF3340" }} />
            <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 17, color: "#EF3340", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {category}
            </span>
          </div>

          {/* Title */}
          <span
            style={{
              fontFamily: "Barlow", fontWeight: 900,
              fontSize: displayTitle.length > 35 ? 64 : 80,
              color: "#F0F2F5",
              letterSpacing: "-1px",
              lineHeight: 1.0,
              textTransform: "uppercase",
            }}
          >
            {displayTitle}
          </span>

          {/* Excerpt */}
          {displayExcerpt && (
            <span
              style={{
                marginTop: 24,
                fontFamily: "Barlow", fontWeight: 700,
                fontSize: 22,
                color: "#5A7090",
                lineHeight: 1.4,
                letterSpacing: "0.01em",
              }}
            >
              {displayExcerpt}
            </span>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 64,
            background: "rgba(13,18,32,0.95)",
            borderTop: "1px solid rgba(26,37,64,0.8)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 72, paddingRight: 72,
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 16, color: "#5A7090", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            FAMMPR.COM
          </span>
          <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 16, color: "#5A7090", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Affiliated with GAMMA International
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Barlow", data: fontData, weight: 900, style: "normal" }],
    }
  );
}
