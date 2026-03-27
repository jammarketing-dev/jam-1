import Image from "next/image";

export default function ClientVoices() {
  const voices = [
    {
      src: "/images/client_voices/head_chef.png",
      quote: "블로그 포스팅 후 한 달 만에 한국인 예약이 3배 늘었습니다. JAM 없이는 불가능했을 결과입니다.",
      name: "오사카 와규 전문점",
      role: "오너 셰프",
    },
    {
      src: "/images/client_voices/female_manager.png",
      quote: "마케팅부터 예약 관리까지 원스톱으로 처리해주니 저희는 요리에만 집중할 수 있었습니다.",
      name: "후쿠오카 이자카야",
      role: "매니저",
    },
    {
      src: "/images/client_voices/sushi_chef.png",
      quote: "한국인 손님이 꾸준히 오시면서 매출이 안정됐습니다. 성과 리포트도 매달 받고 있어요.",
      name: "홋카이도 스시 전문점",
      role: "대표",
    },
  ];

  return (
    <section className="section section-warm">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow">CLIENT VOICES</p>
          <h2>파트너 점포의 이야기</h2>
          <p className="section-subtitle">
            JAM과 함께 한국인 고객 유치에 성공한 일본 레스토랑 대표들의 목소리입니다.
          </p>
        </div>

        <div className="voices-grid">
          {voices.map(({ src, quote, name, role }) => (
            <div className="voice-card" key={name}>
              <Image
                src={src}
                alt={name}
                width={400}
                height={400}
                className="voice-img"
              />
              <div className="voice-body">
                <p className="voice-quote">&ldquo;{quote}&rdquo;</p>
                <p className="voice-name">{name}</p>
                <p className="voice-role">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
