// Import streaming partner logos
import netflixLogo from './streaming partners/netflix-seeklogo.png';
import primeLogo from './streaming partners/amazon-prime-video-seeklogo.png';
import huluLogo from './streaming partners/hulu-seeklogo.png';
import disneyLogo from './streaming partners/Disney-Plus-Logo-PNG.png';
import paramountLogo from './streaming partners/paramount-seeklogo.png';
import crunchyrollLogo from './streaming partners/crunchyroll-seeklogo.png';
import zee5Logo from './streaming partners/zee5-seeklogo.png';
import appleTvLogo from './streaming partners/apple-tv-logo-white.png';
import { motion } from 'framer-motion';

export function StreamingPartners() {
  const basePartners = [{
    name: 'Netflix',
    logo: netflixLogo
  }, {
    name: 'Prime Video',
    logo: primeLogo
  }, {
    name: 'Disney+',
    logo: disneyLogo
  }, {
    name: 'Apple TV+',
    logo: appleTvLogo
  }, {
    name: 'Hulu',
    logo: huluLogo
  }, {
    name: 'Paramount+',
    logo: paramountLogo
  }, {
    name: 'Crunchyroll',
    logo: crunchyrollLogo
  }, {
    name: 'ZEE5',
    logo: zee5Logo
  }];

  // Create multiple copies for seamless infinite scroll
  const partners = [...basePartners, ...basePartners, ...basePartners];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="py-16 bg-black/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 mb-8">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Streaming Partners
        </motion.h2>
      </div>
      <motion.div 
        className="relative overflow-hidden"
        variants={itemVariants}
      >
        <motion.div 
          className="flex animate-scroll"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center filter brightness-75 hover:brightness-100 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ 
                opacity: 1, 
                rotateY: 0,
                transition: { 
                  duration: 0.6, 
                  delay: (index % 8) * 0.1,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true }}
            >
              <motion.img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
                whileHover={{ 
                  filter: "drop-shadow(0 0 10px rgba(229, 9, 20, 0.5))",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}