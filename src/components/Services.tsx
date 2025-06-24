'use client';

import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-16 bg-neutralBackground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-header">Our Services</div>
          <h2 className="section-title">Rubbish Removal Solutions</h2>
          <p className="section-description">
            We offer comprehensive waste removal services across Sydney for all your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Residential Rubbish Removal */}
          <div className="bg-pure-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div 
              className="h-52 bg-cover bg-center relative" 
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/residential-waste.svg")'
              }}
            ></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-primaryBrand mb-4">Residential Rubbish Removal</h3>
              <p className="text-textLight mb-6 text-sm leading-relaxed">
                From Houses to Apartments – nothing is too much trouble. We remove your unwanted junk, rubbish, furniture & even fittings and carpet from where you tell us to.
              </p>
              <Link 
                href="/services/residential" 
                className="bg-primaryBrand text-textDark py-3 px-6 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-hover transition-colors duration-300 inline-block"
              >
                RESIDENTIAL
              </Link>
            </div>
          </div>

          {/* Commercial Rubbish Removal */}
          <div className="bg-pure-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div 
              className="h-52 bg-cover bg-center relative" 
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/commercial-waste.svg")'
              }}
            ></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-primaryBrand mb-4">Commercial Rubbish Removal</h3>
              <p className="text-textLight mb-6 text-sm leading-relaxed">
                Be it Offices, Warehouses or Retail – we have you covered. We'll remove anything, from obsolete stock, IT or furniture and cubicles or carpet from where you tell us to.
              </p>
              <Link 
                href="/services/commercial" 
                className="bg-primaryBrand text-textDark py-3 px-6 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-hover transition-colors duration-300 inline-block"
              >
                COMMERCIAL
              </Link>
            </div>
          </div>

          {/* Construction Rubbish Removal */}
          <div className="bg-pure-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div 
              className="h-52 bg-cover bg-center relative" 
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/construction-waste.svg")'
              }}
            ></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-primaryBrand mb-4">Construction Rubbish Removal</h3>
              <p className="text-textLight mb-6 text-sm leading-relaxed">
                Reliable and Fast, we clean out any building or demolition site of rubbish and waste or even strip out fixtures and carpet – for a safer and more productive work site.
              </p>
              <Link 
                href="/services/construction" 
                className="bg-primaryBrand text-textDark py-3 px-6 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-hover transition-colors duration-300 inline-block"
              >
                CONSTRUCTION
              </Link>
            </div>
          </div>

          {/* Clean Ups */}
          <div className="bg-pure-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div 
              className="h-52 bg-cover bg-center relative" 
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/cleanup-waste.svg")'
              }}
            ></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-primaryBrand mb-4">Clean Ups</h3>
              <p className="text-textLight mb-6 text-sm leading-relaxed">
                Our services include clean ups for the NDIS network, deceased estates, hoarders, spring cleans through to tenants dumped rubbish. We are here to get things cleaned up for you.
              </p>
              <Link 
                href="/services/cleanups" 
                className="bg-primaryBrand text-textDark py-3 px-6 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-hover transition-colors duration-300 inline-block"
              >
                CLEAN UPS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}