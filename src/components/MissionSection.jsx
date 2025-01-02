export default function MissionSection() {
  return (
    <div className="container mx-auto px-4 py-4">
      <section className="flex flex-col md:flex-row items-center py-16 px-4 md:px-8 bg-white">
        {/* Left Column */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          <img
            src="/image-3-min-e1691414079436.png"
            alt="Woman with a tablet"
            className="w-96 h-auto rounded-lg"
          />
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission at <span className="text-green-600">LLC Boy</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            LLC Boy’s mission is to be the global partner for aspiring
            business owners, streamlining the path to company formation in the
            USA, UK, and Canada. We deliver a comprehensive suite of services,
            from LLC and LTD registrations to full business incorporation,
            designed for modern entrepreneurial needs. Our goal is to empower
            clients to quickly and confidently establish and grow their
            businesses worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
