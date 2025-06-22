import React from 'react';
import Link from 'next/link';

const SpecializedServices = () => {
  return (
    <section className="bg-primary-green py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-charcoal mb-12">Our Specialized Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Home Remodels */}
          <div className="bg-pure-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:border-2 hover:border-primary-green transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Home Remodels</h3>
            <p className="text-charcoal/80 mb-4">Make cleanup easy for your home remodel with our flexible tipper trailer hire or full-service team. Perfect for all renovation waste, keeping your renovation space clean and organized.</p>
            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center mt-6">
              <Link href="/services/home-remodels" className="inline-block text-primary-green hover:text-eucalyptus-deep font-medium">
                See More →
              </Link>
              <Link
                href="/quote" // Link to a general quote page
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md shadow-sm text-pure-white bg-primary-green hover:bg-eucalyptus-deep transition-colors duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Landscaping */}
          <div className="bg-pure-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:border-2 hover:border-primary-green transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Landscaping</h3>
            <p className="text-charcoal/80 mb-4">Transforming your yard? Our tipper trailers are perfect for green waste, soil, and landscaping debris. Choose self-load or let our team handle the heavy lifting.</p>
            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center mt-6">
              <Link href="/services/landscaping" className="inline-block text-primary-green hover:text-eucalyptus-deep font-medium">
                See More →
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md shadow-sm text-pure-white bg-primary-green hover:bg-eucalyptus-deep transition-colors duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Construction */}
          <div className="bg-pure-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:border-2 hover:border-primary-green transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Construction</h3>
            <p className="text-charcoal/80 mb-4">Keep your construction site organized with our reliable waste removal solutions. We handle construction materials like wood, metal, and concrete efficiently.</p>
            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center mt-6">
              <Link href="/services/construction" className="inline-block text-primary-green hover:text-eucalyptus-deep font-medium">
                See More →
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md shadow-sm text-pure-white bg-primary-green hover:bg-eucalyptus-deep transition-colors duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Moving */}
          <div className="bg-pure-white p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:border-2 hover:border-primary-green transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-green/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Moving</h3>
            <p className="text-charcoal/80 mb-4">Simplify your move with our tipper trailer hire or full-service team. Get rid of old furniture and unwanted items with our flexible removal options.</p>
            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center mt-6">
              <Link href="/services/moving" className="inline-block text-primary-green hover:text-eucalyptus-deep font-medium">
                See More →
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-md shadow-sm text-pure-white bg-primary-green hover:bg-eucalyptus-deep transition-colors duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;