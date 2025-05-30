import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, MapPinIcon, MailIcon, PhoneIcon, ShieldCheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ccIcons from './ccicons.webp';
import logo from './star4ktv_logo.png';

export function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-sm py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="Star4KTV Logo" 
                className="h-24 object-contain"
              />
            </div>
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
              601 W 3rd St,<br />
              Austin,<br />
              TX 78703<br />
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
                <a href="tel:+12108988449" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +1 210 8988 449
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

          {/* Secure Payment */}
          <div>
            <div className="flex items-center mb-4">
              <ShieldCheckIcon size={18} className="text-green-500 mr-2" />
              <h3 className="text-gray-200 font-semibold">Secure Payment</h3>
            </div>
            <p className="text-gray-400 text-xs mb-4">
              Your payment information is encrypted and secure
            </p>
            
            {/* Payment Method Logos */}
            <div className="mb-4">
              <img 
                src={ccIcons} 
                alt="Accepted Payment Methods" 
                className="max-w-full h-auto max-h-12 object-contain"
              />
            </div>
            
            <div className="flex items-center space-x-2 text-green-500">
              <ShieldCheckIcon size={12} />
              <span className="text-xs text-gray-400">256-bit SSL</span>
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
