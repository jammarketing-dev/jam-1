import Image from "next/image";

export default function TrustSection() {
  /* ── Tier 1: 즉시 인지 브랜드 ── */
  const tier1 = [
    { name: "サッポロビール", sub: "SAPPORO BEER", note: "日本4大ビールブランド" },
    { name: "星野リゾート", sub: "HOSHINO RESORTS", note: "日本最高級リゾートチェーン" },
    { name: "銀だこ（オールウェイズ）", sub: "GINDACO", note: "日本最大たこ焼きチェーン" },
  ];

  /* ── Tier 2: 업계 인지 브랜드 ── */
  const tier2 = [
    { name: "GYROホールディングス", category: "飲食" },
    { name: "Hotel M gallery", category: "ホテル" },
    { name: "城島高原パーク", category: "観光" },
    { name: "SASAYAホールディングス", category: "飲食" },
    { name: "浜倉的商店製作所", category: "飲食" },
    { name: "喜太郎寿司", category: "飲食" },
  ];

  /* ── 고객 후기 (v1 ClientVoices 이동) ── */
  const voices = [
    {
      src: "/images/client_voices/head_chef.png",
      quote: "ブログ掲載後、わずか1ヶ月で韓国人の予約が3倍に増えました。JAMなしでは不可能な結果です。",
      name: "大阪 和牛専門店",
      role: "オーナーシェフ",
    },
    {
      src: "/images/client_voices/female_manager.png",
      quote: "マーケティングから予約管理までワンストップで対応してくれるので、私たちは料理に集中できました。",
      name: "福岡 居酒屋",
      role: "マネージャー",
    },
    {
      src: "/images/client_voices/sushi_chef.png",
      quote: "韓国人のお客様が安定的に来店するようになり、売上が安定しました。毎月の成果レポートも受け取っています。",
      name: "北海道 寿司専門店",
      role: "代表",
    },
  ];

  return (
    <section className="section trust-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">TRUSTED BY</p>
          <h2>大手企業からの信頼</h2>
          <p className="section-subtitle">
            創業以来4年間にわたり、日本の大手企業・有名ブランドとのマーケティングプロジェクトを継続的に実施してきました。
          </p>
        </div>

        {/* Tier 1 — 대형 카드 */}
        <div className="trust-tier1">
          {tier1.map((b) => (
            <div className="trust-brand-card tier1" key={b.name}>
              <p className="trust-brand-name">{b.name}</p>
              <p className="trust-brand-sub">{b.sub}</p>
              <p className="trust-brand-note">{b.note}</p>
            </div>
          ))}
        </div>

        {/* Tier 2 — 소형 그리드 */}
        <div className="trust-tier2">
          {tier2.map((b) => (
            <div className="trust-brand-card tier2" key={b.name}>
              <span className="trust-cat-badge">{b.category}</span>
              <p className="trust-brand-name-sm">{b.name}</p>
            </div>
          ))}
        </div>

        {/* 인플루언서 뱃지 */}
        <div className="trust-influencer-badge">
          <p className="trust-influencer-title">韓国トップクラスのインフルエンサー約80名が所属。</p>
          <p className="trust-influencer-desc">
            日本の飲食店・ホテル・観光施設向けに最適なプロモーションを実施。<br />
            毎月平均3地域を現地取材——北海道から沖縄まで全国対応。
          </p>
        </div>

        {/* 고객 후기 */}
        <div className="trust-voices">
          <h3 className="trust-voices-title">パートナー店舗の声</h3>
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
      </div>
    </section>
  );
}
