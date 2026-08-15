import React from 'react';
import { Zap, Clock, ShieldCheck, Smile, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export default function Benefits({ onBookClick }) {
  const benefits = [
    {
      icon: Zap,
      title: "Respond To Leads Instantly",
      description: "Engage prospects within seconds across SMS, WhatsApp, and web chat before your competitors even see the notification.",
      metric: "< 3 Seconds Speed"
    },
    {
      icon: ShieldCheck,
      title: "Reduce Manual Work",
      description: "Automate repetitive data entry, follow-ups, and calendar coordination so your human team focuses purely on high-value sales.",
      metric: "85% Less Friction"
    },
    {
      icon: Clock,
      title: "Save Time Every Day",
      description: "Reclaim 20 to 40 hours per employee every single week by delegating routine inquiries to intelligent AI workflows.",
      metric: "30+ Hours Saved/wk"
    },
    {
      icon: Smile,
      title: "Improve Customer Experience",
      description: "Deliver instant, accurate, friendly answers at any hour of the day or night without keeping clients waiting on hold.",
      metric: "99.2% Satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Increase Conversion Rates",
      description: "Nurture cold leads automatically with customized drip sequences until they are qualified and ready to buy.",
      metric: "+35% Close Rate"
    },
    {
      icon: Users,
      title: "Scale Without Hiring",
      description: "Multiply your operational bandwidth by 10x without adding expensive management, benefits, or office space.",
      metric: "10x Bandwidth"
    }
  ];

  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Unfair Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Why Businesses Choose <span className="text-gradient-lime">Air Flow Automation</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Proven ROI, turn-key delivery, and relentless AI performance designed for modern service businesses and agencies.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
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
                    <span className="text-xs font-extrabold font-mono px-3 py-1 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] border border-[#B4F73C]/30">
                      {b.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-[#B4F73C] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#B4F73C]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Turnkey Setup Included</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
