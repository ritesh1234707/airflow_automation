import React, { useState, useEffect } from 'react';
import { Bot, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ onBookClick, calUrl }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Use Cases', href: '#case-studies' },
    { name: 'Industries', href: '#industries' },
    { name: 'Founder', href: '#founder' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050505]/90 backdrop-blur-xl py-3 border-b border-white/10 shadow-glass-holo' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#121212] border border-[#B4F73C]/40 flex items-center justify-center text-[#B4F73C] group-hover:border-[#B4F73C] transition-colors shadow-glow-lime-sm">
            <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5 font-sans">
              AIR FLOW <span className="text-[#B4F73C]">AUTOMATION</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold -mt-1">
              Custom AI Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 bg-[#0F0F0F]/80 backdrop-blur-md px-7 py-2.5 rounded-full border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-neutral-300 hover:text-[#B4F73C] transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="holo-btn-primary group"
          >
            <span>Book A Strategy Call</span>
            <span className="holo-arrow-box">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-neutral-400 hover:text-white bg-[#121212] border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-4 pb-6 mt-2 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-neutral-300 hover:text-[#B4F73C] rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-[#B4F73C] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-lime"
            >
              <span>Book A Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
