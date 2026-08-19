import React, { useState } from 'react';
import { Bot, PhoneCall, MessageSquare, Filter, Database, Workflow, Check, ArrowUpRight, Building2, HeartPulse, Megaphone, Briefcase } from 'lucide-react';

export default function Services({ onSelectService, calUrl }) {
  const [activeIndustry, setActiveIndustry] = useState('all');

  const solutions = [
    {
      id: "voice-agents",
      title: "AI Voice Agents & Phone Receptionists",
      icon: PhoneCall,
      tag: "Zero Missed Calls",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      description: "24/7 human-cadence voice assistants that answer inbound calls, qualify inquiries, and book appointments directly on your calendar.",
      capabilities: [
        "Inbound receptionist & instant after-hours call answering",
        "Live Google/Outlook calendar appointment booking",
        "Natural speech synthesis with zero awkward latency",
        "Full call transcription & automated CRM logging"
      ],
      industries: ['real-estate', 'healthcare', 'services']
    },
    {
      id: "chatbots-whatsapp",
      title: "Omnichannel Chatbots & WhatsApp AI",
      icon: MessageSquare,
      tag: "Instant 24/7 Response",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      description: "Intelligent messaging agents that engage visitors on your website and WhatsApp, answering questions and booking consultations in seconds.",
      capabilities: [
        "Instant multi-language lead engagement (<5s response)",
        "Official WhatsApp Business Cloud API integration",
        "Interactive booking links & automated drip follow-ups",
        "Seamless human handover when high-touch intervention is needed"
      ],
      industries: ['real-estate', 'agencies', 'healthcare', 'services']
    },
    {
      id: "lead-qualification",
      title: "Automated Lead Qualification & Routing",
      icon: Filter,
      tag: "Speed to Lead",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      description: "Score and categorize incoming leads based on budget, urgency, and fit so your sales team only speaks with ready-to-buy prospects.",
      capabilities: [
        "Multi-variable intent and qualification scoring",
        "Instant VIP routing via SMS, Slack, or direct call transfer",
        "Automated disqualification of low-fit prospects",
        "Custom objection handling & information gathering"
      ],
      industries: ['agencies', 'real-estate', 'services']
    },
    {
      id: "crm-workflows",
      title: "CRM & Autonomous Workflow Automation",
      icon: Workflow,
      tag: "Zero Manual Admin",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      description: "Connect your entire tech stack (Make, n8n, HubSpot, Salesforce, Zapier) to eliminate repetitive data entry and manual administrative tasks.",
      capabilities: [
        "End-to-end sync across HubSpot, Salesforce & GoHighLevel",
        "Automated pipeline stage progression & deal alerts",
        "Instant proposal, invoice & agreement dispatching",
        "Error-handled Make.com and n8n backend architectures"
      ],
      industries: ['agencies', 'services', 'healthcare', 'real-estate']
    }
  ];

  const industryFilters = [
    { id: 'all', label: 'All Capabilities', icon: Bot },
    { id: 'real-estate', label: 'Real Estate', icon: Building2 },
    { id: 'healthcare', label: 'Healthcare & Clinics', icon: HeartPulse },
    { id: 'agencies', label: 'B2B & Agencies', icon: Megaphone },
    { id: 'services', label: 'Professional Services', icon: Briefcase }
  ];

  const filteredSolutions = activeIndustry === 'all' 
    ? solutions 
    : solutions.filter(s => s.industries.includes(activeIndustry));

  return (
    <section id="services" className="py-20 sm:py-24 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Core AI Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Custom AI Systems <span className="text-gradient-lime">Built For Growth</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Turn-key automation architectures engineered to capture every inbound opportunity, eliminate manual work, and scale your operations 24/7.
          </p>
        </div>

        {/* Quick Industry Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {industryFilters.map((filter) => {
            const FilterIcon = filter.icon;
            const isActive = activeIndustry === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveIndustry(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#B4F73C] text-black shadow-glow-lime-sm scale-105'
                    : 'bg-[#0E0E0E] text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                <FilterIcon className="w-3.5 h-3.5" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* 4 Core High-Impact Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {filteredSolutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-between group hover:border-[#B4F73C]/40 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#B4F73C] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold font-mono px-3 py-1 rounded-full border ${sol.badgeColor}`}>
                      {sol.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#B4F73C] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {sol.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#B4F73C] flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4">
                  <a
                    href={calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#121212] hover:bg-[#B4F73C] text-neutral-200 hover:text-black font-bold text-xs flex items-center justify-center gap-2 border border-white/10 hover:border-[#B4F73C] transition-all duration-300"
                  >
                    <span>Deploy This System</span>
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

