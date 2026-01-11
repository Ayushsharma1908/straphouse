import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [strapColor, setStrapColor] = useState('#6D28D9');
  
  const colors = [
    { name: 'Violet', value: '#6D28D9' },
    { name: 'Black', value: '#0F0F0F' },
    { name: 'Amber', value: '#B45309' },
    { name: 'Blue', value: '#1E40AF' },
    { name: 'Green', value: '#047857' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="home" 
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-strap-gray/30 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1 
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-strap-black mb-6 leading-tight"
              variants={itemVariants}
            >
              Design Your Perfect <span className="text-strap-violet">Watch Strap</span>
            </motion.h1>
            
            <motion.p 
              className="text-strap-dark-gray text-lg mb-8 max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              Create custom, premium watch straps that reflect your unique style. Personalize every detail with our intuitive designer tool.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a 
                href="#how-to" 
                className="bg-strap-violet text-white font-semibold py-4 px-8 rounded-full hover:bg-strap-light-violet transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Design Your Strap
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="#showcase" 
                className="border-2 border-strap-black text-strap-black font-semibold py-4 px-8 rounded-full hover:bg-strap-black hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md">
              <motion.div 
                className="aspect-square bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl flex items-center justify-center p-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-strap-black shadow-2xl flex items-center justify-center">
                    <motion.div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div 
                        className="w-56 h-16 rounded-xl transition-all duration-300"
                        style={{ backgroundColor: strapColor }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div 
                        className="w-56 h-16 rounded-xl transition-all duration-300"
                        style={{ backgroundColor: strapColor }}
                      />
                    </motion.div>
                    
                    <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">StrapHouse</div>
                        <div className="text-gray-400 text-xs">Custom</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white p-4 rounded-2xl shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {colors.map((color, index) => (
                  <motion.button
                    key={color.name}
                    onClick={() => setStrapColor(color.value)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      strapColor === color.value ? 'border-strap-black scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} color`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.8 + (index * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;