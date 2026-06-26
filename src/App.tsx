import { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Sparkle, CircleSticker, AsteriskSticker, ZigZag, ArrowNeo, CrossSticker, PillSticker, SpringNeo, SmileNeo } from './components/BrutalistIcons';

const carouselItems = [
  { id: 1, img: '/imgs/dj.png', color: 'var(--brand-spotify)', backTitle: 'Live Sets', backText: 'Sync your live mixes directly to your profile.' },
  { id: 2, img: '/imgs/guitar.png', color: 'var(--brand-yellow)', backTitle: 'Tour Dates', backText: 'Keep fans updated with your latest shows.' },
  { id: 3, img: '/imgs/headphones.png', color: 'var(--brand-purple)', backTitle: 'Releases', backText: 'Drop your latest tracks in high-fidelity.' },
  { id: 4, img: '/imgs/mic.png', color: '#FF5500', backTitle: 'Podcasts', backText: 'Share your voice with the world seamlessly.' },
  { id: 5, img: '/imgs/studio.png', color: 'var(--brand-green)', backTitle: 'Behind the Scenes', backText: 'Exclusive studio footage for superfans.' },
  { id: 6, img: '/imgs/vinyl.png', color: '#FF0000', backTitle: 'Merch Drops', backText: 'Limited edition vinyls and apparel.' },
  { id: 7, img: '/imgs/wave.png', color: 'var(--brand-black)', backTitle: 'Audio Stems', backText: 'Let fans remix your tracks.' },
  { id: 8, img: '/imgs/crowd.png', color: 'var(--brand-cyan)', backTitle: 'Community', backText: 'Build a loyal fanbase with direct engagement.' },
];

