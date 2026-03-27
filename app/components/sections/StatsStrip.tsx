export default function StatsStrip() {
  const stats = [
    { num: "151", label: "취재 완료 가게" },
    { num: "42", label: "전속 블로거" },
    { num: "407", label: "블로그 포스팅" },
    { num: "¥5천만", label: "연간 처리 매출" },
  ];

  return (
    <div className="hero-stats-strip">
      <div className="container">
        <div className="stats-grid">
          {stats.map(({ num, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
