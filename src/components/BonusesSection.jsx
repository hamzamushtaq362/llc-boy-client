// BonusesSection.js
export default function BonusesSection() {
  return (
    <div className="container mx-auto px-4 py-4">
      <section className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-green-600">Bonuses</span> for Premium clients
            only
          </h1>
          <p className="text-gray-700">
            As a Premium client, we’ll assist you in setting up all the
            financial services available to you. You’ll have a dedicated account
            manager and our exceptional support team, ready to assist you via
            chat, email, and phone.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:w-1/2">
          <div className="mt-8 md:mt-0 md:ml-8">
            <img
              src="/img-Bonuses-3-3-min.png"
              alt="Premium services illustration"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
