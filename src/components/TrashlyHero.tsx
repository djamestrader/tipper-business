import React from 'react';
import Link from 'next/link';

const TrashlyHero: React.FC = () => {
  return (
    <section className="relative bg-darkBackground text-textDark min-h-[600px] flex items-center" 
             style={{
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg")',
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <div className="text-primaryBrand font-bold uppercase tracking-wider mb-4">Our Future Depends On Recycling.</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Don't Be A Punk!</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Recycle Your Junk!</h2>
          <Link href="/about-recycling" className="bg-gradient-to-r from-primaryBrand to-hover text-white py-3 px-6 rounded font-bold text-sm border-2 border-primaryBrand shadow-button hover:bg-transparent hover:text-primaryBrand transform hover:-translate-y-1 transition-all duration-300">
            + More About Recycle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrashlyHero;