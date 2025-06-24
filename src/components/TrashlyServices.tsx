import React from 'react';
import Link from 'next/link';

const TrashlyServices: React.FC = () => {
  return (
    <section className="py-16 bg-neutralBackground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-primaryBrand text-sm font-bold uppercase tracking-wider mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-textLight mb-4">Waste Management Solutions</h3>
          <p className="max-w-2xl mx-auto text-gray-600">We provide comprehensive waste management and recycling services for residential and commercial clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-cardBackground rounded-lg shadow-card overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
            <div className="p-6">
              <div className="w-16 h-16 bg-opacity-10 bg-primaryBrand rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primaryBrand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9-1a2 2 0 0 1 4 0v1h-4V6zm9 14H5V9h14v11z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-textLight mb-3">Residential Waste</h4>
              <p className="text-textMedium mb-4">Comprehensive waste collection and recycling services for homes and residential properties.</p>
              <Link href="/services/residential" className="text-primaryBrand font-semibold hover:text-hover transition-colors duration-300 inline-flex items-center">
                Order Waste Pickup <span className="ml-1">+</span>
              </Link>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="bg-cardBackground rounded-lg shadow-card overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
            <div className="p-6">
              <div className="w-16 h-16 bg-opacity-10 bg-primaryBrand rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primaryBrand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 2H9c-1.1 0-2 .9-2 2v5.5l-3.5 3.5c-.39.39-.39 1.02 0 1.41l3.5 3.5V20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H9v-5l-3.5-3.5L9 8V4h10v16z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-textLight mb-3">Business Waste</h4>
              <p className="text-textMedium mb-4">Tailored waste management solutions for businesses of all sizes, from offices to industrial facilities.</p>
              <Link href="/services/business" className="text-primaryBrand font-semibold hover:text-hover transition-colors duration-300 inline-flex items-center">
                More About Recycle <span className="ml-1">+</span>
              </Link>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="bg-cardBackground rounded-lg shadow-card overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
            <div className="p-6">
              <div className="w-16 h-16 bg-opacity-10 bg-primaryBrand rounded-lg flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-primaryBrand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z"/>
                  <path d="M15 7h-2v2h-2v2h2v2h2v-2h2v-2h-2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-textLight mb-3">Roll-Off Dumpsters</h4>
              <p className="text-textMedium mb-4">Convenient dumpster rental services for construction projects, renovations, and major cleanouts.</p>
              <Link href="/services/dumpsters" className="text-primaryBrand font-semibold hover:text-hover transition-colors duration-300 inline-flex items-center">
                Rent A Dumpster <span className="ml-1">+</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrashlyServices;