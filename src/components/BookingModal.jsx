import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: selectedService ? selectedService.title : 'AI Chatbots & Lead Qualification',
    date: '2026-08-18',
    time: '10:00 AM',
    name: '',
    email: '',
    phone: '',
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      setConfirmed(true);
    }
  };

  const resetModal = () => {
    setConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#0A0A0A] rounded-3xl border border-[#B4F73C]/40 p-6 sm:p-8 shadow-glass-holo overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-[#141414] border border-white/10"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-20 h-20 rounded-full bg-[#B4F73C]/20 border border-[#B4F73C]/50 flex items-center justify-center text-[#B4F73C] mx-auto shadow-glow-lime-sm">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">Consultation Booked!</h3>
            <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
              We've dispatched a calendar invitation to <span className="text-[#B4F73C] font-semibold">{formData.email}</span> for <span className="text-white font-bold">{formData.date} at {formData.time}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 text-xs text-neutral-400 space-y-1">
              <p className="font-bold text-white">Meeting Host: Lead AI Automation Architect</p>
              <p>Duration: 20 Minutes • Google Meet Link Included</p>
            </div>

            <button
              onClick={resetModal}
              className="w-full py-3.5 rounded-full bg-[#B4F73C] text-black font-extrabold text-xs uppercase tracking-wider"
            >
              Done & Return To Site
            </button>
          </div>
        ) : (
          <div>
            {/* Step Tracker Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B4F73C]/20 text-[#B4F73C] border border-[#B4F73C]/30 flex items-center justify-center font-mono font-bold text-xs">
                  {step}/3
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Book Strategy Call</h3>
                  <p className="text-[11px] text-neutral-400">1-on-1 AI Architecture Review</p>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase bg-[#B4F73C]/10 text-[#B4F73C] px-2.5 py-1 rounded-full border border-[#B4F73C]/30 font-bold">
                ⚡ Instant Confirmation
              </span>
            </div>

            <form onSubmit={handleNextStep} className="space-y-5">
              
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase text-neutral-400 tracking-wider">
                    Step 1: Select Primary Automation Focus
                  </label>

                  <div className="space-y-2">
                    {[
                      "AI Chatbots & Lead Qualification",
                      "AI Voice Agents & Receptionist",
                      "WhatsApp Drip & Follow-up Automation",
                      "CRM Workflow & Make/n8n Architecture",
                      "Full Custom Enterprise AI Stack"
                    ].map((opt, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setFormData({ ...formData, industry: opt })}
                        className={`w-full p-3.5 rounded-2xl text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                          formData.industry === opt
                            ? 'bg-[#B4F73C]/10 border-[#B4F73C] text-[#B4F73C]'
                            : 'bg-[#141414] border-white/10 text-neutral-300 hover:border-white/20'
                        }`}
                      >
                        <span>{opt}</span>
                        {formData.industry === opt && <CheckCircle2 className="w-4 h-4 text-[#B4F73C]" />}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#B4F73C] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Next: Select Date & Time</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase text-neutral-400 tracking-wider">
                    Step 2: Choose Date & Time
                  </label>

                  <div>
                    <label className="block text-[11px] text-neutral-300 mb-1">Select Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-300 mb-1">Select Time Slot</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["09:00 AM", "10:00 AM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setFormData({ ...formData, time: t })}
                          className={`py-2 rounded-xl text-xs font-mono font-semibold border transition-all ${
                            formData.time === t
                              ? 'bg-[#B4F73C] text-black border-[#B4F73C]'
                              : 'bg-[#141414] border-white/10 text-neutral-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 rounded-full bg-[#141414] border border-white/10 text-neutral-300 font-semibold text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 rounded-full bg-[#B4F73C] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase text-neutral-400 tracking-wider">
                    Step 3: Contact Info
                  </label>

                  <div>
                    <label className="block text-[11px] text-neutral-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-neutral-300 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full glass-input px-4 py-2.5 rounded-xl text-xs"
                    />
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-3.5 rounded-full bg-[#141414] border border-white/10 text-neutral-300 font-semibold text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 rounded-full bg-[#B4F73C] text-black font-extrabold text-xs uppercase tracking-wider shadow-glow-lime flex items-center justify-center gap-2"
                    >
                      <span>Confirm Booking</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
