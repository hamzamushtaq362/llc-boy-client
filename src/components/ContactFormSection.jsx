export default function ContactFormSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
              Reach Out, We're Here to Help!
            </h2>
            <p className="text-lg mb-6 text-center md:text-left">
              Complete the form, and our team will promptly respond to your
              inquiry within our working hours!
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 md:w-1/2 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-bold mb-4">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="hidden md:block md:w-1/2 h-auto relative ml-2">
              <img
                src="/team.png"
                alt="Support team"
                className="rounded-lg h-[45vh]"
              />
              <div className="absolute top-24 left-6 bg-white shadow-lg rounded-lg p-4">
                <p className="text-green-600 font-bold text-xs">
                  Your ticket has been resolved
                </p>
                <span className="text-gray-600 text-xs">2 hours ago</span>
              </div>
              <div className="absolute bottom-6 right-6 bg-white shadow-lg rounded-lg p-4">
                <p className="text-green-600 font-bold text-xs">
                  Your ticket has been received
                </p>
                <span className="text-gray-600 text-xs">5 minutes ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
      </section>
    </div>
  );
}
