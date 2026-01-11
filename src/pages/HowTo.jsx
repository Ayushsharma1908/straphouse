import React from 'react';
import { MousePointer, Palette, Eye, Package, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowTo = () => {
  const steps = [
    {
      number: '01',
      icon: <MousePointer />,
      title: 'Choose Strap Type',
      description: 'Select from leather, nylon, silicone, or metal strap types that match your lifestyle.'
    },
    {
      number: '02',
      icon: <Palette />,
      title: 'Customize Details',
      description: 'Pick colors, materials, sizes, and add personal engravings or unique patterns.'
    },
    {
      number: '03',
      icon: <Eye />,
      title: 'Live Preview',
      description: 'See your creation come to life with our real-time 3D preview tool.'
    },
    {
      number: '04',
      icon: <Package />,
      title: 'Order & Receive',
      description: 'Place your order and await delivery of your handcrafted strap in 5-7 days.'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stepCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      color: "#A78BFA",
      transition: {
        duration: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -90, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      backgroundColor: "#6D28D9",
      color: "#FFFFFF",
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  };

  const connectorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#6D28D9",
      boxShadow: "0 20px 40px rgba(109, 40, 217, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="how-to" 
      className="py-20 bg-gradient-to-b from-white to-strap-gray/30 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={sectionVariants}
        >
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-strap-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Design Your Strap in{' '}
            <motion.span 
              className="text-strap-violet"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              4 Simple Steps
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-strap-dark-gray text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our intuitive process makes customization simple, enjoyable, and deeply personal. 
            Start with inspiration, end with a masterpiece.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="relative"
          variants={containerVariants}
        >
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 relative"
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <motion.div 
                  className="relative z-10"
                  variants={stepCardVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group">
                    {/* Step Number */}
                    <motion.div 
                      className="text-5xl font-playfair font-bold text-strap-gray mb-6"
                      variants={numberVariants}
                      whileHover="hover"
                    >
                      {step.number}
                    </motion.div>
                    
                    {/* Icon */}
                    <motion.div 
                      className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-strap-violet/10 to-strap-light-violet/5 text-strap-violet rounded-xl mb-8 group-hover:from-strap-violet group-hover:to-strap-light-violet group-hover:text-white transition-all duration-300"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {React.cloneElement(step.icon, { size: 28 })}
                    </motion.div>
                    
                    {/* Title */}
                    <motion.h3 
                      className="font-semibold text-xl mb-4 text-strap-black group-hover:text-strap-violet transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <motion.p 
                      className="text-strap-dark-gray leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {step.description}
                    </motion.p>
                    
                    {/* Decorative elements */}
                    <motion.div 
                      className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-strap-light-violet/5 to-transparent rounded-tr-2xl rounded-bl-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Connector lines (desktop only) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 z-0"
                    style={{ 
                      left: `${(index + 0.5) * 25}%`,
                      width: '25%'
                    }}
                    variants={connectorVariants}
                  >
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-strap-light-violet/30 to-transparent" />
                    <motion.div 
                      className="absolute top-1/2 left-0 w-4 h-4 bg-strap-violet rounded-full -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        x: ['0%', '100%', '100%', '0%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Progress bar for mobile */}
          <motion.div 
            className="lg:hidden flex justify-between items-center mb-8 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-strap-violet text-white flex items-center justify-center text-sm font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  <span className="text-xs text-strap-dark-gray">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-strap-violet to-strap-light-violet flex-grow mx-2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1 + 0.2
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
        >
          <motion.a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-strap-black text-white font-semibold py-5 px-12 rounded-full hover:shadow-2xl group relative overflow-hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Background effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-strap-violet via-strap-light-violet to-strap-violet"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Start Designing Now</span>
            <motion.div 
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
          
          <motion.p 
            className="text-sm text-strap-dark-gray mt-6 flex flex-wrap justify-center gap-4"
            variants={taglineVariants}
          >
            {[
              "No design experience needed",
              "Live 3D preview",
              "30-day satisfaction guarantee",
              "Free worldwide shipping"
            ].map((text, index) => (
              <motion.span 
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4,
                  delay: 1.2 + index * 0.1
                }}
              >
                <span className="w-1.5 h-1.5 bg-strap-violet rounded-full" />
                {text}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Floating decoration elements */}
        <motion.div 
          className="absolute top-20 left-10 w-6 h-6 bg-strap-violet/10 rounded-full hidden lg:block"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-8 h-8 bg-strap-light-violet/10 rounded-full hidden lg:block"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.section>
  );
};

export default HowTo;