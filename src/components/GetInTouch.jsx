export default function GetInTouch() {
  const languages = [
    { name: "English", flag: "/united-kingdom.png" },
    { name: "Spanish", flag: "/spain.png" },
    { name: "French", flag: "/france-1.png" },
    { name: "Turkey", flag: "/turkey.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <section className="py-12 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-8">
            We are fluent in 6 languages and are working towards offering
            support in additional languages as well to get even closer to you!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                {/* Flag Image */}
                <img
                  src={language.flag}
                  alt={language.name}
                  className="w-12 h-8 object-cover rounded-md shadow-md"
                />
                {/* Language Name */}
                <p className="text-gray-800 font-medium">{language.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