const CarouselCard = ({ item }: { item: typeof carouselItems[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] shrink-0 cursor-pointer perspective-[1000px] mx-2 md:mx-4" 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] rounded-[2.5rem] border-[4px] border-brand-black overflow-hidden group"
          style={{ backgroundColor: item.color, boxShadow: `8px 8px 0 ${item.color}` }}
        >
          {/* Aumentando o scale base para 1.15 para cortar a borda branca gerada na imagem, e no hover para 1.25 */}
          <img src={item.img} className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" alt="Cover" />
          
          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 border-4 border-brand-black rounded-full px-6 py-2 text-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
            style={{ backgroundColor: item.color, boxShadow: `4px 4px 0 var(--brand-black)` }}
          >
             <span className={`font-black uppercase tracking-widest text-xs whitespace-nowrap ${item.color === 'var(--brand-black)' ? 'text-brand-white' : 'text-brand-black'}`}>Click to flip</span>
          </div>
        </div>
        {/* Back */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[3rem] border-4 border-brand-black p-6 md:p-8 flex flex-col justify-center items-center text-center overflow-hidden"
          style={{ backgroundColor: item.color, boxShadow: '8px 8px 0 var(--brand-black)' }}
        >
           <h4 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 ${item.color === 'var(--brand-black)' ? 'text-brand-white' : 'text-brand-black'}`}>{item.backTitle}</h4>
           <p className={`font-bold text-sm md:text-base leading-snug w-full break-words whitespace-normal ${item.color === 'var(--brand-black)' ? 'text-brand-muted' : 'text-brand-black/80'}`}>{item.backText}</p>
        </div>
      </div>
    </div>
  );
}

function useDraggableScroll(direction: 'horizontal' | 'vertical' | 'none' = 'none', autoSpeed = 1) {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startPos = useRef(0);
  const scrollPos = useRef(0);

  useEffect(() => {
    if (direction === 'none' || autoSpeed === 0) return;
    const el = ref.current;
    if (!el) return;
    let animationId: number;

    const scroll = () => {
      if (!isDown.current && el) {
        if (direction === 'horizontal') {
          el.scrollLeft += autoSpeed;
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          }
        } else {
          el.scrollTop += autoSpeed;
          if (el.scrollTop >= el.scrollHeight / 2) {
            el.scrollTop = 0;
          }
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [direction, autoSpeed]);

  const onDragStart = useCallback((pageX: number, pageY: number) => {
    if (!ref.current) return;
    isDown.current = true;
    if (direction === 'horizontal') {
      startPos.current = pageX - ref.current.offsetLeft;
      scrollPos.current = ref.current.scrollLeft;
    } else {
      startPos.current = pageY - ref.current.offsetTop;
      scrollPos.current = ref.current.scrollTop;
    }
  }, [direction]);

  const onDragMove = useCallback((pageX: number, pageY: number) => {
    if (!isDown.current || !ref.current) return;
    if (direction === 'horizontal') {
      const x = pageX - ref.current.offsetLeft;
      const walk = (x - startPos.current) * 2;
      ref.current.scrollLeft = scrollPos.current - walk;
    } else {
      const y = pageY - ref.current.offsetTop;
      const walk = (y - startPos.current) * 2;
      ref.current.scrollTop = scrollPos.current - walk;
    }
  }, [direction]);

  const onDragEnd = useCallback(() => {
    isDown.current = false;
  }, []);

  return { 
    ref, 
    onMouseDown: (e: React.MouseEvent) => onDragStart(e.pageX, e.pageY), 
    onMouseLeave: onDragEnd, 
    onMouseUp: onDragEnd, 
    onMouseMove: (e: React.MouseEvent) => {
      if (isDown.current) e.preventDefault();
      onDragMove(e.pageX, e.pageY);
    },
    onTouchStart: (e: React.TouchEvent) => onDragStart(e.touches[0].pageX, e.touches[0].pageY),
    onTouchEnd: onDragEnd,
    onTouchMove: (e: React.TouchEvent) => onDragMove(e.touches[0].pageX, e.touches[0].pageY)
  };
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const mobileMarqueeProps = useDraggableScroll('horizontal', 1);
  const desktopMarqueeProps = useDraggableScroll('vertical', 1);
  const whiteMarqueeProps = useDraggableScroll('horizontal', 1.5);

  
  return (
    <div className="font-sans selection:bg-brand-black selection:text-brand-green bg-brand-black overflow-x-hidden w-full max-w-[100vw]">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 120s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-vertical {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }
          .animate-marquee-vertical {
            animation: marquee-vertical 20s linear infinite;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <Navbar />

      {/* HERO SECTION - VIBRANT ORANGE */}
      <section className="bg-brand-purple pt-40 pb-20 min-h-[100vh] flex flex-col justify-center overflow-hidden relative border-b-[8px] border-brand-yellow">
        {/* Background Giant Shapes */}
        <CircleSticker className="w-[600px] h-[600px] text-brand-white opacity-10 absolute -top-40 -left-40 z-0 pointer-events-none hidden md:block" />
        <CrossSticker className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] text-brand-yellow opacity-10 absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 rotate-45 z-0 pointer-events-none hidden md:block" />
        
        {/* Medium / Small Scatter */}
        <ZigZag className="w-32 h-16 text-brand-yellow absolute bottom-12 right-12 md:right-32 rotate-12 z-0 hidden lg:block" />
        <SpringNeo className="w-24 h-24 text-brand-green absolute top-32 right-1/4 -rotate-12 z-0 hidden md:block opacity-80" />
        <PillSticker className="w-16 h-8 text-brand-white absolute top-1/2 left-8 md:left-12 rotate-[45deg] z-0 hidden md:block" />
        <Sparkle className="w-8 h-8 text-brand-yellow absolute top-20 left-1/3 animate-spin-slow z-0 hidden md:block" />
        <Sparkle className="w-6 h-6 text-brand-white absolute bottom-40 left-1/4 rotate-45 z-0 hidden md:block" />
        
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          <div className="flex-1 space-y-8 max-w-2xl py-10 px-6 lg:px-8">
            <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black leading-[0.9] tracking-tighter text-brand-gray relative">
              <Sparkle className="w-16 h-16 text-brand-yellow absolute -top-12 -left-6 md:-left-10 rotate-12" />
              One link to drop your next track.
              <AsteriskSticker className="w-12 h-12 text-brand-green absolute -bottom-4 right-0 md:-right-8 -rotate-12" />
            </h1>
            <p className="text-xl font-bold text-brand-muted max-w-lg leading-relaxed">
              Connect your fans to your latest singles, tour dates, merch drops, and Spotify playlists. BeatLink is the ultimate bio hub for modern musicians.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl pt-4">
              <div className="w-full sm:flex-1 flex items-center bg-brand-white rounded-2xl h-16 md:h-20 px-6 border-4 border-brand-black shadow-[8px_8px_0_var(--brand-yellow)] focus-within:-translate-y-1 focus-within:shadow-[12px_12px_0_var(--brand-yellow)] transition-all">
                <span className="font-bold text-brand-muted text-lg md:text-xl">beat.lk/</span>
                <input type="text" placeholder="yourname" className="bg-transparent border-none outline-none w-full font-bold text-brand-black h-full placeholder:text-brand-muted text-lg md:text-xl ml-1" />
              </div>
              <button className="w-full sm:w-auto bg-brand-yellow text-brand-black h-16 md:h-20 px-8 rounded-full font-black text-lg md:text-xl border-4 border-brand-black shadow-[8px_8px_0_var(--brand-black)] hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--brand-black)] transition-all whitespace-nowrap">
                Claim your link
              </button>
            </div>
          </div>
          
          {/* Mobile Horizontal Marquee (Tablet/Mobile) */}
          <div className="w-full relative h-[280px] md:h-[360px] lg:hidden mt-6">
            <div 
              {...mobileMarqueeProps}
              className="flex items-center overflow-x-auto overflow-y-hidden scrollbar-hide touch-pan-x cursor-grab active:cursor-grabbing w-full h-full"
            >
              <div className="flex flex-row w-max h-full">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex flex-row gap-4 md:gap-8 pr-4 md:pr-8 shrink-0">
                    {/* Item 1 - DJ Purple */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-brand-purple rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/dj.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 2 - Guitar Pink/Orange */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-brand-pink rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/guitar.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 3 - Crowd Green */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-brand-green rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/crowd.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 4 - Raw Sound Cyan */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-brand-cyan rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/wave.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 5 - Drop The Mic Red */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-brand-yellow rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/mic.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 6 - Vinyl Yellow */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-[var(--brand-spotify)] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/vinyl.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Marquee Carousel Container (Desktop Original) */}
          <div className="hidden lg:flex flex-1 w-full relative h-full min-h-[800px] justify-end">
            {/* Bleeding wrapper that extends far beyond the section vertically */}
            <div className="absolute top-[-50vh] bottom-[-50vh] w-full max-w-[450px] flex justify-center overflow-visible">
              
              <div 
                {...desktopMarqueeProps}
                className="flex flex-col w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
              >
                <div className="flex flex-col h-max">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex flex-col gap-8 pb-8 shrink-0">
                    {/* Item 1 - DJ Purple */}
                    <div className="w-full aspect-square bg-brand-purple rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/dj.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 2 - Guitar Pink/Orange */}
                    <div className="w-full aspect-square bg-brand-pink rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/guitar.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 3 - Crowd Green */}
                    <div className="w-full aspect-square bg-brand-green rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/crowd.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 4 - Raw Sound Cyan */}
                    <div className="w-full aspect-square bg-brand-cyan rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/wave.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 5 - Drop The Mic Red */}
                    <div className="w-full aspect-square bg-brand-yellow rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/mic.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                    {/* Item 6 - Vinyl Yellow */}
                    <div className="w-full aspect-square bg-[var(--brand-spotify)] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"><img src="/imgs/vinyl.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* CREATE AND CUSTOMIZE - DEEP PURPLE */}
      <section className="bg-brand-darkred py-32 px-6 overflow-hidden border-b-[8px] border-brand-green relative">
        <CircleSticker className="w-20 h-20 text-brand-green absolute top-10 left-10 md:left-20 rotate-12 z-0 hidden md:block" />
        <AsteriskSticker className="w-16 h-16 text-brand-yellow absolute bottom-10 right-10 md:right-32 animate-spin-slow z-0 hidden md:block" />
        
        {/* Variations */}
        <SpringNeo className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] text-brand-purple opacity-20 absolute top-1/2 -left-10 md:-left-20 rotate-[120deg] pointer-events-none hidden md:block" />
        <ArrowNeo className="w-12 h-12 text-brand-pink absolute top-40 right-10 lg:right-1/4 rotate-[-15deg] hidden md:block" />
        <Sparkle className="w-10 h-10 text-brand-white absolute bottom-1/4 left-1/3 animate-spin-slow opacity-50 hidden md:block" />
        
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 relative w-full h-[600px] flex items-center justify-center perspective-1000">
             {/* Brutalist Music Player Mockup */}
             <div className="relative w-full max-w-[500px] h-auto transform rotate-[2deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-700 z-10 perspective-1000 mx-auto">
                <div className="bg-brand-purple border-4 border-brand-black rounded-[2rem] p-6 shadow-[12px_12px_0_var(--brand-green)] flex flex-col gap-6 relative">
                  
                  {/* Top Bar / Branding */}
                  <div className="flex justify-between items-center border-b-4 border-brand-black pb-4">
                    <span className="font-black text-brand-black text-2xl tracking-tighter uppercase leading-none">Beat<br/>Deck<span className="text-brand-green">.</span></span>
                    <div className="flex gap-2">
                       <div className="w-5 h-5 rounded-full border-4 border-brand-black bg-brand-pink"></div>
                       <div className="w-5 h-5 rounded-full border-4 border-brand-black bg-brand-yellow"></div>
                       <div className="w-5 h-5 rounded-full border-4 border-brand-black bg-brand-green"></div>
                    </div>
                  </div>

                  {/* Now Playing Screen */}
                  <div className="bg-brand-black border-4 border-brand-black rounded-xl p-4 flex items-center gap-4 relative overflow-hidden group">
                     {/* Spinning Record */}
                     <div className="w-20 h-20 rounded-full border-4 border-brand-green bg-brand-black flex items-center justify-center animate-[spin_4s_linear_infinite] relative shrink-0">
                        <div className="absolute inset-2 rounded-full border-2 border-gray-800"></div>
                        <div className="w-6 h-6 rounded-full bg-brand-yellow border-2 border-brand-green"></div>
                     </div>
                     <div className="flex-1 overflow-hidden">
                        <span className="text-brand-green font-black text-xs uppercase tracking-widest block mb-1">Now Playing</span>
                        <div className="overflow-hidden whitespace-nowrap w-full relative">
                           <h4 className="text-brand-white font-black text-2xl uppercase tracking-tighter animate-marquee inline-block">
                             NEO-BRUTALIST BEATS — THE ELECTRIC RIOT — RAW SOUND — 
                           </h4>
                        </div>
                        <span className="text-brand-muted font-bold text-sm">Sonic Mutiny</span>
                     </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full flex items-center gap-3">
                    <span className="text-brand-black font-black text-xs">01:24</span>
                    <div className="flex-1 h-6 border-4 border-brand-black rounded-full bg-brand-white relative overflow-hidden shadow-[inset_0_3px_0_rgba(0,0,0,0.1)]">
                       <div className="absolute top-0 left-0 h-full bg-brand-pink w-[45%] border-r-4 border-brand-black"></div>
                    </div>
                    <span className="text-brand-black font-black text-xs">03:42</span>
                  </div>

                  {/* Controls */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-3">
                       <button className="w-14 h-14 bg-brand-white border-4 border-brand-black rounded-xl flex items-center justify-center shadow-[4px_4px_0_var(--brand-black)] hover:translate-y-1 hover:shadow-none transition-all active:bg-brand-surface">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--brand-black)" stroke="var(--brand-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5" strokeWidth="4"></line></svg>
                       </button>
                       <button className="w-16 h-16 bg-brand-green border-4 border-brand-black rounded-xl flex items-center justify-center shadow-[4px_4px_0_var(--brand-black)] hover:translate-y-1 hover:shadow-none transition-all active:bg-[#5CE093]">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--brand-black)" stroke="var(--brand-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                       </button>
                       <button className="w-14 h-14 bg-brand-white border-4 border-brand-black rounded-xl flex items-center justify-center shadow-[4px_4px_0_var(--brand-black)] hover:translate-y-1 hover:shadow-none transition-all active:bg-brand-surface">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--brand-black)" stroke="var(--brand-black)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19" strokeWidth="4"></line></svg>
                       </button>
                    </div>

                    {/* Volume Slider */}
                    <div className="hidden sm:flex w-32 h-14 border-4 border-brand-black bg-brand-white rounded-xl items-center px-3 relative shadow-[4px_4px_0_var(--brand-black)]">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--brand-black)" stroke="var(--brand-black)" strokeWidth="2" className="absolute left-3 z-10"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeWidth="3"></path></svg>
                       <div className="absolute top-1/2 left-10 right-4 -translate-y-1/2 h-3 bg-brand-surface rounded-full overflow-hidden border-2 border-brand-black">
                         <div className="w-[70%] h-full bg-brand-yellow border-r-2 border-brand-black"></div>
                       </div>
                       {/* Knob */}
                       <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-5 h-8 bg-brand-black rounded border-2 border-brand-white cursor-pointer hover:scale-110 transition-transform"></div>
                    </div>
                  </div>

                  {/* Decorative Stickers */}
                  <AsteriskSticker className="w-16 h-16 text-brand-yellow absolute -bottom-6 -left-6 z-20 animate-spin-slow" />
                  <CrossSticker className="w-12 h-12 text-brand-pink absolute -top-6 -right-6 rotate-12 z-20" />
                </div>
             </div>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter relative z-10 flex flex-col">
              <span className="font-thin italic font-serif text-brand-white lowercase">drop your music,</span>
              <span className="text-brand-green uppercase">we handle</span>
              <span className="text-brand-yellow uppercase" style={{ textShadow: '4px 4px 0 var(--brand-black)' }}>the rest.</span>
              <ArrowNeo className="w-20 h-20 text-brand-yellow absolute -bottom-6 -right-10 md:-right-4 rotate-[15deg] hidden md:block" />
            </h2>
            <p className="text-lg font-medium text-brand-muted max-w-lg leading-relaxed opacity-90">
              Your fans want everything in one place. Connect your Spotify, Apple Music, bandsintown, and Shopify store. BeatLink automatically routes them to the right app.
            </p>
            <button className="bg-brand-green text-brand-black px-8 py-4 rounded-full font-black text-lg border-4 border-brand-green hover:bg-transparent hover:text-brand-green transition-colors mt-4 shadow-xl">
              Create your profile
            </button>
          </div>
        </div>
      </section>

      {/* INFINITE CAROUSEL - ARTISTS & PLATFORMS */}
      <section className="bg-brand-white py-32 overflow-hidden border-b-[8px] border-brand-pink">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
          <Sparkle className="w-16 h-16 text-brand-yellow absolute -top-8 right-4 md:right-32 rotate-[45deg]" />
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-brand-black">
            Integrated with over 50 <br/><span className="text-brand-purple">music platforms.</span>
          </h2>
          <AsteriskSticker className="w-12 h-12 text-[var(--brand-spotify)] absolute -bottom-6 left-4 md:left-32 -rotate-[15deg] hidden md:block" />
        </div>
        
        {/* Marquee Track */}
        <div 
          {...whiteMarqueeProps}
          className="relative w-full flex overflow-x-auto overflow-y-hidden py-12 scrollbar-hide cursor-grab active:cursor-grabbing touch-pan-x"
        >
          <div className="flex flex-row whitespace-nowrap min-w-max">
            {/* Duplicating exactly twice for seamless scrollHeight/2 loop calculation */}
            {[...carouselItems, ...carouselItems].map((item, index) => (
              <CarouselCard key={`${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION - BENTO GRID CYAN */}
      <section className="bg-brand-cyan py-32 px-6 border-b-[8px] border-brand-purple relative overflow-hidden">
        <SmileNeo className="w-24 h-24 text-brand-purple absolute bottom-12 left-12 rotate-[-15deg] hidden md:block" />
        <CrossSticker className="w-16 h-16 text-brand-yellow absolute top-20 right-12 rotate-[25deg] hidden lg:block" />
        <AsteriskSticker className="w-10 h-10 text-brand-white absolute bottom-1/3 left-1/4 rotate-180 hidden md:block" />
        <CircleSticker className="w-12 h-12 text-brand-purple absolute top-10 left-1/3 hidden md:block" />
        
        {/* Size Variations */}
        <ZigZag className="w-[250px] h-[100px] md:w-[500px] md:h-[200px] text-brand-green opacity-20 absolute -top-5 md:-top-10 -left-10 md:-left-20 rotate-[-10deg] pointer-events-none hidden md:block" />
        <AsteriskSticker className="w-8 h-8 text-brand-pink absolute top-1/2 right-4 md:right-20 rotate-45 hidden md:block" />
        <PillSticker className="w-[800px] h-[400px] text-brand-white opacity-10 absolute bottom-[-200px] right-[-200px] rotate-[-45deg] pointer-events-none hidden md:block" />
        
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 relative z-10">
          
          <div className="flex-1 grid grid-cols-2 gap-6 auto-rows-[180px] w-full max-w-xl perspective-1000">
            
            {/* Block 1: Big Chart */}
            <div className="col-span-2 rounded-[2.5rem] bg-brand-green text-brand-black p-6 md:p-8 flex flex-col justify-between border-4 border-brand-black shadow-[8px_8px_0_var(--brand-purple)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_var(--brand-purple)] transition-all relative overflow-hidden group z-10">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="block text-5xl md:text-6xl font-black tracking-tighter mb-1">1.2M</span>
                  <span className="font-black tracking-widest uppercase text-xs">Monthly Streams</span>
                </div>
                <div className="bg-brand-black text-brand-white px-4 py-2 rounded-full font-black text-sm border-2 border-transparent">
                  +12%
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-20 group-hover:scale-105 transition-transform duration-700 origin-bottom z-0 opacity-80">
                <svg viewBox="0 0 100 50" className="w-full h-full stroke-current fill-none" strokeWidth="6" stroke="var(--brand-black)" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
                  <path d="M-10,50 L20,25 L40,40 L70,15 L90,30 L110,5" />
                </svg>
              </div>
            </div>
            
            {/* Block 2: Tickets */}
            <div className="col-span-1 rounded-[2.5rem] bg-brand-yellow text-brand-black p-6 md:p-8 flex flex-col justify-center items-center text-center border-4 border-brand-black shadow-[8px_8px_0_var(--brand-black)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_var(--brand-black)] transition-all z-20">
              <span className="text-4xl md:text-5xl font-black tracking-tighter mb-2">15k</span>
              <span className="font-black uppercase tracking-widest text-[10px] md:text-xs">Tickets Sold</span>
            </div>

            {/* Block 3: Merch */}
            <div className="col-span-1 rounded-[2.5rem] bg-brand-purple text-brand-white p-6 md:p-8 flex flex-col justify-center items-center text-center border-4 border-brand-black shadow-[8px_8px_0_var(--brand-spotify)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_var(--brand-spotify)] transition-all z-20">
              <span className="text-3xl md:text-4xl font-black tracking-tighter mb-2">$45k</span>
              <span className="font-black uppercase tracking-widest text-[10px] md:text-xs text-brand-green">Merch Rev</span>
            </div>
            
            {/* Block 4: Bar Chart */}
            <div className="col-span-2 rounded-[2.5rem] bg-brand-white text-brand-black p-6 md:p-8 flex flex-row items-center justify-between border-4 border-brand-black shadow-[8px_8px_0_var(--brand-black)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_var(--brand-black)] transition-all z-10">
              <div className="flex gap-2 md:gap-3 items-end h-16">
                {[40, 70, 40, 90, 60, 100, 30].map((h, i) => (
                  <div key={i} className="w-4 md:w-5 bg-brand-black rounded-t-sm relative group-hover:bg-brand-purple transition-colors" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="text-right flex flex-col justify-center">
                <span className="text-4xl md:text-5xl font-black tracking-tighter mb-1">Top 5%</span>
                <span className="font-bold text-brand-muted uppercase tracking-widest text-[10px]">Spotify Creators</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-brand-black relative z-10 uppercase">
              <SpringNeo className="w-20 h-20 text-[var(--brand-spotify)] absolute -top-12 -left-8 md:-left-12 -z-10 -rotate-12" />
              Know exactly<br/>
              <span className="font-thin italic font-serif lowercase tracking-normal text-brand-black">where your</span><br/>
              <span className="text-brand-purple" style={{ textShadow: '-3px -3px 0 var(--brand-black), 3px -3px 0 var(--brand-black), -3px 3px 0 var(--brand-black), 3px 3px 0 var(--brand-black)' }}>fans are.</span>
            </h2>
            <p className="text-lg font-bold text-brand-muted max-w-lg leading-relaxed">
              Powerful analytics let you track pre-saves, ticket conversions, and merch clicks in real-time. Know what's popping before the label does.
            </p>
            <button className="bg-brand-black text-brand-white px-8 py-4 rounded-full font-black uppercase tracking-widest border-4 border-transparent hover:bg-brand-white hover:text-brand-black hover:border-brand-black transition-all mt-4 shadow-xl">
              View Analytics
            </button>
          </div>
        </div>
      </section>

      {/* SHARE ANYWHERE - PURE BLACK & NEON */}
      <section className="bg-brand-yellow py-32 px-6 overflow-hidden border-b-[8px] border-[var(--brand-spotify)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-[3rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] font-black text-brand-black mb-8 tracking-tighter uppercase relative z-10">
              <CircleSticker className="w-12 h-12 md:w-24 md:h-24 text-brand-white absolute -top-6 -left-2 md:-top-12 md:-left-12 -z-10" />
              Stick it in your bio.<br/>
              <span className="text-brand-yellow lowercase" style={{ textShadow: '-3px -3px 0 var(--brand-black), 3px -3px 0 var(--brand-black), -3px 3px 0 var(--brand-black), 3px 3px 0 var(--brand-black), 0px 3px 0 var(--brand-black), 0px -3px 0 var(--brand-black), 3px 0px 0 var(--brand-black), -3px 0px 0 var(--brand-black)' }}>Go viral </span>
              <span className="font-thin italic font-serif lowercase tracking-normal">everywhere.</span>
              <ZigZag className="w-24 h-12 text-brand-purple absolute bottom-4 -right-12 hidden md:block" />
            </h1>
            <p className="text-xl md:text-2xl text-brand-black font-bold mb-10 max-w-lg leading-snug">
              Add your custom BeatLink to your Instagram, TikTok, and YouTube descriptions. Track real-time analytics on which platform is driving the most streams.
            </p>
            <button className="bg-brand-white text-brand-black px-8 py-4 rounded-full font-black text-lg border-4 border-brand-black shadow-[8px_8px_0_var(--brand-green)] hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--brand-green)] transition-all mt-4">
              Get your link
            </button>
          </div>

          <div className="flex-1 relative w-full h-[600px] flex items-center justify-center">
            {/* Bio Link Stack */}
            <div className="relative w-[240px] sm:w-[280px] md:w-[340px] h-[380px] sm:h-[440px] md:h-[480px] group">
              {/* Stack Layers - True Fan Effect (Leque) */}
              <div className="absolute inset-0 bg-brand-green border-[4px] border-brand-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom -rotate-[8deg] -translate-x-4 sm:-translate-x-6 md:-translate-x-8 translate-y-2 transition-all duration-500 group-hover:-rotate-[12deg] group-hover:-translate-x-8 md:group-hover:-translate-x-12 group-hover:translate-y-4"></div>
              <div className="absolute inset-0 bg-[var(--brand-spotify)] border-[4px] border-brand-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom rotate-[8deg] translate-x-4 sm:translate-x-6 md:translate-x-8 translate-y-2 transition-all duration-500 group-hover:rotate-[12deg] group-hover:translate-x-8 md:group-hover:translate-x-12 group-hover:translate-y-4"></div>
              <div className="absolute inset-0 bg-brand-purple border-[4px] border-brand-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom -rotate-[4deg] -translate-x-2 sm:-translate-x-3 md:-translate-x-4 translate-y-1 transition-all duration-500 group-hover:-rotate-[6deg] group-hover:-translate-x-4 md:group-hover:-translate-x-6 group-hover:translate-y-2"></div>
              <div className="absolute inset-0 bg-brand-yellow border-[4px] border-brand-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom rotate-[4deg] translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-1 transition-all duration-500 group-hover:rotate-[6deg] group-hover:translate-x-4 md:group-hover:translate-x-6 group-hover:translate-y-2"></div>
              
              {/* Main Card */}
              <div className="absolute inset-0 bg-brand-white border-[4px] border-brand-black rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 flex flex-col items-center shadow-[8px_8px_0_var(--brand-black)] z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1">
                
                {/* Avatar */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 mb-3 md:mb-4 mt-2">
                  <div className="absolute inset-0 bg-brand-yellow rounded-full border-[4px] border-brand-black translate-x-1.5 translate-y-1.5"></div>
                  <div className="relative w-full h-full rounded-full border-[4px] border-brand-black overflow-hidden bg-brand-pink z-10 group cursor-pointer">
                    <img src="/imgs/avatar.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-300" alt="Profile" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-black text-center mb-1 tracking-tight">@theband</h3>
                <p className="text-center font-bold mb-4 sm:mb-8 text-brand-muted uppercase tracking-widest text-[10px]">Link in bio</p>
                
                {/* Buttons */}
                <div className="flex flex-col gap-2 sm:gap-3 w-full px-1 sm:px-2">
                  <div className="bg-brand-yellow text-brand-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl border-[3px] md:border-[4px] border-brand-black font-black uppercase text-base sm:text-lg text-center shadow-[4px_4px_0_var(--brand-black)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_var(--brand-black)] transition-all cursor-pointer [text-shadow:-1px_-1px_0_#111,1px_-1px_0_#111,-1px_1px_0_#111,1px_1px_0_#111]">
                    TikTok
                  </div>
                  <div className="bg-[var(--brand-spotify)] text-brand-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl border-[3px] md:border-[4px] border-brand-black font-black uppercase text-base sm:text-lg text-center shadow-[4px_4px_0_var(--brand-black)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_var(--brand-black)] transition-all cursor-pointer">
                    Spotify
                  </div>
                  <div className="bg-brand-black text-brand-green px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl border-[3px] md:border-[4px] border-brand-black font-black uppercase text-base sm:text-lg text-center shadow-[4px_4px_0_var(--brand-green)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_var(--brand-green)] transition-all cursor-pointer">
                    Merch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE ULTIMATE BENTO GRID SECTION */}
      <section className="bg-brand-green py-32 px-6 overflow-hidden border-b-[8px] border-brand-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <CrossSticker className="w-16 h-16 text-brand-yellow absolute -top-8 -left-4 md:-top-10 md:-left-12 rotate-12" />
            <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-brand-black uppercase">
              Everything<br/>
              <span className="font-thin italic font-serif lowercase tracking-normal">you need.</span><br/>
              <span className="text-brand-purple" style={{ textShadow: '-3px -3px 0 var(--brand-black), 3px -3px 0 var(--brand-black), -3px 3px 0 var(--brand-black), 3px 3px 0 var(--brand-black)' }}>One grid.</span>
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[800px]">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
              {/* Col 1 Top (Tall) */}
              <div className="flex-[3] min-h-[300px] rounded-[3rem] bg-brand-purple p-8 flex flex-col justify-end relative overflow-hidden group border-4 border-brand-black shadow-[8px_8px_0_var(--brand-purple)] hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--brand-purple)] transition-all">
                <img src="/imgs/dj.png" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="DJ" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-start">
                  <span className="bg-brand-green text-brand-black px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 inline-block shadow-[4px_4px_0_var(--brand-spotify)] border-2 border-brand-black transform -rotate-2">Featured Video</span>
                  <h3 className="text-5xl lg:text-6xl font-black text-brand-white leading-[0.85] tracking-tighter group-hover:scale-105 transition-transform origin-bottom-left uppercase">
                    Watch<br/>
                    <span className="font-thin italic font-serif lowercase tracking-normal">The</span><br/>
                    <span className="text-brand-green">Process.</span>
                  </h3>
                </div>
              </div>

              {/* Col 1 Bottom (Square) */}
              <div className="flex-[2] min-h-[250px] rounded-[3rem] bg-[var(--brand-spotify)] p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:brightness-110 transition-all shadow-[8px_8px_0_var(--brand-black)] hover:-translate-y-1 relative overflow-hidden border-4 border-brand-black">
                <div className="w-20 h-20 rounded-full bg-brand-black flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-[4px_4px_0_var(--brand-green)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[var(--brand-spotify)]">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <h3 className="text-brand-black font-black text-2xl tracking-tight">Pre-Save Now</h3>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
              {/* Col 2 Top (Square) */}
              <div className="flex-[2] min-h-[250px] rounded-[3rem] bg-brand-white p-6 flex flex-col justify-between border-4 border-brand-black hover:-translate-y-1 transition-transform relative overflow-hidden shadow-[8px_8px_0_var(--brand-black)] group">
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <span className="font-black text-brand-black text-2xl tracking-tighter">VIP PASS</span>
                  <span className="text-brand-black/50 font-black">2026</span>
                </div>
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="flex gap-1 h-20 items-center group-hover:scale-105 transition-transform">
                    {[2,4,1,3,6,2,5,1,4,2,7,1,3,5].map((w, i) => (
                       <div key={i} className="bg-brand-black h-full" style={{ width: `${w * 3}px` }}></div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 relative z-10">
                  <p className="font-black text-4xl tracking-tighter text-brand-black uppercase leading-none">World Tour</p>
                  <p className="font-bold text-brand-black/60 text-sm mt-2 uppercase tracking-wider">Add to Apple Wallet</p>
                </div>
              </div>

              {/* Col 2 Bottom (Tall) */}
              <div className="flex-[3] min-h-[300px] rounded-[3rem] bg-brand-purple p-8 flex flex-col justify-end border-4 border-brand-black transition-all cursor-pointer group shadow-[8px_8px_0_var(--brand-black)] hover:shadow-[12px_12px_0_var(--brand-black)] hover:-translate-y-1 relative overflow-hidden">
                 <img src="/imgs/crowd.png" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 group-hover:mix-blend-normal group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Crowd" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-purple)] via-[var(--brand-purple)]/80 to-transparent pointer-events-none"></div>
                 
                 <div className="relative z-10 flex flex-col text-left">
                   <div className="flex items-center gap-4 mb-4 group/avatar">
                     <div className="relative w-16 h-16 rounded-full border-4 border-brand-white shadow-xl overflow-hidden group-hover/avatar:border-brand-green transition-colors bg-brand-pink">
                       <img src="/imgs/studio.png" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover/avatar:mix-blend-normal group-hover/avatar:opacity-100 transition-all duration-300" alt="Profile" />
                     </div>
                     <div>
                       <div className="flex items-center gap-2">
                         <span className="text-brand-white font-black text-2xl">Rhythm Riot</span>
                         <span className="bg-brand-green text-brand-black text-[10px] px-2 py-0.5 rounded-full font-black">VERIFIED</span>
                       </div>
                       <span className="text-brand-white/80 font-bold text-sm">@rhythm_riot</span>
                     </div>
                   </div>
                   <p className="text-brand-white font-bold leading-snug text-xl">"Album drops at midnight. Are you ready?"</p>
                 </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
              {/* Col 3 Top (Very Tall) */}
              <div className="flex-[4] min-h-[400px] rounded-[3rem] bg-brand-yellow p-8 flex flex-col relative overflow-hidden border-4 border-brand-black shadow-[8px_8px_0_var(--brand-spotify)] hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--brand-spotify)] transition-all group cursor-pointer">
                <img src="/imgs/guitar.png" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Guitar" />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-yellow)]/90 via-[var(--brand-yellow)]/20 to-[var(--brand-yellow)] pointer-events-none z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div>
                    <h3 className="text-brand-black font-black text-6xl lg:text-7xl leading-[0.8] tracking-tighter uppercase drop-shadow-md">
                      Tour<br/>
                      <span className="font-thin italic font-serif lowercase drop-shadow-none">Dates</span>
                    </h3>
                  </div>
                  <div className="bg-brand-black text-brand-white p-6 rounded-[2rem] border-4 border-brand-black shadow-[4px_4px_0_var(--brand-green)] transform rotate-2">
                    <p className="font-black uppercase tracking-widest text-xs text-brand-yellow mb-2">Next Stop</p>
                    <h4 className="font-black text-4xl uppercase tracking-tighter">London, UK</h4>
                    <p className="font-bold mt-1 opacity-80">Wembley Stadium</p>
                  </div>
                </div>
              </div>

              {/* Col 3 Bottom (Very Short) */}
              <div className="flex-[1] min-h-[120px] rounded-[3rem] bg-brand-surface p-6 flex items-center justify-between border-4 border-brand-black transition-all cursor-pointer group shadow-[8px_8px_0_var(--brand-green)] hover:shadow-[12px_12px_0_var(--brand-green)] hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-brand-green/20 rounded-full blur-3xl"></div>
                <div className="z-10">
                  <h3 className="text-brand-black font-black text-2xl tracking-tighter leading-none mb-1">Early access</h3>
                  <p className="text-brand-muted font-bold text-xs uppercase tracking-widest">Join the club</p>
                </div>
                <div className="w-12 h-12 bg-brand-white rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors shrink-0 z-10 border-2 border-transparent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-black)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq openFaq={openFaq} setOpenFaq={setOpenFaq} />

      <Footer />
    </div>
  );
}

export default App;
