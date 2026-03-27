export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span className="logo" style={{ fontSize: "12px", padding: "4px 8px" }}>JAM</span>
          <span style={{ marginLeft: "12px", opacity: 0.5 }}>Japan Associate Marketing</span>
        </div>
        <div style={{ textAlign: "right", opacity: 0.5, fontSize: "11px", lineHeight: "1.8" }}>
          <div>합동회사 JAM · 도쿄 시부야구 진구마에 6-23-4 쿠와노 빌딩 2층</div>
          <div>&copy; 2026 JAM · jam-marketing.net · jameat.co.kr</div>
        </div>
      </div>
    </footer>
  );
}
