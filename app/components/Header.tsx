"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#how", label: "비즈니스 모델" },
  { href: "#results", label: "성과" },
  { href: "#cases", label: "성공 사례" },
  { href: "#process", label: "프로세스" },
  { href: "#contact", label: "문의하기" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo-wrap">
            <Image src="/jam-logo.svg" alt="JAM" width={120} height={40} priority />
          </div>

          {/* 데스크탑 nav */}
          <nav className="nav">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          {/* 햄버거 버튼 (모바일 전용) */}
          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
          >
            <span className={`ham-line ${open ? "open" : ""}`} />
            <span className={`ham-line ${open ? "open" : ""}`} />
            <span className={`ham-line ${open ? "open" : ""}`} />
          </button>
        </div>
      </header>

      {/* 모바일 오버레이 */}
      <div
        className={`mobile-overlay ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* 모바일 드로어 */}
      <nav className={`mobile-drawer ${open ? "open" : ""}`} aria-label="모바일 메뉴">
        <div className="mobile-nav-links">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="mobile-nav-link" onClick={handleLinkClick}>
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="btn primary"
          style={{ marginTop: "auto", textAlign: "center", justifyContent: "center" }}
          onClick={handleLinkClick}
        >
          파트너십 문의하기
        </a>
      </nav>
    </>
  );
}
