// Brand and contact configuration
export const BRAND_NAME = "Mangalam Invites";
export const TAGLINE = "Auspicious invitations, beautifully digital.";
export const TAGLINE_SI = "මංගල ආරාධනා, ඩිජිටල් අලංකාරයෙන්.";

// Replace with your active business WhatsApp number (include country code without + or leading zeros)
// Example for Sri Lanka: 94771234567
export const WHATSAPP_NUMBER = "94771234567";

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  instagram: "https://instagram.com/mangalam.invites",
  instagramHandle: "@mangalam.invites",
  facebook: "https://facebook.com/mangalaminvites",
  email: "hello@mangalaminvites.com",
  phoneDisplay: "+94 77 123 4567",
};

/**
 * Builds a WhatsApp wa.me direct link with prefilled text
 * @param {string} message 
 * @returns {string} wa.me URL
 */
export function getWhatsAppUrl(message = "") {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!message) return `https://wa.me/${cleanNumber}`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Format currency in Sri Lankan Rupees (LKR)
 * @param {number} amount 
 * @returns {string} formatted currency string
 */
export function formatLKR(amount) {
  if (typeof amount !== 'number') return amount;
  return `LKR ${amount.toLocaleString('en-LK')}`;
}
