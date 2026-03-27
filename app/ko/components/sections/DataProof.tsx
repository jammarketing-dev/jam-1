"use client";

import React from "react";

export default function DataProof() {
  const bigStats = [
    { num: "8,093건", label: "누적 예약 수", note: "유효 5,721건" },
    { num: "141개 점포", label: "제휴 음식점", note: "3개 지역" },
    { num: "29회", label: "현지 취재 투어", note: "실시 완료" },
    { num: "1,107건", label: "블로그 기사 제작", note: "오리지널 기사" },
    { num: "40명", label: "전속 인플루언서", note: "S/A/B/C/D 등급제" },
    { num: "85.5%", label: "CPA 매칭율", note: "유효 예약 중" },
  ];

  const top3 = [
    { rank: "1위", name: "호르몬 풍토 스스키노", count: "752건" },
    { rank: "2위", name: "사이린 (야키니쿠)", count: "712건" },
    { rank: "3위", name: "이모토 (야키니쿠)", count: "378건" },
  ];

  const regionData = [
    { city: "후쿠오카", count: 72, total: 141, tours: "11회 투어" },
    { city: "오사카", count: 41, total: 141, tours: "5회 투어" },
    { city: "홋카이도", count: 33, total: 141, tours: "6회 투어" },
    { city: "도쿄·기타", count: 5, total: 141, tours: "3회 투어" },
  ];

  return (
    <section id="results" className="section section-dark">
      <div className="container">
        <div className="section-header light">
          <p className="eyebrow">PROVEN RESULTS</p>
          <h2>4년간의 실적——숫자가 증명합니다</h2>
          <p className="section-subtitle">
            2022년 창업 이래, &ldquo;현장 취재 × 데이터 분석 × 집객&rdquo;의 일관 체제로 꾸준히 성과를 쌓아왔습니다.
          </p>
        </div>

        <div className="data-stats-grid">
          {bigStats.map(({ num, label, note }) => (
            <div className="data-stat-card" key={label}>
              <p className="data-stat-num">{num}</p>
              <p className="data-stat-label">{label}</p>
              <p className="data-stat-note">{note}</p>
            </div>
          ))}
        </div>

        <div className="data-top3">
          <h3 className="data-top3-title">▶ 예약 실적 TOP3 점포</h3>
          <div className="data-top3-grid">
            {top3.map(({ rank, name, count }) => (
              <div className="data-top3-card" key={rank}>
                <span className="data-top3-rank">{rank}</span>
                <span className="data-top3-name">{name}</span>
                <span className="data-top3-count">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="data-region-chart">
          <h3 className="data-region-title">지역별 취재 점포 현황</h3>
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
