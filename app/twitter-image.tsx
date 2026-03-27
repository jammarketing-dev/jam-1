import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JAM – Japan Associate Marketing";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 60%, #050509 100%)",
          padding: "0 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 배경 글로우 */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: 100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,74,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* 왼쪽: 텍스트 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #ff6b4a, #ffb347)",
              borderRadius: 999,
              padding: "7px 16px",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: "0.2em",
              color: "#050509",
              display: "flex",
              width: "fit-content",
            }}
          >
            JAM
          </div>

          <div
            style={{
              fontSize: 44,
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#f7f7fb",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>일본 식당을</span>
            <span
              style={{
                background: "linear-gradient(120deg, #ffb347, #ff6b4a)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "flex",
              }}
            >
              한국 시장으로
            </span>
          </div>

          <div style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", display: "flex" }}>
            인플루언서 · CPA · JAMEAT 예약대행
          </div>
        </div>

        {/* 오른쪽: 통계 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 240,
          }}
        >
          {[
            { num: "151개", label: "취재 완료 가게" },
            { num: "¥5천만", label: "연간 처리 매출" },
            { num: "42명", label: "전속 인플루언서" },
          ].map(({ num, label }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  background: "linear-gradient(120deg, #ffb347, #ff6b4a)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "flex",
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", display: "flex" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
