import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, PhoneCall, MessageSquare, Filter, Workflow, ArrowRight, ArrowUpRight, Zap, CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import DemoSection from '../components/DemoSection';
import TrustSection from '../components/TrustSection';

export default function HomePage({ calUrl }) {
  const coreSolutions = [
    {
      id: "voice-agents",
      title: "AI Voice Agents",
      badge: "Zero Missed Calls",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      icon: PhoneCall,
      description: "Human-cadence voice assistants that answer inbound calls, qualify leads, and book calendar appointments 24/7.",
      bullets: ["Inbound & outbound call handling", "Live Google/Outlook calendar booking"]
    },
    {
      id: "whatsapp-chatbots",
      title: "WhatsApp & Omnichannel AI",
      badge: "Instant 24/7 Response",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: MessageSquare,
      description: "Multi-language chatbots that engage web and WhatsApp visitors in seconds with smart qualification and follow-ups.",
      bullets: ["<5s instant response speed", "Official WhatsApp Cloud API"]
    },
    {
      id: "lead-qualification",
      title: "Lead Qualification Systems",
      badge: "Speed to Lead",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
      icon: Filter,
      description: "Automated scoring matrices that filter high-intent prospects and route them straight to your top closers.",
      bullets: ["Custom intent scoring logic", "Instant VIP SMS/Slack alerts"]
    },
    {
      id: "crm-workflows",
      title: "CRM & Autonomous Workflows",
      badge: "Zero Manual Admin",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      icon: Workflow,
      description: "End-to-end Make.com and n8n pipelines that update HubSpot, Salesforce, and auto-dispatch proposals without manual effort.",
      bullets: ["HubSpot, Salesforce & GHL sync", "Automated pipeline stage triggers"]
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero calUrl={calUrl} />

      {/* 2. Three High-Impact Value Pillars */}
      <section className="py-12 bg-[#080808] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0E0E0E] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-[#B4F73C]/10 border border-[#B4F73C]/30 flex items-center justify-center text-[#B4F73C] flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">&lt;5 Second Lead Response</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Engage prospects instantly across Voice, Web, and WhatsApp</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0E0E0E] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0 flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Zero Missed Opportunities</h4>
                <p className="text-xs text-neutral-400 mt-0.5">24/7 AI Receptionist captures after-hours inquiries automatically</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0E0E0E] border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex-shrink-0 flex items-center justify-center">
                <Workflow className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Zero Manual Data Entry</h4>
                <p className="text-xs text-neutral-400 mt-0.5">Direct two-way synchronization with your existing CRM stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Solutions Snapshot (Compact & High-Converting) */}
      <section className="py-20 sm:py-24 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
                Core Systems
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Autonomous AI Systems <span className="text-gradient-lime">Engineered To Convert</span>
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base">
                Custom-built automation architectures that capture inquiries, qualify buyers, and run your repetitive ops 24/7.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#B4F73C] hover:underline"
            >
              <span>Explore All Solutions &amp; Tech Stack</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="glass-card p-6 rounded-3xl border border-white/10 bg-[#0A0A0A] flex flex-col justify-between group hover:border-[#B4F73C]/40 transition-all duration-300 relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#B4F73C] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full border ${sol.badgeColor}`}>
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#B4F73C] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                      {sol.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-white/10">
                      {sol.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F73C] flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-neutral-400 group-hover:text-[#B4F73C] flex items-center justify-between"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Interactive Live Sandbox (High Proof, Zero Fluff) */}
      <DemoSection />

      {/* 5. Revenue Recovery Calculator */}
      <TrustSection calUrl={calUrl} />

      {/* 6. High-Impact Final Conversion Banner */}
      <section className="py-20 relative bg-[#080808] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Scale Without Hiring
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Ready To Put Your Lead Pipeline On <br />
            <span className="text-gradient-lime">24/7 Autopilot?</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Book a 15-minute technical discovery call with our lead AI architect to identify bottlenecks and design your custom automation blueprint.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="holo-btn-primary py-3.5 px-8 text-sm shadow-glow-lime inline-flex"
            >
              <span>Book A Strategy Call</span>
              <span className="holo-arrow-box">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-[#121212] hover:bg-[#1A1A1A] border border-white/10 text-xs font-bold text-neutral-300 hover:text-white transition-all"
            >
              Send Direct Inquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
