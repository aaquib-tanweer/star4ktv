import { useEffect, useState } from 'react';
import { PlayIcon, InfoIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dayslaterImg from './28dayslater.jpg';
import housefull5Img from './housefull5.jpg';
import ballerinaImg from './ballerina.jpg';
import sitarezameenparImg from './sitarezameenpar.jpg';
import supermanImg from './superman.jpg';
import fantastic4Img from './fantastic4.jpg';
import avatarImg from './avatar.jpg';

const heroSlides = [{
  id: 1,
  title: '28 Days Later',
  description: 'Danny Boyle returns to the zombie apocalypse that started it all. Experience the terror and survival in this highly anticipated sequel to the groundbreaking horror classic.',
  image: dayslaterImg,
  logo: null
}, {
  id: 2,
  title: 'Housefull 5',
  description: 'Akshay Kumar leads the gang in another hilarious adventure filled with comedy, confusion, and chaos. Get ready for the biggest laugh riot of the year!',
  image: housefull5Img,
  logo: null
}, {
  id: 3,
  title: 'Ballerina',
  description: 'Ana de Armas takes center stage in this action-packed John Wick universe spinoff. Witness grace, elegance, and deadly precision in this ballet of bullets.',
  image: ballerinaImg,
  logo: null
}, {
  id: 4,
  title: 'Sitarey Zameen Par',
  description: 'Aamir Khan returns with another heartwarming tale that celebrates the human spirit. Experience a story that will touch your heart and inspire your soul.',
  image: sitarezameenparImg,
  logo: null
}, {
  id: 5,
  title: 'Superman',
  description: 'David Corenswet stars as the Man of Steel in James Gunn\'s bold new take on the iconic hero. Experience the beginning of the new DCU with kindness, hope, and justice.',
  image: supermanImg,
  logo: null
}, {
  id: 6,
  title: 'Fantastic Four',
  description: 'Marvel\'s First Family arrives in the MCU! Pedro Pascal, Vanessa Kirby, Joseph Quinn, and Ebon Moss-Bachrach face their greatest challenge yet.',
  image: fantastic4Img,
  logo: null
}, {
  id: 7,
  title: 'Avatar',
  description: 'James Cameron continues the epic saga of Pandora. Dive deeper into the world of the Na\'vi with stunning visuals and an unforgettable adventure.',
  image: avatarImg,
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
                backgroundPosition: slide.title === 'Superman' ? 'center 20%' : 
                                  slide.title === 'Fantastic Four' ? 'center 15%' : 
                                  'center top'
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
                      className="bg-[#E50914] hover:bg-[#f40612] text-white font-semibold px-8 py-3 rounded-md flex items-center transition"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <PlayIcon size={24} className="mr-2" />
                      {slide.title === 'IPL 2024' ? 'Watch Live' : 'Play'}
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