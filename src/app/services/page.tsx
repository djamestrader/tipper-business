import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ItemsWeTake from '../../components/ItemsWeTake';

export default function ServicesPage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/1300rubbish/2025-06-05_18-27-58.jpg"
          alt="Rubbish Removal Services"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Our Rubbish Removal Services</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Professional, reliable, and eco-friendly waste removal solutions for all your needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Comprehensive Rubbish Removal Solutions</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              At The Southern Cross Clear, we provide a wide range of rubbish removal services tailored to meet the unique needs of our residential and commercial clients across Sydney.
            </p>
          </div>

          {/* Residential Service */}
          <div id="residential" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/1300rubbish/2025-06-05_18-24-44.jpg"
                alt="Residential Rubbish Removal"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Residential Rubbish Removal</h3>
              <p className="text-charcoal mb-6">
                Our residential rubbish removal service is designed to make your life easier. Whether you're decluttering, renovating, or simply need to dispose of unwanted items, our team will handle it all with efficiency and care.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Household junk and general waste removal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Furniture and appliance disposal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Garden and green waste clearance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Renovation and construction debris removal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Garage and shed cleanouts</span>
                </li>
              </ul>
              <Link href="/quote" className="btn-primary inline-block">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Commercial Service */}
          <div id="commercial" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/1300rubbish/2025-06-05_18-26-35.jpg"
                alt="Commercial Rubbish Removal"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Commercial Rubbish Removal</h3>
              <p className="text-charcoal mb-6">
                Our commercial rubbish removal services are designed to help businesses maintain clean, safe, and productive environments. We understand the importance of minimal disruption to your operations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Office clearances and relocations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Retail fit-out waste removal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Warehouse and storage facility cleanouts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Office furniture and equipment disposal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Regular commercial waste collection</span>
                </li>
              </ul>
              <Link href="/quote" className="btn-primary inline-block">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Construction Service */}
          <div id="construction" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/1300rubbish/2025-06-05_18-27-58.jpg"
                alt="Construction Rubbish Removal"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Construction Rubbish Removal</h3>
              <p className="text-charcoal mb-6">
                Construction and renovation projects generate significant waste. Our specialized construction rubbish removal service ensures your site remains clean, safe, and compliant with regulations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Building site waste clearance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Demolition debris removal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Concrete, brick, and tile disposal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Renovation waste management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Fixture and fitting removal</span>
                </li>
              </ul>
              <Link href="/quote" className="btn-primary inline-block">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Clean Ups Service */}
          <div id="cleanups" className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/1300rubbish/2025-06-05_18-28-47.jpg"
                alt="Clean Ups Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-charcoal mb-4">Clean Ups</h3>
              <p className="text-charcoal mb-6">
                Our specialized clean-up services address unique situations that require careful handling and thorough removal of unwanted items and waste.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>NDIS network clean ups</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Deceased estate clearances</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Hoarder property cleanouts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Spring cleaning assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tenant dumped rubbish removal</span>
                </li>
              </ul>
              <Link href="/quote" className="btn-primary inline-block">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Items We Take Section */}
      <ItemsWeTake />

      {/* Pricing Information */}
      <div className="py-16 bg-pure-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Transparent Pricing</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We believe in fair and transparent pricing for all our rubbish removal services. Our rates are competitive and based on the volume and type of waste to be removed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-off-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">Small Load</h3>
              <p className="text-3xl font-bold text-primary-green mb-4">From $150</p>
              <p className="text-charcoal mb-6">Ideal for small cleanouts, single item removal, or up to 2m³ of waste.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>2-person team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Up to 2m³ capacity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Same-day service available</span>
                </li>
              </ul>
              <Link href="/quote" className="btn-primary w-full block text-center">
                Get a Quote
              </Link>
            </div>

            <div className="bg-off-white p-8 rounded-lg shadow-md border-2 border-primary-green relative">
              <div className="absolute top-0 right-0 bg-primary-green text-pure-white py-1 px-4 rounded-bl-lg font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Medium Load</h3>
              <p className="text-3xl font-bold text-primary-green mb-4">From $300</p>
              <p className="text-charcoal mb-6">Perfect for room clearances, small renovations, or 2-5m³ of waste.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>2-3 person team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>2-5m³ capacity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Priority scheduling</span>
                </li>
              </ul>
              <Link href="/quote" className="btn-primary w-full block text-center">
                Get a Quote
              </Link>
            </div>

            <div className="bg-off-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">Large Load</h3>
              <p className="text-3xl font-bold text-primary-green mb-4">From $500</p>
              <p className="text-charcoal mb-6">Suitable for whole house clearances, large renovations, or 5-10m³ of waste.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>3-4 person team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>5-10m³ capacity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Custom scheduling options</span>
                </li>
              </ul>
              <Link href="/quote" className="btn-primary w-full block text-center">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal mb-6">
              For extra-large loads or specialized waste removal needs, please contact us for a custom quote. We also offer discounts for regular commercial clients and multi-service bookings.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Contact Us for Custom Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-primary-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-pure-white mb-4">Ready to Clear Your Space?</h2>
          <p className="text-xl text-pure-white mb-8 max-w-3xl mx-auto">
            Contact us today for a free, no-obligation quote on your rubbish removal needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="bg-pure-white text-primary-green px-8 py-3 rounded-md font-medium hover:bg-off-white transition-colors duration-300">
              Get a Quote
            </Link>
            <Link href="/contact" className="border-2 border-pure-white text-pure-white px-8 py-3 rounded-md font-medium hover:bg-eucalyptus-deep transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}