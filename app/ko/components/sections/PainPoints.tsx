"use client";

export default function PainPoints() {
  const pains = [
    {
      icon: "✕",
      title: "\"예약했는데 안 온다\"",
      label: "노쇼 문제",
      desc: "구글이나 다른 예약 플랫폼을 통한 외국인 예약은 노쇼율이 높아, 식재료 낭비와 빈 좌석이 매출을 압박하고 있습니다.",
    },
    {
      icon: "✕",
      title: "\"말이 안 통한다\"",
      label: "커뮤니케이션 문제",
      desc: "알레르기 대응, 메뉴 설명, 예약 내용 확인… 외국인 손님과의 소통이 안 돼서 직원들의 부담이 늘고 있지 않으신가요?",
    },
    {
      icon: "✕",
      title: "\"집객하고 싶은데, 방법을 모르겠다\"",
      label: "방법을 모름",
      desc: "한국인 관광객은 연간 880만 명 이상이 일본을 방문. 이 거대한 시장에 접근하고 싶어도 한국 SNS나 검색엔진 구조를 몰라 손을 대지 못하고 계십니다.",
    },
    {
      icon: "✕",
      title: "\"메뉴나 가격이 옛날 그대로 소개되고 있다\"",
      label: "오래된 정보 문제",
      desc: "오래된 블로그 글이 그대로 남아, 실제 메뉴·가격과 다른 정보로 손님을 모으게 되어 현장에서 트러블이 빈발하고 있습니다.",
    },
  ];

  return (
    <section className="section pain-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">YOUR CHALLENGES</p>
          <h2>음식점 오너님,<br />이런 고민 있으시지 않나요?</h2>
        </div>

        <div className="pain-grid">
          {pains.map((p) => (
            <div className="pain-card" key={p.title}>
              <div className="pain-icon">{p.icon}</div>
              <div className="pain-body">
                <h3 className="pain-title">
                  {p.title}
                  <span className="pain-label"> —— {p.label}</span>
                </h3>
                <p className="pain-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pain-resolve">
          <div className="pain-resolve-arrow">↓</div>
          <p className="pain-resolve-text">JAM이 이 모든 것을 해결합니다.</p>
        </div>
      </div>
    </section>
  );
}
