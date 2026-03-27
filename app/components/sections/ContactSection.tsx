import ContactForm from "../ContactForm";

export default function ContactSection() {
  const bullets = [
    "初期費用なしの成果基盤CPA契約",
    "契約後3〜4週間で最初のコンテンツ掲載",
    "月別成果レポート提供",
    "1〜2営業日以内にご返信",
  ];

  const contactInfo = [
    { label: "韓国", val: "+82-10-9637-1397" },
    { label: "日本", val: "+81-90-4864-4598" },
    { label: "メール", val: "info@jameat.co.kr" },
    { label: "LINE", val: "@jam_marketing" },
    { label: "WEB", val: "jameat.co.kr" },
  ];

  return (
    <section id="contact" className="section section-contact">
      <div className="container contact-wrap">
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h2>
            飲食店オーナー様、<br />
            韓国人のお客様がもっと必要ですか？
          </h2>
          <p className="section-lead">
            JAMは単なる広告代行ではありません。<br />
            コンテンツ制作から予約処理、成果測定まで<br />
            実売上が生まれる仕組みを一緒に作ります。
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
            <p className="contact-card-title">今すぐお問い合わせ</p>
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

      {/* 클로징 메시지 */}
      <div className="container">
        <p className="contact-closing">
          「食の現場」を知る私たちが、貴店の成功を全力でサポートします。
        </p>
      </div>
    </section>
  );
}
