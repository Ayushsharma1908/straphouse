import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "Will the strap fit my watch?",
      answer: "Yes! We offer straps for all major watch brands and sizes. During the design process, you'll select your specific watch model for a perfect fit guarantee. We support Apple Watch, Samsung Galaxy Watch, Garmin, Fitbit, and traditional watch brands."
    },
    {
      question: "How long does delivery take?",
      answer: "Custom straps are handcrafted and typically ship within 3-5 business days. Delivery takes 2-7 days depending on your location. You'll receive tracking information as soon as your order ships. Express shipping is available for urgent orders."
    },
    {
      question: "Can I return a custom strap?",
      answer: "Due to the personalized nature of our products, we don't accept returns on custom straps unless there's a manufacturing defect. However, we offer a 30-day return policy on our pre-designed collection and provide detailed sizing guides to ensure perfect fit."
    },
    {
      question: "What materials do you use?",
      answer: "We source premium materials including full-grain leather from Italian tanneries, durable ballistic nylon, hypoallergenic medical-grade silicone, and 316L stainless steel. All materials are carefully selected for quality, comfort, and longevity."
    },
    {
      question: "How do I measure my watch for the perfect fit?",
      answer: "Our design tool includes step-by-step measurement guidance. You'll need your watch's lug width (distance between lugs) which is typically 18mm, 20mm, or 22mm for most watches. We also provide printable sizing guides for precise measurements."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-strap-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-strap-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-strap-dark-gray max-w-2xl mx-auto">
            Find answers to common questions about our custom straps
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-2xl overflow-hidden hover:border-strap-violet/30 transition-colors"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-strap-black">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-strap-violet w-5 h-5" />
                ) : (
                  <ChevronDown className="text-strap-dark-gray w-5 h-5" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-strap-dark-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-strap-dark-gray">
            Still have questions? <a href="#contact" className="text-strap-violet font-semibold hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;