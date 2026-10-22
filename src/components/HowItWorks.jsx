import React from 'react';
import { Palette, MessageSquare, CheckCircle, Share2, Zap } from 'lucide-react';

export default function HowItWorks({ lang = 'en', translations }) {
  const t = translations[lang].howItWorks;

  const stepIcons = [
    Palette,
    MessageSquare,
    CheckCircle,
    Share2
  ];

  const stepColors = [
    'bg-neo-yellow',
    'bg-neo-mint',
    'bg-neo-pink',
    'bg-neo-lavender',
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FFFDF8] border-b-3 border-neo-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 neo-badge bg-neo-yellow text-neo-black px-4 py-1.5 rounded-full text-xs">
            <Zap size={14} className="fill-neo-black" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-neo-black leading-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid in Neo-Brutalism */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {t.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Palette;
            const cardBg = stepColors[idx % stepColors.length];

            return (
              <div 
                key={idx}
                className="neo-card bg-white p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Sticker Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl ${cardBg} border-2 border-neo-black shadow-neo-sm flex items-center justify-center font-black text-lg text-neo-black`}>
                      <Icon size={24} />
                    </div>
                    <span className="neo-badge bg-neo-black text-white px-3 py-1 rounded-xl text-lg font-black font-mono">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-serif font-black text-neo-black">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-3 text-sm text-stone-700 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Micro reassurance indicator */}
                <div className="mt-6 pt-4 border-t-2 border-neo-black flex items-center text-xs font-black uppercase text-neo-black">
                  {idx === 0 && (lang === 'si' ? '⚡ 15+ විලාසිතා ඇත' : '⚡ 15+ Bespoke Styles')}
                  {idx === 1 && (lang === 'si' ? '💬 ක්ෂණික ප්‍රතිචාර' : '💬 Instant WhatsApp Reply')}
                  {idx === 2 && (lang === 'si' ? '✍️ අසීමිත සුළු සංශෝධන' : '✍️ Unlimited Minor Edits')}
                  {idx === 3 && (lang === 'si' ? '🚀 ලොව ඕනෑම තැනකට' : '🚀 Send Worldwide 1-Click')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner in Neo-Brutalist Box */}
        <div className="mt-14 max-w-3xl mx-auto neo-box-lg bg-neo-yellow text-neo-black rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <span className="neo-badge bg-neo-black text-white px-2.5 py-0.5 rounded text-[11px] inline-block mb-1">
              Express Option
            </span>
            <h4 className="font-serif text-xl font-black">
              {lang === 'si' ? 'මංගල දිනය ඉතා ආසන්නද?' : 'Wedding coming up soon?'}
            </h4>
            <p className="text-xs sm:text-sm font-medium text-stone-800">
              {lang === 'si' 
                ? 'පැය 48 ක කඩිනම් සේවාව (Express Rush Delivery) මඟින් පළමු කෙටුම්පත ලබාගත හැක.'
                : 'Ask for our 48-Hour Rush Delivery to get your invitation live this week.'}
            </p>
          </div>
          <a
            href="#calculator"
            className="neo-btn bg-white hover:bg-stone-50 text-neo-black font-black px-6 py-3.5 rounded-2xl text-xs sm:text-sm whitespace-nowrap touch-target"
          >
            {lang === 'si' ? 'මිල ගණනය කරන්න' : 'Calculate Custom Price'}
          </a>
        </div>

      </div>
    </section>
  );
}
