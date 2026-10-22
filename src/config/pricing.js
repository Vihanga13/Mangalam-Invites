export const PACKAGES = [
  {
    id: 'basic',
    name: 'Basic',
    nameSi: 'මූලික පැකේජය (Basic)',
    price: 10000,
    priceDisplay: 'LKR 10,000',
    popular: false,
    tagline: 'Ideal for intimate gatherings & simple invites',
    taglineSi: 'සරල මංගල උත්සව සඳහා වඩාත් සුදුසුයි',
    hostingMonths: 6,
    features: [
      'Choose any Minimal or Classic design',
      'Ceremony & reception event details',
      'Interactive Google Maps directions pin',
      'Live wedding countdown timer',
      'One-tap WhatsApp share button',
      'High-speed cloud hosting for 6 months',
      'Mobile & desktop fully responsive'
    ],
    featuresSi: [
      'මිනිමල් හෝ ක්ලැසික් නිර්මාණ අතරින් තෝරාගැනීම',
      'උත්සවයේ සියලු විස්තර සහ වේලාවන්',
      'ගූගල් මැප්ස් (Google Maps) සිතියම් සබැඳිය',
      'මංගල දිනයට දින ගණන් කිරීමේ ඔරලෝසුව',
      'එක් ක්ලික් එකකින් WhatsApp මඟින් බෙදාගැනීම',
      'මාස 6 ක නොමිලේ ක්ලවුඩ් හොස්ටින්',
      'ජංගම දුරකථන සඳහා විශේෂයෙන් සැකසූ පෙනුම'
    ],
    ctaText: 'Choose Basic',
    ctaTextSi: 'මූලික පැකේජය තෝරන්න'
  },
  {
    id: 'standard',
    name: 'Standard',
    nameSi: 'සම්මත පැකේජය (Standard)',
    price: 20000,
    priceDisplay: 'LKR 20,000',
    popular: true,
    badge: 'Most Popular',
    badgeSi: 'වඩාත් ජනප්‍රියයි',
    tagline: 'Our best-selling package for modern couples',
    taglineSi: 'බොහෝ යුවළවල් තෝරාගන්නා සම්පූර්ණ විසඳුම',
    hostingMonths: 12,
    features: [
      'Everything in Basic, plus:',
      'Full HD photo gallery & slideshow',
      'One-tap "Add to Calendar" button (Google/Apple)',
      'Background romantic instrumental music',
      'Personalized guest links (e.g. "Dear Rahul")',
      'Extended cloud hosting for 1 full year',
      'Up to 3 revision rounds'
    ],
    featuresSi: [
      'මූලික පැකේජයේ සියලුම අංග',
      'HD ඡායාරූප ගැලරිය (Photo Gallery)',
      'දින දර්ශනයට එක් කිරීම (Add to Calendar)',
      'පසුබිම් මනරම් සංගීතය (Background Music)',
      'අමුත්තාගේ නමින් පුද්ගලාරෝපිත සබැඳි (Dear Kasun...)',
      'වසරක (මාස 12ක) සම්පූර්ණ හොස්ටින්',
      'සංශෝධන වට 3 ක් දක්වා නොමිලේ'
    ],
    ctaText: 'Choose Standard',
    ctaTextSi: 'සම්මත පැකේජය තෝරන්න'
  },
  {
    id: 'premium',
    name: 'Premium',
    nameSi: 'සුපිරි පැකේජය (Premium)',
    price: 35000,
    priceDisplay: 'LKR 35,000+',
    popular: false,
    badge: 'Luxury Bespoke',
    badgeSi: 'රාජකීය අත්දැකීම',
    tagline: 'The ultimate bespoke royal wedding experience',
    taglineSi: 'සියලුම උසස් පහසුකම් සහිත සුඛෝපභෝගී අත්දැකීම',
    hostingMonths: 12,
    features: [
      'Everything in Standard, plus:',
      'Any Premium / Bespoke design (Ola Leaf, 3D Book, Trilingual)',
      'Full Sinhala & Tamil script language support',
      'Integrated interactive RSVP form & guest manager',
      'Custom web address / branded domain inclusion',
      'Priority VIP delivery & unlimited minor edits',
      'Downloadable PDF wedding invite card copy'
    ],
    featuresSi: [
      'සම්මත පැකේජයේ සියලුම අංග',
      'ඕනෑම Premium නිර්මාණයක් (පුස්කොළ, 3D Book, Trilingual)',
      'සිංහල සහ දෙමළ භාෂා සම්පූර්ණ සහයෝගය',
      'අමුත්තන්ගේ පැමිණීම තහවුරු කිරීමේ RSVP පද්ධතිය',
      'සුවිශේෂී ඩොමේන් නාමයක් (Custom Domain)',
      'ප්‍රමුඛ පෙළේ කඩිනම් සහය සහ සංශෝධන',
      'මුද්‍රණය හෝ ඩිජිටල් බෙදාගැනීමට PDF කාඩ්පතක්'
    ],
    ctaText: 'Choose Premium',
    ctaTextSi: 'සුපිරි පැකේජය තෝරන්න'
  }
];

