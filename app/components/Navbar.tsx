"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center border-b-1 border-gray-300">
      <div className="max-w-[1400px] w-full px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">Logo</div>
          {/* Hamburger Menu */}
          <button
            className="block md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Links */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full md:static md:flex md:space-x-6 md:w-auto md:bg-transparent bg-gray-300 md:h-auto h-full`}
          >
            <li className="border-b md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-500 hover:text-gray-900"
              >
                Link1
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-500 hover:text-gray-900"
              >
                Link2
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-500 hover:text-gray-900"
              >
                Link3
              </a>
            </li>
            <li className="border-b md:border-none">
              <a
                href="#"
                className="block py-2 px-4 text-gray-500 hover:text-gray-900"
              >
                Link4
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
