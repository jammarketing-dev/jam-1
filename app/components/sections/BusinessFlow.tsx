import React from "react";

export default function BusinessFlow() {
  const flowItems = [
    {
      icon: "01",
      title: "인플루언서 취재",
      desc: "블로거·인스타그래머가 일본 식당을 직접 방문, 한국인 맞춤 콘텐츠 제작",
      sub: "후쿠오카 / 오사카 / 홋카이도 / 도쿄",
    },
    {
      icon: "02",
      title: "콘텐츠 멀티채널 배포",
      desc: "한국인이 검색하는 키워드로 최적화, 4개 플랫폼에 동시 배포",
      sub: "channels",
    },
    {
      icon: "03",
      title: "CPA 전용 링크",
      desc: "인플루언서마다 고유 Referral Code 발급, 어디서 온 예약인지 100% 추적",
      sub: "성과 측정 · 수익 자동 분배",
    },
    {
      icon: "04",
      title: "JAMEAT 예약 처리",
      desc: "jameat.co.kr에서 한국어 실시간 응대, 노쇼 방지 예치금 시스템",
      sub: "24시간 한국어 예약 대행",
    },
    {
      icon: "05",
      title: "실매출 발생",
      desc: "예약 손님이 식당을 방문, 실제 매출 증가. 성과 기반 리포트 제공",
      sub: "월별 정산 · 성과 리포트",
    },
  ];

  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>콘텐츠가 예약이 되는 구조</h2>
          <p className="section-subtitle">
            단순 홍보로 끝나지 않습니다. 인플루언서 콘텐츠에 전용 CPA 링크를 심어
            소비자가 JAMEAT으로 예약하면 자동으로 성과를 측정하고 수익을 분배합니다.
          </p>
        </div>

        <div className="flow-diagram">
          {flowItems.map((item) => (
            <div className="flow-node" key={item.icon}>
              <div className="flow-step-badge">STEP {item.icon}</div>
              <h3 className="flow-title">{item.title}</h3>
              <p className="flow-desc">{item.desc}</p>
              {item.sub === "channels" ? (
                <div className="channel-badges">
                  <span className="ch-badge ch-naver">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
                    NAVER
                  </span>
                  <span className="ch-badge ch-instagram">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    IG
                  </span>
                  <span className="ch-badge ch-youtube">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                    YT
                  </span>
                  <span className="ch-badge ch-tiktok">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
                    TT
                  </span>
                </div>
              ) : (
                <span className="flow-sub">{item.sub}</span>
              )}
            </div>
          ))}
        </div>

        <div className="jameat-highlight">
          <div className="jameat-badge">JAMEAT.CO.KR</div>
          <p className="jameat-desc">
            단순 예약 플랫폼이 아닙니다 — <strong>CPA 기반 예약 대행 시스템</strong>.
            인플루언서 레퍼럴 코드를 통해 들어온 예약만 처리하며,
            성과를 실시간으로 측정하고 수익을 자동 분배합니다.
          </p>
          <div className="jameat-features">
            {["한국어 실시간 응대", "노쇼 방지 예치금", "레퍼럴 코드 자동 추적", "월별 성과 정산"].map(f => (
              <span key={f} className="jameat-feat">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
