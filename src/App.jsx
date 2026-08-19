import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Multi-Page Views
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import UseCasesPage from './pages/UseCasesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const calendarUrl = "https://calendar.app.google/GV6c4zsBCFd4baWG8";

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#B4F73C] selection:text-black flex flex-col justify-between relative">
        
        {/* Navigation Bar */}
        <Navbar calUrl={calendarUrl} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage calUrl={calendarUrl} />} />
            <Route path="/services" element={<ServicesPage calUrl={calendarUrl} />} />
            <Route path="/use-cases" element={<UseCasesPage calUrl={calendarUrl} />} />
            <Route path="/process" element={<ProcessPage calUrl={calendarUrl} />} />
            <Route path="/about" element={<AboutPage calUrl={calendarUrl} />} />
            <Route path="/contact" element={<ContactPage calUrl={calendarUrl} />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
