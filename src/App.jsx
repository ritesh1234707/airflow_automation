import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import DemoSection from './components/DemoSection';
import Benefits from './components/Benefits';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  const calComUrl = "https://cal.com/ritesh-bhatt/book-a-free-call";

  const handleOpenBooking = () => {
    window.open(calComUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#B4F73C] selection:text-black relative">
      
      {/* Navigation Bar */}
      <Navbar onBookClick={handleOpenBooking} calUrl={calComUrl} />

      {/* Main Content Flow */}
      <main>
        <Hero onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <TrustSection onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <Services onSelectService={() => handleOpenBooking()} calUrl={calComUrl} />
        <HowItWorks onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <Industries onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <DemoSection onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <Benefits onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <About onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <FAQ onBookClick={handleOpenBooking} calUrl={calComUrl} />
        <ContactCTA onBookClick={handleOpenBooking} calUrl={calComUrl} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
