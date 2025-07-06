import React from 'react';
import BuildersCarousel from '../../components/BuildersCarousel';
import CallToAction from '../../components/CallToAction';

export const metadata = {
  title: 'Construction Partners | Fair Dinkum Rubbish Removal',
  description: 'Fair Dinkum Rubbish Removal works with top construction companies in Sydney, providing reliable waste management solutions for construction sites.',
};

export default function ConstructionPartnersPage() {
  return (
    <>
      <div className="pt-32 bg-neutralBackground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-4">Our Construction Partners</h1>
          <p className="text-lg text-textLight mb-8">
            Fair Dinkum Rubbish Removal is proud to partner with Sydney's leading construction companies, 
            providing specialized waste management solutions for construction and demolition projects of all sizes.
          </p>
        </div>
      </div>
      
      <div className="py-8 bg-neutralBackground">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-textDark mb-4">Construction Waste Management Specialists</h2>
            <p className="text-textLight mb-4">
              With years of experience serving the construction industry, we understand the unique challenges of 
              construction waste management. Our tipper trailer hire and full-service rubbish removal options are 
              designed to meet the specific needs of builders, contractors, and construction companies.
            </p>
            <p className="text-textLight mb-4">
              We offer flexible scheduling, competitive rates, and reliable service to ensure your construction 
              site remains clean, safe, and compliant with local regulations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-neutralBackground p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primaryBrand mb-2">Our Construction Services Include:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Construction and demolition waste removal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Concrete, brick, and masonry disposal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Timber and building material recycling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Site clean-ups and final handover preparation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-neutralBackground p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primaryBrand mb-2">Why Construction Companies Choose Us:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reliable scheduling and on-time service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flexible options for different project sizes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Competitive rates with transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Environmentally responsible waste disposal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BuildersCarousel />
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-textDark mb-6">Partner With Us For Your Next Project</h2>
          <p className="text-lg text-textLight max-w-3xl mx-auto mb-8">
            Whether you're managing a small renovation or a large construction site, 
            Fair Dinkum Rubbish Removal has the experience and equipment to handle your waste management needs efficiently.
          </p>
          <a 
            href="/quote" 
            className="inline-block bg-primaryBrand text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-hover transition-colors"
          >
            Request a Construction Quote
          </a>
        </div>
      </div>
      
      <CallToAction />
    </>
  );
}