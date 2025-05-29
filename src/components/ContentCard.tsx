import { PlayIcon, PlusIcon, StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContentCardProps {
  title: string;
  image: string;
  rating: string;
}

export function ContentCard({ title, image, rating }: ContentCardProps) {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:z-10"
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <motion.img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover" 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Hover Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-3"
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.h3 
            className="text-sm md:text-base font-semibold mb-1"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {title}
          </motion.h3>
          <motion.div 
            className="flex items-center justify-between mb-2"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex items-center">
              <StarIcon size={14} className="text-yellow-400 mr-1" />
              <span className="text-xs text-gray-300">{rating}</span>
            </div>
          </motion.div>
          <motion.div 
            className="flex space-x-2"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <motion.button 
              onClick={scrollToPricing}
              className="bg-[#E50914] hover:bg-[#f40612] text-white p-1 rounded-full transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <PlayIcon size={16} />
            </motion.button>
            <motion.button 
              className="bg-gray-700/80 hover:bg-gray-600/80 text-white p-1 rounded-full"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <PlusIcon size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}