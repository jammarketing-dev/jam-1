import { Smartphone, CalendarCheck, DoorOpen, HandCoins } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function CpaModel() {
  const steps: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
    {
      step: "STEP 1",
      title: "집객",
      desc: "인플루언서가 네이버 블로그에서 귀사 가게를 소개",
      icon: Smartphone,
    },
    {
      step: "STEP 2",
      title: "예약",
      desc: "한국인 고객이 JAMEAT에서 예약",
      icon: CalendarCheck,
    },
    {
      step: "STEP 3",
      title: "방문",
      desc: "사전 입금 확인 + 리마인더 → 확실한 방문",
      icon: DoorOpen,
    },
    {
      step: "STEP 4",
      title: "보수",
      desc: "방문 실적에 따라 성과 보수 지급",
      icon: HandCoins,
    },
  ];

  const merits = [
    "초기 비용 0원",
    "방문한 만큼만 지불",
    "계약 구속 없음",
  ];

  return (
    <section id="model" className="section section-warm">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">BUSINESS MODEL</p>
          <h2>성과보수형——리스크 없이 시작할 수 있습니다</h2>
          <p className="section-subtitle">
            JAM의 집객 지원은 &ldquo;CPA(성과보수형)&rdquo; 모델입니다.
            실제로 예약이 들어온 만큼만 지불하시면 되므로, 초기 비용 없이 도입 가능합니다.
          </p>
        </div>

        <p className="cpa-flow-label">
          &ldquo;집객 → 예약 → 방문 → 보수&rdquo;의 심플한 흐름
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

        <p className="cpa-note">※ 취재 투어 참가는 별도 상담 바랍니다</p>
      </div>
    </section>
  );
}
