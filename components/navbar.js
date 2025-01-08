"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue text-white px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold sm:text-xl md:text-2xl">
          Controlled Chaos Racing
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm sm:text-base">
          <li key="home">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li key="about">
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li key="contact">
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4">
          <li key="home-mobile">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li key="about-mobile">
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li key="contact-mobile">
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li key="sponsor-mobile">
            <a href="#sponsor" className="hover:text-gray-300">
              Sponsors
            </a>
          </li>
          <li key="standings-mobile">
            <a href="#standings" className="hover:text-gray-300">
              Standings
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
