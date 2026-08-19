import React from 'react';
import { services } from '../data/servicesData';
import { Bot, PhoneCall, MessageSquare, Filter, Database, Workflow, Check, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import TechStack from '../components/TechStack';

const iconMap = {
  Bot,
  PhoneCall,
  MessageSquare,
  Filter,
  Database,
  Workflow
};

export default function ServicesPage({ calUrl }) {
  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#050505] min-h-screen">
      
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
          <Layers className="w-3.5 h-3.5" />
          <span>Full Service Specifications</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Custom AI Automation <br />
          <span className="text-gradient-lime">Solutions &amp; Infrastructure</span>
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Every business workflow is unique. We architect, train, and deploy enterprise-grade AI systems that plug directly into your software stack with zero operational friction.
        </p>
      </section>

      {/* Detailed 6 Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Bot;
            return (
              <div
                key={service.id}
                className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-between group hover:border-[#B4F73C]/50 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#B4F73C] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B4F73C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <p className="text-[11px] uppercase font-mono text-neutral-400 font-bold mb-2">Core Capabilities:</p>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#B4F73C] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#141414] hover:bg-[#B4F73C] text-white hover:text-black font-bold text-xs flex items-center justify-center gap-2 border border-white/10 hover:border-[#B4F73C] transition-all duration-300"
                  >
                    <span>Deploy This System</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Enterprise Tech Stack Breakdown */}
      <TechStack />

      {/* Bottom Conversion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="bg-[#0E0E0E] p-8 sm:p-12 rounded-3xl border border-[#B4F73C]/30 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a tailored multi-system architecture?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            We can combine Voice Agents, WhatsApp workflows, and CRM orchestration into a unified enterprise automation pipeline.
          </p>
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="holo-btn-primary py-3 px-8 text-xs sm:text-sm shadow-glow-lime inline-flex"
          >
            <span>Get A Custom Blueprint</span>
            <span className="holo-arrow-box">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

    </div>
  );
}
