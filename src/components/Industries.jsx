import React from 'react';
import { industries } from '../data/industriesData';
import { Building2, HeartPulse, GraduationCap, Megaphone, BookOpen, Briefcase, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Building2,
  HeartPulse,
  GraduationCap,
  Megaphone,
  BookOpen,
  Briefcase
};

export default function Industries({ onBookClick, calUrl }) {
  return (
    <section id="industries" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Flexible Solutions For Multiple Service-Based Industries
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Industries We <span className="text-gradient-lime">Help Scale</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Custom-trained AI engines built specifically for your niche compliance, CRM logic, and sales funnel.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((ind) => {
            const Icon = iconMap[ind.iconName] || Briefcase;
            return (
              <div
                key={ind.id}
                className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0C0C0C] flex flex-col justify-between group hover:border-[#B4F73C]/50 transition-all duration-300"
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

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#B4F73C] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F73C]" />
                    Ready Playbook
                  </span>
                  <button
                    onClick={onBookClick}
                    className="text-xs font-bold text-[#B4F73C] hover:underline flex items-center gap-1"
                  >
                    <span>Explore Niche</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Industry Note & CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-[#0E0E0E] border border-white/10 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-base text-white font-semibold">
            Don't see your industry? We build custom automation systems tailored to your workflow.
          </p>
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="holo-btn-primary py-3 px-7 text-xs inline-flex shadow-glow-lime"
          >
            <span>Get A Custom Automation Plan</span>
            <span className="holo-arrow-box">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
