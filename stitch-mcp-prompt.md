# JAM Landing Page — Google Stitch MCP 실행 프롬프트

> **용도**: Claude Code 터미널에서 이 파일을 읽고 Stitch MCP 도구를 순차 실행
> **실행법**: Claude Code에서 `이 파일 읽고 Stitch MCP로 실행해줘` 라고 요청

---

## ■ STEP 1: 디자인 시스템 생성

`mcp__stitch__create_design_system` 호출:

```
Name: JAM Marketing Landing Page
Description: Japanese B2B marketing landing page for JAM - Korean tourist restaurant reservation platform targeting Japanese restaurant owners

Color Palette:
- Primary (Cream/Background): #FAFAF7
- Accent (Gold): #C9A96E
- Dark (Text/Hero): #1A1A1A
- White: #FFFFFF
- Light Gray: #F5F5F0
- Medium Gray: #E8E8E0
- Dark Gray: #333333
- Warm Background: #FAF8F5
- Success Green: #2D5016

Typography:
- Primary Font: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, sans-serif
- Font CDN: https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css
- Heading Weight: 700-800
- Body Weight: 400
- Small/Label Weight: 500-600

Spacing:
- Section Padding: 120px vertical (desktop), 80px (mobile)
- Container Max Width: 1200px
- Card Gap: 32px
- Card Border Radius: 16px

Design Principles:
- Minimal, premium feel (luxury restaurant marketing)
- Japanese text throughout (target: Japanese restaurant owners)
- Gold (#C9A96E) for accents, CTAs, highlights
- Dark sections for data/stats contrast
- Warm sections for CPA model
- Plenty of whitespace
- Subtle animations on scroll
```

---

## ■ STEP 2: 프로젝트 생성

`mcp__stitch__create_project` 호출:

```
Name: JAM Marketing Landing Page
Description: 10-section Japanese B2B landing page for JAM (합동会社JAM). Targets Japanese restaurant owners to partner with JAM's Korean tourist reservation platform JAMEAT. Hooking flow: Problem → Trust → Data → Solution → Model → Market → Services → Contact.
```

---

## ■ STEP 3: 10개 화면 순차 생성

각 화면을 `mcp__stitch__generate_screen_from_text`로 생성. **반드시 아래 순서대로, 일본어 텍스트를 정확히 포함**할 것.

---

### Screen 1: Hero Section

```
Screen Name: Hero — 881万 Counter Hook

Full-width hero section with dark overlay background image (Japanese omakase restaurant).

Layout: Centered vertically and horizontally, max-width 800px.

Content (top to bottom):
1. Badge: "合同会社 JAM ｜ 会社紹介資料 2026.03" — small gold-bordered pill badge
2. Big animated counter number: "881万 名。" — font-size 72px, bold, white with subtle gold gradient
3. Subtitle: "매년 일본을 찾는 한국인 관광객." — font-size 18px, white, 60% opacity
4. Gold divider line: 60px wide, 2px, color #C9A96E
5. Main hook text: "貴店の前を、素通りしています。" — font-size 36px, bold, white
6. Sub-hook: "彼らを貴店の席へ案内する方法があります。" — font-size 18px, white, 70% opacity
7. Two CTA buttons side by side:
   - Primary (gold bg #C9A96E, dark text): "パートナーシップのお問い合わせ"
   - Ghost (white border, white text): "JAMEAT 予約プラットフォーム →"

Background: Dark overlay (rgba(0,0,0,0.55)) over a restaurant interior photo.
Animation: Counter animates from 0 to 881 over 2 seconds. Elements fade in sequentially.
```

---

### Screen 2: Pain Points Section

```
Screen Name: Pain Points — Restaurant Owner Challenges

Section background: #FAFAF7 (cream). Padding 120px top/bottom.

Header:
- Eyebrow: "YOUR CHALLENGES" — small caps, gold, letter-spacing 3px
- Title: "飲食店オーナー様、こんなお悩みありませんか？" — font-size 36px, bold, dark

Layout: 2x2 grid of pain cards, gap 32px, max-width 1000px centered.

4 Pain Cards (each card: white bg, border-radius 16px, padding 40px, subtle shadow):

Card 1:
- Icon: Large ✕ in circle, red/coral
- Title: "「予約したのに来ない」"
- Label: "ノーショー問題"
- Description: "Googleや他の予約プラットフォーム経由の外国人予約は、ノーショー率が高く、食材ロスや席の空きが店の収益を圧迫しています。"

Card 2:
- Icon: Large ✕ in circle
- Title: "「言葉が通じない」"
- Label: "コミュニケーショントラブル"
- Description: "アレルギー対応、メニュー説明、予約内容の確認…外国人客との意思疎通ができず、スタッフの負担が増えていませんか？"

Card 3:
- Icon: Large ✕ in circle
- Title: "「集客したいが、どうすれば良いか分からない」"
- Label: "方法が分からない"
- Description: "韓国人観光客は年間880万人以上が訪日。この巨大な市場にリーチしたくても、韓国SNSや検索エンジンの仕組みが分からず、手が出せない。"

Card 4:
- Icon: Large ✕ in circle
- Title: "「メニューや価格が古いまま紹介されている」"
- Label: "古い情報のトラブル"
- Description: "古いブログ記事がそのまま残り、実際のメニュー・価格と違う情報で集客され、現場でトラブルになるケースが多発。"

Below cards: Down arrow "↓" then resolution text:
"JAMが、これらすべて解決します。" — centered, bold, gold color
```

