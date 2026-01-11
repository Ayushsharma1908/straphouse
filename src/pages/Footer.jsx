import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'StrapHouse': [
      { label: 'Our Story', href: '#purpose' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Sustainability', href: '#' },
    ],
    'Shop': [
      { label: 'Design Your Strap', href: '#how-to' },
      { label: 'Ready-to-Ship', href: '#showcase' },
      { label: 'Gift Cards', href: '#' },
      { label: 'Bulk Orders', href: '#' },
    ],
    'Support': [
      { label: 'FAQ', href: '#faq' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns & Warranty', href: '#' },
      { label: 'Contact Us', href: '#contact' },
    ],
    'Legal': [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  };

  return (
    <footer className="bg-strap-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="font-playfair text-3xl font-bold mb-6 inline-block">
              Strap<span className="text-strap-light-violet">House</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium custom watch straps for the discerning enthusiast. 
              Express your style with our intuitive design tool and premium craftsmanship.
            </p>
            <div className="flex gap-4">
              <div className="bg-strap-violet/20 text-strap-light-violet px-4 py-2 rounded-lg text-sm font-medium">
                ⭐ 4.9/5 Rating
              </div>
              <div className="bg-strap-violet/20 text-strap-light-violet px-4 py-2 rounded-lg text-sm font-medium">
                🚚 Free Shipping
              </div>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:text-strap-light-violet transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} StrapHouse. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Made with <Heart className="inline w-4 h-4 text-red-500" /> for watch enthusiasts worldwide
              </p>
            </div>
            
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-xs font-bold">VISA</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-xs font-bold">MC</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-xs">PP</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-xs">AP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;