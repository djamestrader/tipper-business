'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HouseholdWasteTypes from '@/components/HouseholdWasteTypes';
import ConstructionWasteTypes from '@/components/ConstructionWasteTypes';
import ProhibitedWasteTypes from '@/components/ProhibitedWasteTypes';

// Image slideshow component for hero section
function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Array of image paths for the slideshow - using the JPG images from types-of-waste directory
  const images = [
    // These are the specific images requested for the hero section transition
    "/types-of-waste/hero-waste.jpeg",  // Masonry waste image
    "/types-of-waste/hero-waste-1.jpeg",              // Demolition waste image
    "/types-of-waste/hero-waste-2.jpeg"                 // Household junk image
  ];

  useEffect(() => {
    // Set up the interval for image transitions
    const intervalId = setInterval(() => {
      // Start transition
      setIsTransitioning(true);
      
      // After transition duration, update current image and reset transition state
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // This should match the transition duration in CSS
      
    }, 5000); // Change image every 5 seconds
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex, nextImageIndex, images.length]);

  return (
    <>
      {/* Current image */}
      <div 
        className={`absolute inset-0 opacity-60 transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-60'}`}
      >
        <Image
          src={images[currentImageIndex]}
          alt="Waste Management Services"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Next image (preloaded and shown during transition) */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${isTransitioning ? 'opacity-60' : 'opacity-0'}`}
      >
        <Image
          src={images[nextImageIndex]}
          alt="Waste Management Services"
          fill
          className="object-cover"
        />
      </div>
    </>
  );
}

export default function TypesOfWastePage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] bg-charcoal">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            {/* Image slideshow for hero section */}
            <ImageSlideshow />
          </div>
        </div>
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between container-custom mx-auto px-4 py-12">
          <div className="text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Types of Waste We Handle</h1>
            <p className="text-xl text-pure-white max-w-2xl mb-6">
              Professional removal solutions for all waste categories across Sydney. Fast, reliable, and environmentally responsible service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/quote" className="bg-primary-green text-pure-white font-bold py-3 px-6 rounded-md hover:bg-primary-green/90 transition-colors duration-300 inline-block">
                Get a Free Quote
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-pure-white text-pure-white font-bold py-3 px-6 rounded-md hover:bg-pure-white/10 transition-colors duration-300 inline-block">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Quick Quote Form */}
          <div className="bg-pure-white p-6 rounded-lg shadow-lg md:w-5/12 w-full">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Quick Quote</h3>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" />
              </div>
              <div>
                <input type="text" placeholder="Suburb" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green" />
              </div>
              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green">
                  <option value="">Select Waste Size</option>
                  <option value="2">2 Cubic Meters</option>
                  <option value="3">3 Cubic Meters</option>
                  <option value="4">4 Cubic Meters</option>
                  <option value="5">5 Cubic Meters</option>
                  <option value="6">6 Cubic Meters</option>
                </select>
              </div>
              <div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green">
                  <option value="">Select Waste Type</option>
                  <option value="household">Household Junk</option>
                  <option value="commercial">Office & Business Commercial Waste</option>
                  <option value="garden">Green and Garden Waste</option>
                  <option value="renovation">Trade Building Renovation Waste</option>
                  <option value="masonry">Masonry Brick Concrete Waste</option>
                  <option value="demolition">Demolition Waste</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-primary-green text-pure-white font-bold py-3 px-4 rounded-md hover:bg-primary-green/90 transition-colors duration-300">
                Get Quote Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Waste Types Overview */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Comprehensive Waste Removal Solutions</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              At Fair Dinkum Rubbish Removal, we handle a wide variety of waste types with specialized equipment and disposal methods to ensure environmentally responsible waste management.
            </p>
          </div>

          {/* Waste Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Household Junk */}
            <div className="bg-pure-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/types-of-waste/household-junk.jpg"
                  alt="Household Junk Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">Household Junk</h3>
                <p className="text-charcoal mb-4">
                  From old furniture to appliances, we'll help you declutter your home and dispose of unwanted items responsibly.
                </p>
                <Link href="/types-of-waste/household-junk" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Office & Business Commercial Waste */}
            <div className="bg-pure-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/types-of-waste/office-business-commercial-waste.jpg"
                  alt="Commercial Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">Office & Business Commercial Waste</h3>
                <p className="text-charcoal mb-4">
                  Specialized solutions for offices, retail spaces, and commercial properties with minimal disruption to your operations.
                </p>
                <Link href="/types-of-waste/commercial-waste" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Green and Garden Waste */}
            <div className="bg-pure-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/types-of-waste/green-garden-waste.jpg"
                  alt="Green and Garden Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">Green and Garden Waste</h3>
                <p className="text-charcoal mb-4">
                  Eco-friendly disposal of garden trimmings, branches, leaves, and other organic waste from your outdoor spaces.
                </p>
                <Link href="/types-of-waste/garden-waste" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Trade Building Renovation Waste */}
            <div className="bg-pure-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/types-of-waste/trade-building-renovation-waste.jpg"
                  alt="Building Renovation Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">Trade Building Renovation Waste</h3>
                <p className="text-charcoal mb-4">
                  Efficient removal of construction debris, old fixtures, and renovation materials from your building projects.
                </p>
                <Link href="/types-of-waste/renovation-waste" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Masonry Brick Concrete Waste */}
            <div className="bg-pure-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/types-of-waste/masonry-brick-concrete-waste.jpg"
                  alt="Masonry and Concrete Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">Masonry Brick Concrete Waste</h3>
                <p className="text-charcoal mb-4">
                  Specialized equipment and expertise for the removal and proper disposal of heavy masonry, brick, and concrete materials.
                </p>
                <Link href="/types-of-waste/masonry-waste" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Demolition Waste */}
            <div className="bg-pure-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/types-of-waste/demolition-waste.jpg"
                  alt="Demolition Waste Removal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">Demolition Waste</h3>
                <p className="text-charcoal mb-4">
                  Complete solutions for the removal and responsible disposal of waste from demolition projects of all sizes.
                </p>
                <Link href="/types-of-waste/demolition-waste" className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Waste Types We Accept and Don't Accept */}
          <div className="mb-16">
            <HouseholdWasteTypes />
            <ConstructionWasteTypes />
            <ProhibitedWasteTypes />
          </div>
          
          {/* Call to Action */}
          <div className="bg-primary-green text-pure-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help With Waste Removal?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Contact us today for a free, no-obligation quote on any type of waste removal service across Sydney.
            </p>
            <Link href="/quote" className="bg-pure-white text-primary-green font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300 inline-block">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}