---

### Screen 3: Trust Section — Major Client Portfolio

```
Screen Name: Trust — Enterprise Clients & Testimonials

Section background: #FAFAF7. Padding 120px.

Header:
- Eyebrow: "TRUSTED BY" — gold, small caps
- Title: "大手企業からの信頼" — 36px bold
- Subtitle: "創業以来4年間にわたり、日本の大手企業・有名ブランドとのマーケティングプロジェクトを継続的に実施してきました。"

--- Tier 1 Brands (3 large cards, horizontal row) ---
Each card: White bg, large padding, border-radius 16px, gold top border accent

1. "サッポロビール" | subtitle "日本4大ビールブランド"
2. "星野リゾート" | subtitle "日本最高級リゾートチェーン"
3. "銀だこ（オールウェイズ）" | subtitle "日本最大たこ焼きチェーン"

--- Tier 2 Brands (6 small cards, 3x2 grid) ---
Each: Compact card with name + category badge

1. "GYROホールディングス" — badge: 飲食
2. "Hotel M gallery" — badge: ホテル
3. "城島高原パーク" — badge: 観光
4. "SASAYAホールディングス" — badge: 飲食
5. "浜倉的商店製作所" — badge: 飲食
6. "喜太郎寿司" — badge: 飲食

--- Influencer Badge (centered block) ---
Title: "韓国トップクラスのインフルエンサー約80名が所属。"
Desc: "日本の飲食店・ホテル・観光施設向けに最適なプロモーションを実施。毎月平均3地域を現地取材——北海道から沖縄まで全国対応。"

--- Client Voices (3 cards with images) ---
Layout: 3-column grid

Card 1: Image placeholder (chef portrait)
- Quote: "ブログ掲載後、わずか1ヶ月で韓国人の予約が3倍に増えました。JAMなしでは不可能な結果です。"
- Name: "大阪 焼肉専門店"
- Role: "Head Chef"

Card 2: Image placeholder (female manager)
- Quote: "マーケティングから予約管理までワンストップで対応してくれるので、私たちは料理に集中できました。"
- Name: "福岡 居酒屋"
- Role: "Manager"

Card 3: Image placeholder (sushi chef)
- Quote: "韓国人のお客様が安定的に来店するようになり、売上が安定しました。毎月の成果レポートも受け取っています。"
- Name: "北海道 寿司専門店"
- Role: "Representative"
```

---

### Screen 4: Data Proof — Statistics Dashboard

```
Screen Name: Data Proof — 4 Years of Results (Dark Theme)

Section background: #1A1A1A (dark). ALL text white/light. Padding 120px.

Header:
- Eyebrow: "PROVEN RESULTS" — gold
- Title: "4年間の実績——数字が証明します" — white, 36px bold
- Subtitle: "2022年の創業以来、「現場取材×データ分析×集客」の一貫体制で、着実に成果を積み上げてきました。" — white 70% opacity

--- 6 Big Stats (3x2 grid) ---
Each stat: Large number in gold (#C9A96E), label below in white, note in gray

1. "8,093件" | "累計予約数" | note: "有効 5,721件"
2. "141店舗" | "提携飲食店" | note: "3地域"
3. "29回" | "現地取材ツアー" | note: "実施済み"
4. "1,107件" | "ブログ記事制作" | note: "オリジナル記事"
5. "40名" | "専属インフルエンサー" | note: "S/A/B/C/D 等級制"
6. "85.5%" | "CPAマッチング率" | note: "有効予約のうち"

--- TOP3 Ranking ---
Title: "▶ 予約実績 TOP3 店舗" — gold

3 ranking cards (horizontal):
1. Gold medal icon | "ホルモン風土 すすきの" | "752件"
2. Silver medal icon | "サイリン（焼肉）" | "712件"
3. Bronze medal icon | "イモト（焼肉）" | "378件"

--- Regional Bar Chart ---
Title: "地域別 取材店舗 現況" — white

4 horizontal bars:
- 福岡: 72店 / 11回ツアー — bar width ~100% (widest)
- 大阪: 41店 / 5回ツアー — bar width ~57%
- 北海道: 33店 / 6回ツアー — bar width ~46%
- 東京・その他: 5店 / 3回ツアー — bar width ~7%

Bar color: gold (#C9A96E). Background: dark gray (#333).
```

