export default function ProcessTimeline() {
  const timelineItems = [
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
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">PROCESS</p>
          <h2>파트너십 진행 방식</h2>
          <p className="section-subtitle">계약 후 첫 콘텐츠 게시까지 평균 3~4주</p>
        </div>

        <div className="timeline">
          {timelineItems.map((item, i) => (
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
  );
}
