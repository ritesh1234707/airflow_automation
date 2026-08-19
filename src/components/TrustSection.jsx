import React, { useState } from 'react';
import { Calculator, ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

export default function TrustSection({ onBookClick, calUrl }) {
  const [monthlyLeads, setMonthlyLeads] = useState(150);
  const [leadValue, setLeadValue] = useState(500);
  const [currentLossRate, setCurrentLossRate] = useState(35);

  const lostLeads = Math.round((monthlyLeads * currentLossRate) / 100);
  const lostRevenue = lostLeads * leadValue;
  const hoursSavedPerMonth = Math.round(monthlyLeads * 1.5);

  return (
    <section id="roi-calculator" className="py-20 sm:py-24 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Calculate Your <span className="text-gradient-lime">Revenue Recovery</span>
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Leads go cold when response times exceed 5 minutes. See how much revenue your business recovers with instant, 24/7 AI qualification and follow-up.
          </p>
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="bg-[#0A0A0A] rounded-3xl border border-[#B4F73C]/30 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B4F73C]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Customize Your Current Operations
              </h3>

              {/* Slider 1 */}
              <div className="space-y-2.5 bg-[#0F0F0F] p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <label className="text-neutral-300 font-medium">Estimated Monthly Inbound Leads</label>
                  <span className="font-bold text-[#B4F73C] font-mono">{monthlyLeads} leads / mo</span>
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
              <div className="space-y-2.5 bg-[#0F0F0F] p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between text-xs sm:text-sm">
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
              <div className="space-y-2.5 bg-[#0F0F0F] p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <label className="text-neutral-300 font-medium">Estimated Leads Lost to Slow Response (%)</label>
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
            <div className="lg:col-span-5 bg-[#121212] p-6 sm:p-8 rounded-3xl border border-white/10 text-center space-y-6 shadow-glow-lime-sm">
              <div className="space-y-1.5">
                <p className="text-[11px] uppercase font-bold text-neutral-400 tracking-wider">Estimated Monthly Lost Revenue</p>
                <h4 className="text-4xl sm:text-5xl font-extrabold text-red-400 font-mono">
                  ${lostRevenue.toLocaleString()} <span className="text-xs font-normal text-neutral-400">/ mo</span>
                </h4>
              </div>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div className="bg-[#0A0A0A] p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-neutral-400 uppercase font-semibold">Leads Recoverable</p>
                  <p className="text-xl font-extrabold text-[#B4F73C] font-mono mt-0.5">+{lostLeads} leads</p>
                </div>
                <div className="bg-[#0A0A0A] p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-neutral-400 uppercase font-semibold">Admin Time Saved</p>
                  <p className="text-xl font-extrabold text-white font-mono mt-0.5">~{hoursSavedPerMonth} hrs</p>
                </div>
              </div>

              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="holo-btn-primary w-full justify-center py-3.5 text-xs sm:text-sm shadow-glow-lime inline-flex"
              >
                <span>Recover This Revenue Now</span>
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

