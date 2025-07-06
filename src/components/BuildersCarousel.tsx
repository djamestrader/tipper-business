'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CompanyData {
  name: string;
  specialty: string;
  icon: string;
  website: string;
}

export default function BuildersCarousel() {
  // List of top construction companies in Sydney
  const companies: CompanyData[] = [
    { name: 'Lendlease', specialty: 'Infrastructure & Development', icon: '🏗️', website: 'https://www.lendlease.com' },
    { name: 'Multiplex', specialty: 'Commercial Construction', icon: '🔨', website: 'https://www.multiplex.global' },
    { name: 'Built', specialty: 'Mixed-Use Development', icon: '🏢', website: 'https://www.built.com.au' },
    { name: 'Richard Crookes', specialty: 'Commercial & Residential', icon: '⚡', website: 'https://www.richardcrookes.com.au' },
    { name: 'John Holland', specialty: 'Infrastructure & Rail', icon: '🏗️', website: 'https://www.johnholland.com.au' },
    { name: 'CPB Contractors', specialty: 'Civil Engineering', icon: '🔧', website: 'https://www.cpbcon.com.au' },
    { name: 'Mirvac', specialty: 'Residential Development', icon: '🏘️', website: 'https://www.mirvac.com' },
    { name: 'Laing O\'Rourke', specialty: 'Major Infrastructure', icon: '🌉', website: 'https://www.laingorourke.com' },
    { name: 'Roberts Co', specialty: 'High-Rise Construction', icon: '🏗️', website: 'https://www.robertsco.com.au' },
    { name: 'Taylor', specialty: 'Commercial & Civil', icon: '⚒️', website: 'https://www.taylor.com.au' },
    { name: 'Hansen Yuncken', specialty: 'Industrial Construction', icon: '🏭', website: 'https://www.hansenyuncken.com.au' },
    { name: 'Hutchinson Builders', specialty: 'Commercial Buildings', icon: '🌆', website: 'https://www.hutchinsonbuilders.com.au' },
    { name: 'FDC Construction', specialty: 'Commercial & Fitout', icon: '🏢', website: 'https://www.fdcbuilding.com.au' },
    { name: 'Parkview', specialty: 'Urban Development', icon: '🔨', website: 'https://www.parkview.com.au' },
    { name: 'ADCO Constructions', specialty: 'Diverse Construction', icon: '🏗️', website: 'https://www.adco.com.au' },
  ];

  // Duplicate companies for seamless loop
  const allCompanies = [...companies, ...companies, ...companies];
  
  // State to track if the carousel is paused
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 bg-neutralBackground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textDark mb-4">Top Construction Companies in Sydney</h2>
          <p className="text-lg text-textLight max-w-3xl mx-auto">
            Fair Dinkum Rubbish Removal proudly serves these leading construction companies with reliable waste management solutions.
          </p>
        </div>

        <div 
          className="relative w-full overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutralBackground to-transparent z-10"></div>
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutralBackground to-transparent z-10"></div>
          
          <div 
            className={`flex ${isPaused ? '' : 'animate-scroll'} pause-animation:pause py-6`}
            style={{ gap: '1.5rem' }}
          >
            {allCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="flex items-center justify-center">
                  <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-[280px] h-[180px] bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:translate-y-[-5px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    <div className="w-20 h-20 bg-neutralBackground/10 rounded-lg flex items-center justify-center mb-4 text-4xl border-2 border-neutralBackground/20">
                      {company.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-textDark mb-1">{company.name}</h3>
                    <p className="text-sm text-textLight italic">{company.specialty}</p>
                    <span className="mt-2 text-xs text-primaryBrand opacity-0 group-hover:opacity-100 transition-opacity duration-300">Visit Website</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}