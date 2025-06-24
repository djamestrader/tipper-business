import React from 'react';
import Link from 'next/link';

const TrashlyHeader: React.FC = () => {
  return (
    <header className="bg-darkBackground text-textDark">
      {/* Top section with logo and contact info */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        <div className="text-3xl font-bold flex items-center">
          <span className="bg-gradient-to-r from-primaryBrand to-hover w-10 h-10 rounded-full flex items-center justify-center mr-3 transform -rotate-12 text-xl">⚡</span>
          Trashly
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-opacity-20 bg-primaryBrand border-2 border-primaryBrand rounded flex items-center justify-center">
              <span>📧</span>
            </div>
            <div>
              <div className="text-sm">+800 456 78 901</div>
              <div className="text-sm"><span className="text-primaryBrand underline">trashly@yourdomain.com</span></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-opacity-20 bg-primaryBrand border-2 border-primaryBrand rounded flex items-center justify-center">
              <span>🕒</span>
            </div>
            <div>
              <div className="text-sm">Mon - Sun</div>
              <div className="text-sm">9:00 am to 8:00 pm</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-opacity-20 bg-primaryBrand border-2 border-primaryBrand rounded flex items-center justify-center">
              <span>📍</span>
            </div>
            <div>
              <div className="text-sm">Main Branch</div>
              <div className="text-sm">2a Fifth St, Los Angeles, USA</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation bar */}
      <nav className="bg-black bg-opacity-30">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="hidden md:flex">
            <li>
              <Link href="/" className="text-white hover:bg-primaryBrand border-b-3 border-transparent hover:border-b-[#e55529] py-4 px-6 inline-block font-medium transition-all duration-300">Home Pages</Link>
            </li>
            <li>
              <Link href="/pages" className="text-white hover:bg-primaryBrand border-b-3 border-transparent hover:border-b-[#e55529] py-4 px-6 inline-block font-medium transition-all duration-300">Our Pages</Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:bg-primaryBrand border-b-3 border-transparent hover:border-b-[#e55529] py-4 px-6 inline-block font-medium transition-all duration-300">Services</Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-white hover:bg-primaryBrand border-b-3 border-transparent hover:border-b-[#e55529] py-4 px-6 inline-block font-medium transition-all duration-300">Portfolio</Link>
            </li>
            <li>
              <Link href="/blog" className="text-white hover:bg-primaryBrand border-b-3 border-transparent hover:border-b-[#e55529] py-4 px-6 inline-block font-medium transition-all duration-300">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:bg-primaryBrand border-b-3 border-transparent hover:border-b-[#e55529] py-4 px-6 inline-block font-medium transition-all duration-300">Contact Us</Link>
            </li>
          </ul>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Request Pickup button */}
          <Link href="/request" className="bg-gradient-to-r from-primaryBrand to-hover text-white py-3 px-6 rounded font-bold text-sm border-2 border-primaryBrand shadow-button hover:bg-transparent hover:text-primaryBrand transform hover:-translate-y-1 transition-all duration-300">
            + Request Pickup
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TrashlyHeader;