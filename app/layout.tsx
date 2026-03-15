import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JAM – Japan Associate Marketing | 일본 현지 마케팅 파트너",
  description:
    "합동회사 JAM – 일본 업체를 한국 시장으로 연결하는 원스톱 마케팅 파트너. 인플루언서 프로그램, CPA 성과 측정, JamEat 예약대행까지 한 번에 처리합니다.",
  keywords: [
    "일본 마케팅",
    "한국 인플루언서",
    "일본 맛집 예약",
    "JAM 마케팅",
    "JamEat",
    "Japan marketing Korea",
    "CPA 마케팅",
    "일본 업체 한국 홍보",
    "인바운드 마케팅",
  ],
  authors: [{ name: "합동회사 JAM" }],
  creator: "합동회사 JAM",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://jam-marketing.vercel.app",
    siteName: "JAM – Japan Associate Marketing",
    title: "JAM – 일본 업체를 한국 시장으로 연결하는 원스톱 파트너",
    description:
      "인플루언서 취재부터 CPA 성과 측정, JamEat 예약 연결까지. 일본 188개+ 제휴 점포와 함께 성장합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAM – Japan Associate Marketing",
    description:
      "일본 업체를 한국 시장으로 연결하는 원스톱 마케팅 파트너. 인플루언서·CPA·예약대행 통합 운영.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
