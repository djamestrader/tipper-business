import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#062e33] text-[#ccc]">
      {/* Newsletter */}
      <div className="bg-[#00343c] px-6 py-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Signup For Our Newsletter</h3>
          <p className="text-sm">Sign up to get latest articles from our cleaning programs</p>
        </div>
        <form className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-grow p-3 rounded-l bg-[#0f2e30] text-[#ccc] placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-transparent text-orange-500 border border-orange-500 px-4 py-3 rounded-r hover:bg-orange-500 hover:text-white transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10">
        {/* About */}
        <div>
          <h4 className="text-lg font-bold text-white border-l-4 border-orange-500 pl-2 mb-4">Trashly</h4>
          <p className="text-sm">
            We believe in a world without plastic. And we really love surfing. That’s why we turn plastic wastes into beautiful new products for surfers.
          </p>
          <h4 className="text-lg font-bold text-white border-l-4 border-orange-500 pl-2 my-4">Social Info</h4>
          <div className="flex gap-2">
            {['F', 'X', 'P', 'I'].map(s => (
              <a key={s} href="#" className="w-8 h-8 bg-[#1a1a1a] text-white flex items-center justify-center rounded text-sm font-bold hover:bg-orange-500">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold text-white border-l-4 border-orange-500 pl-2 mb-4">Contact Us</h4>
          <p>Email Address:</p>
          <a href="mailto:trashly@yourdomain.com" className="text-orange-500 block hover:underline">trashly@yourdomain.com</a>
          <p className="my-3 text-orange-500 font-bold">+123 456 7890</p>
          <p>Headquarters:</p>
          <p>78 N. Sulphur Springs Court<br />Spring Valley, NY 10977</p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-bold text-white border-l-4 border-orange-500 pl-2 mb-4">Useful Links</h4>
          <div className="flex flex-wrap gap-2">
            {["About Us", "Cyber Security", "Meet Our Team", "City News", "IT Consulting", "Software Dev", "Recovery", "Contact Us"].map((text, i) => (
              <a key={i} href="#" className="text-[#ccc] hover:text-orange-500 text-sm">
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-lg font-bold text-white border-l-4 border-orange-500 pl-2 mb-4">Recent Post</h4>
          {[{
            date: 'August 5, 2022',
            text: 'Waste to Energy: A Guide to Sustainable Waste',
            image: '/images/blog-thumb-1.jpg'
          }, {
            date: 'August 2, 2022',
            text: 'Avoid Creating Waste Through Upcycling',
            image: '/images/blog-thumb-2.jpg'
          }].map((post, i) => (
            <div key={i} className="flex gap-3 mb-4">
              <Image src={post.image} alt={post.text} width={60} height={60} className="rounded object-cover" />
              <div>
                <p className="text-xs text-orange-500">{post.date}</p>
                <a href="#" className="text-sm text-[#ccc] hover:text-orange-500">{post.text}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00343c] px-6 py-4 text-center text-sm text-[#ccc] relative">
        <p>
          &copy;{new Date().getFullYear()} Trashly Theme Designed by
          <a href="#" className="text-orange-500 hover:underline mx-1">Preyantechnosys</a> |
          <a href="#" className="text-orange-500 hover:underline mx-1">Privacy Policy</a> |
          <a href="#" className="text-orange-500 hover:underline mx-1">Terms of Use</a> |
          <a href="#" className="text-orange-500 hover:underline mx-1">Support</a>
        </p>
        <a href="#top" className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-2 py-1 rounded font-bold">↑</a>
      </div>
    </footer>
  );
};

export default Footer;
