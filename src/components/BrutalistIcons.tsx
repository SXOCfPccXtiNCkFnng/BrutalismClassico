export const Sparkle = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="currentColor" stroke="var(--brand-black)" strokeWidth="6" strokeLinejoin="round"/>
  </svg>
);

export const CircleSticker = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="45" fill="currentColor" stroke="var(--brand-black)" strokeWidth="6"/>
  </svg>
);

export const AsteriskSticker = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 10L50 90M10 50L90 50M20 20L80 80M20 80L80 20" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
  </svg>
);

export const ZigZag = ({ className = "" }) => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 20L20 5L40 35L60 5L80 35L95 20" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowNeo = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 80L80 20M80 20V70M80 20H30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CrossSticker = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 20L80 80M80 20L20 80" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PillSticker = ({ className = "" }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="5" y="5" width="90" height="40" rx="20" fill="currentColor" stroke="var(--brand-black)" strokeWidth="6"/>
    <line x1="50" y1="5" x2="50" y2="45" stroke="var(--brand-black)" strokeWidth="6"/>
  </svg>
);

export const SpringNeo = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 50C10 20 40 20 40 50C40 80 70 80 70 50C70 20 90 20 90 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

export const SmileNeo = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="45" fill="currentColor" stroke="var(--brand-black)" strokeWidth="6"/>
    <circle cx="35" cy="40" r="5" fill="var(--brand-black)"/>
    <circle cx="65" cy="40" r="5" fill="var(--brand-black)"/>
    <path d="M30 65C40 75 60 75 70 65" stroke="var(--brand-black)" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);
