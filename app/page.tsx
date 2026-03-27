import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import PainPoints from "./components/sections/PainPoints";
import TrustSection from "./components/sections/TrustSection";
import DataProof from "./components/sections/DataProof";
import JameatPlatform from "./components/sections/JameatPlatform";
import CpaModel from "./components/sections/CpaModel";
import WhyKorea from "./components/sections/WhyKorea";
import ServicesGallery from "./components/sections/ServicesGallery";
import ContactSection from "./components/sections/ContactSection";
import SiteFooter from "./components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ① 빅넘버 후킹 */}
        <HeroSection />

        {/* ② 페인 포인트 — 공감 유도 */}
        <PainPoints />

        {/* ③ 신뢰 구축 — 대기업 레퍼런스 + 고객 후기 */}
        <TrustSection />

        {/* ④ 데이터 증명 — 숫자로 압도 */}
        <DataProof />

        {/* ⑤ JAMEAT 플랫폼 — 핵심 솔루션 */}
        <JameatPlatform />

        {/* ⑥ CPA 모델 — 비용 없이 시작 */}
        <CpaModel />

        {/* ⑦ 한국 시장 — 왜 한국인인가 */}
        <WhyKorea />

        {/* ⑧ 서비스 소개 */}
        <ServicesGallery />

        {/* ⑨ 문의 CTA */}
        <ContactSection />
      </main>

      {/* ⑩ 푸터 */}
      <SiteFooter />
    </>
  );
}
