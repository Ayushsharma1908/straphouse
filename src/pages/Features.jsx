import React from 'react';
import { Palette, Gem, Ruler, Truck, Shield, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Palette />,
      title: 'Custom Strap Designer',
      description: 'Intuitive Canva-style designer to create your perfect strap with real-time preview.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    {
      icon: <Gem />,
      title: 'Premium Materials',
      description: 'Choose from top-grade leather, durable nylon, soft silicone, and luxurious metal.',
      gradient: 'from-amber-500 to-orange-500',
      delay: 0.2
    },
    {
      icon: <Ruler />,
      title: 'Perfect Fit Guarantee',
      description: 'Precise sizing for all watch models from classic to modern smartwatches.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.3
    },
    {
      icon: <Truck />,
      title: 'Fast & Secure Delivery',
      description: 'Worldwide shipping with tracking and insurance for your peace of mind.',
      gradient: 'from-emerald-500 to-teal-500',
      delay: 0.4
    },
    {
      icon: <Shield />,
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security and encryption.',
      gradient: 'from-violet-500 to-indigo-500',
      delay: 0.5
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const featureCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      y: -12,
      scale: 1.03,
      rotateX: 0,
      rotateY: 2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      rotateY: -2
    }
  };

  const iconContainerVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    },
    hover: {
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  const floatingIconVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundShapeVariants = {
    animate: {
      x: [0, 10, 0],
      y: [0, -5, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      id="features" 
      className="py-20 md:py-28 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-5 w-24 h-24 bg-gradient-to-br from-strap-violet/5 to-strap-light-violet/5 rounded-full blur-xl"
        variants={backgroundShapeVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-1/4 right-5 w-32 h-32 bg-gradient-to-tr from-strap-violet/3 to-strap-light-violet/3 rounded-full blur-xl"
        variants={backgroundShapeVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={sectionVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-strap-violet bg-strap-violet/10 px-4 py-1 rounded-full">
              PREMIUM FEATURES
            </span>
          </motion.div>

          <motion.h2 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-strap-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Elevate Your{' '}
            <motion.span 
              className="text-strap-violet relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
            >
              Watch Experience
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-strap-violet to-strap-light-violet"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-strap-dark-gray text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Premium features for the discerning watch enthusiast who values quality, 
            personalization, and exceptional craftsmanship.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={featureCardVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 relative overflow-hidden">
                {/* Gradient Background Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  animate={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(${index * 50}, ${index * 30}, ${index * 70}, 0.03) 100%)`
                  }}
                />
                
                {/* Animated Corner Accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-12 h-12 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-strap-violet/10 to-transparent -translate-y-1/2 translate-x-1/2 rotate-45" />
                </motion.div>

                {/* Icon Container */}
                <motion.div 
                  className="relative z-10 mb-6 md:mb-8"
                  variants={iconContainerVariants}
                  whileHover="hover"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-strap-violet/10 to-strap-light-violet/5 rounded-2xl group-hover:shadow-lg transition-all duration-300`}>
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      className="text-strap-violet"
                    >
                      {React.cloneElement(feature.icon, { size: 28 })}
                    </motion.div>
                  </div>
                  
                  {/* Floating animation effect */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-strap-violet to-strap-light-violet rounded-full flex items-center justify-center"
                    variants={floatingIconVariants}
                    animate="float"
                  >
                    <Zap className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>

                {/* Feature Number */}
                <motion.div 
                  className="absolute top-6 left-6 text-5xl md:text-6xl font-playfair font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                >
                  0{index + 1}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-strap-black relative z-10 group-hover:text-strap-violet transition-colors duration-300"
                  variants={titleVariants}
                >
                  {feature.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-sm md:text-base text-strap-dark-gray leading-relaxed relative z-10"
                  variants={descriptionVariants}
                >
                  {feature.description}
                </motion.p>

                {/* Learn More Link */}
                <motion.div 
                  className="mt-6 relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: feature.delay + 0.2 }}
                >
                  <span className="inline-flex items-center text-sm font-medium text-strap-violet group-hover:text-strap-light-violet transition-colors duration-300">
                    Learn more
                    <motion.svg 
                      className="w-4 h-4 ml-2"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.div>

                {/* Bottom Gradient Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-strap-violet/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    delay: feature.delay,
                    ease: "easeOut"
                  }}
                />
              </div>

              {/* Connecting Lines (Desktop Only) */}
              {index < features.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-l from-strap-light-violet/30 to-transparent translate-x-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: feature.delay + 0.3
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 md:mt-28 pt-12 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Straps Created', icon: '✨' },
              { value: '98%', label: 'Satisfaction', icon: '⭐' },
              { value: '50+', label: 'Countries', icon: '🌍' },
              { value: '24/7', label: 'Support', icon: '🛡️' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 * index + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <div className="text-4xl md:text-5xl font-playfair font-bold text-strap-violet mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-strap-dark-gray flex items-center justify-center gap-2">
                  <span>{stat.icon}</span>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;