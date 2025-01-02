import HourglassCard from "./HourglassCard";
import TimelineCard from "./TimelineCard";

export default function HowMuchTme() {
  const timelines = [
    { hours: "24h", description: "LLC formation" },
    { hours: "24h", description: "Company docs delivery" },
    { hours: "120h", description: "EIN acquisition" },
    { hours: "165h", description: "Avg. order delivery time" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4428e6] to-[#2a1a7b] flex items-center justify-center px-6">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="flex-1 text-white">
            <h1 className="text-2xl font-bold mb-6">
              How much time to get your LLC?
            </h1>
            <p className="text-sm mb-8 leading-relaxed">
              At Privatly we count delivery time by business hours, not by days
              or weeks like others do. <br />
              <br />
              However, please be aware that these timelines are applicable only
              if you opt for LLC registration in one of our recommended US
              states.
            </p>
            <HourglassCard />
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-white bg-opacity-10 rounded-lg p-6 space-y-6">
            {timelines.map((item, index) => (
              <TimelineCard
                key={index}
                hours={item.hours}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
