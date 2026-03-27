import Image from "next/image";

export default function JameatPlatform() {
  const strengths = [
    {
      num: "①",
      title: "ノーショー率 2%以下",
      desc: "事前入金確認制度と予約前日のリマインダー連絡により、ノーショー率を2%以下に抑えています。Googleや他プラットフォーム経由の外国人予約と比較して、圧倒的に低い数字です。",
    },
    {
      num: "②",
      title: "24時間カスタマーセンター常駐",
      desc: "予約当日の緊急連絡、道案内、アレルギー対応、メニュー確認など、現場で発生する問題に即座対応。日本語・韓国語バイリンガルスタッフが店舗とお客様の間に立ちます。",
    },
    {
      num: "③",
      title: "AIで常に最新の情報を維持",
      desc: "メニュー変更、価格改定、営業時間の変更など、店舗情報をAIがリアルタイムで更新。古い情報のまま集客されるトラブルを防ぎます。",
    },
    {
      num: "④",
      title: "多言語対応でコミュニケーション問題を解消",
      desc: "予約時にアレルギー、人数変更、席の希望などを事前に確認。当日は店舗側が迎えるだけ。スタッフの負担を最小限に抑えます。",
    },
  ];

  const portfolio = [
    { src: "/images/portfolio/sushi_nigiri.png", caption: "寿司にぎりおまかせ" },
    { src: "/images/portfolio/ramen_closeup.png", caption: "匠のラーメン" },
    { src: "/images/portfolio/kaiseki.png", caption: "懐石料理" },
    { src: "/images/portfolio/sake_pour.png", caption: "日本酒ペアリング" },
    { src: "/images/portfolio/robatayaki.png", caption: "炉端焼き" },
    { src: "/images/portfolio/restaurant.png", caption: "レストランインテリア" },
  ];

  return (
    <section id="jameat" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">JAMEAT PLATFORM</p>
          <h2>自社プラットフォーム「JAMEAT」で<br />現場の問題を解決</h2>
          <p className="section-subtitle">
            JAMEAT.CO.KRは、韓国人観光客向けの日本飲食店予約代行プラットフォームです。
            単なる予約サイトではなく、飲食店オーナー様の「現場の困りごと」を解決するために設計されています。
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

        {/* 포트폴리오 갤러리 (v1 PortfolioGrid 통합) */}
        <div className="jameat-portfolio">
          <h3 className="jameat-portfolio-title">私たちが取材したお店</h3>
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
