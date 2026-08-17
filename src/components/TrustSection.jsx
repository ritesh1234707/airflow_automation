import React, { useState } from 'react';
import { Clock, PhoneOff, RotateCcw, AlertTriangle, Calculator, DollarSign, ArrowUpRight } from 'lucide-react';

export default function TrustSection({ onBookClick, calUrl }) {
  const [monthlyLeads, setMonthlyLeads] = useState(150);
  const [leadValue, setLeadValue] = useState(500);
  const [currentLossRate, setCurrentLossRate] = useState(35);

  const lostLeads = Math.round((monthlyLeads * currentLossRate) / 100);
  const lostRevenue = lostLeads * leadValue;
  const hoursSavedPerMonth = Math.round(monthlyLeads * 1.5);

  const painPoints = [
    {
      icon: Clock,
      title: "Slow Response Times",
      description: "Leads turn cold after 5 minutes of waiting. Manual responses often take hours or days.",
      badge: "High Risk"
    },
    {
      icon: PhoneOff,
      title: "Missed Inquiries",
      description: "Inquiries after business hours, over weekends, or during busy rushes get neglected completely.",
      badge: "Lost Revenue"
    },
    {
      icon: RotateCcw,
      title: "Manual Follow-Ups",
      description: "Sales teams forget to follow up or run out of time, leaving money sitting on the table.",
      badge: "Inefficient"
    },
    {
      icon: AlertTriangle,
      title: "Repetitive Admin Work",
      description: "Staff spend up to 60% of their workday typing data into CRMs instead of closing deals.",
      badge: "High Overhead"
    }
  ];

  return (
    <section className="py-24 relative bg-[#080808] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-semibold text-red-400">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Hidden Growth Killer</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Businesses Are <span className="text-red-400">Losing Leads</span> Every Day
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Most businesses lose potential customers because they can't respond fast enough. Our AI systems work 24/7 to capture, qualify, and nurture every lead automatically.
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 bg-[#0F0F0F] relative group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#161616] border border-white/10 text-neutral-400">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Holo ROI Calculator Sub-block */}
        <div className="mt-16 bg-[#0E0E0E] rounded-3xl border border-[#B4F73C]/30 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B4F73C]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[#B4F73C] font-semibold text-xs tracking-wider uppercase">
                <Calculator className="w-4 h-4" />
                <span>Interactive Revenue Recovery Calculator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How Much Is Slow Follow-Up Costing Your Business?
              </h3>

              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="text-neutral-300 font-medium">Monthly Inbound Leads</label>
                  <span className="font-bold text-[#B4F73C] font-mono">{monthlyLeads} leads/mo</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A1A1A] rounded-lg appearance-none cursor-pointer accent-[#B4F73C]"
                />
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="text-neutral-300 font-medium">Average Deal / Customer Value ($)</label>
                  <span className="font-bold text-[#B4F73C] font-mono">${leadValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={leadValue}
                  onChange={(e) => setLeadValue(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A1A1A] rounded-lg appearance-none cursor-pointer accent-[#B4F73C]"
                />
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <label className="text-neutral-300 font-medium">Estimated Leads Lost to Delay (%)</label>
                  <span className="font-bold text-red-400 font-mono">{currentLossRate}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  step="5"
                  value={currentLossRate}
                  onChange={(e) => setCurrentLossRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#1A1A1A] rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>
            </div>

            {/* Right Output Box */}
            <div className="lg:col-span-5 bg-[#141414] p-6 sm:p-8 rounded-2xl border border-white/10 text-center space-y-6 shadow-glow-lime-sm">
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Estimated Monthly Lost Revenue</p>
                <h4 className="text-4xl font-extrabold text-red-400 font-mono">
                  ${lostRevenue.toLocaleString()} <span className="text-xs font-normal text-neutral-400">/ mo</span>
                </h4>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-semibold">Leads Recovered</p>
                  <p className="text-xl font-extrabold text-[#B4F73C] font-mono">+{lostLeads} leads</p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-semibold">Hours Saved</p>
                  <p className="text-xl font-extrabold text-white font-mono">~{hoursSavedPerMonth} hrs</p>
                </div>
              </div>

              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="holo-btn-primary w-full justify-center py-3 text-sm shadow-glow-lime inline-flex"
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
  );
}
