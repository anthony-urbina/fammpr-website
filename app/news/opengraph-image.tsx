import { ImageResponse } from "next/og";
import { OG_SIZE, loadLogoBase64, loadBarlowFont } from "@/lib/og";

export const alt = "FAMMPR News — Puerto Rico's National MMA Federation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const [logo, fontData] = await Promise.all([loadLogoBase64(), loadBarlowFont()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%",
          display: "flex",
          background: "#0D1220",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Red left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 10, height: "100%", background: "#EF3340" }} />

        {/* Dark surface top band */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#EF3340" }} />

        {/* Grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(26,37,64,0.5) 59px, rgba(26,37,64,0.5) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(26,37,64,0.5) 59px, rgba(26,37,64,0.5) 60px)",
          }}
        />

        {/* Large ghost "NEWS" text behind everything */}
        <div
          style={{
            position: "absolute", right: -20, top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "Barlow", fontWeight: 900, fontSize: 280,
            color: "rgba(26,37,64,0.6)",
            letterSpacing: "-4px",
            textTransform: "uppercase",
            lineHeight: 1,
            display: "flex",
          }}
        >
          NEWS
        </div>

        {/* Logo */}
        <img
          src={logo}
          width={220}
          height={220}
          style={{ position: "absolute", right: 72, top: 60, opacity: 0.9 }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 72, gap: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <div style={{ width: 32, height: 3, background: "#EF3340" }} />
            <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 18, color: "#EF3340", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              FAMMPR
            </span>
          </div>

          <span style={{ fontFamily: "Barlow", fontWeight: 900, fontSize: 148, color: "#F0F2F5", letterSpacing: "-2px", lineHeight: 0.85, textTransform: "uppercase" }}>
            NEWS
          </span>

          <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 3, height: 40, background: "#EF3340" }} />
            <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 22, color: "#5A7090", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Announcements · Updates · Events
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 64,
            background: "rgba(6,8,15,0.95)",
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
