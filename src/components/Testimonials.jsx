import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart, Zap } from 'lucide-react';

export default function Testimonials({ lang = 'en', translations }) {
  const t = translations[lang].testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      names: lang === 'si' ? 'කසුන් සහ සඳුනි' : 'Kasun & Sanduni',
      location: 'Colombo • Cinnamon Grand',
      theme: 'Classic Scroll Story (Standard Package)',
      rating: 5,
      quote: lang === 'si'
        ? 'සාම්ප්‍රදායික කාඩ්පත් මුද්‍රණය වෙනුවට මේ ක්‍රමය තෝරාගැනීමෙන් අපට රුපියල් 95,000කට වැඩි මුදලක් ඉතිරි වුණා! ඔස්ට්‍රේලියාවේ සහ ලන්ඩනයේ සිටින අපේ නෑදෑයින්ටත් තත්පරයකින් ආරාධනා කළා. හැමෝම පුදුම වුණා.'
        : 'Switching to Mangalam Invites saved us over LKR 95,000 compared to physical gold foil printing. Our relatives living in Melbourne and London RSVPed in seconds, and the background violin music was breathtaking!',
      avatarInitial: 'K&S',
      weddingDate: 'May 2026'
    },
    {
      id: 2,
      names: lang === 'si' ? 'චමත් සහ දිනිති' : 'Chamath & Dinithi',
      location: "Kandy • Earl's Regency",
      theme: 'Ola Leaf Manuscript (Heritage Package)',
      rating: 5,
      quote: lang === 'si'
        ? 'අපේ උඩරට මංගල උත්සවය වෙනුවෙන් තෝරාගත් පුස්කොළ පොත් ආරාධනාව ඇත්තෙන්ම අතිවිශිෂ්ටයි! පෝරුවේ නැකත් වේලාවන් සිංහලෙන් අලංකාරව ඇතුළත් කර තිබුණා. දින 2ක් ඇතුළත පළමු ඩ්‍රාෆ්ට් එක ලැබුණා.'
        : 'The ancient Ola Leaf manuscript design was the crown jewel of our traditional Kandyan wedding. Guests were stunned when opening the digital palm leaves with the Nakath times. Mangalam team delivered the draft in just 2 days!',
      avatarInitial: 'C&D',
      weddingDate: 'August 2026'
    },
    {
      id: 3,
      names: lang === 'si' ? 'දිනේෂ් සහ තිළිණි' : 'Dinesh & Thilini',
      location: 'Galle • Jetwing Lighthouse',
      theme: 'Watercolor Botanical (Standard Package)',
      rating: 5,
      quote: lang === 'si'
        ? 'ගාල්ලේ වෙරළබඩ පැවති අපේ උත්සවයට පැමිණි කිසිම අමුත්තෙක් මඟදී අතරමං වුණේ නැහැ. Google Maps බොත්තම නිසා හැමෝම කෙලින්ම හෝටලයට පැමිණියා. අමුත්තන් 240 කගේ RSVP ඉතා පහසුවෙන් බලාගත්තා.'
        : 'For our destination wedding in Galle, the Google Maps integration was an absolute lifesaver. Zero frantic phone calls from lost guests! Tracking all 240 RSVPs in real-time made our catering arrangements completely stress-free.',
      avatarInitial: 'D&T',
      weddingDate: 'July 2026'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF7EE] border-b-3 border-neo-black relative overflow-hidden">
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

        {/* Testimonial Showcase Box in Neo-Brutalism */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="neo-box-xl bg-white rounded-3xl p-8 sm:p-12 relative">
            
            {/* Top Row: Sticker Tag & Stars */}
            <div className="flex items-center justify-between mb-6">
              <span className="neo-badge bg-neo-pink text-neo-black px-3 py-1 rounded-xl text-xs">
                Verified Couple Review
              </span>

              {/* Star Rating in Neo-Brutalist badges */}
              <div className="flex items-center gap-1 bg-neo-yellow px-2.5 py-1 rounded-lg border-2 border-neo-black shadow-neo-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-neo-black text-neo-black" />
                ))}
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-2xl font-serif font-bold italic text-neo-black leading-relaxed min-h-[100px]">
              "{activeReview.quote}"
            </blockquote>

            {/* Author Footer */}
            <div className="mt-8 pt-6 border-t-2 border-neo-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl bg-neo-yellow border-2 border-neo-black shadow-neo-sm text-neo-black font-serif font-black text-lg flex items-center justify-center">
                  {activeReview.avatarInitial}
                </div>
                <div>
                  <h4 className="font-serif font-black text-lg text-neo-black flex items-center gap-1.5">
                    <span>{activeReview.names}</span>
                    <Heart size={15} className="fill-rose-500 text-neo-black" />
                  </h4>
                  <p className="text-xs text-stone-600 font-bold">
                    {activeReview.location} • <span className="text-neo-maroon">{activeReview.theme}</span>
                  </p>
                </div>
              </div>

              {/* Carousel Navigation Buttons with Tactile Depression */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-xl neo-btn bg-white hover:bg-stone-100 text-neo-black flex items-center justify-center touch-target"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={22} className="stroke-[3]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-xl neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black flex items-center justify-center touch-target"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={22} className="stroke-[3]" />
                </button>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full border border-neo-black transition-all touch-target ${
                    idx === currentIndex ? 'w-8 bg-neo-black' : 'w-2.5 bg-stone-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
