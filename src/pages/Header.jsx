import React, { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Purpose", href: "#purpose" },
    { label: "Features", href: "#features" },
    { label: "How To", href: "#how-to" },
    { label: "Styles", href: "#showcase" },
    { label: "Contact", href: "#contact" },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      x: 5,
      color: "#6D28D9",
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      x: 10,
      backgroundColor: "rgba(167, 139, 250, 0.1)",
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#6D28D9",
      boxShadow: "0 10px 25px rgba(109, 40, 217, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const menuButtonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(167, 139, 250, 0.1)",
      transition: {
        duration: 0.2,
      },
    },
  };

  // Handle smooth scroll for mobile menu
  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 py-4 md:py-5 shadow-sm border-b border-gray-100"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={Logo}
              alt="StrapHouse - Custom Premium Watch Straps"
              className="h-10 md:h-12 w-auto"
            />
            <motion.span
              className="hidden md:inline-block text-xs font-semibold text-strap-violet bg-strap-violet/10 px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              PREMIUM
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="relative"
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={index}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className="px-4 py-2 text-strap-black font-medium hover:text-strap-violet transition-colors relative block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - 80,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {item.label}
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-strap-violet to-strap-light-violet"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredItem === item.label ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </a>
                </motion.li>
              ))}

              {/* CTA Button */}
              <motion.li
                className="ml-4"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="#how-to"
                  className="px-6 py-2.5 bg-strap-black text-white font-semibold rounded-full hover:bg-strap-violet transition-all flex items-center gap-2 group"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#how-to");
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Design Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={menuButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-strap-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-strap-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden mt-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul
                className="space-y-2 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    variants={mobileNavItemVariants}
                    custom={index}
                    whileHover="hover"
                  >
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-strap-black font-medium hover:text-strap-violet rounded-lg transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {item.label}
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </a>
                  </motion.li>
                ))}

                <motion.div
                  className="pt-4 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href="#how-to"
                    className="block w-full py-3.5 bg-strap-black text-white font-semibold text-center rounded-lg hover:bg-strap-violet transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#how-to");
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Design Your Strap
                  </motion.a>
                </motion.div>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Scrolling progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-strap-violet via-strap-light-violet to-strap-violet"
        style={{ scaleX: 0 }}
        animate={{
          scaleX: [0, 1, 0],
          x: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.header>
  );
};

export default Header;