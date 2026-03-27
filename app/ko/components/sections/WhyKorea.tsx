"use client";

import React from "react";

export default function WhyKorea() {
  const visitors = [
    { country: "한국", count: "881만 명", yoy: "+26.7%", highlight: true },
    { country: "중국", count: "698만 명", yoy: "+187.9%", highlight: false },
    { country: "대만", count: "604만 명", yoy: "+43.8%", highlight: false },
    { country: "홍콩", count: "272만 명", yoy: "+33.2%", highlight: false },
  ];

  const insights = [
    {
      num: "881만 명",
      label: "방일 한국인 관광객",
      note: "국적별 압도적 1위",
    },
    {
      num: "87%",
      label: "네이버 검색 점유율",
      note: "한국 = 구글이 아니라 네이버",
    },
    {
      num: "75.2%",
      label: "블로그 참고율",
      note: "여행 정보 수집 시",
    },
  ];

  return (
    <section className="section why-korea-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">WHY KOREA</p>
          <h2>왜 한국인 관광객인가</h2>
          <p className="section-subtitle">
            2024년, 방일 외국인은 역대 최대 3,687만 명을 기록.
            그 중 한국에서의 방일객은 881만 명으로 압도적 1위.
          </p>
        </div>

        <div className="why-insights">
          {insights.map(({ num, label, note }) => (
            <div className="why-insight-card" key={label}>
              <p className="why-insight-num">{num}</p>
              <p className="why-insight-label">{label}</p>
              <p className="why-insight-note">{note}</p>
            </div>
          ))}
        </div>

        <div className="why-table-wrap">
          <table className="why-table">
            <thead>
              <tr>
                <th>국가</th>
                <th>방일객 수</th>
                <th>전년비</th>
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

        <div className="why-naver-block">
          <h3>▶ 한국인은 네이버에서 맛집을 찾는다</h3>
          <p>
            한국에서는 검색엔진 점유율 87%를 네이버가 차지합니다. 일본의 &ldquo;타베로그&rdquo;에 해당하는 것이 &ldquo;네이버 블로그&rdquo;.
            한국인 관광객은 여행 전에 네이버에서 맛집을 검색하고, 블로그 글을 참고해 예약합니다.
          </p>
          <p className="why-naver-highlight">
            → 귀사의 정보가 네이버를 통해 한국인 관광객에게 직접 전달됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
