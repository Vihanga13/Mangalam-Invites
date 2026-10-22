import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyDigital from './components/WhyDigital';
import DesignGallery from './components/DesignGallery';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import DemoModal from './components/DemoModal';
import { translations } from './config/i18n';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'si'
  const [activeDemoDesign, setActiveDemoDesign] = useState(null);

  const handleOpenDemo = (design) => {
    setActiveDemoDesign(design);
  };

  const handleCloseDemo = () => {
    setActiveDemoDesign(null);
  };

  return (
    <div className={`min-h-screen-dvh flex flex-col bg-[#FAF7EE] text-neo-black ${
      lang === 'si' ? 'font-sinhala' : 'font-sans'
    }`}>
      {/* Sticky Navigation Bar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        translations={translations} 
      />

      {/* Main Single-Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          lang={lang} 
          translations={translations} 
          onOpenDemo={handleOpenDemo}
        />

        {/* Why Digital Section */}
        <WhyDigital 
          lang={lang} 
          translations={translations} 
        />

        {/* 15 Designs Gallery Section */}
        <DesignGallery 
          lang={lang} 
          translations={translations} 
          onOpenDemo={handleOpenDemo}
        />

        {/* How It Works Section */}
        <HowItWorks 
          lang={lang} 
          translations={translations} 
        />


        {/* Features Icon Grid Section */}
        <Features 
          lang={lang} 
          translations={translations} 
        />

        {/* Testimonials Carousel Section */}
        <Testimonials 
          lang={lang} 
          translations={translations} 
        />

        {/* Frequently Asked Questions Section */}
        <FAQ 
          lang={lang} 
          translations={translations} 
        />

        {/* Interactive Inquiry Form & Live Cost Calculator */}
        <InquiryForm 
          lang={lang} 
          translations={translations} 
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        translations={translations} 
      />

      {/* Global Floating WhatsApp Contact Action */}
      <FloatingWhatsApp lang={lang} />

      {/* Interactive Mobile Live Demo Modal */}
      {activeDemoDesign && (
        <DemoModal 
          design={activeDemoDesign} 
          onClose={handleCloseDemo} 
          lang={lang}
        />
      )}
    </div>
  );
}
