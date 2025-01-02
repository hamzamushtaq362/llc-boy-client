export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Yusuf",
      country: "Pakistan",
      flag: "🇵🇰",
      text: "Their speed and prices are unmatched! Starting my business in the U.S. with LLC Boy was very easy. Their team took care of everything, and I really can’t thank them enough.",
    },
    {
      name: "Chinedu",
      country: "Nigeria",
      flag: "🇳🇬",
      text: "LLC Boy provides excellent customer service. They are always responsive to concerns and keep you updated throughout the process. I was recommended to them by a friend and I highly recommend them to others.",
    },
    {
      name: "Jamal",
      country: "Morocco",
      flag: "🇲🇦",
      text: "I got an outstanding service for my US LLC formation. Their team was not only professional but also highly responsive throughout the entire process, making everything seamless and efficient.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="w-full flex justify-center">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-medium text-black mb-8 text-center">
            Trusted by entrepreneurs from 150+ countries
          </h2>
        </div>
      </div>
      <section className="py-16 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 text-center rounded-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-left"
              >
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="text-gray-900 font-bold">
                  {testimonial.name}
                  <span className="block text-sm font-normal text-gray-500">
                    From {testimonial.country} {testimonial.flag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
