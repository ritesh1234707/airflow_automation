import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Bot, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ calUrl }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/services' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Process & SLAs', path: '/process' },
    { name: 'About & Founder', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050505]/95 backdrop-blur-xl py-3 border-b border-white/10 shadow-glass-holo' : 'bg-[#050505]/60 backdrop-blur-md py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
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
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 bg-[#0F0F0F]/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wide transition-colors py-1 px-2 rounded-lg ${
                  isActive
                    ? 'text-[#B4F73C] font-bold bg-[#B4F73C]/10'
                    : 'text-neutral-300 hover:text-[#B4F73C]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="holo-btn-primary group text-xs py-2.5 px-5 shadow-glow-lime-sm"
          >
            <span>Book Strategy Call</span>
            <span className="holo-arrow-box w-7 h-7">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-neutral-400 hover:text-white bg-[#121212] border border-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-4 pb-6 mt-2 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-semibold rounded-xl ${
                  isActive
                    ? 'text-[#B4F73C] bg-[#B4F73C]/10 font-bold'
                    : 'text-neutral-300 hover:text-[#B4F73C]'
                }`
              }
            >
              {link.name}
            </NavLink>
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
