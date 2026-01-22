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

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
    hover: { scale: 1.05 },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 5, color: "#6D28D9" },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: {
      x: 10,
      backgroundColor: "rgba(167, 139, 250, 0.1)",
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "#6D28D9",
      boxShadow: "0 10px 25px rgba(109, 40, 217, 0.2)",
    },
    tap: { scale: 0.95 },
  };

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
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 py-4 lg:py-5 shadow-sm border-b border-gray-100"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={Logo} alt="StrapHouse" className="h-10 lg:h-12" />
            <span className="hidden lg:inline-block text-xs font-semibold text-strap-violet bg-strap-violet/10 px-3 py-1 rounded-full">
              PREMIUM
            </span>
          </motion.a>

          {/* Desktop Navigation (lg+) */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  className="relative"
                  variants={navItemVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className="px-4 py-2 font-medium text-strap-black hover:text-strap-violet"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-strap-violet"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredItem === item.label ? 1 : 0 }}
                    />
                  </a>
                </motion.li>
              ))}

              <motion.li className="ml-4" variants={buttonVariants}>
                <a
                  href="#how-to"
                  className="px-6 py-2.5 bg-strap-black text-white rounded-full flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#how-to");
                  }}
                >
                  Design Now
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.li>
            </ul>
          </nav>

          {/* Hamburger (Mobile + Tablet) */}
          <button
            className="lg:hidden p-2 rounded-lg bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden mt-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="space-y-2 bg-white rounded-xl shadow-xl p-6">
                {navItems.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={mobileNavItemVariants}
                    whileHover="hover"
                  >
                    <a
                      href={item.href}
                      className="block py-3 px-4 font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}

                <a
                  href="#how-to"
                  className="block w-full py-3 bg-strap-black text-white text-center rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#how-to");
                  }}
                >
                  Design Your Strap
                </a>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
