import Image from "next/image";

export default function ServicesGallery() {
  const services = [
    {
      src: "/images/services/influencer.png",
      title: "インフルエンサーマーケティング",
      desc: "NAVERブログ・インスタグラム・ユーチューブで貴店の魅力を韓国人観光客に発信。専属インフルエンサー40名が実際に貴店を訪問し、リアルな体験記事を制作します。",
    },
    {
      src: "/images/services/bts_photo.png",
      title: "現地取材ツアー（ファムツアー）",
      desc: "毎月平均3地域で実施。インフルエンサーが実際に来店し、食事し、撮影し、記事を制作。「食べログ」のようなリアルなレビューが生まれます。",
    },
    {
      src: "/images/services/strategy.png",
      title: "JAMEAT 予約代行プラットフォーム",
      desc: "ノーショー率2%以下・24時間CS・多言語対応・最新情報自動更新。予約から来店までをワンストップでサポートします。",
    },
    {
      src: "/images/services/sns_flatlay.png",
      title: "インバウンドコンサルティング",
      desc: "韓国市場に特化したSEO対策、SNS運用、メディア戦略の提案。外国人観光客誘致のためのプロモーション設計を総合的にサポートします。",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">SERVICES</p>
          <h2>JAMのサービス一覧</h2>
          <p className="section-subtitle">
            取材企画からコンテンツ制作、配信、予約処理まで——ワンストップで進行します。
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
