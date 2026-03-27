"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "サービス" },
  { href: "#results", label: "事例紹介" },
  { href: "#jameat", label: "会社概要" },
  { href: "#why-korea-section", label: "採用情報" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#" className="logo-text">JAM</a>

          <nav className="nav">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <a href="#contact" className="header-cta">お問い合わせ</a>

          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span className={`ham-line ${open ? "open" : ""}`} />
            <span className={`ham-line ${open ? "open" : ""}`} />
            <span className={`ham-line ${open ? "open" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-overlay ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav className={`mobile-drawer ${open ? "open" : ""}`} aria-label="モバイルメニュー">
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
          お問い合わせ
        </a>
      </nav>
    </>
  );
}
