# CLAUDE.md — jam-website (JAM 마케팅 홈페이지)

> Next.js 마케팅 홈페이지
> **GitHub**: https://github.com/jammarketingceo-creator/jam (main 브랜치)
> **Vercel 연결**: jammarketing-dev Vercel 계정에서 연결 예정
> **마지막 작업일**: 2026-03-24

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

## 디자인 방향 (2026-03-24 에디토리얼 전면 개편)

- **스타일**: Clean Minimal Editorial (Kinfolk/Cereal 매거진 톤)
- **컬러**: 크림 배경 `#FAFAF7` + 골드 액센트 `#C9A96E` + 다크 텍스트 `#1A1A1A`
- **이전 스타일**: 다크 테마 `#050509` + 오렌지 `#ff6b4a` → **폐기**
- **이미지**: Higgsfield AI 생성 에디토리얼 사진 18장 (`public/images/`)
- **레퍼런스**: advizexperts.fr (럭셔리 B2B 느낌)

## 구현 상태

| 섹션 | 상태 | 비고 |
|------|------|------|
| Header + JAM 로고 SVG | ✅ | 에디토리얼 라이트 테마 |
| Hero (풀 이미지 + 통계 스트립) | ✅ | 오마카세 이미지 + 151/42/407/¥5천만 |
| 비즈니스 플로우 (5단계 그리드) | ✅ | 채널 배지 포함 |
| JAMEAT 하이라이트 | ✅ | |
| Services 이미지 갤러리 | ✅ 신규 | 4장 에디토리얼 사진 2x2 그리드 |
| Portfolio 갤러리 | ✅ 신규 | 6장 음식/인테리어 사진 3열 + 호버 |
| 실적 통계 + 지역 바 차트 | ✅ | |
| 성공 사례 (3열 카드) | ✅ | |
| Client Voices | ✅ 신규 | 3명 인물 포트레이트 + 후기 카드 |
| 타임라인 (온보딩 프로세스) | ✅ | |
| 문의 섹션 + 폼 | ✅ | |

## 이미지 구조 (`public/images/`)

```
hero/        omakase.png, ramen_bowl.png, ginza.png
services/    influencer.png, strategy.png, sns_flatlay.png, bts_photo.png
portfolio/   sushi_nigiri.png, ramen_closeup.png, kaiseki.png, sake_pour.png, robatayaki.png, restaurant.png
client_voices/ head_chef.png, female_manager.png, sushi_chef.png
contact/     tokyo_alley.png, zen_garden.png
```

## 잔여 작업

| 항목 | 우선순위 |
|------|---------|
| GitHub push (에디토리얼 개편 커밋) | 🔴 높음 |
| Vercel 연결 확인 | 🔴 높음 — jammarketing-dev 계정 |
| 창업자 실제 사진 교체 (박유이·주상원) | 중 — 사진 업로드 후 |
| OG/Twitter 이미지 에디토리얼 업데이트 | 낮음 |
| contact 배경 이미지 활용 | 낮음 |
