import ContactForm from "../../../components/ContactForm";

export default function ContactSection() {
  const bullets = [
    "초기 비용 없는 성과 기반 CPA 계약",
    "계약 후 3~4주 내 첫 콘텐츠 게재",
    "월별 성과 리포트 제공",
    "1~2영업일 이내 회신",
  ];

  const contactInfo = [
    { label: "한국", val: "+82-10-9637-1397" },
    { label: "일본", val: "+81-90-4864-4598" },
    { label: "이메일", val: "info@jameat.co.kr" },
    { label: "LINE", val: "@jam_marketing" },
    { label: "WEB", val: "jameat.co.kr" },
  ];

  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-wrap">
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h2>
            음식점 오너님,<br />
            한국인 고객이 더 필요하신가요?
          </h2>
          <p className="section-lead">
            JAM은 단순한 광고 대행이 아닙니다.<br />
            콘텐츠 제작부터 예약 처리, 성과 측정까지<br />
            실매출이 생기는 구조를 함께 만듭니다.
          </p>
          <div className="contact-bullets">
            {bullets.map(b => (
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
              {contactInfo.map(({ label, val }) => (
                <div key={label} className="cinfo-row">
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

      <div className="container">
        <p className="contact-closing">
          &ldquo;식문화 현장&rdquo;을 아는 저희가, 귀사의 성공을 전력으로 서포트합니다.
        </p>
      </div>
    </section>
  );
}
