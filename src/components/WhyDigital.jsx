import React from 'react';
import { Wallet, Send, UserCheck, MapPin, Check, X, Sparkles, Zap } from 'lucide-react';

export default function WhyDigital({ lang = 'en', translations }) {
  const t = translations[lang].whyDigital;

  const iconMap = {
    Wallet: Wallet,
    Send: Send,
    UserCheck: UserCheck,
    MapPin: MapPin,
  };

  const cardColors = [
    { bg: 'bg-neo-yellow', iconBg: 'bg-neo-black text-neo-yellow' },
    { bg: 'bg-neo-mint', iconBg: 'bg-neo-black text-neo-mint' },
    { bg: 'bg-neo-pink', iconBg: 'bg-neo-black text-neo-pink' },
    { bg: 'bg-neo-lavender', iconBg: 'bg-neo-black text-neo-lavender' },
  ];

  const comparisons = [
    {
      feature: lang === 'si' ? 'මුදල් වැයවීම' : 'Average Cost',
      paper: 'LKR 80,000 – 150,000+',
      digital: 'LKR 8,000 – 35,000',
      winner: 'digital'
    },
    {
      feature: lang === 'si' ? 'බෙදාහැරීමේ කාලය' : 'Delivery Speed',
      paper: lang === 'si' ? 'සති 2–4 ක මුද්‍රණය හා තැපැල්' : '2–4 weeks print & couriers',
      digital: lang === 'si' ? 'WhatsApp මඟින් ක්ෂණිකව' : 'Instant in 1 second via WhatsApp',
      winner: 'digital'
    },
    {
      feature: lang === 'si' ? 'පැමිණීම තහවුරු කිරීම (RSVP)' : 'RSVP Tracking',
      paper: lang === 'si' ? 'දුරකථන ඇමතුම් ලබාදිය යුතුයි' : 'Manual phone calls & guessing',
      digital: lang === 'si' ? 'ඩිජිටල් RSVP තහවුරු කිරීම' : 'Automatic real-time guest count',
      winner: 'digital'
    },
    {
      feature: lang === 'si' ? 'ස්ථානය සොයාගැනීම' : 'Venue Navigation',
      paper: lang === 'si' ? 'අපැහැදිලි සිතියම් සටහන්' : 'Confusing static sketch drawings',
      digital: lang === 'si' ? 'Google Maps ඍජු සබැඳිය' : '1-Tap Google Maps GPS navigation',
      winner: 'digital'
    },
    {
      feature: lang === 'si' ? 'සංශෝධන හා වෙනස්කම්' : 'Last-Minute Updates',
      paper: lang === 'si' ? 'නැවත මුද්‍රණය කළ නොහැක' : 'Impossible once printed',
      digital: lang === 'si' ? 'ඕනෑම වේලාවක වෙනස් කළ හැක' : 'Updated instantly at any time',
      winner: 'digital'
    },
    {
      feature: lang === 'si' ? 'පරිසර හිතකාමී බව' : 'Eco-Friendliness',
      paper: lang === 'si' ? 'කඩදාසි හා ප්ලාස්ටික් නාස්තිය' : 'Wasted paper & plastic covers',
      digital: lang === 'si' ? '100% පරිසර හිතකාමී' : '100% Zero paper waste',
      winner: 'digital'
    }
  ];

  return (
    <section id="why-digital" className="py-20 md:py-28 bg-[#FFFDF8] border-b-3 border-neo-black relative">
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

        {/* 4 Benefit Cards with Color-Blocking and Hard Drop-Shadows */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Wallet;
            const style = cardColors[idx % cardColors.length];

            return (
              <div
                key={idx}
                className={`neo-card ${style.bg} p-7 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Square with Hard Shadow */}
                  <div className={`w-14 h-14 rounded-2xl ${style.iconBg} border-2 border-neo-black shadow-neo-sm flex items-center justify-center mb-6`}>
                    <Icon size={26} />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-serif font-black text-neo-black leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-stone-800 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Bottom decorative sticker */}
                <div className="mt-6 pt-3 border-t-2 border-neo-black flex items-center text-xs font-black uppercase text-neo-black">
                  <span className="mr-1.5">✓</span>
                  <span>{lang === 'si' ? 'විශේෂ වාසියකි' : 'Included in all plans'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Showcase (Paper vs Digital) in Neo-Brutalism */}
        <div className="mt-16 neo-box-lg bg-white rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="neo-badge bg-neo-pink text-neo-black px-3 py-1 rounded-full text-xs inline-block mb-2">
              Cost & Convenience Faceoff
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-neo-black">
              {lang === 'si' ? 'කඩදාසි කාඩ්පත් සහ ඩිජිටල් වෙබ් අඩවි සැසඳීම' : 'Paper Cards vs. Mangalam Digital Invitations'}
            </h3>
            <p className="text-sm text-stone-600 mt-1 font-medium">
              {lang === 'si' ? 'ඔබේ මුදල් සහ වටිනා කාලය ඉතිරි කරගන්නා ආකාරය පැහැදිලිව බලන්න' : 'Clear side-by-side breakdown for Sri Lankan couples'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[550px] border-2 border-neo-black rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-neo-black text-white text-xs sm:text-sm uppercase tracking-wider font-extrabold">
                  <th className="py-3 px-4 border-r border-stone-700">{lang === 'si' ? 'අංගය' : 'Feature'}</th>
                  <th className="py-3 px-4 text-stone-300 border-r border-stone-700">{lang === 'si' ? 'සාම්ප්‍රදායික කඩදාසි' : 'Traditional Paper'}</th>
                  <th className="py-3 px-4 bg-neo-yellow text-neo-black">{lang === 'si' ? 'Mangalam ඩිජිටල් වෙබ් අඩවිය' : 'Mangalam Digital Invite'}</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-neo-black text-sm">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-neo-yellow/10 transition-colors font-medium">
                    <td className="py-3.5 px-4 font-bold text-neo-black border-r-2 border-neo-black bg-stone-50">{item.feature}</td>
                    <td className="py-3.5 px-4 text-stone-600 border-r-2 border-neo-black flex items-center gap-1.5">
                      <X size={16} className="text-rose-600 shrink-0 font-bold" />
                      <span>{item.paper}</span>
                    </td>
                    <td className="py-3.5 px-4 font-extrabold text-neo-black bg-neo-yellow/20">
                      <div className="flex items-center gap-1.5">
                        <Check size={18} className="text-emerald-700 shrink-0 font-black stroke-[3]" />
                        <span>{item.digital}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
