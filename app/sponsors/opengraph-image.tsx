import { ImageResponse } from "next/og";
import { OG_SIZE, loadLogoBase64, loadBarlowFont } from "@/lib/og";

export const alt = "Sponsor Team Puerto Rico — FAMMPR 2026 GAMMA Pan American Championships";
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
          background: "#002D62",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Diagonal red accent — bottom right corner */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, transparent 55%, rgba(239,51,64,0.35) 55%)",
          }}
        />

        {/* Grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.04) 39px, rgba(255,255,255,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.04) 39px, rgba(255,255,255,0.04) 40px)",
          }}
        />

        {/* Red top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, background: "#EF3340" }} />
        {/* Red left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 8, height: "100%", background: "#EF3340" }} />

        {/* Logo — centered above bottom bar: (630 - 60 - 260) / 2 = 155 */}
        <img
          src={logo}
          width={260}
          height={260}
          style={{ position: "absolute", right: 72, top: 155, opacity: 0.95 }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 80, paddingRight: 380, gap: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 3, background: "rgba(255,255,255,0.4)" }} />
            <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 17, color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              2026 GAMMA Pan American Championships
            </span>
          </div>

          <span style={{ fontFamily: "Barlow", fontWeight: 900, fontSize: 100, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 0.85, textTransform: "uppercase" }}>
            SUPPORT
          </span>
          <span style={{ fontFamily: "Barlow", fontWeight: 900, fontSize: 100, color: "#EF3340", letterSpacing: "-1px", lineHeight: 0.85, textTransform: "uppercase" }}>
            TEAM
          </span>
          <span style={{ fontFamily: "Barlow", fontWeight: 900, fontSize: 100, color: "#FFFFFF", letterSpacing: "-1px", lineHeight: 0.85, textTransform: "uppercase" }}>
            PUERTO RICO
          </span>

          <div style={{ marginTop: 28, display: "flex", gap: 32 }}>
            {["Bronze · $300", "Silver · $750", "Gold · $1,500", "Presenting · $3,000+"].map((tier) => (
              <span
                key={tier}
                style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 15, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                {tier}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 60,
            background: "rgba(0,20,50,0.8)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            paddingLeft: 80, paddingRight: 80,
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            FAMMPR.COM
          </span>
          <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Bogotá, Colombia 2026
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
