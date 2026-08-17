import React, { useState } from 'react';
import { demoTabs } from '../data/demoData';
import { Play, Home, Stethoscope, MessageCircle, Mic, Bot, Send, Phone, CheckCircle2, Sparkles, Volume2, ShieldCheck, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Home,
  Stethoscope,
  MessageCircle,
  Mic
};

export default function DemoSection({ onBookClick }) {
  const [activeTabId, setActiveTabId] = useState('real-estate');
  const [messages, setMessages] = useState(demoTabs[0].initialMessages);
  const [inputVal, setInputVal] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeTab = demoTabs.find(t => t.id === activeTabId) || demoTabs[0];

  const handleTabChange = (tab) => {
    setActiveTabId(tab.id);
    if (tab.initialMessages) {
      setMessages(tab.initialMessages);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = { sender: 'user', text: inputVal };
    setMessages(prev => [...prev, userMsg]);
    const currentText = inputVal;
    setInputVal('');

    setTimeout(() => {
      let botReplyText = "Thank you! I've noted that requirement. Would you like to lock in a consultation call with our team?";
      if (currentText.toLowerCase().includes('price') || currentText.toLowerCase().includes('cost')) {
        botReplyText = "Our custom automation packages start based on workflow complexity. I can generate a custom proposal for you on a 15-min strategy call!";
      } else if (currentText.toLowerCase().includes('hello') || currentText.toLowerCase().includes('hi')) {
        botReplyText = "Hello! 👋 How can Air Flow AI streamline your customer inquiries today?";
      }
      setMessages(prev => [...prev, { sender: 'bot', text: botReplyText }]);
    }, 700);
  };

  return (
    <section id="demos" className="py-24 relative bg-[#080808] border-y border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B4F73C] px-3.5 py-1.5 rounded-full bg-[#B4F73C]/10 border border-[#B4F73C]/20">
            Interactive Product Tour
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            See AI Automation <span className="text-gradient-lime">In Action</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Test real-time conversation flows, voice latency logs, and automated lead routing live inside our interactive sandbox.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {demoTabs.map((tab) => {
            const Icon = iconMap[tab.iconName] || Bot;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-[#B4F73C] text-black shadow-glow-lime scale-105'
                    : 'bg-[#121212] text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Demo Content Showcase Box */}
        <div className="mt-10 max-w-4xl mx-auto bg-[#0E0E0E] rounded-3xl border border-white/12 overflow-hidden shadow-2xl">
          
          {/* Header of Demo Box */}
          <div className="bg-[#141414] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#B4F73C] animate-ping"></span>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  {activeTab.title}
                </h3>
                <p className="text-[11px] text-neutral-400">{activeTab.description}</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#B4F73C]/10 text-[#B4F73C] text-xs font-mono font-bold border border-[#B4F73C]/30">
              {activeTab.badge}
            </span>
          </div>

          {/* Body based on tab */}
          <div className="p-6 bg-[#080808] min-h-[380px] flex flex-col justify-between">
            
            {/* TAB 1: Real Estate Chatbot */}
            {activeTab.id === 'real-estate' && (
              <div className="flex flex-col h-full justify-between space-y-4">
                <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 text-xs ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.sender === 'bot' && (
                        <div className="w-7 h-7 rounded-lg bg-[#B4F73C] flex items-center justify-center text-black font-bold flex-shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}
                      <div
                        className={`p-3.5 rounded-2xl max-w-[80%] leading-relaxed ${
                          m.sender === 'user'
                            ? 'bg-[#B4F73C] text-black font-semibold rounded-br-none'
                            : 'bg-[#141414] border border-white/10 text-neutral-200 rounded-bl-none'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="flex gap-2 pt-3 border-t border-white/10">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Type a response to test the AI qualification bot..."
                    className="flex-1 glass-input px-4 py-2.5 rounded-xl text-xs"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#B4F73C] text-black font-extrabold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}

            {/* TAB 2: AI Receptionist for Clinics */}
            {activeTab.id === 'clinic' && (
              <div className="space-y-6">
                <div className="bg-[#121212] p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#B4F73C]/20 text-[#B4F73C] flex items-center justify-center">
                      <Phone className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Call Simulator • Inbound Phone Receptionist</p>
                      <p className="text-[11px] text-neutral-400">Caller: {activeTab.callerInfo?.patient} ({activeTab.callerInfo?.intent})</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="px-4 py-2 rounded-full bg-[#B4F73C] text-black text-xs font-extrabold flex items-center gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>{isPlayingAudio ? 'Pause Voice Preview' : 'Play Simulated Call'}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {activeTab.audioSteps?.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#121212] border border-white/10 text-xs flex items-start gap-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        step.speaker.includes('AI') ? 'bg-[#B4F73C]/20 text-[#B4F73C]' : 'bg-neutral-800 text-neutral-300'
                      }`}>
                        {step.speaker}
                      </span>
                      <p className="text-neutral-300 flex-1">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: WhatsApp Automation */}
            {activeTab.id === 'whatsapp' && (
              <div className="space-y-4">
                <div className="bg-[#121212] border border-[#25D366]/40 p-3 rounded-xl flex items-center justify-between text-xs text-[#25D366]">
                  <span className="flex items-center gap-2 font-semibold">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Business API Connected • Direct CRM Trigger
                  </span>
                  <span className="text-[10px] bg-[#25D366]/20 px-2 py-0.5 rounded font-mono font-bold">Instant Cloud Delivery</span>
                </div>

                <div className="space-y-3">
                  {activeTab.chatFlow?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <span className="text-neutral-500 font-mono text-[10px] mt-1">{item.time}</span>
                      <div className={`p-3.5 rounded-2xl text-neutral-200 border ${
                        item.type === 'bot' ? 'bg-[#121212] border-[#25D366]/30 max-w-[85%]' :
                        item.type === 'bot_file' ? 'bg-[#0E2017] border-[#25D366]/50 max-w-[85%] font-mono text-[#25D366]' :
                        'bg-[#B4F73C] text-black font-semibold ml-auto border-none'
                      }`}>
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: Voice Agent Call Log */}
            {activeTab.id === 'voice' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-[#121212] p-4 rounded-xl text-center border border-white/10">
                    <p className="text-[10px] text-neutral-400 uppercase font-semibold">Voice Latency</p>
                    <p className="text-xl font-extrabold text-[#B4F73C] font-mono mt-1">{activeTab.metrics?.latency}</p>
                  </div>
                  <div className="bg-[#121212] p-4 rounded-xl text-center border border-white/10">
                    <p className="text-[10px] text-neutral-400 uppercase font-semibold">Speech Quality</p>
                    <p className="text-xl font-extrabold text-emerald-400 font-mono mt-1">{activeTab.metrics?.accuracy}</p>
                  </div>
                  <div className="bg-[#121212] p-4 rounded-xl text-center border border-white/10">
                    <p className="text-[10px] text-neutral-400 uppercase font-semibold">System Uptime</p>
                    <p className="text-xl font-extrabold text-white font-mono mt-1">{activeTab.metrics?.availability}</p>
                  </div>
                  <div className="bg-[#121212] p-4 rounded-xl text-center border border-white/10">
                    <p className="text-[10px] text-neutral-400 uppercase font-semibold">CRM Integration</p>
                    <p className="text-xl font-extrabold text-[#B4F73C] font-mono mt-1">{activeTab.metrics?.crmSync}</p>
                  </div>
                </div>

                <div className="bg-[#121212] p-6 rounded-2xl border border-white/10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#B4F73C]/20 text-[#B4F73C] flex items-center justify-center mx-auto">
                    <Play className="w-6 h-6 fill-[#B4F73C]" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Full Telephony System Walkthrough</h4>
                  <p className="text-xs text-neutral-400 max-w-md mx-auto">
                    Watch our 3-minute video showing live outbound call dispatching, interruption handling, and Google Calendar scheduling.
                  </p>
                  <button
                    onClick={onBookClick}
                    className="mt-2 text-xs font-bold text-[#B4F73C] hover:underline"
                  >
                    Request Custom Live Demo For Your Business →
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Card Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-neutral-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B4F73C]" />
                Secure &amp; Reliable Automation Architecture
              </span>
              
              <button
                onClick={onBookClick}
                className="holo-btn-primary py-2.5 px-6 text-xs shadow-glow-lime inline-flex"
              >
                <span>Book A Strategy Call</span>
                <span className="holo-arrow-box w-7 h-7">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
