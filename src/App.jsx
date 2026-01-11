import React, { useEffect } from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Purpose from './pages/Purpose';
import Features from './pages/Features';
import HowTo from './pages/HowTo';
import Showcase from './pages/Showcase';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <Purpose />
      <Features />
      <HowTo />
      <Showcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;