'use client';

import React from 'react';
import Image from 'next/image';

export default function ServiceAreasContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-6">Sydney's Most Reliable Rubbish Removal Service</h2>
          
          <div className="prose prose-lg max-w-none text-textLight">
            <p className="lead text-xl mb-6">
              Fair Dinkum Rubbish Removal has been serving the Sydney community for over 10 years, providing fast, reliable, and affordable rubbish removal services across all Sydney suburbs.
            </p>
            
            <div className="my-12 relative rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/images/sydney-map.svg" 
                alt="Sydney Map with Service Areas" 
                width={1200} 
                height={600}
                className="w-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-semibold text-textDark mt-8 mb-4">Local Teams Across Sydney</h3>
            <p>
              With local collection teams positioned throughout Sydney, we're able to provide same-day service to all areas. Our strategically located teams ensure we can reach you quickly, no matter where you are in Sydney.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-neutralBackground p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-primaryBrand mb-3">Professional Service</h4>
                <p>
                  Our teams are fully trained, insured, and equipped to handle all types of rubbish removal jobs, from small residential cleanups to large commercial projects.
                </p>
              </div>
              
              <div className="bg-neutralBackground p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-primaryBrand mb-3">Affordable Rates</h4>
                <p>
                  We offer competitive pricing across all Sydney suburbs with no hidden fees. Our transparent pricing ensures you know exactly what you're paying for.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-textDark mt-8 mb-4">Committed to Recycling</h3>
            <p>
              At Fair Dinkum Rubbish Removal, we're committed to environmentally responsible waste management. We recycle up to 80% of the waste we collect, minimizing landfill impact and supporting Sydney's sustainability goals.
            </p>
            
            <div className="my-8 p-6 bg-primaryBrand/10 rounded-lg border border-primaryBrand/20">
              <h4 className="text-xl font-semibold text-textDark mb-3">Same-Day Service Available</h4>
              <p className="mb-0">
                Call us before 10:00am to book your same-day rubbish removal service. Our efficient teams will arrive at your location promptly, ready to clear your rubbish quickly and professionally.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-textDark mt-8 mb-4">Why Choose Us for All Sydney Suburbs</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fast response times with same-day service available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fully insured and professional teams</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Environmentally responsible waste disposal</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Transparent, competitive pricing</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primaryBrand mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No job too big or small</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}