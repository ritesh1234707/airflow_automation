import React from 'react';
import { Mail, Linkedin, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';

export default function Founder({ onBookClick, calUrl }) {
  return (
    <section id="founder" className="py-24 relative bg-[#080808] border-y border-white/10 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#B4F73C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#0D0D0D] p-8 sm:p-14 rounded-3xl border border-[#B4F73C]/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Founder Avatar / Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#141414] border-2 border-[#B4F73C]/40 p-2 shadow-glow-lime-sm relative overflow-hidden group">
                  {/* Founder Image Placeholder / Stylized Graphic */}
                  <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#111111] via-[#1A1A1A] to-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                    <UserCheck className="w-20 h-20 text-[#B4F73C] group-hover:scale-105 transition-transform duration-300" />
                    <span className="text-xs font-mono font-bold text-white mt-2">Ritesh Bhatt</span>
                    <span className="text-[10px] text-[#B4F73C] uppercase tracking-wider font-mono">Lead AI Architect</span>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 px-3.5 py-1 rounded-full bg-[#121212] border border-[#B4F73C]/40 text-[11px] font-bold text-[#B4F73C] shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B4F73C] animate-pulse"></span>
                  <span>Direct Architect</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#B4F73C]/40 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="mailto:contact@airflowautomation.com"
                  className="px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#B4F73C]/40 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  aria-label="Email Founder"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B4F73C]" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Founder Story & Credibility */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Meet The Founder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                "Every system is designed around <span className="text-gradient-lime">your existing workflow</span>."
              </h2>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white text-lg">
                  Hi, I'm Ritesh.
                </p>
                <p>
                  I help businesses automate lead capture, follow-ups, appointment booking, CRM management, and repetitive operations using custom AI automation systems.
                </p>
                <p className="text-neutral-400 text-sm">
                  Every solution is designed around your existing workflow so your team can focus on growth instead of manual work. We avoid brittle scripts and build reliable, scalable architectures that work flawlessly 24/7.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-btn-primary py-3 px-8 text-sm shadow-glow-lime inline-flex"
                >
                  <span>Book A Strategy Call</span>
                  <span className="holo-arrow-box">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-200">
                  <ShieldCheck className="w-4 h-4 text-[#B4F73C]" /> Direct Technical Consultation
                </span>
                <span className="flex items-center gap-1.5 text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Custom Architecture Roadmap
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
