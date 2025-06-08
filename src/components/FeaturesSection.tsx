import { Tv, Smartphone, Wifi, Users, Video, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const features = [{
    icon: <Tv size={32} />,
    title: '4K Ultra HD',
    description: 'Crystal clear picture quality with HDR support'
  }, {
    icon: <Smartphone size={32} />,
    title: 'Watch Anywhere',
    description: 'Stream on your TV, phone, tablet, or laptop'
  }, {
    icon: <Wifi size={32} />,
    title: 'Live Sports',
    description: 'Stream live games and events in real-time'
  }, {
    icon: <Users size={32} />,
    title: 'Multiple Profiles',
    description: 'Create up to 6 profiles for your household'
  }, {
    icon: <Video size={32} />,
    title: 'No Ads',
    description: 'Enjoy uninterrupted entertainment'
  }, {
    icon: <Headphones size={32} />,
    title: 'Customer Support',
    description: '11:30 Central - 8:30 Central, Monday to Friday support available'
  }];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="py-16 bg-black/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Star4KTV - Premium IPTV Features
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 group border border-transparent hover:border-[#E50914]/20"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              custom={index}
            >
              <motion.div 
                className="text-[#E50914] mb-4 inline-block"
                whileHover={{ 
                  scale: 1.15,
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3 
                className="text-lg font-semibold mb-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}