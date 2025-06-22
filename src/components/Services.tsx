import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-neutralBackground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-header">Our Services</div>
          <h2 className="section-title">Choose Your Waste Solution</h2>
          <p className="section-description">
            We offer two convenient options to handle your waste removal needs in Sydney.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Tipper Trailer Hire Card */}
          <div className="bg-pure-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/1300rubbish/2025-06-05_18-24-44.jpg"
                alt="Tipper Trailer Hire"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-primaryBrand text-textDark px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider">
                Self-Load Option
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-textLight mb-3">Tipper Trailer Hire</h3>
              <p className="text-textLight mb-6">
                We deliver a tipper trailer to your location, you load it at your own pace, and we collect it when you're done. Perfect for DIY projects and home cleanouts.
              </p>
              <div className="flex flex-col space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primaryBrand mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Load at your own pace</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primaryBrand mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">No labor costs</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primaryBrand mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Convenient scheduling</span>
                </div>
              </div>
              <Link href="/quote" className="btn-primary inline-block w-full text-center">
                Book a Trailer
              </Link>
            </div>
          </div>

          {/* Full-Service Rubbish Removal Card */}
          <div className="bg-pure-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/1300rubbish/2025-06-05_18-26-35.jpg"
                alt="Full-Service Rubbish Removal"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-secondaryAccent text-textDark px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wider">
                Full-Service Option
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-textLight mb-3">Full-Service Rubbish Removal</h3>
              <p className="text-textLight mb-6">
                Our professional team comes to your location, loads all your rubbish, and takes it away for proper disposal. We handle all the heavy lifting for you.
              </p>
              <div className="flex flex-col space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primaryBrand mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">No physical effort required</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primaryBrand mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Fast and efficient service</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primaryBrand mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Responsible waste disposal</span>
                </div>
              </div>
              <Link href="/quote" className="btn-primary inline-block w-full text-center">
                Request Pickup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;