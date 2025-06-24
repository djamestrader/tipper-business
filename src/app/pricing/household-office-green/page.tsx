'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CallToAction from '@/components/CallToAction';
import PricingTable from '@/components/PricingTable';
import VolumeSizeGuide from '@/components/VolumeSizeGuide';

export default function HouseholdOfficeGreenPricingPage() {
  // Pricing data for household, office, and green waste
  const pricingData = [
    { size: '2 m³', price: '$385', costPerM3: '$192 per m³', equivalent: '10 to 12 x 240-litre wheelie bins', 
      dimensions: 'Length 2.4 m – Width 1.5 m – Height 0.5 m',
      spaceNeeded: 'Length 4.0 m – Width 2.0 m – Height 1.0 m',
      bestFor: 'Garden clean-ups, garage decluttering, minor household and garage clean-ups' },
    { size: '3 m³', price: '$489', costPerM3: '$163 per m³', equivalent: '15 to 18 x 240-litre wheelie bins',
      dimensions: 'Length 2.4 m – Width 1.5 m – Height 0.8 m',
      spaceNeeded: 'Length 4.0 m – Width 2.0 m – Height 1.3 m',
      bestFor: 'Landscaping projects, small home and business clean-ups' },
    { size: '4 m³', price: '$579', costPerM3: '$144 per m³', equivalent: '18 to 22 x 240-litre wheelie bins',
      dimensions: 'Length 2.4 m – Width 1.5 m – Height 1.2 m',
      spaceNeeded: 'Length 4.0 m – Width 2.0 m – Height 1.7 m',
      bestFor: 'Small-medium home clean-ups, larger garden projects' },
    { size: '5 m³', price: '$669', costPerM3: '$133 per m³', equivalent: '25 to 30 x 240-litre wheelie bins',
      dimensions: 'Length 3.0 m – Width 1.5 m – Height 1.1 m',
      spaceNeeded: 'Length 4.7 m – Width 2.0 m – Height 1.6 m',
      bestFor: 'Large household clean-ups, major garden projects' },
    { size: '6 m³', price: '$759', costPerM3: '$126 per m³', equivalent: '30 to 35 x 240-litre wheelie bins',
      dimensions: 'Length 3.0 m – Width 1.5 m – Height 1.35 m',
      spaceNeeded: 'Length 4.7 m – Width 2.0 m – Height 1.8 m',
      bestFor: 'Major home clean-up, extensive garden landscaping' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-darkBackground py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/types-of-waste/household-junk.jpg" 
            alt="Household Waste Pricing"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Household, Office & Green Waste Pricing</h1>
            <p className="text-xl text-white mb-8">Affordable solutions for all your household, office, and garden waste removal needs</p>
            <Link href="#pricing-table" className="btn-primary py-3 px-6 rounded-full text-white font-medium bg-primaryBrand hover:bg-hover transition-colors duration-300">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Waste Types Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Take</h2>
            <p className="text-lg max-w-3xl mx-auto">Our household, office, and green waste removal services cover a wide range of items.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Household Junk */}
            <div className="bg-neutralBackground rounded-lg p-6 shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/types-of-waste/household-junk.jpg" 
                  alt="Household Junk"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Household Junk</h3>
              <p className="mb-4">Household junk includes a variety of unused and unwanted items from around the home.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Furniture & Appliances
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Electronics & Gadgets
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Garage & Storage Items
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Clothing & Textiles
                </li>
              </ul>
              <Link href="/types-of-waste/household-junk" className="inline-block mt-4 text-primaryBrand hover:text-hover transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Office & Business Waste */}
            <div className="bg-neutralBackground rounded-lg p-6 shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/types-of-waste/office-business-commercial-waste.jpg" 
                  alt="Office & Business Waste"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Office & Business Waste</h3>
              <p className="mb-4">Commercial waste from businesses includes a range of discarded items from offices and commercial spaces.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Office Furniture
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Electronic Equipment
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Packaging Materials
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> General Office Waste
                </li>
              </ul>
              <Link href="/types-of-waste/commercial-waste" className="inline-block mt-4 text-primaryBrand hover:text-hover transition-colors duration-300">
                Learn More →
              </Link>
            </div>

            {/* Green Waste */}
            <div className="bg-neutralBackground rounded-lg p-6 shadow-sm">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/types-of-waste/green-garden-waste.jpg" 
                  alt="Green Waste"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Green & Garden Waste</h3>
              <p className="mb-4">Green waste consists of organic materials from gardening and landscaping projects.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Grass Clippings
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Tree Branches & Shrubs
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Hedge Trimmings
                </li>
                <li className="flex items-center">
                  <span className="text-primaryBrand mr-2">✓</span> Plant Materials
                </li>
              </ul>
              <Link href="/types-of-waste/garden-waste" className="inline-block mt-4 text-primaryBrand hover:text-hover transition-colors duration-300">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="pricing-table" className="py-16 bg-neutralBackground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
            <p className="text-lg max-w-3xl mx-auto">Transparent pricing based on the volume of waste. Select the option that best suits your needs.</p>
          </div>

          {/* Using the PricingTable component */}
          <PricingTable pricingData={pricingData} colorTheme="primary" />
        </div>
      </section>

      {/* Volume Size Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Volume Size Guide</h2>
            <p className="text-lg max-w-3xl mx-auto">Not sure which volume size to choose? Use our guide to help you decide.</p>
          </div>

          {/* Using the VolumeSizeGuide component */}
          <VolumeSizeGuide pricingData={pricingData} colorTheme="primary" imageBaseIndex={3} />
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-neutralBackground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Information</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Individually Charged Items</h3>
              <p className="mb-4">Some items require special handling and disposal methods, resulting in additional charges:</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primaryBrand font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Mattresses:</span> $110 per mattress (any size)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primaryBrand font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Tyres:</span> $77 per tyre
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primaryBrand font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium">Other Items:</span> $33 for items like paint tins, gas bottles, and extinguishers
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Weight Limits</h3>
              <p className="mb-4">Our pricing includes disposal of up to 1000 kilograms of waste. An additional fee of $33 per 100 kilograms applies for waste exceeding this limit.</p>
              <p>The maximum weight limit for any of our waste removal services is 1500 kilograms to ensure safe and compliant transport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
}