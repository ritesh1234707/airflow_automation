import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Zap, Play, TrendingUp, Bot, Users, Cpu } from 'lucide-react';

export default function Hero({ onBookClick, calUrl }) {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [liveMetric, setLiveMetric] = useState(1482);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetric(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-holo-glow bg-[#050505]">
      
      {/* Background Liquid Glass Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#B4F73C]/10 via-[#10B981]/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-5 w-96 h-96 bg-[#B4F73C]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-holo opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Minimal Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121212] border border-[#B4F73C]/30 text-xs font-semibold text-[#B4F73C] shadow-glow-lime-sm">
            <span className="w-2 h-2 rounded-full bg-[#B4F73C] animate-ping"></span>
            <Zap className="w-3.5 h-3.5" />
            <span>Next-Gen AI Automation • Holo Architecture</span>
          </div>
        </div>

        {/* Dribbble Style Headline */}
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            AI Automation Systems <br className="hidden sm:inline" />
            <span className="text-gradient-lime">That Work While You Sleep</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            We help businesses capture leads, automate follow-ups, qualify prospects, and eliminate repetitive tasks using AI-powered automation systems.
          </p>

          {/* Dribbble Style CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Primary CTA Button -> Google Calendar link */}
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="holo-btn-primary text-base py-2.5 px-6 shadow-glow-lime"
            >
              <span>Book a Call Now</span>
              <span className="holo-arrow-box w-10 h-10">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href="#demos"
              className="px-7 py-3.5 rounded-full bg-[#121212] hover:bg-[#1A1A1A] text-white font-semibold text-sm border border-white/10 transition-all flex items-center gap-2.5"
            >
              <Play className="w-4 h-4 fill-[#B4F73C] text-[#B4F73C]" />
              <span>Watch Interactive Demo</span>
            </a>

          </div>

          {/* Avatar Stack + Social Proof */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client 1" />
              <img className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client 2" />
              <img className="w-10 h-10 rounded-full border-2 border-[#050505] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Client 3" />
            </div>
            <div className="text-left">
              <span className="text-xl font-extrabold text-white font-mono tracking-tight">500+ Businesses</span>
              <p className="text-xs text-neutral-400">Automated lead capture & zero manual follow-ups</p>
            </div>
          </div>

        </div>

        {/* Dynamic Dark Dashboard Showcase Frame */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#B4F73C]/20 via-[#10B981]/20 to-transparent rounded-3xl blur-2xl opacity-40"></div>
          
          <div className="relative rounded-3xl bg-[#0B0B0B] border border-white/12 shadow-glass-holo overflow-hidden">
            
            {/* Window Header */}
            <div className="bg-[#121212] px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-[#B4F73C]"></div>
                <span className="ml-3 text-xs font-mono text-neutral-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B4F73C] animate-ping"></span>
                  AirFlow Control Center • Live Holo Node Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${activeTab === 'pipeline' ? 'bg-[#B4F73C] text-black' : 'text-neutral-400 hover:text-white'}`}
                >
                  Live Pipeline
                </button>
                <button 
                  onClick={() => setActiveTab('bot')}
                  className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${activeTab === 'bot' ? 'bg-[#B4F73C] text-black' : 'text-neutral-400 hover:text-white'}`}
                >
                  AI Agent Chat
                </button>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#070707]">
              
              {/* Left Column: Holo Metric Cards */}
              <div className="md:col-span-4 space-y-4">
                
                <div className="glass-card p-5 rounded-2xl border border-white/10 bg-[#0E0E0E] relative overflow-hidden group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Leads Processed Today</p>
                      <h3 className="text-3xl font-extrabold text-white mt-1 font-mono">{liveMetric}</h3>
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-[#B4F73C]/10 border border-[#B4F73C]/30 flex items-center justify-center text-[#B4F73C]">
                      <Users className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#B4F73C] font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+38.4% speed to lead recovery</span>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10 bg-[#0E0E0E]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Speed To Lead Latency</p>
                      <h3 className="text-3xl font-extrabold text-[#B4F73C] mt-1 font-mono">+2.4s</h3>
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Zap className="w-4 h-4 text-[#B4F73C]" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">Instant AI qualification across Web & WhatsApp</p>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10 bg-[#0E0E0E]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Weekly Hours Saved</p>
                      <h3 className="text-3xl font-extrabold text-white mt-1 font-mono">340h</h3>
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">Automated scheduling & CRM updates</p>
                </div>
              </div>

              {/* Right Column: Live Stream */}
              <div className="md:col-span-8 glass-card p-6 rounded-2xl border border-white/10 bg-[#0E0E0E] flex flex-col justify-between">
                {activeTab === 'pipeline' ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-white/10">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#B4F73C]" /> Autonomous Workflow Stream
                      </h4>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30">Active Engine</span>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { time: 'Just now', title: 'Healthcare Lead Qualified', status: 'Booked Calendar Tour', badge: 'bg-[#B4F73C]/20 text-[#B4F73C]' },
                        { time: '2m ago', title: 'WhatsApp AI Agent Replied', status: 'Sent Pricing PDF', badge: 'bg-emerald-500/20 text-emerald-300' },
                        { time: '4m ago', title: 'Real Estate Voice Call Handled', status: 'Synced to HubSpot', badge: 'bg-cyan-500/20 text-cyan-300' },
                        { time: '8m ago', title: 'Custom API Automation Executed', status: 'Invoiced Client', badge: 'bg-purple-500/20 text-purple-300' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-[#141414] border border-white/5 text-xs">
                          <div className="flex items-center gap-3">
                            <Bot className="w-4 h-4 text-[#B4F73C]" />
                            <div>
                              <p className="font-semibold text-white">{item.title}</p>
                              <p className="text-neutral-400 text-[11px]">{item.status}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.badge}`}>{item.status}</span>
                            <span className="text-neutral-500 text-[10px]">{item.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-8 h-8 rounded-full bg-[#B4F73C]/20 text-[#B4F73C] flex items-center justify-center border border-[#B4F73C]/30">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">AirFlow AI Qualifier</p>
                        <p className="text-[10px] text-[#B4F73C]">Online • Latency 0.2s</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-[#141414] p-3.5 rounded-2xl max-w-[80%] border border-white/10 text-neutral-200">
                        <p>Hi! Welcome. What target budget and timeframe do you have for your AI automation rollout?</p>
                      </div>
                      <div className="bg-[#B4F73C] p-3.5 rounded-2xl max-w-[80%] ml-auto text-black font-semibold">
                        <p>Looking to set up WhatsApp & lead qualification within 2 weeks!</p>
                      </div>
                      <div className="bg-[#141414] p-3.5 rounded-2xl max-w-[80%] border border-white/10 text-neutral-200">
                        <p>Awesome! Our pre-built Holo Playbook is ready for deployment. Shall I lock in a strategy session?</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>⚡ Air Flow Systems Architecture</span>
                  <span className="text-[#B4F73C] font-mono">100% Uptime Guaranteed</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
