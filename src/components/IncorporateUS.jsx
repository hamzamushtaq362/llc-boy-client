// components/IncorporateUS.js
import { FaShieldAlt, FaStar, FaCrown } from "react-icons/fa";

export default function IncorporateUS() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <h1 className="text-center text-3xl font-bold mb-8">
          Why Incorporate In <span className="text-green-500">The US</span>
        </h1>
        <div className="bg-blue-50 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg">
          {/* Trust Card */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaStar />
            </div>
            <h2 className="text-xl font-bold mb-2">Trust</h2>
            <p className="text-gray-700">
              Forming a company in the US is viewed as more trustworthy by
              financial service providers, like Stripe, PayPal, and banks due to
              the nation’s established business infrastructure and stringent
              regulatory environment.
            </p>
          </div>
          {/* Protection Card */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaShieldAlt />
            </div>
            <h2 className="text-xl font-bold mb-2">Protection</h2>
            <p className="text-gray-700">
              A US-based company provides a legal separation between a business
              and its owners, known as limited liability protection. This means
              that in the event of lawsuits or debts, personal assets of the
              owners are generally protected.
            </p>
          </div>
          {/* Prestige Card */}
          <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaCrown />
            </div>
            <h2 className="text-xl font-bold mb-2">Prestige</h2>
            <p className="text-gray-700">
              A US company can lend prestige and credibility to a business. The
              US is often seen as a leader in innovation and entrepreneurship,
              and having a US-based company can enhance the reputation of a
              business both domestically and internationally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
