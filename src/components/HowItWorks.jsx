import React from 'react';
import { Search, Cpu, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function HowItWorks({ onBookClick, calUrl }) {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discovery & Workflow Audit",
      description: "We analyze your current lead channels, response bottlenecks, and tech stack on a 15-min discovery call to map high-ROI automation opportunities.",
      badge: "Step 1"
    },
    {
      num: "02",
      icon: Cpu,
      title: "Custom Build & CRM Integration",
      description: "We engineer tailored AI voice assistants, conversational chatbots, and robust Make/n8n pipelines hooked seamlessly into your CRM.",
      badge: "Step 2"
    },
    {
      num: "03",
      icon: Zap,
      title: "24/7 Autonomous Deployment",
      description: "We test, deploy, and launch your system. Your AI captures and nurtures leads around the clock with continuous performance tuning.",
      badge: "Step 3"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 relative bg-[#080808] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            How We <span className="text-gradient-lime">Get You Live</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            From initial strategy audit to full autonomous 24/7 operation in as little as 7–10 days. Zero tech headaches.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0E0E0E] flex flex-col justify-between group hover:border-[#B4F73C]/40 transition-all duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-mono text-neutral-600 group-hover:text-[#B4F73C] transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-center text-[#B4F73C] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#B4F73C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#B4F73C] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>White-Glove Implementation</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="holo-btn-primary shadow-glow-lime py-3 px-8 text-xs sm:text-sm inline-flex"
          >
            <span>Book A Strategy Call to Get Started</span>
            <span className="holo-arrow-box">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

