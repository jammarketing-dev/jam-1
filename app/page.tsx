import React from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <p className="eyebrow">JAPAN ASSOCIATE MARKETING</p>
                <h1>
                  일본 식당,<br />
                  <span className="accent">한국인 관광객으로</span><br />
                  꽉 채웁니다
                </h1>
                <p className="subtitle">
                  인플루언서 콘텐츠 → CPA 예약 링크 → JAMEAT 예약 처리<br />
                  콘텐츠가 실제 매출로 이어지는 구조를 설계합니다
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn primary">파트너십 문의하기</a>
                  <a href="https://jameat.co.kr" target="_blank" rel="noopener noreferrer" className="btn ghost">
                    JAMEAT 예약 플랫폼 →
                  </a>
                </div>
              </div>
              <div className="hero-stats-grid">
                <div className="hero-stat-item accent-border">
                  <span className="hero-stat-num">151</span>
                  <span className="hero-stat-label">취재 완료 가게</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-num">42</span>
                  <span className="hero-stat-label">전속 블로거</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-num">407</span>
                  <span className="hero-stat-label">블로그 포스팅</span>
                </div>
                <div className="hero-stat-item">
                  <span className="hero-stat-num">¥5천만</span>
                  <span className="hero-stat-label">연간 처리 매출</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUSINESS FLOW DIAGRAM ── */}
        <section id="how" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">HOW IT WORKS</p>
              <h2>콘텐츠가 예약이 되는 구조</h2>
              <p className="section-subtitle">
                단순 홍보로 끝나지 않습니다. 인플루언서 콘텐츠에 전용 CPA 링크를 심어<br />
                소비자가 JAMEAT으로 예약하면 자동으로 성과를 측정하고 수익을 분배합니다.
              </p>
            </div>

            <div className="flow-diagram">
              {[
                {
                  icon: "📸",
                  step: "01",
                  title: "인플루언서 취재",
                  desc: "블로거·인스타그래머가 일본 식당을 직접 방문, 한국인 맞춤 콘텐츠 제작",
                  sub: "후쿠오카 / 오사카 / 홋카이도 / 도쿄",
                },
                {
                  icon: "📣",
                  step: "02",
                  title: "콘텐츠 멀티채널 배포",
                  desc: "한국인이 검색하는 키워드로 최적화, 4개 플랫폼에 동시 배포",
                  sub: "channels",
                },
                {
                  icon: "🔗",
                  step: "03",
                  title: "CPA 전용 링크",
                  desc: "인플루언서마다 고유 Referral Code 발급, 어디서 온 예약인지 100% 추적",
                  sub: "성과 측정 · 수익 자동 분배",
                },
                {
                  icon: "🍽️",
                  step: "04",
                  title: "JAMEAT 예약 처리",
                  desc: "jameat.co.kr에서 한국어 실시간 응대, 노쇼 방지 예치금 시스템",
                  sub: "24시간 한국어 예약 대행",
                },
                {
                  icon: "💴",
                  step: "05",
                  title: "실매출 발생",
                  desc: "예약 손님이 식당을 방문, 실제 매출 증가. 성과 기반 리포트 제공",
                  sub: "월별 정산 · 성과 리포트",
                },
              ].map((item, i, arr) => (
                <React.Fragment key={item.step}>
                  <div className="flow-node">
                    <div className="flow-icon">{item.icon}</div>
                    <div className="flow-step-badge">{item.step}</div>
                    <h3 className="flow-title">{item.title}</h3>
                    <p className="flow-desc">{item.desc}</p>
                    {item.sub === "channels" ? (
                      <div className="channel-badges">
                        <span className="ch-badge ch-naver">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/></svg>
                          NAVER
                        </span>
                        <span className="ch-badge ch-instagram">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                          Instagram
                        </span>
                        <span className="ch-badge ch-youtube">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
                          YouTube
                        </span>
                        <span className="ch-badge ch-tiktok">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
                          TikTok
                        </span>
                      </div>
                    ) : (
                      <span className="flow-sub">{item.sub}</span>
                    )}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flow-arrow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="#ff6b4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* JAMEAT 구조 하이라이트 */}
            <div className="jameat-highlight">
              <div className="jameat-badge">JAMEAT.CO.KR</div>
              <p className="jameat-desc">
                단순 예약 플랫폼이 아닙니다 — <strong>CPA 기반 예약 대행 시스템</strong>.
                인플루언서 레퍼럴 코드를 통해 들어온 예약만 처리하며,
                성과를 실시간으로 측정하고 수익을 자동 분배합니다.
              </p>
              <div className="jameat-features">
                {["✓  한국어 실시간 응대", "✓  노쇼 방지 예치금", "✓  레퍼럴 코드 자동 추적", "✓  월별 성과 정산"].map(f => (
                  <span key={f} className="jameat-feat">{f}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PERFORMANCE NUMBERS ── */}
        <section id="results" className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">RESULTS</p>
              <h2>숫자로 증명합니다</h2>
            </div>

            <div className="big-stats">
              {[
                { num: "151개", label: "취재 완료 가게", note: "후쿠오카·오사카·홋카이도·도쿄" },
                { num: "407건", label: "누적 블로그 포스팅", note: "NAVER 상위 노출 최적화" },
                { num: "42명", label: "전속 인플루언서", note: "평균 취재 참여 3회 이상" },
                { num: "¥3,450만", label: "단일 점포 누적 매출", note: "오사카 와규 전문점 기준" },
              ].map(({ num, label, note }) => (
                <div className="big-stat-card" key={label}>
                  <p className="big-stat-num">{num}</p>
                  <p className="big-stat-label">{label}</p>
                  <p className="big-stat-note">{note}</p>
                </div>
              ))}
            </div>

            {/* 지역별 바 차트 */}
            <div className="region-chart">
              <h3 className="region-title">지역별 취재 가게 현황</h3>
              <div className="region-bars">
                {[
                  { city: "후쿠오카", count: 72, total: 151, tours: "11회 투어" },
                  { city: "오사카", count: 41, total: 151, tours: "5회 투어" },
                  { city: "홋카이도", count: 33, total: 151, tours: "6회 투어" },
                  { city: "도쿄·기타", count: 5, total: 151, tours: "3회 투어" },
                ].map(({ city, count, total, tours }) => (
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

        {/* ── SUCCESS CASES ── */}
        <section id="cases" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">CASE STUDIES</p>
              <h2>실제 성공 사례</h2>
            </div>

            <div className="cases-grid">
              <div className="case-card case-main">
                <div className="case-region">오사카 · 와규 전문점</div>
                <div className="case-headline">1년간 한국인 고객</div>
                <div className="case-big-num">2,000명+</div>
                <div className="case-divider" />
                <div className="case-metrics">
                  <div className="case-metric">
                    <span className="case-metric-val">¥17,000</span>
                    <span className="case-metric-key">평균 객단가</span>
                  </div>
                  <div className="case-metric">
                    <span className="case-metric-val">¥3,450만</span>
                    <span className="case-metric-key">총 누적 매출</span>
                  </div>
                </div>
                <p className="case-desc">
                  NAVER 블로그 상위 노출 + JAMEAT 예약 연동으로<br />
                  한국인 방문객이 꾸준히 유입되는 구조 구축
                </p>
              </div>

              <div className="case-card">
                <div className="case-region">후쿠오카 · 모츠나베</div>
                <div className="case-headline">1년간 한국인 고객</div>
                <div className="case-big-num">568명</div>
                <div className="case-divider" />
                <div className="case-metrics">
                  <div className="case-metric">
                    <span className="case-metric-val">¥200만</span>
                    <span className="case-metric-key">누적 매출</span>
                  </div>
                </div>
                <p className="case-desc">
                  팸투어 취재 → 블로그 포스팅 → 예약 전환<br />
                  꾸준한 콘텐츠로 장기적 한국인 유입 확보
                </p>
              </div>

              <div className="case-card">
                <div className="case-region">키워드 마케팅 사례</div>
                <div className="case-headline">NAVER 검색 점령</div>
                <div className="case-big-num">#1</div>
                <div className="case-divider" />
                <div className="case-metrics">
                  <div className="case-metric">
                    <span className="case-metric-val">"오사카 3대 타코야끼"</span>
                    <span className="case-metric-key">키워드 직접 생성</span>
                  </div>
                </div>
                <p className="case-desc">
                  없던 키워드를 직접 만들고 블로그로 상위 노출<br />
                  검색 → 콘텐츠 → 예약 전환 구조 완성
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS TIMELINE ── */}
        <section id="process" className="section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">PROCESS</p>
              <h2>파트너십 진행 방식</h2>
              <p className="section-subtitle">계약 후 첫 콘텐츠 게시까지 평균 3~4주</p>
            </div>

            <div className="timeline">
              {[
                {
                  step: "1",
                  title: "미팅 & 타깃 설정",
                  detail: "업체 현황 분석 · 한국인 타깃 설정 · 키워드 전략 수립",
                  period: "Week 1",
                },
                {
                  step: "2",
                  title: "인플루언서 매칭",
                  detail: "업체에 최적화된 블로거 선별 · 취재 일정 조율 · 가이드라인 전달",
                  period: "Week 1~2",
                },
                {
                  step: "3",
                  title: "현장 취재",
                  detail: "일본 현지 방문 · 사진·영상 촬영 · 체험 후기 수집",
                  period: "Week 2~3",
                },
                {
                  step: "4",
                  title: "콘텐츠 업로드",
                  detail: "NAVER 블로그 · 인스타그램 포스팅 · CPA 예약 링크 삽입",
                  period: "Week 3~4",
                },
                {
                  step: "5",
                  title: "예약 처리 & 정산",
                  detail: "JAMEAT으로 예약 자동 유입 · 월별 성과 리포트 · 수익 분배",
                  period: "매월 지속",
                },
              ].map((item, i) => (
                <div className="timeline-item" key={item.step}>
                  <div className="timeline-left">
                    <div className="timeline-dot">{item.step}</div>
                    {i < 4 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-body">
                    <div className="timeline-period">{item.period}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-detail">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section section-alt">
          <div className="container contact-wrap">
            <div className="contact-copy">
              <p className="eyebrow">CONTACT</p>
              <h2>
                일본 식당 사장님,<br />
                한국인 손님이 더 필요하신가요?
              </h2>
              <p className="section-lead">
                JAM은 단순 광고 대행이 아닙니다.<br />
                콘텐츠 제작부터 예약 처리, 성과 측정까지<br />
                실매출이 생기는 구조를 함께 만듭니다.
              </p>
              <div className="contact-bullets">
                {[
                  "초기 비용 없이 성과 기반 CPA 계약",
                  "계약 후 3~4주 안에 첫 콘텐츠 게시",
                  "월별 성과 리포트 제공",
                  "1~2영업일 내 회신",
                ].map(b => (
                  <div key={b} className="contact-bullet">
                    <span className="bullet-dot" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-inner">
                <p className="contact-card-title">지금 바로 문의하기</p>
                <ContactForm />
                <div className="cinfo-divider" />
                <div className="cinfo-direct">
                  {[
                    { icon: "📞", label: "한국", val: "+82-10-9637-1397" },
                    { icon: "📞", label: "일본", val: "+81-90-4864-4598" },
                    { icon: "✉️", label: "이메일", val: "info@jam-marketing.net" },
                  ].map(({ icon, label, val }) => (
                    <div key={label} className="cinfo-row">
                      <span className="cinfo-icon">{icon}</span>
                      <div>
                        <span className="cinfo-label">{label}</span>
                        <span className="cinfo-val">{val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <span className="logo" style={{ fontSize: "12px", padding: "4px 8px" }}>JAM</span>
            <span style={{ marginLeft: "12px", opacity: 0.5 }}>Japan Associate Marketing</span>
          </div>
          <div style={{ textAlign: "right", opacity: 0.5, fontSize: "11px", lineHeight: "1.8" }}>
            <div>합동회사 JAM · 도쿄 시부야구 진구마에 6-23-4 쿠와노 빌딩 2층</div>
            <div>© 2025 JAM · jam-marketing.net · jameat.co.kr</div>
          </div>
        </div>
      </footer>
    </>
  );
}