---

### Screen 5: JAMEAT Platform

```
Screen Name: JAMEAT Platform — Solution Details

Section background: #FAFAF7. Padding 120px.

Header:
- Eyebrow: "JAMEAT PLATFORM" — gold
- Title: "自社プラットフォーム「JAMEAT」で現場の問題を解決" — 36px bold
- Subtitle: "JAMEAT.CO.KRは、韓国人観光客向けの日本飲食店予約代行プラットフォームです。単なる予約サイトではなく、飲食店オーナー様の「現場の困りごと」を解決するために設計されています。"

--- 4 Strength Cards (2x2 grid) ---
Each card: White bg, border-radius 16px, padding 40px

Card 1:
- Number badge: "①" in gold circle
- Title: "ノーショー率 2%以下"
- Desc: "事前入金確認制度と予約前日のリマインダー連絡により、ノーショー率を2%以下に抑えています。Googleや他プラットフォーム経由の外国人予約と比較して、圧倒的に低い数字です。"

Card 2:
- Number badge: "②"
- Title: "24時間カスタマーセンター常駐"
- Desc: "予約当日の緊急連絡、道案内、アレルギー対応、メニュー確認など、現場で発生する問題に即座対応。日本語・韓国語バイリンガルスタッフが店舗とお客様の間に立ちます。"

Card 3:
- Number badge: "③"
- Title: "AIで常に最新の情報を維持"
- Desc: "メニュー変更、価格改定、営業時間の変更など、店舗情報をAIがリアルタイムで更新。古い情報のまま集客されるトラブルを防ぎます。"

Card 4:
- Number badge: "④"
- Title: "多言語対応でコミュニケーション問題を解消"
- Desc: "予約時にアレルギー、人数変更、席の希望などを事前に確認。当日は店舗側が迎えるだけ。スタッフの負担を最小限に抑えます。"

--- Portfolio Gallery ---
Title: "私たちが取材したお店" — centered, 24px bold

2x3 image grid (6 items), each with overlay caption:
1. "寿司にぎりおまかせ"
2. "匠のラーメン"
3. "懐石料理"
4. "日本酒ペアリング"
5. "炉端焼き"
6. "レストランインテリア"

Image style: 3:2 aspect ratio, rounded corners, dark gradient overlay at bottom for caption text.
```

---

### Screen 6: CPA Model — Business Model

```
Screen Name: CPA Model — Risk-Free Partnership (Warm Theme)

Section background: #FAF8F5 (warm cream). Padding 120px.

Header:
- Eyebrow: "BUSINESS MODEL" — gold
- Title: "成果報酬型——リスクなく始められます" — 36px bold
- Subtitle: "JAMの集客支援は、「CPA（成果報酬型）」モデルです。実際に予約が入った分だけお支払いいただくため、初期費用なしで導入可能です。"

Flow Label: "「集客 → 予約 → 来店 → 報酬」のシンプルな流れ" — centered, gold

--- 4-Step Journey (horizontal flow with arrows) ---

STEP 1 — 集客 (Promotion)
- Icon: Smartphone outline, gold stroke
- Desc: "インフルエンサーがNAVERブログで貴店を紹介"

→ arrow →

STEP 2 — 予約 (Booking)
- Icon: Calendar check outline, gold stroke
- Desc: "韓国人客がJAMEATで予約"

→ arrow →

STEP 3 — 来店 (Visit)
- Icon: Door open outline, gold stroke
- Desc: "事前入金確認＋リマインダー → 確実に来店"

→ arrow →

STEP 4 — 報酬 (Payment)
- Icon: Hand coins outline, gold stroke
- Desc: "来店実績に応じて成果報酬をお支払い"

Each step: Circle icon (60px, gold border) → Step badge → Title → Description

--- 3 Key Merits (horizontal, checkmark bullets) ---
✓ "初期費用 0円"
✓ "来店分だけのお支払い"
✓ "契約縛りなし"

Note: "※ 取材ツアーへの参加は別途ご相談ください" — small gray text
```

