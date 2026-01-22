import React from 'react';
import { Sparkles } from 'lucide-react';

const Purpose = () => {
  return (
    <section id="purpose" className="py-20 bg-strap-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-strap-black">
              Why StrapHouse Exists
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-strap-dark-gray">
            <p className="leading-relaxed">
              We believe your watch should be as unique as you are. In a world of mass-produced accessories, 
              we offer a creative sanctuary for watch enthusiasts to express their individuality through 
              custom-crafted straps.
            </p>
            <p className="leading-relaxed">
              Our mission is to merge premium craftsmanship with personal expression, creating 
              heirloom-quality straps that tell your story and elevate your style.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10K+', label: 'Straps Created' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '24h', label: 'Design Support' },
              { value: '50+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-2xl md:text-3xl font-bold text-strap-violet mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-strap-dark-gray">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;