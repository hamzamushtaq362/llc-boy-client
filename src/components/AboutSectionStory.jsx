export default function AboutSectionStory() {
  return (
    <div className="container mx-auto px-4 py-4">
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Top Column */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>
            <div className="w-full lg:w-4/5">
              <p className="text-green-700 mb-4 font-semibold">
                Helping Online Entrepreneurs since 2019
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                LLC Boy journey began in 2019, driven by a team committed to
                solving the challenges faced by online business owners across
                the globe. We saw that many entrepreneurs wanted to accept
                online card payments and tap into international markets but were
                struggling with setting up businesses in countries that are
                compatible with major payment platforms like Stripe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Starting with UK company formation, we made things easier for
                our clients. After seeing great success in the UK, we expanded
                to offer US company formation in 2021. Today, we’re proud to
                have assisted a multitude of entrepreneurs in successfully
                launching their businesses in both the United States and the
                United Kingdom.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our services simplify the process of legal acceptance with
                top-notch financial services like Stripe, Mercury, Brex, Jux,
                Wise, and Tide, for our clients to focus on what truly matters:
                growing their businesses. With the complexities of business
                setup and management efficiently handled, entrepreneurs can
                confidently channel their efforts into expansion and innovation.
              </p>
            </div>
          </div>

          {/* Bottom Column */}
          <div className="flex flex-wrap justify-between mt-10">
            <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission:
              </h2>
            </div>
            <div className="w-full lg:w-4/5">
              <p className="text-green-700 mb-4 font-semibold">
                Powering entrepreneurs up!
              </p>
              <p className="text-gray-600 leading-relaxed">
                LLC Boy mission is to be the global partner for aspiring
                business owners, streamlining the path to company formation in
                the USA, UK, and Canada. We deliver a comprehensive suite of
                services, from LLC and LTD registrations to full business
                incorporation, designed for modern entrepreneurial needs. Our
                goal is to empower clients to quickly and confidently establish
                and grow their businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
