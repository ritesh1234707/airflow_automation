import React from 'react';
import { Calendar, Search, Cpu, Layers, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function HowItWorks({ onBookClick, calUrl }) {
  const steps = [
    {
      num: "01",
      icon: Calendar,
      title: "Book a Call Now",
      description: "We discuss your current lead workflow, bottlenecks, tech stack, and automation goals on a 15-min discovery call.",
      timeline: "Day 1"
    },
    {
      num: "02",
      icon: Search,
      title: "We Analyze Your Business",
      description: "Our AI architects map out your operational blueprint to pinpoint high-ROI automation opportunities.",
      timeline: "Days 2-3"
    },
    {
      num: "03",
      icon: Cpu,
      title: "We Design Custom AI Systems",
      description: "We architect your custom AI agents, voice assistants, decision trees, and CRM integrations for seamless execution.",
      timeline: "Days 4-6"
    },
    {
      num: "04",
      icon: Layers,
      title: "Implementation & Setup",
      description: "We deploy, connect your tools, perform thorough stress-testing, and train your team for a smooth handoff.",
      timeline: "Days 7-10"
    },
    {
      num: "05",
      icon: TrendingUp,
      title: "Scale & Optimize",
      description: "Your AI systems work 24/7. We monitor performance, optimize prompts, and refine workflows to maximize revenue.",
      timeline: "Ongoing 24/7"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#080808] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Rapid Deployment
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            How Our <span className="text-gradient-lime">Process Works</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            From strategy call to full autonomous deployment in as little as 10 days. Zero tech headaches.
          </p>
        </div>

        {/* Timeline Visual Container */}
        <div className="mt-16 relative">
          
          {/* Desktop Connecting Glowing Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#B4F73C] via-emerald-400 to-cyan-400 -translate-y-12 z-0 opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-3xl border border-white/10 bg-[#0F0F0F] flex flex-col justify-between relative group hover:border-[#B4F73C]/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-extrabold font-mono text-neutral-600 group-hover:text-[#B4F73C] transition-colors">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30">
                        {step.timeline}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-center text-[#B4F73C] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">{step.description}</p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#B4F73C] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Guaranteed SLA</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Banner inside process */}
        <div className="mt-14 text-center">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="holo-btn-primary shadow-glow-lime py-3.5 px-8 inline-flex"
          >
            <span>Start Step 1: Book a Call Now</span>
            <span className="holo-arrow-box">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