---

### Screen 7: Why Korea — Market Analysis

```
Screen Name: Why Korea — Korean Tourist Market Data

Section background: #FAFAF7. Padding 120px.

Header:
- Eyebrow: "WHY KOREA" — gold
- Title: "なぜ韓国人観光客なのか" — 36px bold
- Subtitle: "2024年、訪日外国人は過去最大の3,687万人を記録。その中で韓国からの訪日客は881万人で圧倒的第1位。"

--- 3 Key Insight Cards (horizontal row) ---

Card 1: "881万人" (big gold number) | "訪日韓国人観光客" | "国籍別 圧倒的1位"
Card 2: "87%" (big gold number) | "NAVER 検索シェア" | "韓国 = Googleではなく NAVER"
Card 3: "75.2%" (big gold number) | "ブログ参考率" | "旅行情報収集時"

--- Visitor Table ---
Styled table, 4 rows. Korea row highlighted with gold left border.

| 国 | 訪日客数 | 前年比 |
|---|---|---|
| 韓国 (highlighted) | 881万人 | +26.7% |
| 中国 | 698万人 | +187.9% |
| 台湾 | 604万人 | +43.8% |
| 香港 | 272万人 | +33.2% |

--- NAVER Info Block ---
Dark card or bordered block:
Title: "▶ 韓国人はNAVERで食べログを探す"
Text: "韓国では検索エンジンシェア87%をNAVERが占めます。日本の「食べログ」にあたるのが「NAVERブログ」。韓国人観光客は旅行前にNAVERで食べたいお店を検索し、ブログ記事を参考に予約します。"
Highlight: "→ 貴店の情報が、NAVER上で韓国人観光客に直接届きます。" — gold text or gold left border
```

---

### Screen 8: Services Gallery

```
Screen Name: Services — Full Service Lineup

Section background: #FAFAF7. Padding 120px.

Header:
- Eyebrow: "SERVICES" — gold
- Title: "JAMのサービス一覧" — 36px bold
- Subtitle: "取材企画からコンテンツ制作、配信、予約処理まで——ワンストップで進行します。"

--- 4 Service Cards (alternating image left/right) ---

Service 1 (image LEFT, text RIGHT):
- Number: "01."
- Title: "インフルエンサーマーケティング"
- Desc: "NAVERブログ・インスタグラム・ユーチューブで貴店の魅力を韓国人観光客に発信。専属インフルエンサー40名が実際に貴店を訪問し、リアルな体験記事を制作します。"
- Image placeholder: Influencer creating content at restaurant

Service 2 (image RIGHT, text LEFT):
- Number: "02."
- Title: "現地取材ツアー（ファムツアー）"
- Desc: "毎月平均3地域で実施。インフルエンサーが実際に来店し、食事し、撮影し、記事を制作。「食べログ」のようなリアルなレビューが生まれます。"
- Image placeholder: Behind-the-scenes food photography

Service 3 (image LEFT, text RIGHT):
- Number: "03."
- Title: "JAMEAT 予約代行プラットフォーム"
- Desc: "ノーショー率2%以下・24時間CS・多言語対応・最新情報自動更新。予約から来店までをワンストップでサポートします。"
- Image placeholder: Platform/strategy meeting

Service 4 (image RIGHT, text LEFT):
- Number: "04."
- Title: "インバウンドコンサルティング"
- Desc: "韓国市場に特化したSEO対策、SNS運用、メディア戦略の提案。外国人観光客誘致のためのプロモーション設計を総合的にサポートします。"
- Image placeholder: Social media flatlay with food

Each card: 4:3 image ratio, border-radius 16px, gap between image and text. Alternating layout (even cards flip image/text sides).
```

---

### Screen 9: Contact Section

```
Screen Name: Contact — Partnership Inquiry

Section background: #FAFAF7. Padding 120px.

Header:
- Title: "飲食店オーナー様、韓国人のお客様がもっと必要ですか？" — 32px bold

Left Column:
- Lead copy: "JAMは単なる広告代行ではありません。コンテンツ制作から予約処理、成果測定まで実売上が生まれる仕組みを一緒に作ります。"
- 4 bullet points (gold dots):
  • "初期費用なしの成果基盤CPA契約"
  • "契約後3〜4週間で最初のコンテンツ掲載"
  • "月別成果レポート提供"
  • "1〜2営業日以内にご返信"

Right Column — Contact Card (white bg, shadow, border-radius 16px):
- Card title: "今すぐお問い合わせ"
- Form fields: 会社名/店舗名, ご担当者名, メールアドレス, 電話番号, お問い合わせ内容 (textarea)
- Submit button: Gold (#C9A96E) bg, "送信する"
- Divider line
- Direct contact info:
  | 韓国 | +82-10-9637-1397 |
  | 日本 | +81-90-4864-4598 |
  | メール | info@jameat.co.kr |
  | LINE | @jam_marketing |
  | WEB | jameat.co.kr |

Below: Closing message centered:
"「食の現場」を知る私たちが、貴店の成功を全力でサポートします。"
```

