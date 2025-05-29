import { ContentCard } from './ContentCard';
import { ChevronRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Content {
  id: number;
  title: string;
  image: string;
  rating: string;
}

interface ContentSectionProps {
  title: string;
  contents: Content[];
}

export function ContentSection({ title, contents }: ContentSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex justify-between items-center mb-4"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-xl md:text-2xl font-semibold"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.button 
          className="text-gray-400 hover:text-white flex items-center text-sm"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          See all 
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronRightIcon size={16} className="ml-1" />
          </motion.div>
        </motion.button>
      </motion.div>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
        variants={containerVariants}
      >
        {contents.map((content, index) => (
          <motion.div
            key={content.id}
            variants={itemVariants}
            custom={index}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            <ContentCard 
              title={content.title} 
              image={content.image} 
              rating={content.rating} 
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}