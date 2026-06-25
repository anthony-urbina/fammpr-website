import { ImageResponse } from "next/og";
import { OG_SIZE, loadLogoBase64, loadBarlowFont } from "@/lib/og";

export const alt = "FAMMPR — Puerto Rico's National MMA Federation";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const [logo, fontData] = await Promise.all([loadLogoBase64(), loadBarlowFont()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#06080F",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blue diagonal bg — right half */}
        <div
          style={{
            position: "absolute",
            top: 0, right: 0,
            width: "50%", height: "100%",
            background: "linear-gradient(135deg, transparent 30%, #002D62 30%)",
            opacity: 0.5,
          }}
        />

        {/* Red left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 10, height: "100%", background: "#EF3340" }} />

        {/* Grid overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(26,37,64,0.4) 59px, rgba(26,37,64,0.4) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(26,37,64,0.4) 59px, rgba(26,37,64,0.4) 60px)",
            opacity: 0.6,
          }}
        />

        {/* Logo — right side */}
        <img
          src={logo}
          width={280}
          height={280}
          style={{ position: "absolute", right: 60, top: "50%", transform: "translateY(-50%)", opacity: 0.95 }}
        />

        {/* Content — left side */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 72, paddingRight: 360, gap: 0 }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ width: 40, height: 3, background: "#EF3340" }} />
            <span style={{ fontFamily: "Barlow", fontWeight: 700, fontSize: 18, color: "#EF3340", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Puerto Rico National Team
            </span>
          </div>

          {/* Main headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <span style={{ fontFamily: "Barlow", fontWeight: 900, fontSize: 130, color: "rgba(240,242,245,0.08)", letterSpacing: "-2px", lineHeight: 0.85, textTransform: "uppercase" }}>
              TEAM
            </span>
            <span style={{ fontFamily: "Barlow", fontWeight: 900, fontSize: 130, color: "#EF3340", letterSpacing: "-2px", lineHeight: 0.85, textTransform: "uppercase" }}>
              PUERTO
            </span>
            <span style={{ fontFamily: "Barlow", fontWeight: 900, fontSize: 130, color: "#F0F2F5", letterSpacing: "-2px", lineHeight: 0.85, textTransform: "uppercase" }}>
              RICO
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 64,
            background: "rgba(13,18,32,0.9)",
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
