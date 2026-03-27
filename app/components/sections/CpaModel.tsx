import { Smartphone, CalendarCheck, DoorOpen, HandCoins } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function CpaModel() {
  const steps: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
    {
      step: "STEP 1",
      title: "集客",
      desc: "インフルエンサーがNAVERブログで貴店を紹介",
      icon: Smartphone,
    },
    {
      step: "STEP 2",
      title: "予約",
      desc: "韓国人客がJAMEATで予約",
      icon: CalendarCheck,
    },
    {
      step: "STEP 3",
      title: "来店",
      desc: "事前入金確認＋リマインダー → 確実に来店",
      icon: DoorOpen,
    },
    {
      step: "STEP 4",
      title: "報酬",
      desc: "来店実績に応じて成果報酬をお支払い",
      icon: HandCoins,
    },
  ];

  const merits = [
    "初期費用 0円",
    "来店分だけのお支払い",
    "契約縛りなし",
  ];

  return (
    <section id="model" className="section section-warm">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">BUSINESS MODEL</p>
          <h2>成果報酬型——リスクなく始められます</h2>
          <p className="section-subtitle">
            JAMの集客支援は、「CPA（成果報酬型）」モデルです。
            実際に予約が入った分だけお支払いいただくため、初期費用なしで導入可能です。
          </p>
        </div>

        <p className="cpa-flow-label">
          「集客 → 予約 → 来店 → 報酬」のシンプルな流れ
        </p>

        <div className="cpa-steps">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div className="cpa-step" key={s.step}>
                <div className="cpa-step-icon">
                  <Icon size={40} strokeWidth={1.5} color="#C9A96E" />
                </div>
                <div className="cpa-step-badge">{s.step}</div>
                <h3 className="cpa-step-title">{s.title}</h3>
                <p className="cpa-step-desc">{s.desc}</p>
                {i < 3 && <div className="cpa-step-arrow">→</div>}
              </div>
            );
          })}
        </div>

        <div className="cpa-merits">
          {merits.map((m) => (
            <span className="cpa-merit" key={m}>✔ {m}</span>
          ))}
        </div>

        <p className="cpa-note">※ 取材ツアーへの参加は別途ご相談ください</p>
      </div>
    </section>
  );
}
