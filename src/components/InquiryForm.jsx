import React, { useState, useMemo } from 'react';
import { MessageCircle, Calculator, ShieldCheck, CheckSquare, Square, Zap } from 'lucide-react';
import { DESIGNS } from '../config/designs';
import { PACKAGES, ADDONS } from '../config/pricing';
import { formatLKR, getWhatsAppUrl } from '../config/config';

export default function InquiryForm({ lang = 'en', translations }) {
  const t = translations[lang].calculator;

  // Form State
  const [coupleNames, setCoupleNames] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [venue, setVenue] = useState('');
  const [selectedDesignId, setSelectedDesignId] = useState(DESIGNS[1].id);
  const [selectedPackageId, setSelectedPackageId] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const selectedDesign = useMemo(() => 
    DESIGNS.find(d => d.id === selectedDesignId) || DESIGNS[0],
    [selectedDesignId]
  );

  const selectedPackage = useMemo(() => 
    PACKAGES.find(p => p.id === selectedPackageId) || PACKAGES[1],
    [selectedPackageId]
  );

  // Live Price Calculation in LKR
  const estimatedTotal = useMemo(() => {
    let subtotal = selectedPackage.price;

    let rushSelected = false;
    selectedAddons.forEach(addonId => {
      const addon = ADDONS.find(a => a.id === addonId);
      if (addon) {
        if (addon.isRush) {
          rushSelected = true;
        } else {
          subtotal += addon.calcPrice || 0;
        }
      }
    });

    if (rushSelected) {
      subtotal = Math.round(subtotal * 1.25);
    }

    return subtotal;
  }, [selectedPackage, selectedAddons]);

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!coupleNames.trim()) {
      setFormError(lang === 'si' ? 'කරුණාකර ඔබ දෙපළගේ නම් ඇතුළත් කරන්න.' : 'Please enter the couple names.');
      return;
    }
    setFormError('');

    const addonNames = selectedAddons.map(id => {
      const a = ADDONS.find(item => item.id === id);
      return a ? (lang === 'si' ? a.nameSi : a.name) : id;
    });

    const formattedMessage = [
      `*🌸 New Wedding Website Inquiry - Mangalam Invites 🌸*`,
      ``,
      `*Couple Names:* ${coupleNames.trim()}`,
      `*Wedding Date:* ${weddingDate || 'To be decided'}`,
      `*Venue / Hotel:* ${venue || 'To be confirmed'}`,
      `*Selected Design:* ${selectedDesign.name} (${selectedDesign.priceRange})`,
      `*Package Tier:* ${selectedPackage.name} (${selectedPackage.priceDisplay})`,
      `*Add-ons:* ${addonNames.length > 0 ? addonNames.join(', ') : 'None'}`,
      `*Estimated Total:* ${formatLKR(estimatedTotal)}`,
      message.trim() ? `*Special Notes:* ${message.trim()}` : null,
      ``,
      `_Inquiry generated via Mangalam Invites Instant Planner._`
    ].filter(Boolean).join('\n');

    const whatsappUrl = getWhatsAppUrl(formattedMessage);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#FAF7EE] border-b-3 border-neo-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
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

        {/* The Interactive Form Card in Neo-Brutalism */}
        <div className="mt-12 neo-box-xl bg-white rounded-3xl p-6 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Couple Names */}
            <div>
              <label htmlFor="coupleNames" className="block text-xs font-black uppercase tracking-wider text-neo-black mb-1.5">
                {t.namesLabel} <span className="text-rose-600 font-bold">*</span>
              </label>
              <input
                id="coupleNames"
                type="text"
                required
                value={coupleNames}
                onChange={(e) => setCoupleNames(e.target.value)}
                placeholder={t.namesPlaceholder}
                className="w-full neo-input px-4 py-3.5 rounded-xl text-sm font-bold text-neo-black placeholder:text-stone-400 touch-target"
              />
              {formError && <p className="text-rose-600 font-bold text-xs mt-1.5">{formError}</p>}
            </div>

            {/* Date & Venue in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="weddingDate" className="block text-xs font-black uppercase tracking-wider text-neo-black mb-1.5">
                  {t.dateLabel}
                </label>
                <input
                  id="weddingDate"
                  type="date"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full neo-input px-4 py-3.5 rounded-xl text-sm font-bold text-neo-black touch-target"
                />
              </div>

              <div>
                <label htmlFor="venue" className="block text-xs font-black uppercase tracking-wider text-neo-black mb-1.5">
                  {t.venueLabel}
                </label>
                <input
                  id="venue"
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder={t.venuePlaceholder}
                  className="w-full neo-input px-4 py-3.5 rounded-xl text-sm font-bold text-neo-black placeholder:text-stone-400 touch-target"
                />
              </div>
            </div>

            {/* Design Dropdown (All 15) */}
            <div>
              <label htmlFor="designTheme" className="block text-xs font-black uppercase tracking-wider text-neo-black mb-1.5">
                {t.designLabel}
              </label>
              <select
                id="designTheme"
                value={selectedDesignId}
                onChange={(e) => setSelectedDesignId(e.target.value)}
                className="w-full neo-input px-4 py-3.5 rounded-xl text-sm font-bold text-neo-black touch-target bg-white cursor-pointer"
              >
                {DESIGNS.map(d => (
                  <option key={d.id} value={d.id}>
                    {lang === 'si' ? d.nameSi : d.name} ({d.priceRange})
                  </option>
                ))}
              </select>
            </div>

            {/* Package Selector (3 Chunky Radio Cards) */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-neo-black mb-2">
                {t.packageLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGES.map(pkg => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-4 rounded-xl border-2 border-neo-black cursor-pointer transition-all user-select-none ${
                        isSelected 
                          ? 'bg-neo-yellow shadow-neo translate-x-0.5 translate-y-0.5' 
                          : 'bg-white hover:bg-stone-50 shadow-neo-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-black text-neo-black text-sm">
                          {lang === 'si' ? pkg.nameSi : pkg.name}
                        </span>
                        {pkg.popular && (
                          <span className="neo-badge bg-neo-black text-white text-[9px] px-1.5 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-base font-serif font-black text-neo-black">
                        {pkg.priceDisplay}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Optional Add-ons Checkboxes */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-neo-black mb-2">
                {t.addonsLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border-2 border-neo-black flex items-center justify-between cursor-pointer transition-all touch-target user-select-none ${
                        isChecked 
                          ? 'bg-neo-mint shadow-neo-sm translate-x-0.5 translate-y-0.5 text-neo-black' 
                          : 'bg-white hover:bg-stone-50 shadow-neo-sm text-stone-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isChecked ? (
                          <CheckSquare size={20} className="text-neo-black stroke-[2.5]" />
                        ) : (
                          <Square size={20} className="text-stone-400" />
                        )}
                        <span className="text-xs font-extrabold">
                          {lang === 'si' ? addon.nameSi : addon.name}
                        </span>
                      </div>
                      <span className="neo-badge bg-white text-neo-black text-xs px-2 py-0.5 rounded shrink-0 ml-2">
                        {addon.priceDisplay}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Message */}
            <div>
              <label htmlFor="notes" className="block text-xs font-black uppercase tracking-wider text-neo-black mb-1.5">
                {t.messageLabel}
              </label>
              <textarea
                id="notes"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.messagePlaceholder}
                className="w-full neo-input px-4 py-3 rounded-xl text-sm font-medium text-neo-black placeholder:text-stone-400 resize-none"
              />
            </div>

            {/* Live Estimated Total Box in Neo-Brutalism */}
            <div className="neo-box-lg bg-neo-yellow text-neo-black p-6 sm:p-7 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="neo-badge bg-neo-black text-neo-yellow text-[11px] px-2.5 py-0.5 rounded inline-block mb-1">
                  {t.estimatedTotal}
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-black text-neo-black mt-1">
                  {formatLKR(estimatedTotal)}
                </div>
                <span className="text-xs font-bold text-stone-800 block mt-1">
                  ({selectedPackage.name} + {selectedAddons.length} add-ons • 50% advance to start)
                </span>
              </div>

              {/* Submit CTA with Tactile Depression */}
              <button
                type="submit"
                className="w-full sm:w-auto neo-btn bg-neo-black hover:bg-stone-800 text-white font-black px-8 py-4 rounded-xl text-sm flex items-center justify-center gap-2.5 touch-target"
              >
                <MessageCircle size={20} className="fill-emerald-400 text-neo-black" />
                <span>{t.submitBtn}</span>
              </button>
            </div>

            {/* Privacy Reassurance */}
            <div className="flex items-center justify-center gap-2 text-stone-600 text-xs text-center font-bold pt-2">
              <ShieldCheck size={16} className="text-emerald-700 stroke-[3]" />
              <span>{t.securityNote}</span>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
