'use client';

import { useState } from 'react';
import {
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  MessageCircle,
  Youtube,
} from 'lucide-react';
import { socialLinks } from '@/lib/site-links';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
              STAY CONNECTED
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for updates and opportunities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9c4a]"
              />
              <button
                type="submit"
                className="w-full bg-[#2d9c4a] text-white px-6 py-3 rounded-lg hover:bg-[#239a41] transition-colors font-semibold"
              >
                Subscribe
              </button>
              {submitted && (
                <p className="text-green-600 font-semibold">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

          {/* Social Links Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
              FOLLOW US
            </h2>
            <p className="text-gray-600 mb-8">
              Connect with us on social media for latest updates.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#2d9c4a] transition-colors group"
              >
                <LinkedinIcon className="w-10 h-10 p-2 border-2 border-gray-300 rounded-lg group-hover:border-[#2d9c4a] group-hover:bg-[#2d9c4a] group-hover:text-white transition-all" />
                <span className="font-semibold hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#2d9c4a] transition-colors group"
              >
                <TwitterIcon className="w-10 h-10 p-2 border-2 border-gray-300 rounded-lg group-hover:border-[#2d9c4a] group-hover:bg-[#2d9c4a] group-hover:text-white transition-all" />
                <span className="font-semibold hidden sm:inline">X</span>
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#2d9c4a] transition-colors group"
              >
                <InstagramIcon className="w-10 h-10 p-2 border-2 border-gray-300 rounded-lg group-hover:border-[#2d9c4a] group-hover:bg-[#2d9c4a] group-hover:text-white transition-all" />
                <span className="font-semibold hidden sm:inline">Instagram</span>
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#2d9c4a] transition-colors group"
              >
                <MessageCircle className="w-10 h-10 p-2 border-2 border-gray-300 rounded-lg group-hover:border-[#2d9c4a] group-hover:bg-[#2d9c4a] group-hover:text-white transition-all" />
                <span className="font-semibold hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#2d9c4a] transition-colors group"
              >
                <Youtube className="w-10 h-10 p-2 border-2 border-gray-300 rounded-lg group-hover:border-[#2d9c4a] group-hover:bg-[#2d9c4a] group-hover:text-white transition-all" />
                <span className="font-semibold hidden sm:inline">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
