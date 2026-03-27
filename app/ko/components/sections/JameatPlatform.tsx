import Image from "next/image";

export default function JameatPlatform() {
  const strengths = [
    {
      num: "①",
      title: "노쇼율 2% 이하",
      desc: "사전 입금 확인 제도와 예약 전날 리마인더 연락을 통해 노쇼율을 2% 이하로 억제하고 있습니다. 구글이나 다른 플랫폼 경유 외국인 예약과 비교하면 압도적으로 낮은 수치입니다.",
    },
    {
      num: "②",
      title: "24시간 고객센터 상시 운영",
      desc: "예약 당일 긴급 연락, 길 안내, 알레르기 대응, 메뉴 확인 등 현장에서 발생하는 문제에 즉시 대응. 일본어·한국어 바이링궐 스태프가 점포와 고객 사이에 서서 소통합니다.",
    },
    {
      num: "③",
      title: "AI로 항상 최신 정보 유지",
      desc: "메뉴 변경, 가격 개정, 영업시간 변경 등 점포 정보를 AI가 실시간 업데이트. 오래된 정보 그대로 집객되는 문제를 방지합니다.",
    },
    {
      num: "④",
      title: "다국어 대응으로 커뮤니케이션 문제 해소",
      desc: "예약 시 알레르기, 인원 변경, 좌석 희망 등을 사전에 확인. 당일은 점포 측에서 맞이하기만 하면 됩니다. 직원 부담을 최소한으로 줄입니다.",
    },
  ];

  const portfolio = [
    { src: "/images/portfolio/sushi_nigiri.png", caption: "스시 니기리 오마카세" },
    { src: "/images/portfolio/ramen_closeup.png", caption: "장인의 라멘" },
    { src: "/images/portfolio/kaiseki.png", caption: "카이세키 요리" },
    { src: "/images/portfolio/sake_pour.png", caption: "사케 페어링" },
    { src: "/images/portfolio/robatayaki.png", caption: "로바타야키" },
    { src: "/images/portfolio/restaurant.png", caption: "레스토랑 인테리어" },
  ];

  return (
    <section id="jameat" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">JAMEAT PLATFORM</p>
          <h2>자사 플랫폼 &ldquo;JAMEAT&rdquo;으로<br />현장의 문제를 해결</h2>
          <p className="section-subtitle">
            JAMEAT.CO.KR은 한국인 관광객을 위한 일본 음식점 예약대행 플랫폼입니다.
            단순한 예약 사이트가 아니라, 음식점 오너님의 &ldquo;현장의 어려움&rdquo;을 해결하기 위해 설계되었습니다.
          </p>
        </div>

        <div className="jameat-strengths">
          {strengths.map((s) => (
            <div className="jameat-strength-card" key={s.num}>
              <span className="jameat-strength-num">{s.num}</span>
              <h3 className="jameat-strength-title">{s.title}</h3>
              <p className="jameat-strength-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="jameat-portfolio">
          <h3 className="jameat-portfolio-title">우리가 취재한 가게들</h3>
          <div className="portfolio-grid">
            {portfolio.map(({ src, caption }) => (
              <div className="portfolio-item" key={caption}>
                <Image
                  src={src}
                  alt={caption}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-caption">{caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
