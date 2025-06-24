import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/images/about-hero.jpg"
          alt="About The Southern Cross Clear"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">About Us</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              Your trusted partner for professional rubbish removal services in Sydney
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Our Story</h2>
              <p className="text-charcoal mb-4">
                The Southern Cross Clear was founded with a simple mission: to provide Sydney residents and businesses with reliable, efficient, and environmentally responsible rubbish removal services.
              </p>
              <p className="text-charcoal mb-4">
                What began as a small family operation has grown into a trusted name in the waste management industry, serving thousands of satisfied customers across the Sydney metropolitan area.
              </p>
              <p className="text-charcoal mb-4">
                Our name, inspired by the iconic Southern Cross constellation that adorns our Australian sky, represents our commitment to providing clear solutions for all your waste removal needs. Just as the Southern Cross has guided travelers for generations, we aim to be your guiding light in maintaining clean, clutter-free spaces.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/1300rubbish/2025-06-05_18-26-35.jpg"
                alt="Fair Dinkum Rubbish Removal Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-pure-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Values</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              At The Southern Cross Clear, our core values guide everything we do, from how we treat our customers to how we handle waste disposal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-off-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primaryBrand rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Reliability</h3>
              <p className="text-charcoal text-center">
                We understand that your time is valuable. That's why we pride ourselves on punctuality, clear communication, and delivering on our promises every time.
              </p>
            </div>

            <div className="bg-off-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primaryBrand rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Customer Care</h3>
              <p className="text-charcoal text-center">
                Your satisfaction is our top priority. We go above and beyond to ensure a positive experience, from the first phone call to the final cleanup.
              </p>
            </div>

            <div className="bg-off-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primaryBrand rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4 text-center">Environmental Responsibility</h3>
              <p className="text-charcoal text-center">
                We're committed to sustainable waste management practices, ensuring that as much waste as possible is recycled or disposed of in an environmentally friendly manner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Services</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We offer a comprehensive range of rubbish removal services to meet all your waste management needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pure-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">Self-Load Tipper Trailer Rental</h3>
              <p className="text-charcoal mb-6">
                Our convenient tipper trailer rental service allows you to work at your own pace. We deliver the trailer to your location, you load it with your unwanted items, and we collect it when you're done, taking care of the disposal process.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondaryAccent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Cost-effective solution</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondaryAccent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Work at your own pace</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondaryAccent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>No heavy lifting on our part</span>
                </li>
              </ul>
              <Link href="/services#trailer-rental" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="bg-pure-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">Full-Service Hands-On Rubbish Removal</h3>
              <p className="text-charcoal mb-6">
                Our professional team comes to your location, handles all the heavy lifting, and removes your unwanted items quickly and efficiently. This comprehensive service is perfect for those who prefer a hands-off approach.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondaryAccent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>No heavy lifting required from you</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondaryAccent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Quick and efficient service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondaryAccent mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Professional team handles everything</span>
                </li>
              </ul>
              <Link href="/services#full-service" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 bg-pure-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Meet Our Team</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to providing you with the best rubbish removal experience possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/images/team-member-1.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Jack Wilson</h3>
              <p className="text-primaryBrand font-medium mb-4">Founder & CEO</p>
              <p className="text-charcoal">
                With over 15 years of experience in the waste management industry, John founded The Southern Cross Clear with a vision to revolutionize rubbish removal services in Sydney.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/images/team-member-2.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Emily Brown</h3>
              <p className="text-primaryBrand font-medium mb-4">Operations Manager</p>
              <p className="text-charcoal">
                Sarah ensures that all our operations run smoothly and efficiently, coordinating our teams and ensuring that every job is completed to the highest standard.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/images/team-member-3.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Olivia Lee</h3>
              <p className="text-primaryBrand font-medium mb-4">Customer Service Manager</p>
              <p className="text-charcoal">
                Michael leads our customer service team, ensuring that every client receives personalized attention and that their needs are met with the utmost care and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Why Choose The Southern Cross Clear?</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We stand out from the competition for many reasons. Here's why our customers choose us for their rubbish removal needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primaryBrand rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Experienced Team</h3>
              <p className="text-charcoal">
                Our team has years of experience in the rubbish removal industry, ensuring professional service every time.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primaryBrand rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Quality Service</h3>
              <p className="text-charcoal">
                We pride ourselves on delivering high-quality service that exceeds our customers' expectations.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primaryBrand rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd"></path>
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Prompt Service</h3>
              <p className="text-charcoal">
                We value your time and strive to provide prompt and efficient service that fits your schedule.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primaryBrand rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">Eco-Friendly</h3>
              <p className="text-charcoal">
                We're committed to environmentally responsible waste disposal practices, recycling whenever possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-primaryBrand">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-pure-white mb-4">Ready to Experience The Southern Cross Clear Difference?</h2>
          <p className="text-xl text-pure-white mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your rubbish removal needs and receive a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="bg-pure-white text-primaryBrand px-8 py-3 rounded-md font-medium hover:bg-off-white transition-colors duration-300">
              Get a Quote
            </Link>
            <Link href="/contact" className="border-2 border-pure-white text-pure-white px-8 py-3 rounded-md font-medium hover:bg-secondaryBrand transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}