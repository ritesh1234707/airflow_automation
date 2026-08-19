import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Zap, TrendingUp, Bot, Users, Cpu } from 'lucide-react';

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
            <span>Next-Gen AI Automation Systems</span>
          </div>
        </div>

        {/* Headline & High-Impact Copy */}
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Scale Your Business With <br className="hidden sm:inline" />
            <span className="text-gradient-lime">Custom AI Automation</span>
          </h1>

          {/* Highlight Text */}
          <p className="text-base sm:text-xl font-medium text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            AI Voice Agents, Chatbots &amp; Workflow Automation That Capture, Qualify And Follow Up With Prospects 24/7
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
            We help service businesses automate lead response, appointment booking, customer support, CRM updates, and repetitive operations using custom AI systems.
          </p>

          {/* Single Focused Primary CTA */}
          <div className="flex items-center justify-center pt-4">
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="holo-btn-primary text-base py-3 px-8 shadow-glow-lime inline-flex"
            >
              <span>Book A Strategy Call</span>
              <span className="holo-arrow-box w-10 h-10">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>

          {/* Credibility Statement Pills */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-300">
            <span className="px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F73C]"></span>
              Custom AI Systems
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F73C]"></span>
              Built With OpenAI, n8n &amp; Make
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F73C]"></span>
              24/7 Lead Capture
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F73C]"></span>
              Fast Deployment
            </span>
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
                  AirFlow Control Center • Autonomous AI Engine
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
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">System Architecture</p>
                      <h3 className="text-xl font-extrabold text-white mt-1">Custom AI</h3>
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-[#B4F73C]/10 border border-[#B4F73C]/30 flex items-center justify-center text-[#B4F73C]">
                      <Bot className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#B4F73C] font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Built with OpenAI, n8n &amp; Make</span>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10 bg-[#0E0E0E]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Lead Capture &amp; Response</p>
                      <h3 className="text-xl font-extrabold text-[#B4F73C] mt-1 font-mono">Instant 24/7</h3>
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Zap className="w-4 h-4 text-[#B4F73C]" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">Multi-channel response across Web, Voice &amp; WhatsApp</p>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/10 bg-[#0E0E0E]">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Workflow Integration</p>
                      <h3 className="text-xl font-extrabold text-white mt-1">Automated</h3>
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">Automated scheduling, lead qualification &amp; CRM sync</p>
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
                        { time: 'Just now', title: 'Inbound Prospect Qualified', status: 'Booked Strategy Session', badge: 'bg-[#B4F73C]/20 text-[#B4F73C]' },
                        { time: '2m ago', title: 'WhatsApp AI Agent Follow-Up', status: 'Instant Lead Routing', badge: 'bg-emerald-500/20 text-emerald-300' },
                        { time: '4m ago', title: 'After-Hours Voice Call Handled', status: 'Synced to CRM', badge: 'bg-cyan-500/20 text-cyan-300' },
                        { time: '8m ago', title: 'Custom Workflow Executed', status: 'Automated Operations', badge: 'bg-purple-500/20 text-purple-300' }
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
                        <p className="text-[10px] text-[#B4F73C]">Online • 24/7 Active</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-[#141414] p-3.5 rounded-2xl max-w-[80%] border border-white/10 text-neutral-200">
                        <p>Hi! Welcome. What operational bottlenecks or lead handling tasks are you looking to automate?</p>
                      </div>
                      <div className="bg-[#B4F73C] p-3.5 rounded-2xl max-w-[80%] ml-auto text-black font-semibold">
                        <p>Looking to set up 24/7 lead qualification and calendar booking across Web and WhatsApp.</p>
                      </div>
                      <div className="bg-[#141414] p-3.5 rounded-2xl max-w-[80%] border border-white/10 text-neutral-200">
                        <p>We can build and deploy that tailored to your CRM workflow. Would you like to book a strategy call?</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>⚡ Air Flow Custom Systems</span>
                  <span className="text-[#B4F73C] font-mono">End-to-End Reliability</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Integrated Tech Stack & Architecture Marquee */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center max-w-5xl mx-auto">

          <p className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-semibold mb-5">
            Enterprise Infrastructure &amp; Integrations Powered By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { name: "OpenAI GPT-4o", cat: "Reasoning" },
              { name: "Anthropic Claude", cat: "Document AI" },
              { name: "n8n Workflow Engine", cat: "Logic" },
              { name: "Make.com", cat: "Integrations" },
              { name: "VAPI & ElevenLabs", cat: "Voice AI" },
              { name: "WhatsApp Business API", cat: "Messaging" },
              { name: "HubSpot & Salesforce", cat: "CRM Sync" },
              { name: "Google Workspace", cat: "Calendar/Mail" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F0F0F] border border-white/10 hover:border-[#B4F73C]/40 transition-all text-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B4F73C]"></span>
                <span className="font-semibold text-white">{tech.name}</span>
                <span className="text-[10px] text-neutral-500 font-mono">({tech.cat})</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

