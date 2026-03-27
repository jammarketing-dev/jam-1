import React from "react";

export default function PerformanceStats() {
  const bigStats = [
    { num: "151개", label: "취재 완료 가게", note: "후쿠오카·오사카·홋카이도·도쿄" },
    { num: "407건", label: "누적 블로그 포스팅", note: "NAVER 상위 노출 최적화" },
    { num: "42명", label: "전속 인플루언서", note: "평균 취재 참여 3회 이상" },
    { num: "¥3,450만", label: "단일 점포 누적 매출", note: "오사카 와규 전문점 기준" },
  ];

  const regionData = [
    { city: "후쿠오카", count: 72, total: 151, tours: "11회 투어" },
    { city: "오사카", count: 41, total: 151, tours: "5회 투어" },
    { city: "홋카이도", count: 33, total: 151, tours: "6회 투어" },
    { city: "도쿄·기타", count: 5, total: 151, tours: "3회 투어" },
  ];

  return (
    <section id="results" className="section section-warm">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">RESULTS</p>
          <h2>숫자로 증명합니다</h2>
        </div>

        <div className="big-stats">
          {bigStats.map(({ num, label, note }) => (
            <div className="big-stat-card" key={label}>
              <p className="big-stat-num">{num}</p>
              <p className="big-stat-label">{label}</p>
              <p className="big-stat-note">{note}</p>
            </div>
          ))}
        </div>

        <div className="region-chart">
          <h3 className="region-title">지역별 취재 가게 현황</h3>
          <div className="region-bars">
            {regionData.map(({ city, count, total, tours }) => (
              <div key={city} className="region-row">
                <div className="region-meta">
                  <span className="region-name">{city}</span>
                  <span className="region-tours">{tours}</span>
                </div>
                <div className="region-bar-wrap">
                  <div
                    className="region-bar"
                    style={{ "--w": `${Math.round((count / total) * 100)}%` } as React.CSSProperties}
                  />
                </div>
                <span className="region-count">{count}개</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
