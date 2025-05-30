import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Star4KTV and how does it work?',
      answer: 'Star4KTV is a premium IPTV streaming service that delivers high-quality television content over the internet. Simply subscribe to one of our plans, download our app on your preferred device, and start enjoying thousands of channels from around the world.'
    },
    {
      question: 'What devices are compatible with Star4KTV?',
      answer: 'Star4KTV works on a wide range of devices including Smart TVs, Android TV boxes, Fire TV Stick, Roku, smartphones, tablets, computers, and more. We support most popular streaming devices and platforms.'
    },
    {
      question: 'How many channels do you offer?',
      answer: 'We offer over 7,000 live TV channels from around the world, including premium sports, movies, news, entertainment, and international content. Our channel lineup is constantly updated with new additions.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 24-hour free trial so you can test our service quality and channel selection. No credit card required for the trial period.'
    },
    {
      question: 'What internet speed do I need?',
      answer: 'For optimal streaming quality, we recommend a minimum internet speed of 10 Mbps for HD content and 25 Mbps for 4K content. A stable internet connection ensures the best viewing experience.'
    },
    {
      question: 'Can I watch on multiple devices simultaneously?',
      answer: 'Yes, depending on your subscription plan, you can stream on multiple devices at the same time. Our plans support 1 to 5 simultaneous connections.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, cryptocurrency, and various other payment methods. All transactions are secured with 256-bit SSL encryption.'
    },
    {
      question: 'Is customer support available?',
      answer: 'Yes, we provide 24/7 customer support through live chat, email, and phone. Our technical support team is always ready to help you with any questions or issues.'
    }
  ];

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
        duration: 0.4,
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
          transition={{ duration: 0.5 }}
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
              style={{ willChange: 'transform' }}
            >
              <motion.button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-6 transition-colors duration-200 flex justify-between items-center"
                whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                whileTap={{ scale: 0.995 }}
                style={{ willChange: 'background-color' }}
              >
                <motion.h3 
                  className="text-lg font-semibold pr-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {faq.question}
                </motion.h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ willChange: 'transform' }}
                >
                  {openFAQ === index ? (
                    <ChevronUpIcon size={24} className="text-[#E50914] flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence mode="wait">
                {openFAQ === index && (
                  <motion.div 
                    className="bg-gray-800/30 rounded-b-lg px-6 py-4 mt-1 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeOut"
                    }}
                    style={{ willChange: 'height, opacity' }}
                  >
                    <motion.p 
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
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