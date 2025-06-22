import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-charcoal">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact The Southern Cross Clear"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-white mb-4">Contact Us</h1>
            <p className="text-xl text-pure-white max-w-2xl mx-auto">
              We're here to help with all your rubbish removal needs
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Get In Touch</h2>
              <p className="text-charcoal mb-8">
                Have questions about our services or need a quote? Our friendly team is ready to assist you. Reach out to us through any of the following methods, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Our Location</h3>
                    <p className="text-charcoal">123 Rubbish Road</p>
                    <p className="text-charcoal">Sydney, NSW 2000</p>
                    <p className="text-charcoal">Australia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Phone</h3>
                    <p className="text-charcoal">(02) 1234 5678</p>
                    <p className="text-charcoal">Monday to Friday: 7am - 7pm</p>
                    <p className="text-charcoal">Saturday: 8am - 5pm</p>
                    <p className="text-charcoal">Sunday: 9am - 3pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-pure-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Email</h3>
                    <p className="text-charcoal">info@southerncrossclear.com.au</p>
                    <p className="text-charcoal">We aim to respond to all emails within 24 hours.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center hover:bg-eucalyptus-deep transition-colors duration-300">
                    <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center hover:bg-eucalyptus-deep transition-colors duration-300">
                    <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center hover:bg-eucalyptus-deep transition-colors duration-300">
                    <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center hover:bg-eucalyptus-deep transition-colors duration-300">
                    <svg className="w-5 h-5 text-pure-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-pure-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-charcoal font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-charcoal font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-charcoal font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-charcoal font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-charcoal font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-pure-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Find Us</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We're conveniently located in Sydney, serving the entire metropolitan area.
            </p>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual map component or iframe */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-charcoal text-lg font-medium">Google Maps will be integrated here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Our Service Areas</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              We provide rubbish removal services throughout the Sydney metropolitan area, including the following regions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-pure-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">Eastern Suburbs</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bondi</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Randwick</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Maroubra</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Coogee</span>
                </li>
              </ul>
            </div>

            <div className="bg-pure-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">Inner West</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Newtown</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Marrickville</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Leichhardt</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Ashfield</span>
                </li>
              </ul>
            </div>

            <div className="bg-pure-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">North Shore</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Chatswood</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>North Sydney</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mosman</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Lane Cove</span>
                </li>
              </ul>
            </div>

            <div className="bg-pure-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-4">Western Sydney</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Parramatta</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Blacktown</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Liverpool</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Penrith</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal mb-6">
              Don't see your area listed? Contact us to check if we service your location. We're constantly expanding our service areas to meet the needs of our customers.
            </p>
            <Link href="/quote" className="btn-primary inline-block">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-pure-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Have questions about our services? Find answers to our most commonly asked questions below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-2">What areas do you service?</h3>
              <p className="text-charcoal">
                We service the entire Sydney metropolitan area, including the Eastern Suburbs, Inner West, North Shore, and Western Sydney. If you're unsure whether we service your area, please contact us.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-2">How quickly can you respond to a request?</h3>
              <p className="text-charcoal">
                We pride ourselves on our prompt service. In many cases, we can offer same-day or next-day service, depending on our schedule and your location. For urgent requests, please call us directly.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-2">Do you provide free quotes?</h3>
              <p className="text-charcoal">
                Yes, we provide free, no-obligation quotes for all our services. You can request a quote online through our website or by calling us directly.
              </p>
            </div>

            <div className="bg-off-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-charcoal mb-2">What types of payment do you accept?</h3>
              <p className="text-charcoal">
                We accept various payment methods, including credit/debit cards, bank transfers, and cash. Payment is typically required upon completion of the service.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href="/faq" className="btn-secondary inline-block">
                View All FAQs
              </Link>
            </div>
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
            <a href="tel:0212345678" className="border-2 border-pure-white text-pure-white px-8 py-3 rounded-md font-medium hover:bg-eucalyptus-deep transition-colors duration-300">
              Call (02) 1234 5678
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}