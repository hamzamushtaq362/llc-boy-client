import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Form your company <br /> from anywhere
          </h1>

          <p className="mt-4 text-md text-gray-600">
            Join the thousands of entrepreneurs using our platform to
            incorporate their companies and unlock premium payment & banking
            options.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="text-yellow-500 flex space-x-1">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
            </div>
            <p className="text-gray-600 text-sm font-semibold border-l border-gray-500">
               &nbsp;&nbsp; Rated 4.2+ stars by entrepreneurs worldwide
            </p>
          </div>
        </div>

        {/* Mockup Image */}
        <div className="mt-12 relative">
          <Image
            src="/dashboard-mockup.jpg"
            alt="Dashboard Mockup"
            className="mx-auto shadow-lg rounded-lg"
            width={1200}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
