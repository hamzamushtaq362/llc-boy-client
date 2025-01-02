export default function ContactSupportSection() {
  return (
    <div className="container mx-auto px-4 py-4">
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white">
        {/* Left Section with Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="bg-green-600 rounded-lg p-4 w-3/4">
            <img
              src="/image-contact-min.png"
              alt="Support representative"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Do you have any questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Our team will be happy to assist.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              Contact Us &rarr;
            </a>
            <p className="text-gray-700">Or call +1 (507) 410-4666</p>
          </div>
        </div>
      </section>
    </div>
  );
}
