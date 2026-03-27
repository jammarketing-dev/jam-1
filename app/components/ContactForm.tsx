"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    restaurant: "",
    region: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");

    try {
      // mailto 폴백 (실제 API 연동 전까지)
      const subject = encodeURIComponent(`[JAM 파트너십 문의] ${form.restaurant || form.name}`);
      const body = encodeURIComponent(
        `이름: ${form.name}\n이메일: ${form.email}\n식당명: ${form.restaurant}\n지역: ${form.region}\n\n${form.message}`
      );
      window.location.href = `mailto:info@jam-marketing.net?subject=${subject}&body=${body}`;
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <p className="form-success-title">메일 앱이 열렸습니다</p>
        <p className="form-success-sub">
          info@jam-marketing.net 으로 직접 보내셔도 됩니다
        </p>
        <button className="btn ghost" style={{ marginTop: "12px" }} onClick={() => setState("idle")}>
          다시 작성
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="cf-name">담당자 이름 *</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            className="form-input"
            placeholder="홍길동"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="cf-email">이메일 *</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className="form-input"
            placeholder="example@restaurant.jp"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="cf-restaurant">식당명 / 업체명</label>
          <input
            id="cf-restaurant"
            name="restaurant"
            type="text"
            className="form-input"
            placeholder="○○ 레스토랑"
            value={form.restaurant}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="cf-region">지역</label>
          <select
            id="cf-region"
            name="region"
            className="form-input form-select"
            value={form.region}
            onChange={handleChange}
          >
            <option value="">선택해주세요</option>
            <option value="후쿠오카">후쿠오카</option>
            <option value="오사카">오사카</option>
            <option value="홋카이도">홋카이도</option>
            <option value="도쿄">도쿄</option>
            <option value="기타">기타</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="cf-message">문의 내용</label>
        <textarea
          id="cf-message"
          name="message"
          className="form-input form-textarea"
          placeholder="관심 있는 서비스나 궁금한 점을 자유롭게 적어주세요."
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn primary"
        style={{ width: "100%", justifyContent: "center", fontSize: "14px" }}
        disabled={state === "sending"}
      >
        {state === "sending" ? "전송 중…" : "문의 보내기 →"}
      </button>

      {state === "error" && (
        <p className="form-error">전송에 실패했습니다. 이메일로 직접 문의해 주세요.</p>
      )}
    </form>
  );
}
