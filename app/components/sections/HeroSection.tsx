"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState(0); // 0: counting, 1: subtitle, 2: hook, 3: cta
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
          alt="Japanese dining experience"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="hero-v2-overlay" />
      </div>

      <div className="container hero-v2-content">
        <div className="hero-v2-badge">
          <span className="hero-v2-badge-sub">合同会社 JAM ｜ 会社紹介資料 2026.03</span>
        </div>

        <div className="hero-v2-big-number">
          <span className="hero-v2-num">{count}万 名。</span>
        </div>

        <p className={`hero-v2-subtitle ${phase >= 1 ? "visible" : ""}`}>
          毎年日本を訪れる韓国人観光客。
        </p>

        <div className="hero-v2-divider" />

        <h1 className={`hero-v2-hook ${phase >= 2 ? "visible" : ""}`}>
          貴店の前を、素通りしています。
        </h1>

        <p className={`hero-v2-sub-hook ${phase >= 2 ? "visible" : ""}`}>
          彼らを貴店の席へ案内する方法があります。
        </p>

        <div className={`hero-v2-actions ${phase >= 3 ? "visible" : ""}`}>
          <a href="#contact" className="btn primary">パートナーシップのお問い合わせ →</a>
          <a
            href="https://jameat.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost-light"
          >
            JAMEAT 予約プラットフォーム →
          </a>
        </div>

        <div className="hero-v2-scroll-hint">
          <span>SCROLL</span>
          <div className="hero-v2-scroll-line" />
        </div>
      </div>
    </section>
  );
}
