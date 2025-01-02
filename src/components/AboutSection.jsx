export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-4">
      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white">
        {/* Left Section: Text */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Get to Know <span className="text-green-600">LLC Boy</span>
          </h2>
          <div className="flex space-x-12 mt-[20%]">
            <div>
              <p className="text-3xl font-bold text-gray-900">2900+</p>
              <p className="text-gray-700">Companies formed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">150+</p>
              <p className="text-gray-700">Countries served</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <div className="relative">
            <div className="bg-green-600 rounded-lg p-4 w-3/4">
              <img
                src="/img-about-min.png"
                alt="Professional"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
