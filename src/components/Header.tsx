import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './star4ktv_logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show when at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      scrollToTop();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-500 ease-in-out ${
        !isVisible ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        transform: !isVisible ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div className="max-w-7xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
        <div className="px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" onClick={handleHomeClick}>
                <img 
                  src={logo} 
                  alt="Star4KTV Logo" 
                  className="h-20 object-contain"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div>
                <Link 
                  to="/" 
                  onClick={handleHomeClick}
                  className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
                >
                  Home
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                  ></span>
                </Link>
              </div>
              
              <div>
                <Link 
                  to="/channels" 
                  className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
                >
                  Channels
                  <span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                  ></span>
                </Link>
              </div>
              
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
              >
                Pricing
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                ></span>
              </button>
              
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
              >
                FAQ
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                ></span>
              </button>
              
              <button 
                onClick={scrollToFooter}
                className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
              >
                Contact
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                ></span>
              </button>
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-[#E50914] to-[#f40612] hover:from-[#f40612] hover:to-[#E50914] text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XIcon size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuIcon size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/10 backdrop-blur-sm rounded-b-2xl overflow-hidden">
              <div className="px-6 py-4">
                <nav className="flex flex-col space-y-3">
                  <div>
                    <Link 
                      to="/" 
                      onClick={handleHomeClick}
                      className="text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium block"
                    >
                      Home
                    </Link>
                  </div>
                  
                  <div>
                    <Link 
                      to="/channels" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium block"
                    >
                      Channels
                    </Link>
                  </div>
                  
                  <div>
                    <button 
                      onClick={() => scrollToSection('pricing')}
                      className="text-left text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium w-full"
                    >
                      Pricing
                    </button>
                  </div>
                  
                  <div>
                    <button 
                      onClick={() => scrollToSection('faq')}
                      className="text-left text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium w-full"
                    >
                      FAQ
                    </button>
                  </div>
                  
                  <div>
                    <button 
                      onClick={scrollToFooter}
                      className="text-left text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium w-full"
                    >
                      Contact
                    </button>
                  </div>
                  
                  <div className="pt-3">
                    <button 
                      onClick={() => scrollToSection('pricing')}
                      className="bg-gradient-to-r from-[#E50914] to-[#f40612] hover:from-[#f40612] hover:to-[#E50914] text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium w-full shadow-lg"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}