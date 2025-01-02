export default function LaunchAnywhereSection() {
  const profiles = [
    {
      id: 1,
      name: "Profile 1",
      top: "20%",
      left: "40%",
      image: "/m1.jpg",
    },
    {
      id: 2,
      name: "Profile 2",
      top: "30%",
      left: "70%",
      image: "/m2.jpeg",
    },
    {
      id: 3,
      name: "Profile 3",
      top: "60%",
      left: "50%",
      image: "/m3.jpg",
    },
    {
      id: 4,
      name: "Profile 4",
      top: "40%",
      left: "30%",
      image: "/m1.jpg",
    },
    {
      id: 5,
      name: "Profile 5",
      top: "70%",
      left: "80%",
      image: "/m2.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="flex flex-col md:flex-row items-center py-16 px-8">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Launch your company from <br />
            <a href="#" className="text-green-600 underline hover:text-green-800">
              → anywhere
            </a>
          </h2>
          <p className="text-gray-700">
            Act now! Gain exclusive access to top-tier financial solutions,
            reserved solely for US-based companies, and significantly boost your
            business’s potential for success.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-blue-600 rounded-lg w-full h-64 relative overflow-hidden">
            {/* World Map */}
            <div className="absolute inset-0 opacity-50">
              <img
                src="/w-map.jpg"
                alt="World Map"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Profile Icons */}
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="absolute"
                style={{
                  top: profile.top,
                  left: profile.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
