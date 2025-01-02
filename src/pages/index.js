import BonusesSection from "@/components/BonusesSection";
import ContactFormSection from "@/components/ContactFormSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import HowMuchTme from "@/components/HowMuchTime";
import IncorporateUS from "@/components/IncorporateUS";
import LaunchAnywhereSection from "@/components/LaunchAnywhereSection";
import MissionSection from "@/components/MissionSection";
import Pricing from "@/components/Pricing";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyPrivatily from "@/components/WhyPrivatily";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyPrivatily />
      <HowMuchTme />
      <IncorporateUS />
      <Pricing />
      <BonusesSection />
      <TestimonialsSection />
      <MissionSection />
      <FAQSection />
      <LaunchAnywhereSection />
      <ContactFormSection />
    </div>
  );
}
