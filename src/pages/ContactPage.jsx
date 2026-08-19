import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, Send, CheckCircle2, ArrowUpRight, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export default function ContactPage({ calUrl }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 space-y-16 bg-[#050505] min-h-screen">
      
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Access</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Let's Build Your <br />
          <span className="text-gradient-lime">Autonomous AI System</span>
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Book a 15-minute technical discovery call or submit an inquiry below to discuss your current lead bottlenecks and automation goals.
        </p>
      </section>

      {/* Main Booking & Inquiry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D0D0D] p-6 sm:p-12 rounded-3xl border border-[#B4F73C]/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Call Booking Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Option 1: Live Discovery Call</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Schedule A 15-Min <br />
                <span className="text-gradient-lime">Strategy Session</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Speak directly with our Lead AI Architect. We will review your current inbound process, evaluate your tech stack, and outline a tailored roadmap.
              </p>

              <div className="pt-2">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-btn-primary py-3.5 px-8 text-sm shadow-glow-lime inline-flex"
                >
                  <span>Open Calendar &amp; Pick A Time</span>
                  <span className="holo-arrow-box">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Direct Channels */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <p className="text-xs uppercase font-mono tracking-wider text-neutral-400 font-bold">Or Connect Via Direct Channels</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="mailto:contact@airflowautomation.com"
                    className="bg-[#141414] p-3 rounded-2xl border border-white/10 flex items-center gap-2.5 text-xs text-neutral-300 hover:text-white hover:border-[#B4F73C]/50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#B4F73C]" />
                    <span className="truncate">Email Us</span>
                  </a>

                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#141414] p-3 rounded-2xl border border-white/10 flex items-center gap-2.5 text-xs text-neutral-300 hover:text-white hover:border-[#25D366]/50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#141414] p-3 rounded-2xl border border-white/10 flex items-center gap-2.5 text-xs text-neutral-300 hover:text-white hover:border-pink-500/50 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Form */}
            <div className="lg:col-span-6 bg-[#121212] p-6 sm:p-8 rounded-3xl border border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-white/10 text-[11px] font-bold text-neutral-300 mb-4">
                <span>Option 2: Direct Inquiry</span>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#B4F73C]/20 text-[#B4F73C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Inquiry Received!</h3>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    Our lead AI architect will review your message and contact you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#B4F73C] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-base font-extrabold text-white">Send A Message</h3>
                    <span className="text-[10px] uppercase font-mono text-[#B4F73C] font-bold bg-[#B4F73C]/10 px-2.5 py-0.5 rounded-full border border-[#B4F73C]/30">Fast Response</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Company &amp; Industry</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="Real Estate / Clinic / Agency"
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">What would you like to automate?</label>
                    <textarea
                      rows={3}
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your current lead volume and bottlenecks..."
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#B4F73C] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow-lime hover:bg-[#9EF01A] transition-colors"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
