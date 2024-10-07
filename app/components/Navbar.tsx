"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md text-white px-4 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-3xl font-semibold tracking-wide">
          <Link href="/">MyApp</Link>
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-blue-300 transition">
            Dashboard
          </Link>
          <Link href="/meetings" className="hover:text-blue-300 transition">
            Meetings
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none hover:text-blue-300 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center font-medium">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block hover:text-blue-300 transition"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            onClick={toggleMenu}
            className="block hover:text-blue-300 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/meetings"
            onClick={toggleMenu}
            className="block hover:text-blue-300 transition"
          >
            Meetings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
