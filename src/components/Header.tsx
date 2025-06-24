'use client'; // This directive is kept for potential Next.js context as it was in the original code.

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Main Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Main header container with sticky positioning for better UX
    <header className="sticky top-0 w-full z-50 shadow-md">

      {/* Top Bar Section */}
      <section className="bg-darkBackground py-3">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold flex items-center text-white">
            <span className="bg-gradient-to-r from-primaryBrand to-hover w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-2 md:mr-3 transform -rotate-12 text-lg md:text-xl shadow-lg">⚡</span>
            <span className="hidden sm:inline">Fair Dinkum Rubbish Removal</span>
            <span className="sm:hidden">Fair Dinkum</span>
          </div>
          
          {/* Contact Information */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-opacity-20 bg-primaryBrand border-2 border-primaryBrand rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-105">
                <span>📞</span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">+800 456 78 901</div>
                <div className="text-sm"><span className="text-primaryBrand hover:text-hover transition-colors duration-300">info@fairdinkumrubbish.com.au</span></div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-opacity-20 bg-primaryBrand border-2 border-primaryBrand rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-105">
                <span>🕒</span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Mon - Sun</div>
                <div className="text-sm text-white">9:00 am to 8:00 pm</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-opacity-20 bg-primaryBrand border-2 border-primaryBrand rounded-full flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-opacity-30 hover:scale-105">
                <span>📍</span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Main Branch</div>
                <div className="text-sm text-white">Sydney, NSW, Australia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation bar */}
      <nav className="bg-darkBackground border-t border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="hidden md:flex">
            <li>
              <Link href="/" className="text-white hover:bg-primaryBrand border-b-2 border-transparent hover:border-primaryBrand py-4 px-4 lg:px-6 inline-block font-medium transition-all duration-300">Home</Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:bg-primaryBrand border-b-2 border-transparent hover:border-primaryBrand py-4 px-4 lg:px-6 inline-block font-medium transition-all duration-300">Service Needs</Link>
            </li>
            <li>
              <Link href="/types-of-waste" className="text-white hover:bg-primaryBrand border-b-2 border-transparent hover:border-primaryBrand py-4 px-4 lg:px-6 inline-block font-medium transition-all duration-300">Types of Waste</Link>
            </li>
            <li>
              <Link href="/pricing" className="text-white hover:bg-primaryBrand border-b-2 border-transparent hover:border-primaryBrand py-4 px-4 lg:px-6 inline-block font-medium transition-all duration-300">Pricing</Link>
            </li>
            <li>
              <Link href="/areas" className="text-white hover:bg-primaryBrand border-b-2 border-transparent hover:border-primaryBrand py-4 px-4 lg:px-6 inline-block font-medium transition-all duration-300">Service Areas</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:bg-primaryBrand border-b-2 border-transparent hover:border-primaryBrand py-4 px-4 lg:px-6 inline-block font-medium transition-all duration-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:bg-primaryBrand border-b-2 border-transparent hover:border-primaryBrand py-4 px-4 lg:px-6 inline-block font-medium transition-all duration-300">Contact Us</Link>
            </li>
          </ul>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white p-3 focus:outline-none transition-transform duration-300 ease-in-out"
            aria-label="Toggle mobile menu"
          >
            <div className="w-10 h-10 bg-opacity-20 bg-primaryBrand border-2 border-primaryBrand rounded-full flex items-center justify-center shadow-sm hover:bg-opacity-30 hover:scale-105 transition-all duration-300">
              {isMenuOpen ? (
                // Close Icon (X)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </button>
          
          {/* Get a Quote button */}
          <a href="/quote" className="bg-gradient-to-r from-primaryBrand to-hover text-white py-3 px-6 rounded-button font-bold text-sm uppercase tracking-button border-2 border-primaryBrand shadow-button hover:bg-transparent hover:text-primaryBrand transform hover:-translate-y-1 transition-all duration-300">
            + Get a Quote
          </a>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-darkBackground">
          <nav className="flex flex-col px-4 py-4">
            <a href="/" className="py-3 border-b border-gray-700 text-white hover:text-primaryBrand">Home</a>
            <a href="/services" className="py-3 border-b border-gray-700 text-white hover:text-primaryBrand">Service Needs</a>
            <a href="/types-of-waste" className="py-3 border-b border-gray-700 text-white hover:text-primaryBrand">Types of Waste</a>
            <a href="/pricing" className="py-3 border-b border-gray-700 text-white hover:text-primaryBrand">Pricing</a>
            <a href="/areas" className="py-3 border-b border-gray-700 text-white hover:text-primaryBrand">Service Areas</a>
            <a href="/about" className="py-3 border-b border-gray-700 text-white hover:text-primaryBrand">About</a>
            <a href="/contact" className="py-3 border-b border-gray-700 text-white hover:text-primaryBrand">Contact Us</a>
            
            {/* Mobile Get a Quote button */}
            <div className="py-4">
              <a href="/quote" className="bg-gradient-to-r from-primaryBrand to-hover text-white py-3 px-6 rounded-button font-bold text-sm uppercase tracking-button border-2 border-primaryBrand shadow-button hover:bg-transparent hover:text-primaryBrand transform hover:-translate-y-1 transition-all duration-300 inline-block">
                + Get a Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
