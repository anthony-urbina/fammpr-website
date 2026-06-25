import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

export async function loadLogoBase64(): Promise<string> {
  const data = await readFile(join(process.cwd(), "public", "logo.png"));
  return `data:image/png;base64,${data.toString("base64")}`;
}

export async function loadBarlowFont(): Promise<ArrayBuffer> {
  // Fetch Barlow Condensed 900 from Google Fonts
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((r) => r.text());

  // Extract the 900-weight TTF URL (last src url in the css)
  const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/g)].map(
    (m) => m[1]
  );
  const fontUrl = urls[urls.length - 1];
  return fetch(fontUrl).then((r) => r.arrayBuffer());
}
