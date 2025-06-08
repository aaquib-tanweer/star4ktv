import { motion } from 'framer-motion';
import { Gift, Users, Award, Check, Mail, HelpCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

export function ReferralPolicy() {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      number: "1",
      title: "Share Star4KTV",
      description: "Invite friends who haven't used our service before",
      icon: Users
    },
    {
      number: "2", 
      title: "Friends Subscribe",
      description: "When they sign up for an annual plan",
      icon: Award
    },
    {
      number: "3",
      title: "Both Get Rewarded",
      description: "You and your friend each get 2 months free",
      icon: Gift
    }
  ];

  const benefits = [
    "You get 2 months free for each referral",
    "Your friend gets 2 months free on signup",
    "Rewards added automatically after verification"
  ];

  const eligibility = [
    "Must be an active Star4KTV subscriber",
    "Referrals must be new customers",
    "Applies to annual plan subscriptions only"
  ];

  return (
    <>
      <SEOHead 
        title="Referral Program - Star4KTV | Earn Rewards for Sharing IPTV Service"
        description="Join Star4KTV's referral program and earn 2 months free for every friend you refer. Share our premium IPTV service and get rewarded for spreading the word."
        keywords="referral program, earn rewards, Star4KTV referral, IPTV referral, refer friends, streaming rewards, affiliate program"
        url="https://star4ktv.com/referral-policy"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Back Button */}
        <div className="pt-28 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-300 mb-6 group"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:text-[#E50914] transition-colors duration-300" />
              Back
            </motion.button>
          </div>
        </div>

        {/* Hero Section */}
        <motion.section 
          className="relative pb-12 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#E50914] to-[#f40612] rounded-full mb-6"
            >
              <Gift className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Refer & Earn 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#f40612]">
                {' '}Rewards
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Share Star4KTV with friends and get rewarded
            </motion.p>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          className="py-12 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Three simple steps to start earning rewards
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
                      {/* Step Number */}
                      <div className="absolute -top-3 left-6">
                        <div className="w-7 h-7 bg-gradient-to-r from-[#E50914] to-[#f40612] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="w-14 h-14 bg-gradient-to-r from-[#E50914]/20 to-[#f40612]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-[#E50914]" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
                    </div>
                    
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#E50914] to-[#f40612] transform -translate-y-1/2 z-10"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Program Details Section */}
        <motion.section 
          className="py-12 px-4 bg-black/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Program Details
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about our referral program
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Eligibility */}
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-3xl border border-white/10 h-full">
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mr-3">
                      <Check className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Eligibility</h3>
                  </div>
                  <ul className="space-y-3">
                    {eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#E50914] to-[#f40612] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Rewards */}
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-3xl border border-white/10 h-full">
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#E50914]/20 to-[#f40612]/20 rounded-xl flex items-center justify-center mr-3">
                      <Gift className="w-5 h-5 text-[#E50914]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Rewards</h3>
                  </div>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#E50914] to-[#f40612] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Questions Section */}
        <motion.section 
          className="py-12 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#E50914]/20 to-[#f40612]/20 rounded-2xl mb-6">
                <HelpCircle className="w-7 h-7 text-[#E50914]" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our support team is here to help
              </p>
              
              <motion.a
                href="https://wa.me/12108073482?text=Hello%20Star4KTV%20Team%2C%0D%0A%0D%0AI%20have%20a%20question%20about%20the%20referral%20program.%0D%0A%0D%0APlease%20provide%20me%20with%20more%20information.%0D%0A%0D%0AThank%20you%21%0D%0A%0D%0ABest%20regards"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#E50914] to-[#f40612] hover:from-[#f40612] hover:to-[#E50914] text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.section 
          className="py-8 px-4 bg-black/40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-sm leading-relaxed"
            >
              Star4KTV reserves the right to modify this referral program at any time. 
              Changes will be posted on this page.
            </motion.p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
} 