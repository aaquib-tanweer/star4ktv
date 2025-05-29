import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Star4KTV?",
      answer: "Star4KTV is a leading IPTV service that delivers a vast selection of television content through internet streaming. It allows users to effortlessly access live TV channels, movies, series, and more on their preferred devices, providing a smooth and engaging entertainment experience."
    },
    {
      question: "How can I access Star4KTV?",
      answer: "To start using Star4KTV, you just need to subscribe through our official website or get in touch with our Sales Team. Once your subscription is confirmed, you'll receive login details that allow you to access the platform through our website or the dedicated mobile application."
    },
    {
      question: "Can I stream Star4KTV on multiple devices at the same time?",
      answer: "Yes, Star4KTV supports streaming on multiple devices simultaneously. The number of concurrent streams depends on the subscription plan you choose."
    },
    {
      question: "Which devices are compatible with Star4KTV?",
      answer: "Star4KTV works with a wide range of devices, including Smart TVs, Firestick, MAG boxes, Android smartphones and TV boxes, Enigma, DreamBox, Vu+, PCs, VLC media player, Kodi/XBMC, and many others."
    },
    {
      question: "What channels are available on Star4KTV?",
      answer: "Star4KTV provides a premium selection of channels from the UK, USA, Europe, and Asia. Enjoy top-tier movies and TV shows with features like Catch-Up and Electronic Program Guide (EPG), all in stunning 4K, Ultra HD, or HD quality."
    },
    {
      question: "How long does it take to get access to Star4KTV?",
      answer: "After completing your subscription, you'll typically receive your access details via email within 3 to 60 minutes. During peak times—like late evenings or weekends—it may take up to 2 hours."
    },
    {
      question: "What if I'm not satisfied with Star4KTV?",
      answer: "No problem—Star4KTV offers a 15-day money-back guarantee for any reason, ensuring peace of mind and buyer protection."
    },
    {
      question: "How do I cancel my Star4KTV subscription?",
      answer: "To cancel your Star4KTV subscription, simply contact our Sales Executive or get in touch with our Support Team via WhatsApp. They will assist you with the cancellation process. Please note that your access will remain active until the end of your current billing cycle."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
    hidden: { opacity: 0, y: 20 },
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
      id="faq" 
      className="py-16 bg-black/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-6 transition-all duration-300 flex justify-between items-center"
                whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3 
                  className="text-lg font-semibold pr-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {faq.question}
                </motion.h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openFAQ === index ? (
                    <ChevronUpIcon size={24} className="text-[#E50914] flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div 
                    className="bg-gray-800/30 rounded-b-lg px-6 py-4 mt-1 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeInOut",
                      opacity: { duration: 0.3 }
                    }}
                  >
                    <motion.p 
                      className="text-gray-300 leading-relaxed"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
} 