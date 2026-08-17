import React from 'react';
import { Cpu, Zap, Layers, Database, Sparkles, MessageCircle, Bot, Phone, RefreshCw } from 'lucide-react';

export default function TechStack() {
  const tools = [
    { name: "OpenAI", category: "LLM & Reasoning", desc: "GPT-4o & Custom AI Agent Logic", icon: Sparkles, color: "text-[#B4F73C]" },
    { name: "Claude", category: "Anthropic AI", desc: "Complex Context & Document Processing", icon: Bot, color: "text-amber-400" },
    { name: "n8n", category: "Workflow Automation", desc: "Scalable Logic & Multi-Node Workflows", icon: Layers, color: "text-rose-400" },
    { name: "Make", category: "Integration Engine", desc: "Multi-App Orchestration & Data Pipes", icon: RefreshCw, color: "text-purple-400" },
    { name: "VAPI", category: "Voice Telephony", desc: "Ultra-Low Latency Voice Agent Engine", icon: Phone, color: "text-cyan-400" },
    { name: "ElevenLabs", category: "Voice Synthesis", desc: "Natural Human-Cadence Voice Models", icon: Cpu, color: "text-emerald-400" },
    { name: "WhatsApp API", category: "Messaging", desc: "Official Meta Cloud Direct Infrastructure", icon: MessageCircle, color: "text-[#25D366]" },
    { name: "HubSpot", category: "CRM Integration", desc: "Automated Contact & Pipeline Sync", icon: Database, color: "text-orange-400" },
    { name: "Salesforce", category: "Enterprise CRM", desc: "Opportunity Tracking & Deal Progression", icon: Database, color: "text-blue-400" },
    { name: "Zapier", category: "Ecosystem Connectors", desc: "Rapid 5,000+ App Ecosystem Bridges", icon: Zap, color: "text-amber-500" },
    { name: "Google Workspace", category: "Productivity", desc: "Calendar Booking, Drive & Gmail Sync", icon: Layers, color: "text-red-400" },
    { name: "Airtable", category: "Database & Ops", desc: "Relational Operational Data Store", icon: Database, color: "text-yellow-400" },
  ];

  return (
    <section className="py-20 relative bg-[#080808] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Enterprise Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technology <span className="text-gradient-lime">We Work With</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            We architect robust, error-handled systems powered by industry-standard AI models, workflow engines, and CRM platforms.
          </p>
        </div>

        {/* 12 Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-white/10 bg-[#0C0C0C] hover:border-[#B4F73C]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${t.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#B4F73C] transition-colors">{t.name}</h3>
                  <p className="text-[10px] text-[#B4F73C] font-mono mt-0.5">{t.category}</p>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2 leading-tight">{t.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
