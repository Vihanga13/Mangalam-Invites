import React, { useState } from 'react';
import { Eye, MessageCircle, Check, Zap, Lock, ShieldCheck } from 'lucide-react';
import { CATEGORIES, DESIGNS } from '../config/designs';
import { getWhatsAppUrl } from '../config/config';

export default function DesignGallery({ lang = 'en', translations, onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = translations[lang].gallery;

  const filteredDesigns = selectedCategory === 'all'
    ? DESIGNS
    : DESIGNS.filter(d => d.category === selectedCategory);

  const getInquireLink = (design) => {
    const text = lang === 'si'
      ? `හෙලෝ මංගලම් ඉන්වයිට්ස්! මම "${design.nameSi || design.name}" (${design.priceRange}) නිර්මාණය ගැන විස්තර දැනගැනීමට කැමතියි.`
      : `Hi Mangalam Invites, I'm interested in the "${design.name}" invitation (${design.priceRange}). Could you please share more details?`;
    return getWhatsAppUrl(text);
  };

  return (
    <section id="designs" className="py-20 md:py-28 bg-[#FAF7EE] border-b-3 border-neo-black relative">
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

          {/* Anti-Copying Privacy & Protection Notice */}
          <div className="inline-flex items-center gap-2 neo-box-sm bg-neo-mint/80 text-neo-black px-4 py-2 rounded-xl text-xs font-bold max-w-xl mx-auto mt-2">
            <ShieldCheck size={16} className="text-neo-black shrink-0 stroke-[2.5]" />
            <span>{t.protectedNotice}</span>
          </div>
        </div>

        {/* Filter Category Pills with Tactile Depression */}
        <div className="mt-10 flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none px-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold uppercase whitespace-nowrap transition-all touch-target ${
                  isSelected
                    ? 'bg-neo-yellow text-neo-black border-2 border-neo-black shadow-neo-sm translate-x-0.5 translate-y-0.5'
                    : 'bg-white hover:bg-stone-100 text-stone-800 border-2 border-neo-black shadow-neo-sm'
                }`}
              >
                {lang === 'si' ? cat.nameSi : cat.name}
              </button>
            );
          })}
        </div>

        {/* Count Indicator */}
        <div className="mt-4 text-center">
          <span className="neo-badge bg-white text-neo-black px-3 py-1 rounded-lg text-[11px]">
            {lang === 'si' 
              ? `නිර්මාණ ${filteredDesigns.length} ක් ප්‍රදර්ශනය කෙරේ` 
              : `Showing ${filteredDesigns.length} bespoke invitation themes`}
          </span>
        </div>

        {/* Designs Grid with Watermarked Protected Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => {
            const name = lang === 'si' ? design.nameSi : design.name;
            const desc = lang === 'si' ? design.shortDescriptionSi : design.shortDescription;

            return (
              <div
                key={design.id}
                className="group neo-card bg-white flex flex-col overflow-hidden"
              >
                {/* Protected Phone-Frame Teaser Header */}
                <div className={`relative h-60 p-5 bg-gradient-to-br ${design.bgGradient} flex items-center justify-center overflow-hidden border-b-2.5 border-neo-black select-none`}>
                  
                  {/* Category & Badge sticker */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="neo-badge bg-white text-neo-black px-2.5 py-1 rounded-lg text-[10px]">
                      {design.badge}
                    </span>
                  </div>

                  {/* Watermark diagonal seal */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-15 rotate-[-25deg]">
                    <span className="text-xl sm:text-2xl font-black font-mono tracking-widest text-neo-black uppercase border-y-2 border-neo-black py-1">
                      MANGALAM INVITES • PROTECTED
                    </span>
                  </div>

                  {/* Stylized Miniature Phone Preview */}
                  <div className="w-38 h-48 bg-white rounded-2xl border-2.5 border-neo-black shadow-neo flex flex-col overflow-hidden group-hover:scale-105 transition-transform duration-200 relative">
                    
                    {/* Micro Notch */}
                    <div className="h-2 w-12 bg-neo-black self-center rounded-b-md" />

                    {/* Micro Content teaser */}
                    <div className={`flex-1 p-3 flex flex-col items-center justify-center text-center ${
                      design.themeType === 'dark' 
                        ? 'bg-neo-black text-white' 
                        : 'bg-[#FFFDF9] text-neo-black'
                    }`}>
                      <div className="w-2.5 h-2.5 rounded-full bg-neo-gold mb-1 border border-neo-black" />
                      <span className="text-[7.5px] uppercase font-bold opacity-75">Bespoke Invite</span>
                      <p className="text-[11px] font-serif font-black mt-0.5 line-clamp-1">{name}</p>
                      <div className="w-8 h-[2px] bg-neo-gold my-1" />
                      <p className="text-[7px] font-medium opacity-80">Poruwa • Reception • Maps</p>
                      
                      {/* Protected Stamp badge */}
                      <span className="mt-2 text-[6.5px] uppercase font-bold px-1.5 py-0.5 rounded bg-neo-yellow text-neo-black border border-neo-black">
                        Private WhatsApp Demo
                      </span>
                    </div>

                    {/* Micro Bottom bar */}
                    <div className="h-1.5 bg-neo-black" />
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-neo-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 backdrop-blur-[1px] z-30">
                    <button
                      type="button"
                      onClick={() => onOpenDemo(design)}
                      className="neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 touch-target"
                    >
                      <Lock size={13} className="stroke-[2.5]" />
                      <span>{t.liveDemo}</span>
                    </button>
                  </div>

                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Price Range & Category Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-stone-500 uppercase tracking-wider">
                        {design.category}
                      </span>
                      <span className="neo-badge bg-neo-yellow text-neo-black text-xs px-2.5 py-0.5 rounded-md">
                        {design.priceRange}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-serif font-black text-neo-black group-hover:text-neo-maroon transition-colors">
                      {name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                      {desc}
                    </p>

                    {/* Feature tags */}
                    <div className="mt-4 pt-3 border-t-2 border-stone-200 flex flex-wrap gap-1.5">
                      {design.highlights.slice(0, 3).map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10.5px] font-bold text-neo-black bg-stone-100 border border-neo-black px-2 py-0.5 rounded-md"
                        >
                          <Check size={11} className="stroke-[3] text-emerald-700" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons: Gated Demo + Direct WhatsApp Inquire */}
                  <div className="mt-6 pt-4 border-t-2 border-neo-black grid grid-cols-2 gap-2.5">
                    {/* Request Live Demo */}
                    <button
                      type="button"
                      onClick={() => onOpenDemo(design)}
                      className="neo-btn bg-white hover:bg-stone-100 text-neo-black text-xs font-extrabold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 touch-target"
                      title="Request private interactive demo link via WhatsApp"
                    >
                      <Lock size={13} className="stroke-[2.5] text-neo-black" />
                      <span>{t.liveDemo}</span>
                    </button>

                    {/* WhatsApp Inquire */}
                    <a
                      href={getInquireLink(design)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black text-xs font-extrabold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 touch-target"
                    >
                      <MessageCircle size={14} className="fill-emerald-500 text-neo-black" />
                      <span>{t.inquireBtn}</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
