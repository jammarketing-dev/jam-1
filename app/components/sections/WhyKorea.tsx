"use client";

import React from "react";

export default function WhyKorea() {
  const visitors = [
    { country: "韓国", count: "881万人", yoy: "+26.7%", highlight: true },
    { country: "中国", count: "698万人", yoy: "+187.9%", highlight: false },
    { country: "台湾", count: "604万人", yoy: "+43.8%", highlight: false },
    { country: "香港", count: "272万人", yoy: "+33.2%", highlight: false },
  ];

  const insights = [
    {
      num: "881万人",
      label: "訪日韓国人観光客",
      note: "国籍別 圧倒的1位",
    },
    {
      num: "87%",
      label: "NAVER 検索シェア",
      note: "韓国 = Googleではなく NAVER",
    },
    {
      num: "75.2%",
      label: "ブログ参考率",
      note: "旅行情報収集時",
    },
  ];

  return (
    <section className="section why-korea-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">WHY KOREA</p>
          <h2>なぜ韓国人観光客なのか</h2>
          <p className="section-subtitle">
            2024年、訪日外国人は過去最大の3,687万人を記録。
            その中で韓国からの訪日客は881万人で圧倒的第1位。
          </p>
        </div>

        {/* 3대 핵심 지표 */}
        <div className="why-insights">
          {insights.map(({ num, label, note }) => (
            <div className="why-insight-card" key={label}>
              <p className="why-insight-num">{num}</p>
              <p className="why-insight-label">{label}</p>
              <p className="why-insight-note">{note}</p>
            </div>
          ))}
        </div>

        {/* 방일객 테이블 */}
        <div className="why-table-wrap">
          <table className="why-table">
            <thead>
              <tr>
                <th>国</th>
                <th>訪日客数</th>
                <th>前年比</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map(({ country, count, yoy, highlight }) => (
                <tr key={country} className={highlight ? "why-row-highlight" : ""}>
                  <td>{country}</td>
                  <td>{count}</td>
                  <td>{yoy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* NAVER 핵심 메시지 */}
        <div className="why-naver-block">
          <h3>▶ 韓国人はNAVERで食べログを探す</h3>
          <p>
            韓国では検索エンジンシェア87%をNAVERが占めます。日本の「食べログ」にあたるのが「NAVERブログ」。
            韓国人観光客は旅行前にNAVERで食べたいお店を検索し、ブログ記事を参考に予約します。
          </p>
          <p className="why-naver-highlight">
            → 貴店の情報が、NAVER上で韓国人観光客に直接届きます。
          </p>
        </div>
      </div>
    </section>
  );
}
