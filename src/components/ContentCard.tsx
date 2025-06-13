import { PlayIcon, StarIcon } from 'lucide-react';
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-sm md:text-base font-semibold mb-1 text-white">
            {title}
          </h3>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <StarIcon size={14} className="text-yellow-400 mr-1" />
              <span className="text-xs text-gray-300">{rating}</span>
            </div>
          </div>
          <motion.button 
            onClick={scrollToPricing}
            className="w-full bg-[#E50914] hover:bg-[#f40612] text-white py-2 rounded-md flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <PlayIcon size={20} className="mr-2" />
            Play
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}