import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MapPinIcon, MailIcon, PhoneIcon, ShieldCheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ccIcons from './ccicons.webp';

export function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-sm py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#E50914] mb-4">Star4KTV</h2>
            <p className="text-gray-400 text-sm mb-4">
              Your premium IPTV streaming service with 7000+ channels from around the world.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-[#E50914] transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E50914] transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E50914] transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E50914] transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4 flex items-center">
              <MapPinIcon size={18} className="mr-2 text-[#E50914]" />
              Our Location
            </h3>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              702 San Pedro Ave,<br />
              San Antonio,<br />
              TX 78212<br />
              United States
            </address>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MailIcon size={16} className="mr-2 text-[#E50914] flex-shrink-0" />
                <a href="mailto:info@star4ktv.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  info@star4ktv.com
                </a>
              </div>
              <div className="flex items-center">
                <MailIcon size={16} className="mr-2 text-[#E50914] flex-shrink-0" />
                <a href="mailto:support@star4ktv.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  support@star4ktv.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={16} className="mr-2 text-[#E50914] flex-shrink-0" />
                <a href="tel:+12105551234" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +1 (210) 555-1234
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={16} className="mr-2 text-[#E50914] flex-shrink-0" />
                <a href="tel:+12105555678" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +1 (210) 555-5678
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="mailto:support@star4ktv.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Secure Payment Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheckIcon size={24} className="text-green-500 mr-2" />
              <h3 className="text-gray-200 font-semibold text-lg">Secure Payment Methods</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your payment information is encrypted and secure
            </p>
            
            {/* Payment Method Logos */}
            <div className="flex justify-center mb-4">
              <img 
                src={ccIcons} 
                alt="Accepted Payment Methods" 
                className="max-w-full h-auto max-h-16 object-contain"
              />
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-green-500">
              <ShieldCheckIcon size={16} />
              <span className="text-xs text-gray-400">256-bit SSL Encryption</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Star4KTV. All rights reserved. | Premium IPTV Streaming Service
          </p>
        </div>
      </div>
    </footer>
  );
}