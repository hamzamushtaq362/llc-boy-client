import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  // Define separate data for each country
  const data = {
    US: {
      basic: {
        price: "$229 and then $99/yr",
        description: "If you’re operating with a low budget.",
        features: [
          "US Company Formation",
          "US Address with Mail forwarding",
          "Registered agent service",
          "US business Stripe account consultation",
          "EIN letter",
          "Incorporation documents",
          "Introduction to a professional accountant",
          "Email support only",
        ],
      },
      premium: {
        price: "$397 and then $99/yr",
        description: "Enhanced, fast, and premium service.",
        features: [
          "Everything in Basic, plus:",
          "Order priority",
          "FREE Tax consultation",
          "Chat and phone support",
          "FREE US Phone number",
          "Dedicated account manager",
          "FREE Business website",
          "FREE business email inbox",
          "FREE .com domain",
          "Business bank consultation",
          "3 Business logos",
          "Bonuses",
        ],
      },
    },
    UK: {
      basic: {
        price: "£199 and then £89/yr",
        description: "For startups in the UK.",
        features: [
          "UK Company Formation",
          "UK Address with Mail forwarding",
          "Registered agent service",
          "UK business Stripe account consultation",
          "VAT registration assistance",
          "Introduction to a professional accountant",
          "Email support only",
        ],
      },
      premium: {
        price: "£349 and then £89/yr",
        description: "Advanced and premium services.",
        features: [
          "Everything in Basic, plus:",
          "Priority processing",
          "FREE Tax consultation",
          "Chat and phone support",
          "FREE UK Phone number",
          "Dedicated account manager",
          "FREE Business website",
          "FREE business email inbox",
          "FREE .co.uk domain",
          "Business bank consultation",
          "Logo design services",
          "Exclusive bonuses",
        ],
      },
    },
    Canada: {
      basic: {
        price: "C$299 and then C$99/yr",
        description: "Affordable incorporation in Canada.",
        features: [
          "Canadian Company Formation",
          "Canadian Address with Mail forwarding",
          "Registered agent service",
          "GST/HST registration assistance",
          "Introduction to a professional accountant",
          "Email support only",
        ],
      },
      premium: {
        price: "C$499 and then C$99/yr",
        description: "Comprehensive premium service.",
        features: [
          "Everything in Basic, plus:",
          "Priority processing",
          "FREE Tax consultation",
          "Chat and phone support",
          "FREE Canadian Phone number",
          "Dedicated account manager",
          "FREE Business website",
          "FREE business email inbox",
          "FREE .ca domain",
          "Business bank consultation",
          "Logo design services",
          "Bonuses",
        ],
      },
    },
  };

  // State for the selected country
  const [selectedCountry, setSelectedCountry] = useState("US");

  // Get the selected country's data
  const selectedData = data[selectedCountry];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mb-4">
        Transparent <span className="text-green-500">Pricing</span>
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Where do you want to Incorporate?
      </p>

      {/* Selector */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 p-2 rounded-full flex">
          {["US", "UK", "Canada"].map((country) => (
            <button
              key={country}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                selectedCountry === country
                  ? "bg-white text-black shadow"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedCountry(country)}
            >
              {country === "US" && "In the US 🇺🇸"}
              {country === "UK" && "In the UK 🇬🇧"}
              {country === "Canada" && "In Canada 🇨🇦"}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Plan */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Basic</h2>
          <p className="text-4xl font-bold mb-1">{selectedData.basic.price}</p>
          <p className="text-gray-600 mb-4">{selectedData.basic.description}</p>
          <button className="w-full bg-black text-white py-2 rounded-lg mb-6">
            Go Basic
          </button>
          <ul className="space-y-2">
            {selectedData.basic.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-md rounded-lg p-6 relative">
          <span className="absolute top-4 right-4 bg-white text-blue-500 text-xs font-semibold px-2 py-1 rounded">
            Priority Processing
          </span>
          <h2 className="text-xl font-bold mb-2">Premium</h2>
          <p className="text-4xl font-bold mb-1">
            {selectedData.premium.price}
          </p>
          <p className="text-blue-200 mb-4">
            {selectedData.premium.description}
          </p>
          <button className="w-full bg-orange-500 py-2 rounded-lg mb-6">
            Go Premium
          </button>
          <ul className="space-y-2">
            {selectedData.premium.features.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheck className="text-white" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
