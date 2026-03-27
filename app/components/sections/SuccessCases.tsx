export default function SuccessCases() {
  return (
    <section id="cases" className="section">
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
              NAVER 블로그 상위 노출 + JAMEAT 예약 연동으로
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
              팸투어 취재 &rarr; 블로그 포스팅 &rarr; 예약 전환
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
                <span className="case-metric-val">&ldquo;오사카 3대 타코야끼&rdquo;</span>
                <span className="case-metric-key">키워드 직접 생성</span>
              </div>
            </div>
            <p className="case-desc">
              없던 키워드를 직접 만들고 블로그로 상위 노출
              검색 &rarr; 콘텐츠 &rarr; 예약 전환 구조 완성
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
