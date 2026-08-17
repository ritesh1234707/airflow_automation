import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function FAQ({ onBookClick }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Frequently Asked <span className="text-gradient-lime">Questions</span>
          </h2>
          <p className="text-neutral-400 text-base">
            Everything you need to know about our AI automation systems, implementation process, and ongoing support.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-[#B4F73C]/50 bg-[#0E0E0E] shadow-glow-lime-sm' : 'border-white/10 bg-[#0C0C0C]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-[#B4F73C]' : 'text-neutral-500'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#B4F73C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-neutral-300 text-sm leading-relaxed border-t border-white/10 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ CTA */}
        <div className="mt-12 text-center p-8 bg-[#0E0E0E] rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-lg font-extrabold text-white">Have a specific technical question?</h3>
          <p className="text-neutral-400 text-xs">
            Book a 15-minute consultation to talk directly with our lead AI architect.
          </p>
          <button
            onClick={onBookClick}
            className="holo-btn-primary py-3 px-6 text-xs shadow-glow-lime inline-flex"
          >
            <span>Book A Strategy Call</span>
            <span className="holo-arrow-box w-7 h-7">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
