import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  MessageCircle, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  Heart, 
  Share2, 
  Volume2, 
  CheckCircle2,
  ExternalLink,
  Flame,
  Zap
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/config';

export default function Hero({ lang = 'en', translations, onOpenDemo }) {
  const t = translations[lang].hero;

  // Working countdown timer inside the sample invitation
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 20
  });

  const [activeTheme, setActiveTheme] = useState('gold'); // 'gold' | 'botanical' | 'traditional'
  const [sampleRsvpSent, setSampleRsvpSent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { ...prev, days: Math.max(0, prev.days - 1), hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToDesigns = (e) => {
    e.preventDefault();
    const el = document.getElementById('designs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sampleMessages = {
    en: "Hi Mangalam Invites! I love the digital invitation designs and would like to ask about creating one for our upcoming wedding.",
    si: "හෙලෝ මංගලම් ඉන්වයිට්ස්! අපගේ මංගල දිනය වෙනුවෙන් ඩිජිටල් වෙබ් අඩවියක් නිර්මාණය කරගැනීමට අවශ්‍යයි."
  };

  return (
    <section className="relative min-h-screen-dvh pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#FAF7EE] border-b-3 border-neo-black overflow-hidden">
      
      {/* Playful Neo-Brutalist decorative geometric badges in background */}
      <div className="absolute top-24 right-10 hidden lg:block neo-badge bg-neo-yellow text-neo-black px-4 py-2 rounded-xl rotate-6 pointer-events-none select-none z-0">
        💌 100% WhatsApp Ready!
      </div>
      <div className="absolute bottom-16 left-6 hidden lg:block neo-badge bg-neo-pink text-neo-black px-4 py-2 rounded-xl -rotate-3 pointer-events-none select-none z-0">
        🇱🇰 Handcrafted in Sri Lanka
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Tactile CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Sticker Tag */}
            <div className="inline-flex items-center gap-2 neo-badge bg-neo-mint text-neo-black px-4 py-1.5 rounded-full text-xs sm:text-sm">
              <Zap size={15} className="fill-neo-black" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-neo-black leading-[1.12] tracking-tight">
              {t.titlePrimary} <br className="hidden sm:inline" />
              <span className="inline-block bg-neo-yellow px-3 py-0.5 border-2 border-neo-black rounded-lg shadow-neo-sm transform -rotate-1 text-neo-maroon mt-1">
                {t.titleSecondary}
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-stone-800 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              {t.subtitle}
            </p>

            {/* Tactile CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#designs"
                onClick={scrollToDesigns}
                className="w-full sm:w-auto neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-2 touch-target"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowDown size={18} />
              </a>

              <a
                href={getWhatsAppUrl(sampleMessages[lang])}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto neo-btn bg-white hover:bg-neo-pink text-neo-black font-extrabold text-sm sm:text-base px-7 py-4 rounded-2xl flex items-center justify-center gap-2.5 touch-target"
              >
                <MessageCircle size={19} className="fill-emerald-500 text-neo-black" />
                <span>{t.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Metrics Pill Bar in Neo-Brutalism */}
            <div className="pt-6 grid grid-cols-3 gap-3 text-center">
              <div className="neo-box bg-white p-3 rounded-2xl">
                <div className="text-xl sm:text-2xl font-black font-serif text-neo-maroon">{t.stat1}</div>
                <div className="text-[11px] font-bold text-stone-600 uppercase mt-0.5">{t.stat1Sub}</div>
              </div>
              <div className="neo-box bg-neo-yellow/40 p-3 rounded-2xl">
                <div className="text-xl sm:text-2xl font-black font-serif text-neo-black">{t.stat2}</div>
                <div className="text-[11px] font-bold text-stone-600 uppercase mt-0.5">{t.stat2Sub}</div>
              </div>
              <div className="neo-box bg-neo-mint/50 p-3 rounded-2xl">
                <div className="text-xl sm:text-2xl font-black font-serif text-neo-sage">{t.stat3}</div>
                <div className="text-[11px] font-bold text-stone-600 uppercase mt-0.5">{t.stat3Sub}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Neo-Brutalist Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Phone Theme Switcher Pills */}
            <div className="mb-3.5 flex items-center gap-2 neo-box bg-white p-1.5 rounded-2xl shadow-neo-sm">
              <button
                type="button"
                onClick={() => setActiveTheme('gold')}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase transition-all touch-target ${
                  activeTheme === 'gold' 
                    ? 'bg-neo-yellow text-neo-black border-2 border-neo-black shadow-neo-sm' 
                    : 'text-stone-700 hover:text-neo-black'
                }`}
              >
                Royal Gold
              </button>
              <button
                type="button"
                onClick={() => setActiveTheme('botanical')}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase transition-all touch-target ${
                  activeTheme === 'botanical' 
                    ? 'bg-neo-mint text-neo-black border-2 border-neo-black shadow-neo-sm' 
                    : 'text-stone-700 hover:text-neo-black'
                }`}
              >
                Botanical
              </button>
              <button
                type="button"
                onClick={() => setActiveTheme('traditional')}
                className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase transition-all touch-target ${
                  activeTheme === 'traditional' 
                    ? 'bg-neo-pink text-neo-black border-2 border-neo-black shadow-neo-sm' 
                    : 'text-stone-700 hover:text-neo-black'
                }`}
              >
                සාම්ප්‍රදායික
              </button>
            </div>

            {/* The Phone Container with Hard Shadow */}
            <div className="relative w-full max-w-[320px] sm:max-w-[335px]">
              
              <div className="phone-mockup-neo aspect-[9/18.5] flex flex-col bg-white">
                
                {/* Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-28 bg-neo-black rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-10 h-1.5 bg-stone-500 rounded-full" />
                </div>

                {/* Simulated Screen Content with Scroll */}
                <div className={`flex-1 overflow-y-auto pt-7 pb-6 px-4 text-center select-none ${
                  activeTheme === 'gold' 
                    ? 'bg-[#FFFDF9]' 
                    : activeTheme === 'botanical'
                    ? 'bg-[#F2FBF6]'
                    : 'bg-[#FFF9EA]'
                }`}>
                  
                  {/* Watermark security label */}
                  <div className="text-[7.5px] font-mono font-black uppercase tracking-widest text-stone-400 select-none mb-1">
                    MANGALAM • DEMO PREVIEW
                  </div>

                  {/* Auspicious Sri Lankan Banner */}
                  <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-neo-black bg-neo-yellow text-[10px] font-bold text-neo-black shadow-neo-sm">
                    <Heart size={11} className="fill-neo-maroon text-neo-maroon" />
                    <span>{activeTheme === 'traditional' ? 'සුභ මංගලම්' : 'Save Our Date'}</span>
                  </div>

                  {/* Couple Names */}
                  <h2 className="mt-2 text-2xl font-serif font-black text-neo-black tracking-tight leading-tight">
                    {activeTheme === 'traditional' ? (
                      <>
                        කසුන් <br />
                        <span className="font-script text-3xl font-normal text-neo-maroon">&</span> <br />
                        සඳුනි
                      </>
                    ) : (
                      <>
                        Rahul <br />
                        <span className="font-script text-3xl font-normal text-neo-maroon">&</span> <br />
                        Ananya
                      </>
                    )}
                  </h2>

                  <p className="mt-1 text-[11px] text-stone-600 font-medium italic">
                    {activeTheme === 'traditional'
                      ? 'අපගේ විවාහ මංගලෝත්සවය සඳහා සාදරයෙන් ඇරයුම් කරමු'
                      : 'Request the pleasure of your auspicious company'}
                  </p>

                  {/* Auspicious Date Box with 2px border */}
                  <div className="my-2.5 p-2 bg-white rounded-xl border-2 border-neo-black shadow-neo-sm">
                    <p className="text-[11px] font-extrabold text-neo-black flex items-center justify-center gap-1.5">
                      <Calendar size={13} className="text-neo-maroon" />
                      <span>Sunday, 14th June 2026</span>
                    </p>
                    <p className="text-[10px] text-stone-600 font-semibold mt-0.5 flex items-center justify-center gap-1">
                      <Clock size={11} className="text-neo-sage" />
                      <span>Poruwa: 09:48 AM • Reception: 11:30 AM</span>
                    </p>
                  </div>

                  {/* Interactive Working Countdown Clock in Neo-Brutalism */}
                  <div className="grid grid-cols-4 gap-1 text-center my-2.5">
                    <div className="bg-neo-yellow text-neo-black border-2 border-neo-black rounded-lg py-1 px-0.5 shadow-neo-sm">
                      <div className="text-xs font-black font-mono">{timeLeft.days}</div>
                      <div className="text-[7.5px] uppercase font-bold">Days</div>
                    </div>
                    <div className="bg-neo-pink text-neo-black border-2 border-neo-black rounded-lg py-1 px-0.5 shadow-neo-sm">
                      <div className="text-xs font-black font-mono">{timeLeft.hours}</div>
                      <div className="text-[7.5px] uppercase font-bold">Hrs</div>
                    </div>
                    <div className="bg-neo-mint text-neo-black border-2 border-neo-black rounded-lg py-1 px-0.5 shadow-neo-sm">
                      <div className="text-xs font-black font-mono">{timeLeft.minutes}</div>
                      <div className="text-[7.5px] uppercase font-bold">Min</div>
                    </div>
                    <div className="bg-white text-neo-black border-2 border-neo-black rounded-lg py-1 px-0.5 shadow-neo-sm">
                      <div className="text-xs font-black font-mono">{timeLeft.seconds}</div>
                      <div className="text-[7.5px] uppercase font-bold">Sec</div>
                    </div>
                  </div>

                  {/* Venue Card */}
                  <div className="bg-white p-2.5 rounded-xl border-2 border-neo-black shadow-neo-sm text-left my-2.5">
                    <div className="flex items-start gap-1.5">
                      <MapPin size={14} className="text-neo-maroon shrink-0 mt-0.5" />
                      <div className="text-[11px]">
                        <p className="font-extrabold text-neo-black">Grand Ballroom, Cinnamon Grand</p>
                        <p className="text-[10px] text-stone-500 font-medium">Galle Road, Colombo 03</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => alert("Simulated: In the live digital invite, this launches 1-tap Google Maps GPS navigation!")}
                      className="mt-2 w-full py-1.5 text-[10px] font-bold text-neo-black bg-neo-yellow hover:bg-[#FFE033] border border-neo-black rounded-lg flex items-center justify-center gap-1 transition-all touch-target"
                    >
                      <ExternalLink size={10} />
                      <span>Open in Google Maps</span>
                    </button>
                  </div>

                  {/* Interactive RSVP Action */}
                  <div className="mt-2.5">
                    {sampleRsvpSent ? (
                      <div className="p-2 bg-neo-mint border-2 border-neo-black rounded-xl text-neo-black text-[11px] font-extrabold flex items-center justify-center gap-1.5 shadow-neo-sm animate-fadeIn">
                        <CheckCircle2 size={14} />
                        <span>RSVP Confirmed via WhatsApp!</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSampleRsvpSent(true)}
                        className="w-full py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white border-2 border-neo-black rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1.5 shadow-neo-sm active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all touch-target"
                      >
                        <MessageCircle size={14} className="fill-white" />
                        <span>Tap to Test RSVP</span>
                      </button>
                    )}
                  </div>

                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="h-4 bg-neo-black flex items-center justify-center">
                  <div className="w-20 h-1 bg-stone-500 rounded-full" />
                </div>

              </div>

              {/* Floating Pill Label with hard shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 neo-badge bg-white text-neo-black px-4 py-1 rounded-full text-[11px] whitespace-nowrap shadow-neo-sm">
                ✨ {t.sampleTag}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
