export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold">LLC Boy</h3>
            <p>Powering entrepreneurs up!</p>
          </div>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a href="mailto:support@llcboy.com" className="text-blue-300">
                support@llcboy.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1000000000" className="text-blue-300">
              +1 (000) 000-000
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Helpdesk articles
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                FAQ
              </a>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-blue-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li>
              <a href="#" className="text-blue-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                We are hiring
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Service accessibility
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-300">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Refund policy
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Terms and conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Legal disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300">
                Copyrights
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-blue-600 pt-4 text-center text-sm text-blue-300">
        <p>© 2019-2024 All rights reserved.</p>
        <p className="mt-2">
          LLC Boy is not a law firm nor can provide legal advice. We
          specialize in providing tech-based business services and insightful
          guidance for general understanding. The information on our website, as
          well as that shared via emails, WhatsApp, Slack, SMS, Zoom, social
          media, and other communication platforms, is for informational
          purposes only and should not be taken as legal advice. By using our
          services and accessing our website, you agree to our Terms of Service,
          Privacy Policy, and Data Processing Addendum.
        </p>
      </div>

      {/* Decorative Image */}
      <div className="absolute right-0 top-0 hidden md:block">
        <img
          src="/man-sitting-on-a-chair.png"
          alt="Man sitting on a chair"
          className="w-64 h-auto"
        />
      </div>
    </footer>
  );
}
