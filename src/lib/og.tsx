import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Aurora Pink — Clareie qualquer região do seu corpo em até 30 dias";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function renderOG() {
  const heroBuffer = await readFile(
    join(process.cwd(), "public/assets/banner-desktop.png"),
  );
  const heroDataUrl = `data:image/png;base64,${heroBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        color: "white",
      }}
    >
      <img
        src={heroDataUrl}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "right center",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(214,30,124,0.97) 0%, rgba(240,68,148,0.88) 35%, rgba(255,122,170,0.45) 58%, rgba(255,122,170,0) 78%)",
          display: "flex",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            letterSpacing: 10,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              background: "white",
              display: "flex",
            }}
          />
          AURORA PINK
        </div>

        <div style={{ display: "flex", flex: 1 }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            maxWidth: 680,
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              textShadow: "0 4px 28px rgba(0,0,0,0.28)",
            }}
          >
            Clareie qualquer região do seu corpo
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 38,
              fontWeight: 600,
              opacity: 0.97,
            }}
          >
            <div style={{ display: "flex" }}>em até</div>
            <div
              style={{
                display: "flex",
                padding: "6px 22px",
                borderRadius: 9999,
                background: "white",
                color: "#d61e7c",
                fontWeight: 800,
              }}
            >
              30 dias
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flex: 1 }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "16px 30px",
              borderRadius: 9999,
              background: "white",
              color: "#d61e7c",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: "#d61e7c",
                display: "flex",
              }}
            />
            TRATAMENTO GLOW 360
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              opacity: 0.92,
              letterSpacing: 3,
              fontWeight: 500,
              textShadow: "0 2px 12px rgba(0,0,0,0.25)",
            }}
          >
            VEGANO · CRUELTY-FREE · GARANTIA 30 DIAS
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
