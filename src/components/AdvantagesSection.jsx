import { FaClock } from "react-icons/fa";
import { FaEarthAfrica, FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlinePriceCheck } from "react-icons/md";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <FaClock />,
      title: "Quick delivery",
      description:
        "Efficient processes ensure fast company formation in the US, UK, and Canada.",
    },
    {
      icon: <FaEarthAfrica />,
      title: "We accept all countries",
      description:
        "Entrepreneurs worldwide can access our services, regardless of location, promoting global business growth.",
    },
    {
      icon: <FaHandshakeSimple />,
      title: "Expert Support",
      description:
        "Our dedicated experts provide top-notch support, addressing concerns and ensuring a seamless experience throughout the process.",
    },
    {
      icon: <MdOutlinePriceCheck />,
      title: "Competitive prices",
      description:
        "High-quality services at affordable rates, providing exceptional value without compromising on results.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <section className="py-8 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The LLC Boy Advantage
          </h2>
          <p className="text-gray-700 mb-12">4 Key Benefits of Choosing Us</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full text-green-600 text-3xl">
                  {advantage.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
