import React from 'react';
import { Filter, PhoneCall, Workflow, AlertCircle, CheckCircle, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function CaseStudies({ onBookClick, calUrl }) {
  const cases = [
    {
      title: "Lead Qualification Automation",
      category: "Inbound Pipeline",
      icon: Filter,
      badge: "Speed to Lead",
      problem: "Manual lead handling caused slow response times and missed opportunities when prospects were hottest.",
      solution: "AI qualification system with instant multi-variable scoring and automated high-intent routing to sales reps.",
      result: "Leads receive immediate responses 24/7, and sales teams focus exclusively on high-probability qualified prospects."
    },
    {
      title: "AI Voice Receptionist",
      category: "Telephony & Scheduling",
      icon: PhoneCall,
      badge: "Zero Missed Calls",
      problem: "Inbound calls after business hours and during peak hours went straight to voicemail, losing potential clients.",
      solution: "24/7 AI voice agent handling live patient/customer inquiries, calendar bookings, and CRM updates.",
      result: "No missed opportunities, instant appointment scheduling without human hold times, and complete call transcription."
    },
    {
      title: "CRM & Workflow Automation",
      category: "Operational Efficiency",
      icon: Workflow,
      badge: "Zero Manual Admin",
      problem: "Teams spent dozens of hours every week manually entering lead data, updating deal stages, and emailing follow-ups.",
      solution: "End-to-end automated CRM synchronization, auto-invoicing, pipeline stage triggers, and team task dispatch.",
      result: "Massively reduced administrative overhead, eliminated data-entry errors, and improved team operational velocity."
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative bg-[#080808] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Proven Business Outcomes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Real Automation <span className="text-gradient-lime">Use Cases</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Practical AI implementations that remove operational bottlenecks and drive measurable business growth.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {cases.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0C0C0C] flex flex-col justify-between group hover:border-[#B4F73C]/50 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#B4F73C] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30">
                      {c.badge}
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider font-mono">{c.category}</span>
                    <h3 className="text-xl font-extrabold text-white mt-1 group-hover:text-[#B4F73C] transition-colors">
                      {c.title}
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs leading-relaxed">
                    {/* Problem */}
                    <div className="p-4 rounded-2xl bg-[#141414] border border-red-500/20">
                      <div className="flex items-center gap-2 text-red-400 font-bold mb-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Problem</span>
                      </div>
                      <p className="text-neutral-300">{c.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-4 rounded-2xl bg-[#141414] border border-[#B4F73C]/20">
                      <div className="flex items-center gap-2 text-[#B4F73C] font-bold mb-1">
                        <Workflow className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Solution</span>
                      </div>
                      <p className="text-neutral-300">{c.solution}</p>
                    </div>

                    {/* Result */}
                    <div className="p-4 rounded-2xl bg-[#141414] border border-emerald-500/20">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Result</span>
                      </div>
                      <p className="text-neutral-300">{c.result}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#141414] hover:bg-[#B4F73C] text-white hover:text-black font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-all duration-300"
                  >
                    <span>Get Similar Automation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
