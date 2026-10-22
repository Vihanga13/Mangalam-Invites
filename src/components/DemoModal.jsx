import React, { useEffect } from 'react';
import { 
  X, 
  MessageCircle, 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle,
  ExternalLink,
  Smartphone,
  Eye
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/config';

export default function DemoModal({ design, onClose, lang = 'en' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!design) return null;

  const designName = lang === 'si' ? design.nameSi : design.name;
  const description = lang === 'si' ? design.shortDescriptionSi : design.shortDescription;

  // Prefilled WhatsApp message asking for the private live demo link
  const requestDemoMessage = lang === 'si'
    ? `හෙලෝ මංගලම් ඉන්වයිට්ස්! මම "${design.nameSi || design.name}" (${design.priceRange}) නිර්මාණයේ සජීවී ආදර්ශන සබැඳියක් (Private Live Demo Link) WhatsApp මඟින් ලබාගැනීමට කැමතියි.`
    : `Hi Mangalam Invites! Could you please share a private live interactive demo link for the "${design.name}" invitation (${design.priceRange})?`;

  const orderMessage = lang === 'si'
    ? `හෙලෝ මංගලම් ඉන්වයිට්ස්! මම "${design.nameSi || design.name}" (${design.priceRange}) නිර්මාණය මගේ මංගල දිනය සඳහා ඇණවුම් කිරීමට කැමතියි.`
    : `Hi Mangalam Invites! I'm interested in ordering the "${design.name}" (${design.priceRange}) invitation for our wedding.`;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border-3 border-neo-black shadow-neo-xl overflow-hidden z-10 my-auto max-h-[92dvh] flex flex-col">
        
        {/* Top Header Bar with Close Button */}
        <div className="bg-neo-yellow border-b-2.5 border-neo-black px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neo-black text-neo-yellow flex items-center justify-center">
              <Lock size={16} className="stroke-[3]" />
            </div>
            <div>
              <span className="neo-badge bg-white text-neo-black text-[10px] px-2 py-0.5 rounded">
                Private Preview Gate
              </span>
              <h3 className="font-serif font-black text-lg text-neo-black leading-none mt-0.5">
                {lang === 'si' ? 'පෞද්ගලික සජීවී ආදර්ශන ඉල්ලුම' : 'Request Private Live Demo Link'}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl neo-btn-sm bg-white hover:bg-stone-100 text-neo-black flex items-center justify-center touch-target"
            aria-label="Close modal"
          >
            <X size={18} className="stroke-[3]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Security & Design Protection Notice */}
          <div className="neo-box bg-neo-mint/60 p-4 rounded-2xl flex items-start gap-3">
            <ShieldCheck size={24} className="text-neo-black shrink-0 mt-0.5 stroke-[2.5]" />
            <div className="text-xs text-stone-900 leading-relaxed font-medium">
              <p className="font-black text-neo-black text-sm mb-0.5">
                {lang === 'si' ? 'අපගේ නිර්මාණ ආරක්ෂා කිරීමේ ප්‍රතිපත්තිය' : 'Protected Intellectual Property & Privacy'}
              </p>
              <p>
                {lang === 'si'
                  ? 'අපගේ සුවිශේෂී මංගල නිර්මාණ අනවසරයෙන් පිටපත් කිරීම වැලැක්වීමට සහ අපගේ මනාල යුවළවල් වල රහස්‍යභාවය සුරැකීමට, සම්පූර්ණ අන්තර්ක්‍රියාකාරී සජීවී වෙබ් අඩවි සබැඳි (Live Links) WhatsApp මඟින් ඍජුවම ලබාදෙනු ලැබේ.'
                  : 'To prevent competitor plagiarism and safeguard our couples’ private event moments, full interactive invitation website links are delivered privately to genuine couples via WhatsApp.'}
              </p>
            </div>
          </div>

          {/* Design Details Card with Watermarked Teaser */}
          <div className="neo-card bg-[#FAF7EE] p-5 relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none font-mono font-black text-4xl rotate-[-15deg]">
              MANGALAM
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="neo-badge bg-white text-neo-black text-[10px] px-2.5 py-0.5 rounded-md mb-2 inline-block">
                  {design.badge} • {design.category}
                </span>
                <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif font-black text-neo-black">
                  {designName}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] font-black uppercase text-stone-500 block">Pricing:</span>
                <span className="neo-badge bg-neo-yellow text-neo-black text-xs sm:text-sm px-2.5 py-1 rounded-md mt-0.5 inline-block">
                  {design.priceRange}
                </span>
              </div>
            </div>

            {/* Included Highlights */}
            <div className="mt-4 pt-3 border-t-2 border-neo-black/20">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-neo-black mb-2">
                {lang === 'si' ? 'මෙම නිර්මාණයේ විශේෂාංග:' : 'Included In This Theme:'}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-800 font-bold">
                {design.highlights.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="stroke-[3] text-emerald-700 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instructions Box */}
          <div className="bg-white p-4 rounded-2xl border-2 border-stone-200 text-xs text-stone-600 font-medium space-y-1">
            <p className="font-extrabold text-neo-black flex items-center gap-1.5">
              <Smartphone size={15} />
              <span>{lang === 'si' ? 'පෙරදසුන ක්‍රියාත්මක වන්නේ කෙසේද?' : 'How does the private demo work?'}</span>
            </p>
            <p>
              {lang === 'si'
                ? 'පහත බොත්තම ක්ලික් කළ සැණින් අපගේ WhatsApp විවෘත වේ. අපගේ කණ්ඩායම විසින් ඔබට ක්ෂණිකව මෙම නිර්මාණයේ සජීවී ආදර්ශන සබැඳියක් (Live Interactive Demo) යොමු කරනු ඇත.'
                : 'Tap the button below to message our studio on WhatsApp. We will immediately reply with the private demo link so you can test music, RSVP, Google Maps, and animations on your own phone!'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            {/* Primary: Request Private Demo on WhatsApp */}
            <a
              href={getWhatsAppUrl(requestDemoMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 neo-btn bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black py-4 px-5 rounded-2xl flex items-center justify-center gap-2 touch-target text-sm"
            >
              <MessageCircle size={19} className="fill-white" />
              <span>{lang === 'si' ? 'WhatsApp මඟින් සජීවී සබැඳිය ඉල්ලන්න' : 'Get Private Demo Link on WhatsApp'}</span>
            </a>

            {/* Secondary: Direct Order */}
            <a
              href={getWhatsAppUrl(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-neo-yellow hover:bg-[#FFE033] text-neo-black font-black py-4 px-5 rounded-2xl flex items-center justify-center gap-2 touch-target text-sm"
            >
              <span>{lang === 'si' ? 'ඇණවුම් කරන්න' : 'Order This Design'}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
