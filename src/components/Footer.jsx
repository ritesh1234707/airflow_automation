import React from 'react';
import { Bot, Instagram, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#121212] border border-[#B4F73C]/40 flex items-center justify-center text-[#B4F73C]">
                <Bot className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                AIR FLOW <span className="text-[#B4F73C]">AUTOMATION</span>
              </span>
            </div>

            <p className="text-neutral-400 max-w-sm text-xs leading-relaxed">
              Air Flow Automation designs enterprise-grade AI chatbots, voice receptionists, and autonomous CRM workflows that capture leads and drive revenue 24/7.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center hover:text-white hover:border-[#B4F73C]/50 hover:bg-[#B4F73C]/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Nav */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#B4F73C] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#B4F73C] transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-[#B4F73C] transition-colors">Process</a></li>
              <li><a href="#industries" className="hover:text-[#B4F73C] transition-colors">Industries</a></li>
              <li><a href="#demos" className="hover:text-[#B4F73C] transition-colors">Interactive Demos</a></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#B4F73C] transition-colors">AI Chatbots</a></li>
              <li><a href="#services" className="hover:text-[#B4F73C] transition-colors">AI Voice Agents</a></li>
              <li><a href="#services" className="hover:text-[#B4F73C] transition-colors">WhatsApp Automation</a></li>
              <li><a href="#services" className="hover:text-[#B4F73C] transition-colors">Lead Qualification</a></li>
              <li><a href="#services" className="hover:text-[#B4F73C] transition-colors">CRM Workflows</a></li>
            </ul>
          </div>

          {/* Col 4: Status */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">System Status</h4>
            <div className="p-3.5 rounded-2xl bg-[#0E0E0E] border border-white/10 space-y-2">
              <span className="flex items-center gap-2 text-[#B4F73C] font-mono text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#B4F73C] animate-ping"></span>
                Holo Engine Active
              </span>
              <p className="text-[10px] text-neutral-500">Latency: 280ms • SOC2 Type II Certified</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} Air Flow Automation. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
