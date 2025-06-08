import { useEffect, useState } from 'react';
import { PlayIcon, InfoIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [{
  id: 1,
  title: 'Superman',
  description: 'David Corenswet stars as the Man of Steel in James Gunn\'s bold new take on the iconic hero. Experience the beginning of the new DCU with kindness, hope, and justice.',
  image: 'https://m.media-amazon.com/images/M/MV5BYzE5NzlkZWEtMmEwOC00YWY2LTkyMjctM2E3MDZmYjI5NGQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  logo: null
}, {
  id: 2,
  title: 'The Fantastic Four: First Steps',
  description: 'Marvel\'s First Family arrives in the MCU! Pedro Pascal, Vanessa Kirby, Joseph Quinn, and Ebon Moss-Bachrach face their greatest challenge yet against the cosmic threat of Galactus.',
  image: 'https://m.media-amazon.com/images/M/MV5BYjRlY2JkZjgtNDY3Yy00MzFmLWI1MGYtN2Y1ZTVkY2FhYTVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  logo: null
}, {
  id: 3,
  title: 'Chhaava',
  description: 'Vicky Kaushal transforms into the great Maratha warrior Chhatrapati Sambhaji Maharaj. Witness the epic tale of courage, honor, and the fight for Swarajya.',
  image: 'https://m.media-amazon.com/images/M/MV5BMGMwZmQ4NzMtODkwOC00MzhmLWI5YWYtMmIwYjBkYzFiMjk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  logo: null
}, {
  id: 4,
  title: 'War 2',
  description: 'Hrithik Roshan returns with N.T. Rama Rao Jr. in this high-octane action thriller. Get ready for explosive action and breathtaking stunts in the YRF Spy Universe.',
  image: 'https://m.media-amazon.com/images/M/MV5BMzQ2YzYwYzItNjBkZC00MGZlLWE3OGEtYzVhNDFkMzA1ODdlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  logo: null
}, {
  id: 5,
  title: 'Sikandar',
  description: 'Salman Khan brings his signature charisma to this action-packed drama directed by A.R. Murugadoss. Experience the power of redemption and transformation in this Eid blockbuster.',
  image: 'https://m.media-amazon.com/images/M/MV5BODg3NGRhMDYtYzVjNy00YzFjLWJkZWQtNGI4ZjdjMGJkMTlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  logo: null
}, {
  id: 6,
  title: 'Avengers: Doomsday',
  description: 'Robert Downey Jr. returns to the MCU as the iconic villain Doctor Doom. The Avengers face their greatest threat yet in this epic conclusion directed by the Russo Brothers.',
  image: 'https://m.media-amazon.com/images/M/MV5BNzI3NDg1MzgtN2I1OS00MWJjLWI5NGYtYTNlOGU2ZjdkNjIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  logo: null
}];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };
  
  return (
    <motion.div 
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image with Gradient Overlay */}
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <motion.div 
              key={slide.id} 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      
      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Star4KTV Branding Above Content */}
          <motion.div className="mb-6" variants={itemVariants}>
            <motion.div 
              className="flex items-center mb-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div 
                className="w-8 h-0.5 bg-[#E50914] mr-3"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              ></motion.div>
              <span className="text-[#E50914] font-bold text-sm md:text-base tracking-widest">
                STAR4KTV EXCLUSIVE
              </span>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {heroSlides.map((slide, index) => (
              index === currentSlide && (
                <motion.div 
                  key={slide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.p 
                    className="text-[#E50914] font-semibold mb-8 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Watch now on Star4KTV - Your Premium IPTV Experience
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.button 
                      onClick={scrollToPricing}
                      className="bg-[#E50914] hover:bg-[#f40612] text-white font-semibold px-6 py-3 rounded-md flex items-center transition"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <PlayIcon size={20} className="mr-2" />
                      {slide.title === 'IPL 2024' ? 'Watch Live' : 'Play'}
                    </motion.button>
                    <motion.button 
                      className="bg-gray-700/80 hover:bg-gray-600/80 text-white font-semibold px-6 py-3 rounded-md flex items-center transition"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <InfoIcon size={20} className="mr-2" />
                      More Info
                    </motion.button>
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Indicators */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {heroSlides.map((_, index) => (
          <motion.button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-[#E50914] w-4' : 'bg-gray-400'
            } transition-all`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}