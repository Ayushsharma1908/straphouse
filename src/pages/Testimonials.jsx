import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      content: "The customization process was so intuitive. My strap arrived in perfect condition and fits my watch like it was made for it. Highly recommended!",
      author: "Alex Johnson",
      role: "Watch Collector",
      avatar: "AJ"
    },
    {
      rating: 5,
      content: "Finally a service that understands watch lovers! The quality is exceptional and the ability to design exactly what I want is game-changing.",
      author: "Sophie Williams",
      role: "Fashion Blogger",
      avatar: "SW"
    },
    {
      rating: 5,
      content: "As a designer, I appreciate the attention to detail. The materials are premium and the customization options are endless. Will definitely order again!",
      author: "Marcus Chen",
      role: "Product Designer",
      avatar: "MC"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="text-strap-violet w-8 h-8" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-strap-black">
              Loved by Watch Enthusiasts
            </h2>
          </div>
          <p className="text-strap-dark-gray max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect strap
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-strap-dark-gray mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-strap-violet/10 flex items-center justify-center">
                  <span className="font-semibold text-strap-violet">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-strap-black">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-strap-dark-gray">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 text-strap-dark-gray">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
            <span className="font-medium">4.9/5 from 2,487 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;