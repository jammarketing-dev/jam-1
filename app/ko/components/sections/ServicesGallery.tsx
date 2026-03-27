import Image from "next/image";

export default function ServicesGallery() {
  const services = [
    {
      src: "/images/services/influencer.png",
      title: "인플루언서 마케팅",
      desc: "네이버 블로그·인스타그램·유튜브에서 귀사의 매력을 한국인 관광객에게 발신. 전속 인플루언서 40명이 실제로 귀사를 방문해 리얼한 체험 기사를 제작합니다.",
    },
    {
      src: "/images/services/bts_photo.png",
      title: "현지 취재 투어 (팸투어)",
      desc: "매월 평균 3개 지역에서 실시. 인플루언서가 실제로 방문해 식사하고, 촬영하고, 기사를 제작. '타베로그'와 같은 리얼한 리뷰가 탄생합니다.",
    },
    {
      src: "/images/services/strategy.png",
      title: "JAMEAT 예약대행 플랫폼",
      desc: "노쇼율 2% 이하·24시간 CS·다국어 대응·최신 정보 자동 업데이트. 예약부터 방문까지 원스톱으로 서포트합니다.",
    },
    {
      src: "/images/services/sns_flatlay.png",
      title: "인바운드 컨설팅",
      desc: "한국 시장에 특화된 SEO 대책, SNS 운용, 미디어 전략 제안. 외국인 관광객 유치를 위한 프로모션 설계를 종합적으로 서포트합니다.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">SERVICES</p>
          <h2>JAM의 서비스 목록</h2>
          <p className="section-subtitle">
            취재 기획부터 콘텐츠 제작, 배포, 예약 처리까지——원스톱으로 진행합니다.
          </p>
        </div>

        <div className="services-v2">
          {services.map(({ src, title, desc }, i) => (
            <div className={`service-v2-card ${i % 2 === 1 ? "reverse" : ""}`} key={title}>
              <div className="service-v2-img">
                <Image
                  src={src}
                  alt={title}
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="service-v2-body">
                <span className="service-v2-num">0{i + 1}</span>
                <h3 className="service-v2-title">{title}</h3>
                <p className="service-v2-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
