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
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div 
        className="max-w-7xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
        whileHover={{ 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
            >
              <Link to="/" onClick={handleHomeClick}>
                <motion.img 
                  src={logo} 
                  alt="Star4KTV Logo" 
                  className="h-12 bg-white p-2 rounded-xl shadow-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                />
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex space-x-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/" 
                  onClick={handleHomeClick}
                  className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
                >
                  Home
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  ></motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/channels" 
                  className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
                >
                  Channels
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  ></motion.span>
                </Link>
              </motion.div>
              
              <motion.button 
                onClick={() => scrollToSection('pricing')}
                className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                ></motion.span>
              </motion.button>
              
              <motion.button 
                onClick={() => scrollToSection('faq')}
                className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                FAQ
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                ></motion.span>
              </motion.button>
              
              <motion.button 
                onClick={scrollToFooter}
                className="text-white/90 hover:text-white hover:text-[#E50914] transition-all duration-300 font-medium relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                ></motion.span>
              </motion.button>
            </motion.nav>
            
            {/* Desktop Actions */}
            <motion.div 
              className="hidden md:flex items-center space-x-4"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-[#E50914] to-[#f40612] hover:from-[#f40612] hover:to-[#E50914] text-white px-6 py-2.5 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(229, 9, 20, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.div 
              className="md:hidden flex items-center"
              variants={itemVariants}
            >
              <motion.button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
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
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-white/10 bg-black/10 backdrop-blur-sm rounded-b-2xl overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="px-6 py-4">
                <motion.nav 
                  className="flex flex-col space-y-3"
                  variants={mobileMenuVariants}
                >
                  <motion.div variants={mobileItemVariants}>
                    <Link 
                      to="/" 
                      onClick={handleHomeClick}
                      className="text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium block"
                    >
                      Home
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={mobileItemVariants}>
                    <Link 
                      to="/channels" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium block"
                    >
                      Channels
                    </Link>
                  </motion.div>
                  
                  <motion.div variants={mobileItemVariants}>
                    <button 
                      onClick={() => scrollToSection('pricing')}
                      className="text-left text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium w-full"
                    >
                      Pricing
                    </button>
                  </motion.div>
                  
                  <motion.div variants={mobileItemVariants}>
                    <button 
                      onClick={() => scrollToSection('faq')}
                      className="text-left text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium w-full"
                    >
                      FAQ
                    </button>
                  </motion.div>
                  
                  <motion.div variants={mobileItemVariants}>
                    <button 
                      onClick={scrollToFooter}
                      className="text-left text-white/90 hover:text-[#E50914] transition-all duration-300 py-2.5 px-3 rounded-xl hover:bg-white/5 font-medium w-full"
                    >
                      Contact
                    </button>
                  </motion.div>
                  
                  <motion.div 
                    className="pt-3"
                    variants={mobileItemVariants}
                  >
                    <motion.button 
                      onClick={() => scrollToSection('pricing')}
                      className="bg-gradient-to-r from-[#E50914] to-[#f40612] hover:from-[#f40612] hover:to-[#E50914] text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium w-full shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Subscribe Now
                    </motion.button>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}