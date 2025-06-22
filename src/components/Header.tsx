'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal shadow-lg py-2' : 'bg-charcoal/90 py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12">
              <Image 
                src="/images/crosspyramidlogo.jpg" 
                alt="Fair Dinkum Rubbish Removal" 
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <div className="group relative px-4 py-2">
              <button className="text-pure-white hover:text-primary-green font-medium transition-colors duration-300 flex items-center">
                Service Needs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-pure-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/services" className="block px-4 py-2 text-sm text-charcoal hover:bg-eucalyptus-light hover:text-primary-green">
                    Residential
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-sm text-charcoal hover:bg-eucalyptus-light hover:text-primary-green">
                    Commercial
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-sm text-charcoal hover:bg-eucalyptus-light hover:text-primary-green">
                    Construction
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-sm text-charcoal hover:bg-eucalyptus-light hover:text-primary-green">
                    Clean Ups
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group relative px-4 py-2">
              <button className="text-pure-white hover:text-primary-green font-medium transition-colors duration-300 flex items-center">
                Our Rentals
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-pure-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/services" className="block px-4 py-2 text-sm text-charcoal hover:bg-eucalyptus-light hover:text-primary-green">
                    Tipper Trailer Hire
                  </Link>
                  <Link href="/services" className="block px-4 py-2 text-sm text-charcoal hover:bg-eucalyptus-light hover:text-primary-green">
                    Full-Service Removal
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/areas" className="px-4 py-2 text-pure-white hover:text-primary-green font-medium transition-colors duration-300">
              Service Areas
            </Link>
            <Link href="/about" className="px-4 py-2 text-pure-white hover:text-primary-green font-medium transition-colors duration-300">
              About
            </Link>
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:1300555555" className="text-pure-white hover:text-primary-green font-medium transition-colors duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1300 555 555
            </a>
            <Link href="/quote" className="bg-primary-green text-pure-white px-6 py-2 rounded-md font-medium hover:bg-eucalyptus-deep transition-colors duration-300">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-pure-white hover:text-primary-green focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-charcoal">
            <nav className="flex flex-col space-y-4">
              <div className="px-4 py-2">
                <button className="text-pure-white hover:text-primary-green font-medium transition-colors duration-300 flex items-center justify-between w-full">
                  Service Needs
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-2 pl-4 border-l border-primary-green/30">
                  <Link href="/services" className="block py-2 text-sm text-pure-white/80 hover:text-primary-green">
                    Residential
                  </Link>
                  <Link href="/services" className="block py-2 text-sm text-pure-white/80 hover:text-primary-green">
                    Commercial
                  </Link>
                  <Link href="/services" className="block py-2 text-sm text-pure-white/80 hover:text-primary-green">
                    Construction
                  </Link>
                  <Link href="/services" className="block py-2 text-sm text-pure-white/80 hover:text-primary-green">
                    Clean Ups
                  </Link>
                </div>
              </div>
              
              <div className="px-4 py-2">
                <button className="text-pure-white hover:text-primary-green font-medium transition-colors duration-300 flex items-center justify-between w-full">
                  Our Rentals
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-2 pl-4 border-l border-primary-green/30">
                  <Link href="/services" className="block py-2 text-sm text-pure-white/80 hover:text-primary-green">
                    Tipper Trailer Hire
                  </Link>
                  <Link href="/services" className="block py-2 text-sm text-pure-white/80 hover:text-primary-green">
                    Full-Service Removal
                  </Link>
                </div>
              </div>
              
              <Link href="/areas" className="px-4 py-2 text-pure-white hover:text-primary-green font-medium transition-colors duration-300">
                Service Areas
              </Link>
              <Link href="/about" className="px-4 py-2 text-pure-white hover:text-primary-green font-medium transition-colors duration-300">
                About
              </Link>
              <div className="px-4 py-2">
                <a href="tel:1300555555" className="text-pure-white hover:text-primary-green font-medium transition-colors duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1300 555 555
                </a>
              </div>
              <div className="px-4 py-2">
                <Link href="/quote" className="bg-primary-green text-pure-white px-6 py-2 rounded-md font-medium hover:bg-eucalyptus-deep transition-colors duration-300 inline-block">
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;