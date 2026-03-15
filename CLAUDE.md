# CLAUDE.md — jam-website (JAM 마케팅 홈페이지)

> Next.js 마케팅 홈페이지
> **GitHub**: https://github.com/jammarketingceo-creator/jam (main 브랜치, push 완료)
> **Vercel 연결**: jammarketing-dev Vercel 계정에서 jammarketing-dev/jam-website repo 연결 예정
> **마지막 작업일**: 2026-03-15

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

## 구현 상태 (2026-03-15 전면 개편)

| 섹션 | 상태 | 비고 |
|------|------|------|
| Header + JAM 로고 SVG | ✅ 완료 | 오렌지 그라디언트 워드마크 |
| Hero (실제 통계 카드) | ✅ 완료 | 151개/42명/407건/¥5천만 (마스터 xlsx 기반) |
| 비즈니스 플로우 다이어그램 | ✅ 완료 | 5단계 + 채널 배지 (NAVER/Instagram/YouTube/TikTok) |
| JAMEAT 하이라이트 | ✅ 완료 | |
| 실적 통계 + 지역 바 차트 | ✅ 완료 | 후쿠오카 72/오사카 41/홋카이도 33 |
| 성공 사례 (3열 카드) | ✅ 완료 | 실제 데이터 기반 |
| 타임라인 (온보딩 프로세스) | ✅ 완료 | |
| 문의 섹션 | ✅ 완료 | |

## 잔여 작업

| 항목 | 우선순위 |
|------|---------|
| 팀/서비스 실제 이미지 | 낮음 — 현재 letter avatar |
| OG 이미지 생성 | 낮음 |

## 완료 작업 (2026-03-15)

| 항목 | 내용 |
|------|------|
| 모바일 햄버거 메뉴 | ✅ `Header.tsx` 클라이언트 컴포넌트 — 슬라이드 드로어 + 오버레이 |
| 실제 문의 폼 | ✅ `ContactForm.tsx` 클라이언트 컴포넌트 — 이름/이메일/식당명/지역/내용 입력 + mailto 폴백 |
