import Image from "next/image";

export default function PortfolioGrid() {
  const portfolio = [
    { src: "/images/portfolio/sushi_nigiri.png", caption: "스시 니기리 오마카세" },
    { src: "/images/portfolio/ramen_closeup.png", caption: "장인의 라멘" },
    { src: "/images/portfolio/kaiseki.png", caption: "카이세키 요리" },
    { src: "/images/portfolio/sake_pour.png", caption: "사케 페어링" },
    { src: "/images/portfolio/robatayaki.png", caption: "로바타야키" },
    { src: "/images/portfolio/restaurant.png", caption: "레스토랑 인테리어" },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow">PORTFOLIO</p>
          <h2>우리가 취재한 곳들</h2>
          <p className="section-subtitle">
            후쿠오카, 오사카, 홋카이도, 도쿄 — 일본 전역의 레스토랑을 직접 방문하여 콘텐츠를 제작합니다.
          </p>
        </div>

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
    </section>
  );
}
