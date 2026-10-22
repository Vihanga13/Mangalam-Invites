import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Globe, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { getWhatsAppUrl } from '../config/config';

export default function Navbar({ lang = 'en', setLang, translations }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { href: '#designs', label: t.designs },
    { href: '#why-digital', label: t.whyDigital },
    { href: '#how-it-works', label: t.howItWorks },
    { href: '#features', label: t.features },
    { href: '#reviews', label: t.reviews },
    { href: '#faq', label: t.faq },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'si' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFFDF8] border-b-2.5 border-neo-black shadow-neo-sm py-3 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="focus:outline-none rounded-lg focus:ring-2 focus:ring-neo-black"
            aria-label="Mangalam Invites Home"
          >
            <Logo size="sm" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wider text-neo-black hover:bg-neo-yellow/70 hover:border-2 hover:border-neo-black transition-all touch-target"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="neo-btn-sm bg-white hover:bg-neo-lavender text-neo-black font-bold text-xs px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 touch-target"
              title={lang === 'en' ? 'Switch to Sinhala (සිංහල)' : 'Switch to English'}
              aria-label="Switch Language"
            >
              <Globe size={14} className="text-neo-black" />
              <span>{lang === 'en' ? 'සිංහල' : 'English'}</span>
            </button>

            {/* WhatsApp CTA with Tactile Press */}
            <a
              href={getWhatsAppUrl(
                lang === 'si'
                  ? "හෙලෝ මංගලම් ඉන්වයිට්ස්! මට මංගල වෙබ් අඩවි නිර්මාණයක් පිළිබඳ විස්තර දැනගැනීමට අවශ්‍යයි."
                  : "Hi Mangalam Invites! I'd like to inquire about creating a digital wedding website."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 touch-target"
            >
              <MessageCircle size={17} className="fill-emerald-500 text-neo-black" />
              <span>{t.inquire}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="neo-btn-sm bg-neo-lavender text-neo-black px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 touch-target"
              aria-label="Toggle language"
            >
              <Globe size={13} />
              <span>{lang === 'en' ? 'සිං' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="neo-btn-sm bg-white p-2 rounded-xl text-neo-black touch-target inline-flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF8] border-t-2 border-neo-black shadow-neo px-4 pt-3 pb-6 mt-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-neo-black hover:bg-neo-yellow rounded-xl border border-transparent hover:border-neo-black transition-all touch-target"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t-2 border-neo-black mt-2">
              <a
                href={getWhatsAppUrl(
                  lang === 'si'
                    ? "හෙලෝ මංගලම් ඉන්වයිට්ස්! මට මංගල වෙබ් අඩවි පිළිබඳ විස්තර දැනගැනීමට අවශ්‍යයි."
                    : "Hi Mangalam Invites! I'd like to inquire about creating a digital wedding website."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full neo-btn bg-neo-yellow text-neo-black font-extrabold text-center px-4 py-3 rounded-xl flex items-center justify-center gap-2 touch-target"
              >
                <MessageCircle size={18} className="fill-emerald-500 text-neo-black" />
                <span>{t.inquire}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
