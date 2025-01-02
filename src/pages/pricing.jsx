import BonusesSection from "@/components/BonusesSection";
import ContactSupportSection from "@/components/ContactSupportSection";
import MissionSection from "@/components/MissionSection";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div>
      <Pricing />
      <BonusesSection />
      <MissionSection />
      <ContactSupportSection />
    </div>
  );
}
