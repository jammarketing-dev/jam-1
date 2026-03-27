import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JAM – Japan Associate Marketing | 일본 현지 마케팅 파트너";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #050509 100%)",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 배경 그라디언트 원 */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,74,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,179,71,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* JAM 로고 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #ff6b4a, #ffb347)",
              borderRadius: 999,
              padding: "8px 18px",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "0.2em",
              color: "#050509",
            }}
          >
            JAM
          </div>
          <div
            style={{
              marginLeft: 16,
              fontSize: 16,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.08em",
            }}
          >
            JAPAN ASSOCIATE MARKETING
          </div>
        </div>

        {/* 메인 헤드라인 */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#f7f7fb",
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>일본 식당,</span>
          <span
            style={{
              background: "linear-gradient(120deg, #ffb347, #ff6b4a)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            한국인 관광객으로
          </span>
          <span>꽉 채웁니다</span>
        </div>

        {/* 서브 텍스트 */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 44,
            display: "flex",
          }}
        >
          인플루언서 취재 → CPA 예약 링크 → JAMEAT 예약 처리
        </div>

        {/* 통계 카드 4개 */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { num: "151개", label: "취재 완료 가게" },
            { num: "42명", label: "전속 인플루언서" },
            { num: "407건", label: "블로그 포스팅" },
            { num: "¥5천만", label: "연간 처리 매출" },
          ].map(({ num, label }) => (
            <div
              key={label}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  background: "linear-gradient(120deg, #ffb347, #ff6b4a)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "flex",
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", display: "flex" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 72,
            fontSize: 15,
            color: "rgba(255,255,255,0.3)",
            display: "flex",
          }}
        >
          jam-marketing.net
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
