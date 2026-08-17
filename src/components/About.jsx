import React from 'react';
import { Target, Eye, Cpu, ShieldCheck, Award } from 'lucide-react';

export default function About({ onBookClick }) {
  return (
    <section className="py-24 relative bg-[#080808] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
              Agency Blueprint
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              About <span className="text-gradient-lime">Air Flow Automation</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Air Flow Automation helps businesses leverage AI and automation to streamline operations, improve customer engagement, and drive growth. We create intelligent systems that save time, reduce costs, and help businesses scale efficiently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#B4F73C]/10 border border-[#B4F73C]/30 text-[#B4F73C] flex items-center justify-center mb-2">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Our Mission</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  To eliminate repetitive manual tasks for every growth-focused business using hyper-reliable AI agent architectures.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-2">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Our Vision</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  To set the gold standard in enterprise AI agent architecture, giving companies 24/7 responsiveness and 10x agility.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Award className="w-4 h-4 text-[#B4F73C]" /> Production-Ready Architectures
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Custom Tailored Workflows
              </span>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#B4F73C]/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-40"></div>
            
            <div className="relative glass-card p-8 rounded-3xl border border-white/10 bg-[#0E0E0E] space-y-6 text-center shadow-glass-holo">
              <div className="w-20 h-20 rounded-full bg-[#121212] border border-[#B4F73C]/40 mx-auto flex items-center justify-center text-[#B4F73C] shadow-glow-lime-sm">
                <Cpu className="w-10 h-10 animate-pulse" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Built For High-Scale Growth</h3>
                <p className="text-xs text-neutral-400 mt-2">
                  We design customized Make, n8n, OpenAI, and telephony workflows that operate autonomously around the clock.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-xl font-extrabold text-[#B4F73C] font-mono">Custom Built</p>
                  <p className="text-[10px] text-neutral-400 uppercase">OpenAI &amp; n8n</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-white font-mono">24/7 Live</p>
                  <p className="text-[10px] text-neutral-400 uppercase">Automated Operations</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
