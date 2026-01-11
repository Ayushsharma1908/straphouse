import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success animation
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#6D28D9",
      boxShadow: "0 20px 40px rgba(109, 40, 217, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.15,
      backgroundColor: "#6D28D9",
      transition: {
        duration: 0.2
      }
    }
  };

  const successIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const socialLinks = [
    { icon: <Instagram />, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <Facebook />, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <Twitter />, label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <MessageCircle />, label: 'Messenger', color: 'hover:bg-blue-500' },
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 md:py-28 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-strap-violet/5 to-strap-light-violet/5 rounded-full blur-xl"
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tr from-strap-violet/3 to-strap-light-violet/3 rounded-full blur-xl"
        animate={{
          x: [0, -10, 0],
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-strap-violet rounded-full" />
            <span className="text-sm font-semibold text-strap-violet bg-strap-violet/10 px-4 py-1 rounded-full">
              GET IN TOUCH
            </span>
            <div className="w-2 h-2 bg-strap-violet rounded-full" />
          </motion.div>

          <motion.h2 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-strap-black mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Create{' '}
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
              Together
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
            Have questions about customization, materials, or sizing? Our design experts are here to help you create your perfect strap.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <motion.div 
            className="relative"
            variants={formVariants}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <motion.h3 
                className="font-playfair text-2xl md:text-3xl font-bold text-strap-black mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Send us a Message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-strap-black mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-strap-violet focus:ring-4 focus:ring-strap-violet/10 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </motion.div>
                
                {/* Email Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-strap-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-strap-violet focus:ring-4 focus:ring-strap-violet/10 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </motion.div>
                
                {/* Message Field */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-strap-black mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-strap-violet focus:ring-4 focus:ring-strap-violet/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your strap design ideas or ask any questions..."
                  />
                </motion.div>
                
                {/* Submit Button */}
                <motion.div
                  className="relative"
                  variants={buttonVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <button
                    type="submit"
                    className="w-full bg-strap-black text-white font-semibold py-5 px-8 rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    {/* Animated background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-strap-violet via-strap-light-violet to-strap-violet"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative z-10 text-lg">
                      {isSubmitted ? 'Message Sent!' : 'Send Message'}
                    </span>
                    
                    {isSubmitted ? (
                      <motion.div 
                        className="relative z-10"
                        variants={successIconVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-strap-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="relative z-10"
                        animate={{ 
                          rotate: [0, 10, 0],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <Send className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                  </button>
                </motion.div>
              </form>
              
              {/* Form Note */}
              <motion.p 
                className="text-sm text-strap-dark-gray mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We typically respond within 24 hours
              </motion.p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-10"
            variants={infoVariants}
          >
            {/* Contact Methods */}
            <div className="space-y-8">
              <motion.h3 
                className="font-playfair text-2xl md:text-3xl font-bold text-strap-black mb-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Contact Information
              </motion.h3>
              
              {/* Email */}
              <motion.div 
                className="flex items-start gap-5 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-strap-violet/30 transition-all group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-strap-violet/10 to-strap-light-violet/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-strap-violet group-hover:to-strap-light-violet transition-all">
                  <Mail className="w-7 h-7 text-strap-violet group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-strap-black mb-2">Email</h4>
                  <p className="text-strap-dark-gray">support@straphouse.com</p>
                  <p className="text-sm text-strap-dark-gray/70 mt-1">Design inquiries: design@straphouse.com</p>
                </div>
              </motion.div>
              
              {/* Phone */}
              <motion.div 
                className="flex items-start gap-5 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-strap-violet/30 transition-all group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-strap-violet/10 to-strap-light-violet/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-strap-violet group-hover:to-strap-light-violet transition-all">
                  <Phone className="w-7 h-7 text-strap-violet group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-strap-black mb-2">Phone</h4>
                  <p className="text-strap-dark-gray">+1 (555) 123-4567</p>
                  <p className="text-sm text-strap-dark-gray/70 mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </motion.div>
              
              {/* Location */}
              <motion.div 
                className="flex items-start gap-5 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-strap-violet/30 transition-all group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-strap-violet/10 to-strap-light-violet/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-strap-violet group-hover:to-strap-light-violet transition-all">
                  <MapPin className="w-7 h-7 text-strap-violet group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-strap-black mb-2">Headquarters</h4>
                  <p className="text-strap-dark-gray">123 Design Street</p>
                  <p className="text-strap-dark-gray">San Francisco, CA 94107</p>
                  <p className="text-sm text-strap-dark-gray/70 mt-1">Weekend support available via email</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media */}
            <motion.div 
              className="pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold text-xl text-strap-black mb-6">Connect With Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className="w-12 h-12 rounded-xl bg-strap-black text-white flex items-center justify-center hover:shadow-lg transition-all"
                    aria-label={social.label}
                    variants={socialIconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    custom={index}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Consultation Banner */}
            <motion.div 
              className="p-8 bg-gradient-to-r from-strap-violet/5 via-strap-light-violet/10 to-strap-violet/5 rounded-2xl border border-strap-violet/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="font-semibold text-xl text-strap-black mb-3">Design Consultation</h4>
              <p className="text-strap-dark-gray mb-5">
                Need help with your design? Book a free 15-minute consultation with our design experts.
              </p>
              <motion.button 
                className="text-strap-violet font-semibold hover:text-strap-light-violet transition-colors flex items-center gap-2 group"
                whileHover={{ x: 5 }}
              >
                Schedule a Call
                <motion.svg 
                  className="w-4 h-4"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;