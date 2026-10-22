import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Zap } from 'lucide-react';
import { getWhatsAppUrl } from '../config/config';

export default function FAQ({ lang = 'en', translations }) {
  const t = translations[lang].faq;
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: lang === 'si' ? 'වෙබ් අඩවිය නිර්මාණය කිරීමට කොපමණ කාලයක් ගතවේද?' : 'How long does it take to create our wedding invitation website?',
      a: lang === 'si'
        ? 'ඔබ විස්තර සහ ඡායාරූප අප වෙත ලබාදුන් පසු දින 3ක් ඇතුළත පළමු පූර්ණ කෙටුම්පත (First Draft) ඔබට පරීක්ෂා කිරීමට සූදානම් කෙරේ. හදිසි අවශ්‍යතාවයන් සඳහා පැය 48 ක කඩිනම් සේවාවක් (Rush Delivery) ද ඇත.'
        : 'Once you provide your wedding details and photos via WhatsApp, your private first draft link is ready within 3 business days! If your wedding date is very close, we also offer a 48-Hour Express Rush delivery option.'
    },
    {
      q: lang === 'si' ? 'කෙටුම්පත ලැබුණු පසු වෙනස්කම් (Edits & Revisions) කළ හැකිද?' : 'Can we make edits and revisions to the design?',
      a: lang === 'si'
        ? 'ඔව්, අනිවාර්යයෙන්ම! ඔබේ ආරාධනය 100% පරිපූර්ණ වනතුරු සංශෝධන වට 3ක් සහ වේලාවන්, අකුරු හෝ වචන වල සුළු වෙනස්කම් සඳහා අසීමිත සහයක් ලබාදෙනු ලැබේ.'
        : 'Yes, absolutely! Standard and Premium packages include up to 3 comprehensive revision rounds, plus unlimited minor adjustments to ceremony times, typo fixes, or wording updates before you broadcast it to your guests.'
    },
    {
      q: lang === 'si' ? 'වෙබ් අඩවිය අන්තර්ජාලයේ කොපමණ කාලයක් සක්‍රීයව පවතීද?' : 'How long does the invitation website stay active online?',
      a: lang === 'si'
        ? 'Basic පැකේජය සඳහා මාස 6 ක්ද, Standard සහ Premium පැකේජ සඳහා වසරක් (මාස 12 ක්) පුරාද අඩවිය සක්‍රීයව පවතී. ඉන්පසුවද ඉතා සුළු මුදලකට අවශ්‍ය නම් දිගුකාලීන මතකයක් ලෙස තබාගත හැක.'
        : 'Our Basic package includes 6 months of high-speed cloud hosting, while Standard and Premium packages include 1 full year (12 months) of active hosting. Many couples keep it online as a permanent digital keepsake of their special day.'
    },
    {
      q: lang === 'si' ? 'ගෙවීම් සිදුකරන්නේ කෙසේද (Payment Terms)?' : 'What are the payment terms and payment methods?',
      a: lang === 'si'
        ? 'නිර්මාණ කටයුතු ආරම්භයේදී 50% ක අත්තිකාරමක් සහ, අවසන් කෙටුම්පත ඔබ සම්පූර්ණයෙන් පරීක්ෂා කර සතුටු වූ පසු ඉතිරි 50% ගෙවිය හැක. ලංකාවේ ඕනෑම බැංකුවකින් (Bank Transfer) හෝ Online ගෙවීම් කළ හැක.'
        : 'We operate on a transparent 50/50 model: 50% advance to start designing, and the remaining 50% only after you review and approve the draft before your final launch. We accept Sri Lankan bank transfers and online deposits.'
    },
    {
      q: lang === 'si' ? 'අමුත්තන් මෙම ආරාධනය විවෘත කරන්නේ කෙසේද?' : 'How do guests open and view the invitation?',
      a: lang === 'si'
        ? 'කිසිදු ඇප් එකක් (App) ඩවුන්ලෝඩ් කිරීමට අවශ්‍ය නැත! ඔබ WhatsApp, SMS හෝ Instagram මඟින් යවන ලින්ක් එක මත ක්ලික් කළ සැණින් ඕනෑම Android හෝ iPhone එකක තත්පරයකින් විවෘත වේ.'
        : 'No apps or downloads required whatsoever! Guests simply tap the custom link you share with them on WhatsApp, SMS, or Instagram. It opens instantly on any Android, iPhone, tablet, or laptop browser.'
    },
    {
      q: lang === 'si' ? 'අපේම ඡායාරූප (Pre-shoot photos) ඇතුළත් කළ හැකිද?' : 'Can we use our own engagement and pre-shoot photos?',
      a: lang === 'si'
        ? 'ඔව්, ඔබගේ උසස් තත්වයේ ඡායාරූප WhatsApp හෝ Google Drive මඟින් අප වෙත යොමු කළ හැක. අපගේ කණ්ඩායම විසින් ඒවා අලංකාරව වෙබ් අඩවියට ගැළපෙන පරිදි සකසනු ලබයි.'
        : 'Yes! You can share your high-resolution pre-wedding or engagement photoshoot photos via WhatsApp or a Google Drive link. We color-optimize and format them beautifully for responsive mobile viewing.'
    },
    {
      q: lang === 'si' ? 'තෘප්තිමත්භාවය පිළිබඳ සහතිකය (Satisfaction Guarantee)?' : 'What is your satisfaction guarantee and refund policy?',
      a: lang === 'si'
        ? 'ඔබේ සතුට අපගේ ප්‍රමුඛතාවයයි. පළමු කෙටුම්පත පිළිබඳව ඔබ සෑහීමකට පත් නොවන්නේ නම්, අප ඔබේ අදහස් අනුව එය සම්පූර්ණයෙන් ප්‍රතිනිර්මාණය කර දෙනු ලැබේ.'
        : 'Your peace of mind is our priority. If you are not satisfied with the initial direction, we will work closely with you to adjust the design or revise the theme until it completely matches your dream aesthetic.'
    },
    {
      q: lang === 'si' ? 'සම්පූර්ණ සජීවී ආදර්ශනයක් (Live Interactive Demo) නැරඹිය හැක්කේ කෙසේද?' : 'How can we view a full live interactive demo of a design?',
      a: lang === 'si'
        ? 'අපගේ නිර්මාණ අනවසරයෙන් පිටපත් කිරීම වැලැක්වීමට සහ සේවාදායකයින්ගේ රහස්‍යභාවය රැකගැනීමට, සම්පූර්ණ අන්තර්ක්‍රියාකාරී සජීවී සබැඳි (Live Demos) අප ලබාදෙන්නේ WhatsApp මඟින් විමසන යුවළවල් වලට පමණි. ඔබ කැමති නිර්මාණයේ "පෙරදසුනක් ඉල්ලන්න" බොත්තම ක්ලික් කිරීමෙන් ක්ෂණිකව සජීවී සබැඳියක් ලබාගත හැක.'
        : 'To protect our bespoke designs from competitor copying and respect our couples’ privacy, we do not post open public videos or un-gated clones. Instead, full live interactive demo links are shared directly via WhatsApp! Simply tap "Request Live Demo" on any theme and our studio will message you an instant private preview link.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FFFDF8] border-b-3 border-neo-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
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

        {/* Accordion List in Neo-Brutalism */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="neo-box bg-white rounded-2xl overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-serif font-black text-base sm:text-lg text-neo-black focus:outline-none touch-target"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="neo-badge bg-neo-yellow text-neo-black text-xs px-2.5 py-1 rounded-md font-mono">
                      0{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={22}
                    className={`text-neo-black shrink-0 transition-transform duration-200 stroke-[3] ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-sm text-stone-700 leading-relaxed font-medium border-t-2 border-neo-black bg-[#FAF7EE] animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-12 text-center neo-box bg-neo-yellow/30 p-6 rounded-2xl">
          <p className="text-sm text-neo-black font-extrabold">
            {lang === 'si' ? 'වෙනත් ප්‍රශ්නයක් තිබේද?' : 'Have a question not listed here?'}
          </p>
          <a
            href={getWhatsAppUrl("Hi Mangalam Invites! I have a question about digital wedding websites.")}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-sm bg-neo-yellow text-neo-black font-extrabold px-4 py-2 rounded-xl inline-flex items-center gap-2 mt-3 text-xs sm:text-sm touch-target"
          >
            <MessageCircle size={16} className="fill-emerald-500 text-neo-black" />
            <span>{lang === 'si' ? 'WhatsApp මඟින් අපට පණිවිඩයක් එවන්න →' : 'Chat with us directly on WhatsApp →'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
