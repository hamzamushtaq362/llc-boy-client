// components/Header.js
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-md"></div>
          <h1 className="ml-2 text-xl font-bold">
            <Link href="/">LLCBOY</Link>
          </h1>
        </div>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <div className="lg:hidden z-10">
        <button
          className="text-2xl text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`
          fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 lg:relative lg:flex-row lg:h-auto lg:space-y-0 lg:space-x-6 lg:transform-none lg:justify-end lg:bg-transparent
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
          { name: "About", href: "/about" },
          { name: "Contact us", href: "/contact" },
        ].map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-medium px-3 py-1 rounded-md transition-colors duration-200 ${
              router.pathname === link.href
                ? "text-green-600 bg-green-100"
                : "text-black hover:text-green-600 hover:bg-green-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
