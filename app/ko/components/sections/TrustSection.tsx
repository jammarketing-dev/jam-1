import Image from "next/image";

export default function TrustSection() {
  const tier1 = [
    { name: "삿포로 맥주", sub: "SAPPORO BEER", note: "일본 4대 맥주 브랜드" },
    { name: "호시노 리조트", sub: "HOSHINO RESORTS", note: "일본 최고급 리조트 체인" },
    { name: "긴다코 (올웨이즈)", sub: "GINDACO", note: "일본 최대 타코야키 체인" },
  ];

  const tier2 = [
    { name: "GYRO 홀딩스", category: "외식" },
    { name: "Hotel M gallery", category: "호텔" },
    { name: "키지마 고원 파크", category: "관광" },
    { name: "SASAYA 홀딩스", category: "외식" },
    { name: "하마쿠라 상점 제작소", category: "외식" },
    { name: "키타로 스시", category: "외식" },
  ];

  const voices = [
    {
      src: "/images/client_voices/head_chef.png",
      quote: "블로그 게재 후 단 1개월 만에 한국인 예약이 3배로 늘었습니다. JAM 없이는 불가능한 결과입니다.",
      name: "오사카 와규 전문점",
      role: "오너 셰프",
    },
    {
      src: "/images/client_voices/female_manager.png",
      quote: "마케팅부터 예약 관리까지 원스톱으로 대응해주셔서, 저희는 요리에만 집중할 수 있었습니다.",
      name: "후쿠오카 이자카야",
      role: "매니저",
    },
    {
      src: "/images/client_voices/sushi_chef.png",
      quote: "한국인 손님이 안정적으로 방문하게 되면서 매출이 안정되었습니다. 매월 성과 리포트도 받고 있습니다.",
      name: "홋카이도 스시 전문점",
      role: "대표",
    },
  ];

  return (
    <section className="section trust-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">TRUSTED BY</p>
          <h2>대기업의 신뢰</h2>
          <p className="section-subtitle">
            창업 이래 4년간 일본의 대기업·유명 브랜드와의 마케팅 프로젝트를 지속적으로 수행해왔습니다.
          </p>
        </div>

        <div className="trust-tier1">
          {tier1.map((b) => (
            <div className="trust-brand-card tier1" key={b.name}>
              <p className="trust-brand-name">{b.name}</p>
              <p className="trust-brand-sub">{b.sub}</p>
              <p className="trust-brand-note">{b.note}</p>
            </div>
          ))}
        </div>

        <div className="trust-tier2">
          {tier2.map((b) => (
            <div className="trust-brand-card tier2" key={b.name}>
              <span className="trust-cat-badge">{b.category}</span>
              <p className="trust-brand-name-sm">{b.name}</p>
            </div>
          ))}
        </div>

        <div className="trust-influencer-badge">
          <p className="trust-influencer-title">한국 탑클래스 인플루언서 약 80명이 소속.</p>
          <p className="trust-influencer-desc">
            일본의 음식점·호텔·관광시설을 위한 최적의 프로모션을 실시.<br />
            매월 평균 3개 지역 현지 취재——홋카이도부터 오키나와까지 전국 대응.
          </p>
        </div>

        <div className="trust-voices">
          <h3 className="trust-voices-title">파트너 점포의 목소리</h3>
          <div className="voices-grid">
            {voices.map(({ src, quote, name, role }) => (
              <div className="voice-card" key={name}>
                <Image src={src} alt={name} width={400} height={400} className="voice-img" />
                <div className="voice-body">
                  <p className="voice-quote">&ldquo;{quote}&rdquo;</p>
                  <p className="voice-name">{name}</p>
                  <p className="voice-role">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
