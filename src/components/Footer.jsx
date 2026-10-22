import React from 'react';
import { MessageCircle, Mail, Heart } from 'lucide-react';
import Logo from './Logo';
import { SOCIAL_LINKS, TAGLINE, TAGLINE_SI, getWhatsAppUrl } from '../config/config';

// Native Brand SVGs
const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer({ lang = 'en', translations }) {
  const t = translations[lang].footer;
  const tNav = translations[lang].nav;

  const quickLinks = [
    { href: '#designs', label: tNav.designs },
    { href: '#why-digital', label: tNav.whyDigital },
    { href: '#how-it-works', label: tNav.howItWorks },
    { href: '#features', label: tNav.features },
    { href: '#reviews', label: tNav.reviews },
    { href: '#faq', label: tNav.faq },
    { href: '#calculator', label: lang === 'si' ? 'මිල ගණනය කිරීම' : 'Cost Calculator' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neo-black text-white pt-16 pb-12 border-t-3 border-neo-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b-2 border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="font-serif italic text-neo-yellow text-xl font-bold">
              "{lang === 'si' ? TAGLINE_SI : TAGLINE}"
            </p>

            <p className="text-stone-300 text-sm max-w-sm leading-relaxed font-medium">
              {lang === 'si'
                ? 'ශ්‍රී ලංකාවේ ප්‍රමුඛතම ඩිජිටල් මංගල වෙබ් අඩවි නිර්මාණාගාරය. WhatsApp RSVP, Google Maps, සහ අසමසම සුපිරි මෝස්තර සමඟින්.'
                : 'Sri Lanka’s premier digital wedding invitation studio. Combining auspicious traditions with modern high-impact web design.'}
            </p>

            {/* Social Icons in Neo-Brutalist Badges */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl neo-btn-sm bg-white hover:bg-neo-yellow text-neo-black flex items-center justify-center touch-target"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl neo-btn-sm bg-white hover:bg-neo-pink text-neo-black flex items-center justify-center touch-target"
                aria-label="Instagram @mangalam.invites"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl neo-btn-sm bg-white hover:bg-neo-sky text-neo-black flex items-center justify-center touch-target"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="w-11 h-11 rounded-xl neo-btn-sm bg-white hover:bg-neo-mint text-neo-black flex items-center justify-center touch-target"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="neo-badge bg-neo-yellow text-neo-black text-xs px-2.5 py-1 rounded inline-block">
              {t.quickLinks}
            </span>
            <ul className="space-y-2 text-sm text-stone-300 font-bold">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-neo-yellow transition-colors inline-block py-1 touch-target"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3">
            <span className="neo-badge bg-neo-mint text-neo-black text-xs px-2.5 py-1 rounded inline-block">
              {t.contactUs}
            </span>
            <div className="space-y-2 text-sm text-stone-200 font-bold">
              <p className="flex items-center gap-2">
                <MessageCircle size={16} className="text-emerald-400 shrink-0" />
                <span>WhatsApp: {SOCIAL_LINKS.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon size={16} className="text-rose-400 shrink-0" />
                <span>Instagram: {SOCIAL_LINKS.instagramHandle}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-neo-yellow shrink-0" />
                <span>Email: {SOCIAL_LINKS.email}</span>
              </p>
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppUrl("Hi Mangalam Invites! I'd like to talk to a designer about our wedding invitations.")}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black font-black text-xs px-5 py-3 rounded-xl inline-flex items-center gap-2 touch-target"
              >
                <MessageCircle size={15} />
                <span>{lang === 'si' ? 'WhatsApp මඟින් කතාබස් කරන්න' : 'Chat With A Designer'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Local SEO Service Areas in Sri Lanka & Overseas */}
        <div className="py-6 border-b border-stone-800 text-center sm:text-left text-[11px] text-stone-400 font-medium">
          <p>
            <strong className="text-neo-yellow">Popular Wedding Services:</strong> Custom Digital Wedding Invitations • Wedding Websites in Sri Lanka • WhatsApp RSVP E-Invites • Poruwa Ceremony Nakath Timelines • Trilingual Sinhala, Tamil & English Invites • Colombo, Kandy, Galle & Destination Weddings.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-bold gap-4 text-center sm:text-left">
          <p>{t.rights}</p>
          <p className="flex items-center gap-1.5">
            <span>Auspicious beginnings, curated in Sri Lanka</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
