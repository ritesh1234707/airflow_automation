import React from 'react';
import { industries } from '../data/industriesData';
import { Building2, HeartPulse, GraduationCap, Megaphone, BookOpen, Briefcase, TrendingUp, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import CaseStudies from '../components/CaseStudies';

const iconMap = {
  Building2,
  HeartPulse,
  GraduationCap,
  Megaphone,
  BookOpen,
  Briefcase
};

export default function UseCasesPage({ calUrl }) {
  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#050505] min-h-screen">
      
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Industry Proven Results</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Automation Use Cases <br />
          <span className="text-gradient-lime">&amp; Industry Playbooks</span>
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          See how high-growth businesses in real estate, healthcare, agencies, and professional services deploy custom AI to eliminate bottlenecks and recover lost revenue.
        </p>
      </section>

      {/* 6 Industry Niche Playbooks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-[#B4F73C] font-bold">Niche Architectures</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Built For Your Specific Business Model</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.iconName] || Briefcase;
            return (
              <div
                key={ind.id}
                className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-between group hover:border-[#B4F73C]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#B4F73C] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {ind.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B4F73C] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F73C]" />
                    Pre-Trained Pipeline
                  </span>
                  <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#B4F73C] hover:underline flex items-center gap-1"
                  >
                    <span>Deploy Niche</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Real-World Case Studies Breakdown */}
      <CaseStudies calUrl={calUrl} />

    </div>
  );
}
