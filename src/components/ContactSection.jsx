import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoIosCall, IoMdMail } from "react-icons/io";

export default function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="container mx-auto px-4 py-4">
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                className="w-full bg-black text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-green-600 text-white rounded-lg p-6 shadow-lg relative">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-white mb-6">
              We are easily reachable through email, phone, and WhatsApp,
              striving to provide convenient and seamless communication options
              tailored to your needs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span>
                  <IoMdMail />
                </span>
                <a href="mailto:support@llcboy.com" className="text-gray-100">
                  support@llcboy.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  <IoIosCall />
                </span>
                <a href="tel:+1000000000" className="text-gray-100">
                  +1 (000) 000-000
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  <FaMessage />
                </span>
                <a href="#" className="text-gray-100">
                  @llcboy
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>
                  <FaTwitter />
                </span>
                <a href="#" className="text-gray-100">
                  @llcboy
                </a>
              </li>
            </ul>
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
