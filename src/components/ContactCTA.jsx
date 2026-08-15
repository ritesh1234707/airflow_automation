import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ContactCTA({ onBookClick, calUrl }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080808] border-t border-white/10">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#B4F73C]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#0D0D0D] p-8 sm:p-14 rounded-3xl border border-[#B4F73C]/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20 text-xs font-bold text-[#B4F73C]">
                <span>Transform Your Business Operations</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Ready To Automate <br />
                <span className="text-gradient-lime">Your Business?</span>
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed">
                Book a call now and discover how AI can save time, reduce costs, and increase revenue for your organization.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={calUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-btn-primary py-3.5 px-8 text-sm shadow-glow-lime inline-flex"
                >
                  <span>Book a Call Now</span>
                  <span className="holo-arrow-box">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>

              {/* Direct Channels */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <p className="text-xs uppercase font-bold tracking-wider text-neutral-400">Direct Communication Channels</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  <a
                    href="mailto:contact@airflowautomation.com"
                    className="bg-[#141414] p-3.5 rounded-2xl border border-white/10 flex items-center gap-3 text-xs text-neutral-300 hover:text-white hover:border-[#B4F73C]/50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#B4F73C]" />
                    <span className="truncate">Email Us</span>
                  </a>

                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#141414] p-3.5 rounded-2xl border border-white/10 flex items-center gap-3 text-xs text-neutral-300 hover:text-white hover:border-[#25D366]/50 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#141414] p-3.5 rounded-2xl border border-white/10 flex items-center gap-3 text-xs text-neutral-300 hover:text-white hover:border-pink-500/50 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>

                </div>
              </div>
            </div>

            {/* Right Direct Form */}
            <div className="lg:col-span-6 bg-[#121212] p-8 rounded-3xl border border-white/10">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#B4F73C]/20 text-[#B4F73C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Inquiry Received!</h3>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    Our lead AI architect will review your submission and contact you within 2 hours.
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
                    <h3 className="text-base font-extrabold text-white">Send Direct Inquiry</h3>
                    <span className="text-[10px] uppercase font-mono text-[#B4F73C] font-bold bg-[#B4F73C]/10 px-2.5 py-0.5 rounded-full border border-[#B4F73C]/30">Fast Response</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Michael Scott"
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
                      placeholder="michael@company.com"
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Company / Industry</label>
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
                      placeholder="Describe your current leads & bottleneck..."
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

      </div>
    </section>
  );
}
