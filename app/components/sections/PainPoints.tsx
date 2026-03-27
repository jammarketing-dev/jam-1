"use client";

export default function PainPoints() {
  const pains = [
    {
      icon: "✕",
      title: "「予約したのに来ない」",
      label: "ノーショー問題",
      desc: "Googleや他の予約プラットフォーム経由の外国人予約は、ノーショー率が高く、食材ロスや席の空きが店の収益を圧迫しています。",
    },
    {
      icon: "✕",
      title: "「言葉が通じない」",
      label: "コミュニケーショントラブル",
      desc: "アレルギー対応、メニュー説明、予約内容の確認…外国人客との意思疎通ができず、スタッフの負担が増えていませんか？",
    },
    {
      icon: "✕",
      title: "「集客したいが、どうすれば良いか分からない」",
      label: "方法が分からない",
      desc: "韓国人観光客は年間880万人以上が訪日。この巨大な市場にリーチしたくても、韓国SNSや検索エンジンの仕組みが分からず、手が出せない。",
    },
    {
      icon: "✕",
      title: "「メニューや価格が古いまま紹介されている」",
      label: "古い情報のトラブル",
      desc: "古いブログ記事がそのまま残り、実際のメニュー・価格と違う情報で集客され、現場でトラブルになるケースが多発。",
    },
  ];

  return (
    <section className="section pain-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">YOUR CHALLENGES</p>
          <h2>飲食店オーナー様、<br />こんなお悩みありませんか？</h2>
        </div>

        <div className="pain-grid">
          {pains.map((p) => (
            <div className="pain-card" key={p.title}>
              <div className="pain-icon">{p.icon}</div>
              <div className="pain-body">
                <h3 className="pain-title">
                  {p.title}
                  <span className="pain-label"> —— {p.label}</span>
                </h3>
                <p className="pain-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pain-resolve">
          <div className="pain-resolve-arrow">↓</div>
          <p className="pain-resolve-text">JAMが、これらすべて解決します。</p>
        </div>
      </div>
    </section>
  );
}
