import React from 'react';
import { Mail, Linkedin, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, UserCheck, Cpu, Target } from 'lucide-react';

export default function Founder({ onBookClick, calUrl }) {
  return (
    <section id="founder" className="py-20 sm:py-24 relative bg-[#080808] border-y border-white/10 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#B4F73C]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#0D0D0D] p-6 sm:p-12 rounded-3xl border border-[#B4F73C]/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Founder Avatar / Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-[#141414] border-2 border-[#B4F73C]/40 p-2 shadow-glow-lime-sm relative overflow-hidden group">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#111111] via-[#1A1A1A] to-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                    <UserCheck className="w-16 h-16 text-[#B4F73C] group-hover:scale-105 transition-transform duration-300" />
                    <span className="text-sm font-mono font-bold text-white mt-2">Ritesh Bhatt</span>
                    <span className="text-[10px] text-[#B4F73C] uppercase tracking-wider font-mono">Lead AI Architect</span>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-[#121212] border border-[#B4F73C]/40 text-[10px] font-bold text-[#B4F73C] shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B4F73C] animate-pulse"></span>
                  <span>Direct Architect Access</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#B4F73C]/40 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="mailto:contact@airflowautomation.com"
                  className="px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#B4F73C]/40 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  aria-label="Email Founder"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B4F73C]" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Founder Story & Agency Engineering Principles */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Architected For Reliability</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                "We build reliable AI systems tailored around <span className="text-gradient-lime">your exact workflow</span>."
              </h2>

              <div className="space-y-3 text-neutral-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  At AirFlow Automation, we believe modern businesses shouldn't waste hundreds of hours every month manually chasing inquiries, entering CRM data, or missing calls.
                </p>
                <p className="text-neutral-400">
                  Instead of cookie-cutter bots or brittle scripts, we design robust OpenAI, n8n, and telephony systems that run 24/7 with zero downtime—enabling you to scale revenue without increasing overhead.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#121212] border border-white/10 flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-[#B4F73C] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">Production-Ready Code</p>
                    <p className="text-[11px] text-neutral-400">Full error handling &amp; API fallbacks</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#121212] border border-white/10 flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">Direct Technical Consultation</p>
                    <p className="text-[11px] text-neutral-400">Talk directly with the system builder</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-btn-primary py-3 px-7 text-xs sm:text-sm shadow-glow-lime inline-flex"
                >
                  <span>Book A 15-Min Technical Consultation</span>
                  <span className="holo-arrow-box">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

