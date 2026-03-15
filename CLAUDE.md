# CLAUDE.md — jam-website (JAM 마케팅 홈페이지)

> Next.js 마케팅 홈페이지
> **배포 URL**: https://jam-marketing.vercel.app
> **마지막 작업일**: 2026-02-22

---

## 스택

- Next.js 14 App Router + Tailwind CSS v4 + plain CSS
- Pretendard Variable 폰트 (CDN via jsdelivr)
- 배포: Vercel

## 개발 명령어 (`jam-website/` 내에서 실행)

```bash
npm run dev    # 개발 서버 (localhost:3000)
npm run build  # 프로덕션 빌드
npm run lint   # ESLint
```

---

## 구현 상태

| 섹션 | 상태 | 비고 |
|------|------|------|
| Header (sticky nav) | ✅ 완료 | |
| Hero (통계 카드, CTA) | ✅ 완료 | |
| About | ✅ 완료 | |
| Services (4축) | ✅ 완료 | 인플루언서/JamEat/자체컨텐츠/VIRAL |
| Performance (실적 + 지역 바 차트) | ✅ 완료 | |
| Team | ✅ 완료 | PARK YUI, JOO SANGWON |
| Contact | ✅ 완료 | |
| Footer | ✅ 완료 | |

## 잔여 작업

| 항목 | 우선순위 |
|------|---------|
| 모바일 햄버거 메뉴 | 중 — 800px↓에서 nav 숨김만 됨 |
| 실제 문의 폼 | 중 — 현재 연락처 정보만 표시 |
| 팀/서비스 실제 이미지 | 낮음 — 현재 letter avatar |
| OG 이미지 생성 | 낮음 |
