import { Nav } from "./section/Nav";
import { HeroSection } from "./section/HeroSection";
import { ServicesSection } from "./section/ServicesSection";
import { StatsSection } from "./section/StatsSection";
import { WorkSection } from "./section/WorkSection";
import { CTASection } from "./section/CTASection";
import { Footer } from "./section/Footer";

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
