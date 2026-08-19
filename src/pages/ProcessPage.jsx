import React from 'react';
import { Calendar, Search, Cpu, Layers, TrendingUp, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import FAQ from '../components/FAQ';

export default function ProcessPage({ calUrl }) {
  const steps = [
    {
      num: "01",
      icon: Calendar,
      title: "Discovery & Operational Audit",
      timeline: "Day 1",
      description: "We map out your entire inbound funnel, lead touchpoints, response delays, software stack, and automation targets on a 15-minute discovery call."
    },
    {
      num: "02",
      icon: Search,
      title: "System Architecture Blueprint",
      timeline: "Days 2-3",
      description: "Our AI engineers map every prompt flow, conversational branch, CRM synchronization trigger, and webhook failure fallback logic."
    },
    {
      num: "03",
      icon: Cpu,
      title: "Custom AI Build & Prompt Tuning",
      timeline: "Days 4-6",
      description: "We configure OpenAI/Claude models, fine-tune voice cadence in VAPI/ElevenLabs, and build automated Make.com and n8n backend pipes."
    },
    {
      num: "04",
      icon: Layers,
      title: "Stress Testing & Live Deployment",
      timeline: "Days 7-10",
      description: "We connect your live WhatsApp, phone numbers, and CRMs, perform 50+ test scenario edge cases, and launch with zero operational downtime."
    },
    {
      num: "05",
      icon: TrendingUp,
      title: "24/7 Monitoring & Optimization",
      timeline: "Ongoing 24/7",
      description: "Your systems work around the clock. We monitor token usage, inspect transcript logs, refine conversational prompts, and maintain API connections."
    }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#050505] min-h-screen">
      
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zero Tech Headaches</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          How We Architect, Build <br />
          <span className="text-gradient-lime">&amp; Launch Your AI System</span>
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From discovery call to full autonomous 24/7 deployment in 7–10 days. Fully managed, thoroughly stress-tested, and backed by a strict SLA.
        </p>
      </section>

      {/* 5-Phase Detailed Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-between group hover:border-[#B4F73C]/40 transition-all"
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

                  <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#B4F73C] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">{step.description}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#B4F73C] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>White-Glove Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="holo-btn-primary py-3.5 px-8 text-xs sm:text-sm shadow-glow-lime inline-flex"
          >
            <span>Start Step 1: Book A Strategy Call</span>
            <span className="holo-arrow-box">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      {/* Comprehensive FAQs Section */}
      <FAQ />

    </div>
  );
}