export const ADDONS = [
  {
    id: 'custom-domain',
    name: 'Custom Domain + Hosting (1 Year)',
    nameSi: 'ස්වකීය ඩොමේන් නාමය (උදා: kasunandsanduni.com)',
    priceDisplay: 'LKR 4,000 – 8,000',
    calcPrice: 5000,
    description: 'A unique web link (e.g. rahulwedsananya.com) with SSL.'
  },
  {
    id: 'rsvp-dashboard',
    name: 'RSVP Management Dashboard',
    nameSi: 'RSVP අමුත්තන් කළමනාකරණ පද්ධතිය',
    priceDisplay: 'LKR 5,000 – 10,000',
    calcPrice: 6000,
    description: 'Track accepted/declined guests and dietary preferences easily.'
  },
  {
    id: 'personalized-links',
    name: 'Personalized Guest Links',
    nameSi: 'අමුත්තාගේ නම සඳහන් පුද්ගලික සබැඳි',
    priceDisplay: 'LKR 3,000 – 5,000',
    calcPrice: 3500,
    description: 'Display individual guest and family names dynamically on opening.'
  },
  {
    id: 'multilingual-extra',
    name: 'Extra Language (Sinhala / Tamil)',
    nameSi: 'අමතර භාෂාව (සිංහල හෝ දෙමළ)',
    priceDisplay: 'LKR 3,000 – 6,000 each',
    calcPrice: 4000,
    description: 'Professional translation & typography in Sinhala or Tamil.'
  },
  {
    id: 'music-animation',
    name: 'Music & Custom Animation Extras',
    nameSi: 'විශේෂ සංගීත සහ සජීවීකරණ (Animations)',
    priceDisplay: 'LKR 2,000 – 4,000',
    calcPrice: 2500,
    description: 'Custom couple songs, falling flower petals, or wax seal breaks.'
  },
  {
    id: 'photo-editing',
    name: 'Photo Editing & Gallery Setup',
    nameSi: 'ඡායාරූප සැකසුම සහ විශේෂ ගැලරිය',
    priceDisplay: 'LKR 2,000 – 5,000',
    calcPrice: 3000,
    description: 'Color-correction and professional cropping for up to 30 photos.'
  },
  {
    id: 'rush-delivery',
    name: 'Rush Delivery (48 Hours)',
    nameSi: 'පැය 48 ක කඩිනම් සේවාව (Rush Delivery)',
    priceDisplay: '+25% surcharge',
    isRush: true,
    percentage: 0.25,
    description: 'Express development with first draft live in under 48 hours.'
  }
];

export const PAYMENT_TERMS = {
  advance: '50% advance to commence design',
  delivery: '50% balance upon final review & approval before live launch',
  note: '50% advance to start, 50% on delivery.',
  noteSi: 'ආරම්භයේදී 50% ක අත්තිකාරම් මුදලක් සහ අවසන් නිර්මාණය තහවුරු කළ පසු ඉතිරි 50% ගෙවිය හැකිය.'
};
