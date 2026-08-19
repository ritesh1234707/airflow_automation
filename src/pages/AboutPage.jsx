import React from 'react';
import { Target, Eye, Cpu, ShieldCheck, Award, Mail, Linkedin, UserCheck, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ calUrl }) {
  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#050505] min-h-screen">
      
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Agency Blueprint &amp; Founder</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Engineering Enterprise AI <br />
          <span className="text-gradient-lime">Built For Scalable Growth</span>
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We combine cutting-edge large language models, low-latency telephony, and robust workflow automation engines to eliminate manual bottlenecks.
        </p>
      </section>

      {/* Founder Profile Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D0D0D] p-8 sm:p-14 rounded-3xl border border-[#B4F73C]/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Founder Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-[#141414] border-2 border-[#B4F73C]/40 p-2 shadow-glow-lime-sm relative overflow-hidden group">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[#111111] via-[#1A1A1A] to-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                    <UserCheck className="w-20 h-20 text-[#B4F73C] group-hover:scale-105 transition-transform duration-300" />
                    <span className="text-sm font-mono font-bold text-white mt-2">Ritesh Bhatt</span>
                    <span className="text-[10px] text-[#B4F73C] uppercase tracking-wider font-mono">Lead AI Architect &amp; Founder</span>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 px-3.5 py-1 rounded-full bg-[#121212] border border-[#B4F73C]/40 text-[11px] font-bold text-[#B4F73C] shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B4F73C] animate-pulse"></span>
                  <span>Direct Architect Access</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#B4F73C]/40 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="mailto:contact@airflowautomation.com"
                  className="px-4 py-2 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-[#B4F73C]/40 text-xs font-medium text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  aria-label="Email Founder"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B4F73C]" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>

            {/* Right Column: Founder Story */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3 py-1 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
                Direct Engineering Philosophy
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                "Every system is designed around <span className="text-gradient-lime">your existing workflow</span>."
              </h2>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-white text-lg">
                  Hi, I'm Ritesh.
                </p>
                <p>
                  I help businesses automate lead capture, follow-ups, appointment booking, CRM management, and repetitive operations using custom AI automation systems.
                </p>
                <p className="text-neutral-400 text-sm">
                  Every solution is designed around your existing workflow so your team can focus on growth instead of manual work. We avoid brittle scripts and build reliable, scalable architectures that work flawlessly 24/7.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-btn-primary py-3 px-8 text-sm shadow-glow-lime inline-flex"
                >
                  <span>Book A Strategy Call</span>
                  <span className="holo-arrow-box">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#B4F73C]/10 border border-[#B4F73C]/30 text-[#B4F73C] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              To eliminate repetitive manual tasks and missed revenue opportunities for every growth-focused business through hyper-reliable, custom-architected AI systems.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              To set the industry benchmark for autonomous AI infrastructure—empowering companies to operate with 24/7 customer responsiveness and 10x operational velocity.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
