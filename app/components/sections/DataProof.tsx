"use client";

import React from "react";

export default function DataProof() {
  const bigStats = [
    { num: "8,093件", label: "累計予約数", note: "有効 5,721件" },
    { num: "141店舗", label: "提携飲食店", note: "3地域" },
    { num: "29回", label: "現地取材ツアー", note: "実施済み" },
    { num: "1,107件", label: "ブログ記事制作", note: "オリジナル記事" },
    { num: "40名", label: "専属インフルエンサー", note: "S/A/B/C/D 等級制" },
    { num: "85.5%", label: "CPAマッチング率", note: "有効予約のうち" },
  ];

  const top3 = [
    { rank: "1位", name: "ホルモン風土 すすきの", count: "752件" },
    { rank: "2位", name: "サイリン（焼肉）", count: "712件" },
    { rank: "3位", name: "イモト（焼肉）", count: "378件" },
  ];

  const regionData = [
    { city: "福岡", count: 72, total: 141, tours: "11回ツアー" },
    { city: "大阪", count: 41, total: 141, tours: "5回ツアー" },
    { city: "北海道", count: 33, total: 141, tours: "6回ツアー" },
    { city: "東京・その他", count: 5, total: 141, tours: "3回ツアー" },
  ];

  return (
    <section id="results" className="section section-dark">
      <div className="container">
        <div className="section-header light">
          <p className="eyebrow">PROVEN RESULTS</p>
          <h2>4年間の実績——数字が証明します</h2>
          <p className="section-subtitle">
            2022年の創業以来、「現場取材×データ分析×集客」の一貫体制で、着実に成果を積み上げてきました。
          </p>
        </div>

        {/* 6대 실적 */}
        <div className="data-stats-grid">
          {bigStats.map(({ num, label, note }) => (
            <div className="data-stat-card" key={label}>
              <p className="data-stat-num">{num}</p>
              <p className="data-stat-label">{label}</p>
              <p className="data-stat-note">{note}</p>
            </div>
          ))}
        </div>

        {/* TOP3 */}
        <div className="data-top3">
          <h3 className="data-top3-title">▶ 予約実績 TOP3 店舗</h3>
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

        {/* 지역별 차트 */}
        <div className="data-region-chart">
          <h3 className="data-region-title">地域別 取材店舗 現況</h3>
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
                <span className="region-count">{count}店</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
