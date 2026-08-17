export const demoTabs = [
  {
    id: "real-estate",
    title: "Real Estate Lead Qualification",
    iconName: "Home",
    badge: "Chatbot Demo",
    description: "Watch how Air Flow AI qualifies a home buyer in 60 seconds and schedules a tour automatically.",
    initialMessages: [
      { sender: "bot", text: "Hi there! 👋 Welcome to Prime Real Estate. Are you looking to buy, sell, or rent a property today?" },
      { sender: "user", text: "I'm looking to buy a 3-bedroom house." },
      { sender: "bot", text: "Awesome! 🏡 What target budget range do you have in mind?" },
      { sender: "user", text: "Around $650,000 - $750,000 in Westside." },
      { sender: "bot", text: "Great choices! We have 4 matching luxury listings available this week. Would you like to schedule a private walkthrough tour tomorrow at 2 PM or 4 PM?" },
      { sender: "user", text: "Tomorrow at 2 PM works great!" },
      { sender: "bot", text: "✅ Tour Confirmed for Tomorrow at 2:00 PM! I've sent a calendar invite and listing preview to your email. Talk soon!" }
    ]
  },
  {
    id: "clinic",
    title: "AI Receptionist For Clinics",
    iconName: "Stethoscope",
    badge: "Voice Agent Demo",
    description: "Simulate an AI receptionist managing patient appointment scheduling & insurance verification over the phone.",
    callerInfo: {
      patient: "Sarah Jenkins",
      time: "09:42 AM Today",
      intent: "Teeth Cleaning & Checkup"
    },
    audioSteps: [
      { speaker: "AI Receptionist", text: "Thank you for calling Apex Dental Care! I'm Sarah, your AI assistant. How may I assist your smile today?" },
      { speaker: "Caller", text: "Hi, I'd like to book a routine cleaning for this Friday morning." },
      { speaker: "AI Receptionist", text: "I can certainly get that set up! We have 9:30 AM or 11:15 AM available this Friday with Dr. Miller." },
      { speaker: "Caller", text: "11:15 AM would be perfect." },
      { speaker: "AI Receptionist", text: "Got it locked in! 🗓️ Friday at 11:15 AM. A confirmation text message with location details has been dispatched." }
    ]
  },
  {
    id: "whatsapp",
    title: "WhatsApp Follow-Up Automation",
    iconName: "MessageCircle",
    badge: "WhatsApp Flow",
    description: "Experience automated multi-touch lead recovery and instant document sharing on WhatsApp.",
    chatFlow: [
      { time: "0s", type: "system", text: "User submitted lead form on Facebook Ad" },
      { time: "2s", type: "bot", text: "Hey Alex! Thanks for requesting our AI Automation Guide 🚀 Here is your instant PDF download link:" },
      { time: "2s", type: "bot_file", text: "📄 AirFlow_Automation_Playbook_2026.pdf (3.4 MB)" },
      { time: "5s", type: "user", text: "Thanks! Do you also integrate with HubSpot?" },
      { time: "7s", type: "bot", text: "Yes! We offer 1-click bi-directional HubSpot & WhatsApp sync. Want to jump on a quick 15-min strategy call?" }
    ]
  },
  {
    id: "voice",
    title: "AI Voice Agent Call Log",
    iconName: "Mic",
    badge: "Live Telephony",
    description: "Inspect live call logs, latency metrics (<450ms voice synthesis), and automated CRM updates.",
    metrics: {
      latency: "< 380ms",
      accuracy: "Human Cadence",
      availability: "24/7 Live",
      crmSync: "Instant Sync"
    }
  }
];
