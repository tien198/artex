import { Nav } from "./section/nav";
import { HeroSection } from "./section/hero-section";
import { ServicesSection } from "./section/services-section";
import { StatsSection } from "./section/stats-section";
import { WorkSection } from "./section/work-section";
import { CTASection } from "./section/cta-section";
import { Footer } from "./section/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-bg-deep">
      <Nav />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WorkSection />
      <CTASection />
      <Footer />
    </main>
  );
}
