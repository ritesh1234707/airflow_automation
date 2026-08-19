import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ({ onBookClick }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Frequently Asked <span className="text-gradient-lime">Questions</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Everything you need to know about our custom AI systems, integration process, and ongoing SLA support.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-[#B4F73C]/50 bg-[#0E0E0E] shadow-glow-lime-sm' : 'border-white/10 bg-[#0A0A0A]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${isOpen ? 'text-[#B4F73C]' : 'text-neutral-500'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#B4F73C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-white/10 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

