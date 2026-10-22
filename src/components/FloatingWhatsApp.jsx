import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config/config';

export default function FloatingWhatsApp({ lang = 'en' }) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const defaultMsg = lang === 'si'
    ? "හෙලෝ මංගලම් ඉන්වයිට්ස්! මට මංගල වෙබ් අඩවි නිර්මාණයක් පිළිබඳ විස්තර දැනගැනීමට අවශ්‍යයි."
    : "Hi Mangalam Invites! I'm interested in creating a custom digital wedding invitation website.";

  return (
    <aside 
      aria-label="WhatsApp Contact Floating Action"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Tooltip Notification in Neo-Brutalism */}
      {showTooltip && (
        <div 
          role="status"
          aria-live="polite"
          className="mb-3 max-w-xs neo-box bg-white text-neo-black px-4 py-3 rounded-2xl flex items-start gap-2.5 animate-bounce-slight"
        >
          <div className="text-xs leading-relaxed">
            <p className="font-black text-neo-black">
              {lang === 'si' ? 'මංගලම් සේවය අමතන්න' : 'Chat with us on WhatsApp'}
            </p>
            <p className="text-stone-600 font-medium mt-0.5">
              {lang === 'si' 
                ? 'ඔබේ මංගල දිනය සඳහා නොමිලේ උපදෙස් ලබාගන්න.'
                : 'Get instant replies & personalized design recommendations.'}
            </p>
          </div>
          <button 
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-stone-500 hover:text-neo-black p-1 -mr-1 -mt-1 touch-target inline-flex items-center justify-center font-bold"
            aria-label="Close tooltip"
          >
            <X size={16} className="stroke-[3]" />
          </button>
        </div>
      )}

      {/* Main Floating Button with Neo-Brutalist Border & Hard Drop Shadow */}
      <a
        href={getWhatsAppUrl(defaultMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className="neo-btn flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white touch-target focus:outline-none"
        aria-label="Chat directly on WhatsApp with Mangalam Invites"
      >
        <MessageCircle size={28} className="fill-white text-white stroke-none" />

        {/* Online Indicator Badge with border */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-neo-yellow border-2 border-neo-black rounded-full z-20" />
      </a>
    </aside>
  );
}
