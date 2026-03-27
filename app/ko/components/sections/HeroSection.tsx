"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = 881;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => setPhase(1), 400);
        setTimeout(() => setPhase(2), 1200);
        setTimeout(() => setPhase(3), 2000);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-v2" ref={sectionRef}>
      <div className="hero-v2-bg">
        <Image
          src="/images/hero/omakase.png"
          alt="일본 다이닝 경험"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="hero-v2-overlay" />
      </div>

      <div className="container hero-v2-content">
        <div className="hero-v2-big-number">
          <span className="hero-v2-num">{count}만 명.</span>
        </div>

        <p className={`hero-v2-subtitle ${phase >= 1 ? "visible" : ""}`}>
          매년 일본을 찾는 한국인 관광객.
        </p>

        <div className="hero-v2-divider" />

        <h1 className={`hero-v2-hook ${phase >= 2 ? "visible" : ""}`}>
          그들은 지금, 귀사의 가게 앞을 그냥 지나치고 있습니다.
        </h1>

        <p className={`hero-v2-sub-hook ${phase >= 2 ? "visible" : ""}`}>
          그들을 귀사의 자리로 안내하는 방법이 있습니다.
        </p>

        <div className={`hero-v2-actions ${phase >= 3 ? "visible" : ""}`}>
          <a href="#contact" className="btn primary">파트너십 문의하기</a>
          <a
            href="https://jameat.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost-light"
          >
            JAMEAT 예약 플랫폼 &rarr;
          </a>
        </div>

        <div className="hero-v2-badge">
          <span>JAM</span>
          <span className="hero-v2-badge-sub">합동회사 JAM ｜ 회사소개 자료 2026.03</span>
        </div>
      </div>
    </section>
  );
}
