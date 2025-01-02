import AboutSection from "@/components/AboutSection";
import AboutSectionStory from "@/components/AboutSectionStory";
import AdvantagesSection from "@/components/AdvantagesSection";
import CallToAction from "@/components/CallToAction";
import ContactSupportSection from "@/components/ContactSupportSection";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <AboutSectionStory />
      <AdvantagesSection />
      <CallToAction />
      <ContactSupportSection />
    </div>
  );
}
