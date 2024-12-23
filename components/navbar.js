"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3">
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
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#sponsor" className="hover:text-gray-300">
              Sponsor
            </a>
          </li>
          <li>
            <a href="#standings" className="hover:text-gray-300">
              Standings
            </a>
          </li>
          {/* <li>
            <a href="#shop" className="hover:text-gray-300">
              Shop
            </a>
          </li> */}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#sponsor" className="hover:text-gray-300">
              Sponsor
            </a>
          </li>
          <li>
            <a href="#standings" className="hover:text-gray-300">
              Standings
            </a>
          </li>
          {/* console.log('Shop link clicked'); 
<li>
  <a href="#shop" className="hover:text-gray-300 */}
        </ul>
      )}
    </nav>
  );
}
