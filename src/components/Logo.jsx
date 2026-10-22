import React from 'react';

/**
 * Mangalam Invites Logo Component - Neo-Brutalist Edition
 * Wordmark with black outlines, hard drop-shadows, and auspicious lotus oil lamp emblem.
 */
export default function Logo({ variant = 'dark', size = 'md', className = '' }) {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Auspicious Emblem with Neo-Brutalist badge framing */}
      <div className={`rounded-xl border-2 border-neo-black p-1.5 flex items-center justify-center transition-transform hover:rotate-3 ${
        isLight ? 'bg-neo-gold shadow-neo-sm' : 'bg-neo-yellow shadow-neo-sm'
      }`}>
        <svg 
          viewBox="0 0 48 48" 
          className={`${sizeClasses[size] || 'h-10'} w-auto shrink-0`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Mangalam Invites Auspicious Emblem"
        >
          {/* Base */}
          <path 
            d="M14 36 C14 36 17 39 24 39 C31 39 34 36 34 36 L36 41 H12 L14 36 Z" 
            fill="#F59E0B" 
            stroke="#121212"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <rect x="17" y="41" width="14" height="3" fill="#121212" rx="1" />

          {/* Oil bowl */}
          <path 
            d="M8 29 C8 35 15 37 24 37 C33 37 40 35 40 29 C40 28 39 27 37 27 C30 30 18 30 11 27 C9 27 8 28 8 29 Z" 
            fill="#2D4A3E"
            stroke="#121212"
            strokeWidth="2.5"
          />

          {/* Lotus Petal Flames */}
          <path 
            d="M24 6 C24 6 28 15 28 20 C28 22.5 26.2 24 24 24 C21.8 24 20 22.5 20 20 C20 15 24 6 24 6 Z" 
            fill="#FACC15" 
            stroke="#121212"
            strokeWidth="2.5"
          />
          <path 
            d="M21 21 C16 16 11 20 12 25 C13 28 17 29 22 28 C21.3 26 21 23.5 21 21 Z" 
            fill="#FDE047" 
            stroke="#121212"
            strokeWidth="2"
          />
          <path 
            d="M27 21 C32 16 37 20 36 25 C35 28 31 29 26 28 C26.7 26 27 23.5 27 21 Z" 
            fill="#FDE047" 
            stroke="#121212"
            strokeWidth="2"
          />

          {/* Flame dot */}
          <circle cx="24" cy="14" r="2" fill="#FFFFFF" stroke="#121212" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Typography: "Mangalam" serif + "INVITES" letter-spaced */}
      <div className="flex flex-col justify-center leading-none text-left">
        <span 
          className="font-serif font-extrabold tracking-tight"
          style={{ 
            color: isLight ? '#FFFDF9' : '#121212',
            fontSize: size === 'sm' ? '1.35rem' : size === 'lg' ? '2.1rem' : '1.75rem',
            lineHeight: 1
          }}
        >
          Mangalam
        </span>
        <span 
          className="font-sans font-black uppercase inline-block"
          style={{ 
            fontSize: size === 'sm' ? '0.6rem' : size === 'lg' ? '0.8rem' : '0.7rem',
            letterSpacing: '0.25em',
            marginTop: '3px',
            color: isLight ? '#FDE047' : '#7A1C2C'
          }}
        >
          INVITES
        </span>
      </div>
    </div>
  );
}
