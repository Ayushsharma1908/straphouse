import React, { useState } from 'react';

const Showcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'classic', label: 'Classic' },
    { id: 'sport', label: 'Sport' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'bold', label: 'Bold' },
  ];
  
  const straps = [
    {
      id: 1,
      category: 'classic',
      name: 'Classic Leather',
      description: 'Timeless full-grain leather with traditional stitching',
      color: '#8B4513',
      accent: '#D4A76A'
    },
    {
      id: 2,
      category: 'sport',
      name: 'Sport Nylon',
      description: 'Durable, breathable nylon perfect for active lifestyles',
      color: '#1E40AF',
      accent: '#3B82F6'
    },
    {
      id: 3,
      category: 'minimal',
      name: 'Minimal Metal',
      description: 'Sleek stainless steel mesh for a clean, modern look',
      color: '#6B7280',
      accent: '#9CA3AF'
    },
    {
      id: 4,
      category: 'luxury',
      name: 'Luxury Crocodile',
      description: 'Exotic textured leather with premium hardware',
      color: '#0F0F0F',
      accent: '#D4AF37'
    },
    {
      id: 5,
      category: 'bold',
      name: 'Color Pop',
      description: 'Vibrant silicone with custom color combinations',
      color: '#DC2626',
      accent: '#F59E0B'
    },
    {
      id: 6,
      category: 'classic',
      name: 'Vintage Brown',
      description: 'Aged leather with patina finish and brass buckle',
      color: '#7C2D12',
      accent: '#92400E'
    },
  ];

  const filteredStraps = activeFilter === 'all' 
    ? straps 
    : straps.filter(strap => strap.category === activeFilter);

  return (
    <section id="showcase" className="py-20 bg-strap-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-strap-black mb-4">
            Style Inspiration
          </h2>
          <p className="text-strap-dark-gray max-w-2xl mx-auto">
            Explore our curated collection of strap styles to inspire your creation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-strap-violet text-white shadow-lg'
                  : 'bg-white text-strap-black hover:bg-strap-light-violet/10 hover:text-strap-violet'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStraps.map((strap) => (
            <div 
              key={strap.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 shadow-inner" />
                    <div 
                      className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-10 rounded-lg transition-transform group-hover:scale-105"
                      style={{ backgroundColor: strap.color }}
                    />
                    <div 
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-10 rounded-lg transition-transform group-hover:scale-105"
                      style={{ backgroundColor: strap.color }}
                    />
                    <div className="absolute inset-4 rounded-full bg-strap-black flex items-center justify-center">
                      <div className="text-white text-xs font-medium">StrapHouse</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-white shadow"
                    style={{ backgroundColor: strap.color }}
                  />
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-white shadow"
                    style={{ backgroundColor: strap.accent }}
                  />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-strap-black">
                    {strap.name}
                  </h3>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-strap-violet/10 text-strap-violet capitalize">
                    {strap.category}
                  </span>
                </div>
                <p className="text-strap-dark-gray text-sm mb-4">
                  {strap.description}
                </p>
                <button className="w-full py-3 text-sm font-medium text-strap-violet border border-strap-violet/20 rounded-lg hover:bg-strap-violet hover:text-white transition-colors">
                  Customize This Style
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;