---

### Screen 10: Footer

```
Screen Name: Site Footer

Simple, minimal footer. Background: #1A1A1A, text white.

Layout: Two columns

Left:
- "JAM" logo text (bold, small gold-bordered box)
- "Japan Associate Marketing" — 50% opacity

Right (small text, 50% opacity):
- "합동会社 JAM · 東京都渋谷区神宮前6-23-4 桑野ビル2階"
- "© 2026 JAM · jam-marketing.net · jameat.co.kr"
```

---

## ■ STEP 4: 디자인 시스템 적용

`mcp__stitch__apply_design_system` 호출:

```
Step 1에서 만든 디자인 시스템을 전체 10개 화면에 일괄 적용.
모든 화면에 동일한 컬러 팔레트, 타이포그래피, 스페이싱이 반영되도록 한다.
```

---

## ■ STEP 5: 검토 및 수정

`mcp__stitch__edit_screens` 또는 `mcp__stitch__generate_variants` 호출:

### 검토 체크리스트:
1. **일본어 텍스트 정확성** — 모든 섹션의 일본어가 위 프롬프트와 일치하는지 확인
2. **컬러 일관성** — Gold(#C9A96E), Cream(#FAFAF7), Dark(#1A1A1A) 3색 시스템 준수
3. **섹션 순서** — Hero → Pain → Trust → Data → JAMEAT → CPA → WhyKorea → Services → Contact → Footer
4. **반응형** — 모바일(375px), 태블릿(768px), 데스크톱(1200px+)
5. **CTA 연결** — 모든 문의 버튼이 Contact 섹션으로 스크롤
6. **다크 섹션** — DataProof만 다크(#1A1A1A), CPA는 웜(#FAF8F5)
7. **이미지 비율** — 포트폴리오 3:2, 서비스 4:3, Hero 전체폭

### 수정 요청 예시:
```
edit_screens: "Hero 섹션의 카운터 숫자 크기를 더 크게 (80px → 96px),
Trust 섹션 Tier1 카드에 gold top border 추가,
DataProof 통계 숫자 색상을 #C9A96E gold로 통일"
```

### 변형 생성 (선택):
```
generate_variants: "Hero 섹션을 3가지 변형으로 —
A: 현재 스타일 (다크 오버레이 + 센터 텍스트)
B: 좌측 텍스트 + 우측 이미지 분할
C: 비디오 배경 스타일"
```

---

## ■ 참고: 기존 이미지 에셋 목록

프로젝트의 `public/images/` 디렉토리에 이미 준비된 이미지:

```
hero/omakase.png          — Hero 배경
contact/restaurant_bg.png — Contact 배경 (선택)
portfolio/omakase.png     — 오마카세
portfolio/ramen.png       — 라멘
portfolio/kaiseki.png     — 가이세키
portfolio/sake.png        — 사케 페어링
portfolio/robata.png      — 로바타야키
portfolio/interior.png    — 인테리어
services/influencer.png   — 인플루언서
services/bts_photo.png    — 취재 현장
services/strategy.png     — 전략 미팅
services/sns_flatlay.png  — SNS 플랫레이
client_voices/head_chef.png    — 셰프 포트레이트
client_voices/female_manager.png — 매니저 포트레이트
client_voices/sushi_chef.png   — 스시 셰프 포트레이트
```

---

## ■ Claude Code 실행 요약

Claude Code에서 아래 순서로 요청:

1. "이 파일의 STEP 1 읽고 `mcp__stitch__create_design_system` 실행해줘"
2. "STEP 2 읽고 `mcp__stitch__create_project` 실행해줘"
3. "STEP 3의 Screen 1부터 Screen 10까지 순서대로 `mcp__stitch__generate_screen_from_text` 실행해줘"
4. "STEP 4 읽고 `mcp__stitch__apply_design_system` 실행해줘"
5. "전체 결과 확인하고 STEP 5 체크리스트 기준으로 수정해줘"

또는 한 번에: **"이 파일 전체를 읽고 STEP 1~5를 순차적으로 전부 실행해줘"**
