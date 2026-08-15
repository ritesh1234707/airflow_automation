import React, { useState } from 'react';
import { Bot, X, Send, ArrowUpRight } from 'lucide-react';

export default function FloatingBot({ onBookClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am the Air Flow AI Assistant. 🤖 How can I help automate your business today?' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInputVal('');

    setTimeout(() => {
      let botResponse = "Air Flow Automation creates custom AI Chatbots, Voice Receptionists, WhatsApp Automation, and CRM Workflows. Would you like to book a 15-min discovery call?";
      const lower = userText.toLowerCase();
      if (lower.includes('cost') || lower.includes('price')) {
        botResponse = "Our solutions are custom-built for high ROI. We evaluate your workflow on a free 15-min consultation call to provide exact transparent quotes.";
      } else if (lower.includes('real estate') || lower.includes('clinic') || lower.includes('agency')) {
        botResponse = "We have pre-built playbooks for Real Estate, Healthcare Clinics, and Agencies! Click below to schedule a custom strategy session.";
      }
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#0A0A0A] rounded-3xl border border-[#B4F73C]/40 shadow-glass-holo overflow-hidden flex flex-col h-[420px] animate-fadeIn">
          
          {/* Header */}
          <div className="bg-[#121212] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#B4F73C] text-black font-bold flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-white">AirFlow AI Agent</h4>
                <p className="text-[10px] text-[#B4F73C]">Online • Holo Core Active</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-lg"
              aria-label="Close floating AI assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#050505] text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-md bg-[#B4F73C] text-black font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
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

          {/* Quick Action Banner */}
          <div className="px-3 py-2 bg-[#121212] border-t border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-neutral-400">Ready to build your AI agent?</span>
            <button
              onClick={() => { setIsOpen(false); onBookClick(); }}
              className="text-[#B4F73C] font-bold hover:underline flex items-center gap-1"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-[#121212] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="Ask AirFlow AI..."
              className="flex-1 glass-input px-3 py-2 rounded-xl text-xs"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#B4F73C] text-black font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-3 px-5 py-3 rounded-full bg-[#B4F73C] text-black font-extrabold text-xs tracking-wide shadow-glow-lime hover:bg-[#9EF01A] transition-all"
        >
          <Bot className="w-5 h-5 animate-bounce text-black" />
          <span className="hidden sm:inline">Test Holo AI Assistant</span>
          <span className="flex h-2.5 w-2.5 rounded-full bg-black"></span>
        </button>
      )}

    </div>
  );
}
