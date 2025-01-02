import { FaCheckCircle } from "react-icons/fa"; // Import React Icons
import Image from "next/image";

const WhyPrivatily = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Statistics */}
        <div className="text-center grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Clients", value: "2300+" },
            { label: "Companies formed", value: "2800+" },
            { label: "Countries served", value: "150+" },
            { label: "Years of experience", value: "6+" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-16 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
          {/* Left Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why LLC BOY?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We know how to take the complexity out of forming your company
              because we’ve been in your shoes. LLC BOY was born because we
              struggled ourselves—facing a complicated, lengthy process when
              trying to set up our own company in a supported country. Since
              2019, we’ve been committed to providing unmatched expertise,
              affordable prices, and the fastest turnaround time to help
              entrepreneurs like you start your business journey smoothly and
              confidently.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Expert guidance since 2019",
                "Affordable, no hidden fees",
                "Fast, hassle-free setup",
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 flex-shrink-0 text-lg" />
                  <p className="ml-3 text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative">
            <Image
              src="/image-19-min.png" // Replace with your actual image path
              alt="Dashboard Mockup"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrivatily;
