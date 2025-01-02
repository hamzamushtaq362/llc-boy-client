import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much time you are going to take to finish my order?",
      answer: (
        <>
          <p>For the US:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Premium orders have a processing speed 3 times faster than Basic
              orders.
            </li>
            <li>We typically form companies within just 2 days.</li>
            <li>
              Securing the EIN takes an additional 3-5 days (Note: Most other
              providers require at least 2 weeks for EIN acquisition).
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What documents do I need to provide?",
      answer: (
        <p>
          You will need to provide a government-issued ID, proof of address, and
          any other documents required by local regulations.
        </p>
      ),
    },
    {
      question: "What about taxes?",
      answer: (
        <p>
          We assist with understanding your tax obligations and can connect you
          with a certified accountant if needed.
        </p>
      ),
    },
    {
      question: "Do you support my country?",
      answer: (
        <p>
          Yes, we support company formation in over 150 countries. Contact us
          for more details.
        </p>
      ),
    },
    {
      question: "Your question wasn't listed above?",
      answer: (
        <p>
          Please reach out to our support team, and we’ll be happy to assist
          you.
        </p>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently asked questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left text-gray-900 font-medium focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all ease-in-out duration-300 ${
                  openIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-gray-700 pl-4 pb-4">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
