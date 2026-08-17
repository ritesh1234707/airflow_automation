import React from 'react';
import { services } from '../data/servicesData';
import { Bot, PhoneCall, MessageSquare, Filter, Database, Workflow, Check, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Bot,
  PhoneCall,
  MessageSquare,
  Filter,
  Database,
  Workflow
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            AI Automation Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Our AI Systems <span className="text-gradient-lime">Capabilities</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            We build turn-key automation systems tailored to capture every inquiry, optimize your pipeline, and scale operations without payroll overhead.
          </p>
          <div className="pt-2">
            <p className="inline-block text-xs text-[#B4F73C] font-medium px-4 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
              💡 Every system is custom-built and can be combined into a complete automation ecosystem.
            </p>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Bot;
            return (
              <div
                key={service.id}
                className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0C0C0C] flex flex-col justify-between group hover:border-[#B4F73C]/50 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#B4F73C] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#B4F73C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#B4F73C] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 rounded-full bg-[#141414] hover:bg-[#B4F73C] text-white hover:text-black font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-all duration-300"
                  >
                    <span>Get A Custom Automation Plan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
