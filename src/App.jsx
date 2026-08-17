import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import DemoSection from './components/DemoSection';
import Benefits from './components/Benefits';
import Founder from './components/Founder';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  const calendarUrl = "https://calendar.app.google/GV6c4zsBCFd4baWG8";

  const handleOpenBooking = () => {
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#B4F73C] selection:text-black relative">
      
      {/* Navigation Bar */}
      <Navbar onBookClick={handleOpenBooking} calUrl={calendarUrl} />

      {/* Main Content Flow */}
      <main>
        <Hero onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <TechStack />
        <TrustSection onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <Services onSelectService={() => handleOpenBooking()} calUrl={calendarUrl} />
        <HowItWorks onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <Industries onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <CaseStudies onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <DemoSection onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <Benefits onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <Founder onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <About onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <FAQ onBookClick={handleOpenBooking} calUrl={calendarUrl} />
        <ContactCTA onBookClick={handleOpenBooking} calUrl={calendarUrl} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
