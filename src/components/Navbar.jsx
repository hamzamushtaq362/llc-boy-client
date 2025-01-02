// components/Header.js
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md">
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-md"></div>
          <h1 className="ml-2 text-xl font-bold">LLC BOY</h1>
        </div>
      </div>
      <nav className="flex items-center space-x-6">
        {/* Navigation Links */}
        <a
          href="#"
          className="text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-md"
        >
          Home
        </a>
        <a href="#" className="text-black font-medium">
          Pricing
        </a>
        <a href="#" className="text-black font-medium">
          About
        </a>
        <a href="#" className="text-black font-medium">
          Contact us
        </a>
        <a href="#" className="text-black font-medium">
          Sign In
        </a>
        {/* Button */}
        <a
          href="#"
          className="bg-black text-white font-medium px-4 py-2 rounded-md"
        >
          Start My Business
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
