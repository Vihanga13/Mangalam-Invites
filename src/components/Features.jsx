import React from 'react';
import { 
  Clock, 
  UserCheck, 
  Calendar, 
  MapPin, 
  Image, 
  Music, 
  Share2, 
  Languages, 
  Zap 
} from 'lucide-react';

export default function Features({ lang = 'en', translations }) {
  const t = translations[lang].features;

  const featureList = [
    {
      icon: Clock,
      color: 'bg-neo-yellow',
      title: lang === 'si' ? 'මංගල දින ගණක ඔරලෝසුව' : 'Live Wedding Countdown',
      desc: lang === 'si' 
        ? 'මංගල දිනයට සහ පෝරුවේ සුබ නැකතට ඉතිරි දින, පැය, මිනිත්තු ගණනය කෙරෙන සජීවී ඔරලෝසුව.'
        : 'Real-time countdown timer ticking down to your exact Poruwa auspicious Nakath or Church ceremony.'
    },
    {
      icon: UserCheck,
      color: 'bg-neo-mint',
      title: lang === 'si' ? 'ඩිජිටල් RSVP කළමනාකරණය' : 'Interactive RSVP Tracking',
      desc: lang === 'si'
        ? 'අමුත්තන්ට WhatsApp හෝ ෆෝරමය මඟින් පැමිණීම සහ සහභාගී වන සංඛ්‍යාව ක්ෂණිකව තහවුරු කළ හැක.'
        : 'Guests confirm attendance, headcounts, and dietary preferences directly with 1-tap.'
    },
    {
      icon: Calendar,
      color: 'bg-neo-pink',
      title: lang === 'si' ? 'දින දර්ශනයට එක් කිරීම' : 'One-Tap Add to Calendar',
      desc: lang === 'si'
        ? 'Google Calendar, Apple iCal, හෝ Outlook දින දර්ශන වලට ස්වයංක්‍රීය මතක් කිරීම් එක් කළ හැක.'
        : 'Allows busy family and friends to sync ceremony & reception reminders directly into their phone calendar.'
    },
    {
      icon: MapPin,
      color: 'bg-neo-lavender',
      title: lang === 'si' ? 'Google Maps මඟපෙන්වීම' : 'Direct Google Maps GPS',
      desc: lang === 'si'
        ? 'හෝටලය හෝ දේවස්ථානය සොයාගැනීමට නොහැකිව අතරමං නොවී ඍජු GPS මඟපෙන්වීම ලබාදෙයි.'
        : 'Pinpointed Google Maps directions so guests navigate straight to the hall entrance without getting lost.'
    },
    {
      icon: Image,
      color: 'bg-neo-sky',
      title: lang === 'si' ? 'HD ඡායාරූප ගැලරිය' : 'HD Photo Gallery & Reels',
      desc: lang === 'si'
        ? 'ඔබේ Pre-shoot සහ Engagement ඡායාරූප මනරම් සේයාපටක් මෙන් අමුත්තන්ට නැරඹිය හැක.'
        : 'Showcase your engagement photoshoot, love story memories, and wedding attire color palette.'
    },
    {
      icon: Music,
      color: 'bg-neo-orange',
      title: lang === 'si' ? 'පසුබිම් මනරම් සංගීතය' : 'Romantic Background Music',
      desc: lang === 'si'
        ? 'වෙබ් අඩවිය විවෘත වනවිට වාදනය වන ඔබේ ප්‍රියතම සංගීත ඛණ්ඩය හෝ මංගල ගීතය.'
        : 'Autoplay romantic instrumental, acoustic violin, or traditional Sri Lankan auspicious flute melody.'
    },
    {
      icon: Share2,
      color: 'bg-neo-mint',
      title: lang === 'si' ? 'WhatsApp 1-ක්ලික් බෙදාගැනීම' : 'One-Tap WhatsApp Share',
      desc: lang === 'si'
        ? 'තත්පරයකින් ඔබේ මංගල ආරාධනය WhatsApp කණ්ඩායම් සහ මිතුරන් වෙත යැවීමේ පහසුව.'
        : 'Built-in quick share button with custom pre-written greeting cards ready to broadcast.'
    },
    {
      icon: Languages,
      color: 'bg-neo-yellow',
      title: lang === 'si' ? 'ත්‍රිභාෂා සහයෝගය (Trilingual)' : 'Trilingual (Sinhala / Tamil / English)',
      desc: lang === 'si'
        ? 'සිංහල හෝ දෙමළ අක්ෂර වින්‍යාසය නිවැරදිව පෙන්වන අලංකාර අකුරු රටා.'
        : 'Native script rendering for Sinhala, Tamil, and English with authentic cultural typography.'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FFFDF8] border-b-3 border-neo-black relative">
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

        {/* 8 Features Grid in Neo-Brutalism */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="neo-card bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-13 h-13 rounded-2xl ${feat.color} border-2 border-neo-black shadow-neo-sm flex items-center justify-center mb-4 text-neo-black`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="font-serif font-black text-lg text-neo-black">
                    {feat.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-neo-black flex items-center justify-between text-[11px] font-bold">
                  <span className="text-stone-500 uppercase">{lang === 'si' ? 'ස්මාර්ට්ෆෝන්' : 'Mobile Ready'}</span>
                  <span className="neo-badge bg-neo-mint text-neo-black px-2 py-0.5 rounded text-[10px]">Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
