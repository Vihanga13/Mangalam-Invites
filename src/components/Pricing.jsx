import React from 'react';
import { Sparkles, Check, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { PACKAGES, ADDONS, PAYMENT_TERMS } from '../config/pricing';
import { getWhatsAppUrl } from '../config/config';

export default function Pricing({ lang = 'en', translations }) {
  const t = translations[lang].pricing;

  const getPackageOrderLink = (pkg) => {
    const pkgName = lang === 'si' ? pkg.nameSi : pkg.name;
    const msg = lang === 'si'
      ? `හෙලෝ මංගලම් ඉන්වයිට්ස්! මම "${pkgName}" (${pkg.priceDisplay}) පැකේජය තෝරාගැනීමට කැමතියි.`
      : `Hi Mangalam Invites, I'm interested in ordering the "${pkg.name}" (${pkg.priceDisplay}) package for our wedding.`;
    return getWhatsAppUrl(msg);
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF7EE] border-b-3 border-neo-black relative">
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

        {/* 3 Packages Cards in Neo-Brutalism */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            const pkgName = lang === 'si' ? pkg.nameSi : pkg.name;
            const tagline = lang === 'si' ? pkg.taglineSi : pkg.tagline;
            const features = lang === 'si' ? pkg.featuresSi : pkg.features;
            const ctaText = lang === 'si' ? pkg.ctaTextSi : pkg.ctaText;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'neo-card bg-neo-yellow border-3 border-neo-black shadow-neo-xl lg:-translate-y-3 z-10'
                    : 'neo-card bg-white border-2.5 border-neo-black shadow-neo'
                }`}
              >
                {/* Popular Sticker Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 neo-badge bg-neo-black text-neo-yellow text-xs font-black py-1.5 px-4 rounded-full shadow-neo-sm">
                    ★ {lang === 'si' ? pkg.badgeSi : pkg.badge}
                  </div>
                )}

                {/* Package Head */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-black text-neo-black">
                      {pkgName}
                    </h3>
                    <span className="neo-badge bg-white text-neo-black text-[10px] px-2.5 py-1 rounded-md">
                      {pkg.hostingMonths} {lang === 'si' ? 'මසක් හොස්ටින්' : 'mo hosting'}
                    </span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-stone-700 font-medium min-h-[36px]">
                    {tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 mb-6 pb-6 border-b-2 border-neo-black">
                    <span className="text-3xl sm:text-4xl font-serif font-black text-neo-black">
                      {pkg.priceDisplay}
                    </span>
                    <span className="text-xs text-stone-600 block mt-1 font-bold uppercase">
                      {lang === 'si' ? 'එක්වරක් පමණක් ගෙවීම් (One-time fee)' : 'One-time all-inclusive fee'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 text-xs sm:text-sm text-stone-800 font-medium">
                    {features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-md bg-neo-black text-neo-yellow flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          <Check size={13} className="stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tactile CTA Button */}
                <div className="mt-8 pt-4">
                  <a
                    href={getPackageOrderLink(pkg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 touch-target ${
                      isPopular
                        ? 'neo-btn bg-neo-black hover:bg-stone-800 text-white'
                        : 'neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black'
                    }`}
                  >
                    <MessageCircle size={17} className={isPopular ? 'fill-emerald-400 text-neo-black' : 'fill-emerald-500 text-neo-black'} />
                    <span>{ctaText}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Add-ons List */}
        <div className="mt-20 neo-box-lg bg-white rounded-3xl p-7 sm:p-10">
          <div className="max-w-2xl">
            <span className="neo-badge bg-neo-mint text-neo-black px-3 py-1 rounded-full text-xs inline-block mb-2">
              Custom Upgrades
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-neo-black">
              {t.addonsTitle}
            </h3>
            <p className="mt-1 text-sm text-stone-600 font-medium">
              {t.addonsSubtitle}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="p-5 rounded-2xl bg-[#FAF7EE] border-2 border-neo-black shadow-neo-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-extrabold text-neo-black text-sm">
                    {lang === 'si' ? addon.nameSi : addon.name}
                  </h4>
                  <p className="text-xs text-stone-600 font-medium mt-1.5 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-2 border-neo-black/20 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-500 uppercase">Fee:</span>
                  <span className="neo-badge bg-neo-yellow text-neo-black text-xs px-2 py-0.5 rounded">
                    {addon.priceDisplay}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Terms Note */}
          <div className="mt-8 pt-6 border-t-2 border-neo-black flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-neo-mint border-2 border-neo-black shadow-neo-sm text-neo-black flex items-center justify-center shrink-0">
                <ShieldCheck size={22} className="stroke-[2.5]" />
              </div>
              <div>
                <p className="text-xs font-black uppercase text-stone-500 tracking-wider">
                  {t.termsTitle}
                </p>
                <p className="text-sm font-extrabold text-neo-black mt-0.5">
                  {lang === 'si' ? PAYMENT_TERMS.noteSi : PAYMENT_TERMS.note}
                </p>
              </div>
            </div>

            <a
              href="#calculator"
              className="neo-btn-sm bg-neo-yellow hover:bg-[#FFE033] text-neo-black font-extrabold text-xs px-4 py-2.5 rounded-xl touch-target"
            >
              {lang === 'si' ? 'මිල ගණනය කරන්න (Cost Calculator) →' : 'Calculate Exact Cost With Add-ons →'}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
