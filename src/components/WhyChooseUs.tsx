import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-neutralBackground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-header">Why Choose Us</div>
          <h2 className="section-title">The Trashly Difference</h2>
          <p className="section-description">
            Experience the difference with Sydney's most reliable rubbish removal and tipper trailer hire service. No nonsense, just great service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Flexible Solutions Card */}
          <div className="text-center p-8 bg-pure-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primaryBrand/10 rounded-full flex items-center justify-center">
              <svg className="w-9 h-9 text-primaryBrand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-textLight mb-3">Flexible Solutions</h3>
            <p className="text-textLight/80 text-sm md:text-base">
              Choose between self-load trailer hire or our full-service team. We're flexible and work around your schedule.
            </p>
          </div>

          {/* Eco-Friendly Disposal Card */}
          <div className="text-center p-8 bg-pure-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primaryBrand/10 rounded-full flex items-center justify-center">
              <svg className="w-9 h-9 text-primaryBrand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-textLight mb-3">Eco-Friendly Disposal</h3>
            <p className="text-textLight/80 text-sm md:text-base">
              We prioritize responsible waste management, recycling whenever possible to minimize environmental impact.
            </p>
          </div>

          {/* Transparent Pricing Card */}
          <div className="text-center p-8 bg-pure-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primaryBrand/10 rounded-full flex items-center justify-center">
              <svg className="w-9 h-9 text-primaryBrand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-textLight mb-3">Transparent Pricing</h3>
            <p className="text-textLight/80 text-sm md:text-base">
              No hidden fees or surprise charges. We provide clear, upfront pricing so you know exactly what you're paying for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;