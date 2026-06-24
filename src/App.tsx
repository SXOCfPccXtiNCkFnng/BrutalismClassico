import { useState, useEffect } from 'react';
import { BentoCard } from './components/BentoCard';
import { Sparkle, CircleSticker, AsteriskSticker, ZigZag, ArrowNeo, CrossSticker, PillSticker, SpringNeo, SmileNeo } from './components/BrutalistIcons';

const carouselItems = [
  { id: 1, img: '/imgs/dj.png', color: '#1DB954', backTitle: 'Live Sets', backText: 'Sync your live mixes directly to your profile.' },
  { id: 2, img: '/imgs/guitar.png', color: '#FFED4A', backTitle: 'Tour Dates', backText: 'Keep fans updated with your latest shows.' },
  { id: 3, img: '/imgs/headphones.png', color: '#8E84F3', backTitle: 'Releases', backText: 'Drop your latest tracks in high-fidelity.' },
  { id: 4, img: '/imgs/mic.png', color: '#FF5500', backTitle: 'Podcasts', backText: 'Share your voice with the world seamlessly.' },
  { id: 5, img: '/imgs/studio.png', color: '#6EF3A5', backTitle: 'Behind the Scenes', backText: 'Exclusive studio footage for superfans.' },
  { id: 6, img: '/imgs/vinyl.png', color: '#FF0000', backTitle: 'Merch Drops', backText: 'Limited edition vinyls and apparel.' },
  { id: 7, img: '/imgs/wave.png', color: '#111111', backTitle: 'Audio Stems', backText: 'Let fans remix your tracks.' },
  { id: 8, img: '/imgs/crowd.png', color: '#00E5FF', backTitle: 'Community', backText: 'Build a loyal fanbase with direct engagement.' },
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
          className="absolute inset-0 [backface-visibility:hidden] rounded-[2.5rem] border-[4px] border-black overflow-hidden group bg-white"
          style={{ boxShadow: `8px 8px 0 ${item.color}` }}
        >
          {/* Aumentando o scale base para 1.15 para cortar a borda branca gerada na imagem, e no hover para 1.25 */}
          <img src={item.img} className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.25] transition-transform duration-700" alt="Cover" />
          
          <div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 border-4 border-black rounded-full px-6 py-2 text-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
            style={{ backgroundColor: item.color, boxShadow: `4px 4px 0 #111111` }}
          >
             <span className={`font-black uppercase tracking-widest text-xs whitespace-nowrap ${item.color === '#111111' ? 'text-white' : 'text-black'}`}>Click to flip</span>
          </div>
        </div>
        {/* Back */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[3rem] border-4 border-black p-8 flex flex-col justify-center items-center text-center"
          style={{ backgroundColor: item.color, boxShadow: '8px 8px 0 #111111' }}
        >
           <h4 className={`text-3xl font-black uppercase tracking-tighter mb-4 ${item.color === '#111111' ? 'text-white' : 'text-black'}`}>{item.backTitle}</h4>
           <p className={`font-bold text-base leading-snug ${item.color === '#111111' ? 'text-gray-300' : 'text-black/80'}`}>{item.backText}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsNavVisible(false); // Scroll down
      } else {
        setIsNavVisible(true); // Scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="font-sans selection:bg-[#111111] selection:text-[#6EF3A5] bg-[#111111]">
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
        `}
      </style>

      {/* NAVBAR PILL */}
      <nav className={`fixed top-0 w-full z-50 px-6 pt-8 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-48'}`}>
        <div className="max-w-7xl mx-auto bg-white rounded-full h-20 flex items-center justify-between px-4 md:px-8 border-4 border-black shadow-[8px_8px_0_#111111]">
          <div className="flex items-center gap-8 xl:gap-12">
            <span className="text-2xl md:text-3xl font-black tracking-tight text-black flex items-center gap-1">
              BeatLink<span className="text-[1.5rem] mt-1">✳</span>
            </span>
            <div className="hidden lg:flex items-center gap-1 font-bold text-gray-500 text-sm xl:text-base">
              <a href="#" className="hover:bg-gray-100 hover:text-black px-4 py-3 rounded-full transition-all">Products</a>
              <a href="#" className="hover:bg-gray-100 hover:text-black px-4 py-3 rounded-full transition-all">Templates</a>
              <a href="#" className="hover:bg-gray-100 hover:text-black px-4 py-3 rounded-full transition-all">Marketplace</a>
              <a href="#" className="hover:bg-gray-100 hover:text-black px-4 py-3 rounded-full transition-all">Learn</a>
              <a href="#" className="hover:bg-gray-100 hover:text-black px-4 py-3 rounded-full transition-all">Pricing</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:block font-bold text-black bg-gray-100 hover:bg-gray-200 px-6 py-3.5 rounded-full text-sm md:text-base transition-colors">Log In</button>
            <button className="bg-black text-white font-bold text-sm md:text-base px-6 py-3.5 rounded-full hover:scale-105 transition-transform">Sign up free</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - VIBRANT ORANGE */}
      <section className="bg-[#8E84F3] pt-40 pb-20 min-h-[100vh] flex flex-col justify-center overflow-hidden relative border-b-4 border-black">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          <div className="flex-1 space-y-8 max-w-2xl py-10 px-6 lg:px-8">
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black leading-[0.9] tracking-tighter text-[#F4F4F4] relative">
              <Sparkle className="w-16 h-16 text-[#FFED4A] absolute -top-12 -left-6 md:-left-10 rotate-12" />
              One link to drop your next track.
              <AsteriskSticker className="w-12 h-12 text-[#6EF3A5] absolute -bottom-4 right-0 md:-right-8 -rotate-12" />
            </h1>
            <p className="text-xl font-bold text-[#F4F4F4]/80 max-w-lg leading-relaxed">
              Connect your fans to your latest singles, tour dates, merch drops, and Spotify playlists. BeatLink is the ultimate bio hub for modern musicians.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl pt-4">
              <div className="flex items-center bg-white rounded-2xl h-16 flex-1 px-6 border-4 border-black shadow-[8px_8px_0_#FFED4A] focus-within:-translate-y-1 focus-within:shadow-[12px_12px_0_#FFED4A] transition-all">
                <span className="font-bold text-gray-400 text-lg">beat.lk/</span>
                <input type="text" placeholder="yourname" className="bg-transparent border-none outline-none w-full font-bold text-black h-full placeholder:text-gray-300 text-lg ml-1" />
              </div>
              <button className="bg-[#FFED4A] text-black h-16 px-8 rounded-full font-black text-lg border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111] transition-all whitespace-nowrap">
                Claim your link
              </button>
            </div>
          </div>
          
          {/* Mobile Horizontal Marquee (Tablet/Mobile) */}
          <div className="w-full relative h-[280px] md:h-[360px] lg:hidden flex items-center overflow-hidden mt-6">
            <div className="absolute left-0 w-max flex pointer-events-none">
              <div className="flex flex-row animate-marquee w-max h-full pointer-events-auto" style={{ animationDuration: '20s' }}>
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex flex-row gap-4 md:gap-8 pr-4 md:pr-8 shrink-0">
                    {/* Item 1 - DJ Purple */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/dj.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 2 - Guitar Pink/Orange */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/guitar.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 3 - Crowd Green */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/crowd.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 4 - Raw Sound Cyan */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/wave.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 5 - Drop The Mic Red */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/mic.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 6 - Vinyl Yellow */}
                    <div className="w-[280px] md:w-[360px] aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/vinyl.png" className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Marquee Carousel Container (Desktop Original) */}
          <div className="hidden lg:flex flex-1 w-full relative h-full min-h-[800px] justify-end">
            {/* Bleeding wrapper that extends far beyond the section vertically */}
            <div className="absolute top-[-50vh] bottom-[-50vh] w-full max-w-[450px] flex justify-center overflow-visible pointer-events-none">
              
              <div className="flex flex-col animate-marquee-vertical w-full h-fit pointer-events-auto" style={{ animationDuration: '20s' }}>
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex flex-col gap-8 pb-8 shrink-0">
                    {/* Item 1 - DJ Purple */}
                    <div className="w-full aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/dj.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 2 - Guitar Pink/Orange */}
                    <div className="w-full aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/guitar.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 3 - Crowd Green */}
                    <div className="w-full aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/crowd.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 4 - Raw Sound Cyan */}
                    <div className="w-full aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/wave.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 5 - Drop The Mic Red */}
                    <div className="w-full aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/mic.png" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 6 - Vinyl Yellow */}
                    <div className="w-full aspect-square bg-[#111111] rounded-2xl overflow-hidden shadow-2xl">
                      <img src="/imgs/vinyl.png" className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CREATE AND CUSTOMIZE - DEEP PURPLE */}
      <section className="bg-[#5C1425] py-32 px-6 overflow-hidden border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 relative w-full h-[600px] flex items-center justify-center perspective-1000">
             {/* Brutalist Music Player Mockup */}
             <div className="relative w-full max-w-[500px] h-auto transform rotate-[2deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-700 z-10 perspective-1000 mx-auto">
                <div className="bg-[#8E84F3] border-4 border-black rounded-[2rem] p-6 shadow-[12px_12px_0_#6EF3A5] flex flex-col gap-6 relative">
                  
                  {/* Top Bar / Branding */}
                  <div className="flex justify-between items-center border-b-4 border-black pb-4">
                    <span className="font-black text-black text-2xl tracking-tighter uppercase leading-none">Beat<br/>Deck<span className="text-[#6EF3A5]">.</span></span>
                    <div className="flex gap-2">
                       <div className="w-5 h-5 rounded-full border-4 border-black bg-[#FF2D78]"></div>
                       <div className="w-5 h-5 rounded-full border-4 border-black bg-[#FFED4A]"></div>
                       <div className="w-5 h-5 rounded-full border-4 border-black bg-[#6EF3A5]"></div>
                    </div>
                  </div>

                  {/* Now Playing Screen */}
                  <div className="bg-black border-4 border-black rounded-xl p-4 flex items-center gap-4 relative overflow-hidden group">
                     {/* Spinning Record */}
                     <div className="w-20 h-20 rounded-full border-4 border-[#6EF3A5] bg-[#111111] flex items-center justify-center animate-[spin_4s_linear_infinite] relative shrink-0">
                        <div className="absolute inset-2 rounded-full border-2 border-gray-800"></div>
                        <div className="w-6 h-6 rounded-full bg-[#FFED4A] border-2 border-[#6EF3A5]"></div>
                     </div>
                     <div className="flex-1 overflow-hidden">
                        <span className="text-[#6EF3A5] font-black text-xs uppercase tracking-widest block mb-1">Now Playing</span>
                        <div className="overflow-hidden whitespace-nowrap w-full relative">
                           <h4 className="text-white font-black text-2xl uppercase tracking-tighter animate-marquee inline-block">
                             NEO-BRUTALIST BEATS — THE ELECTRIC RIOT — RAW SOUND — 
                           </h4>
                        </div>
                        <span className="text-gray-400 font-bold text-sm">Sonic Mutiny</span>
                     </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full flex items-center gap-3">
                    <span className="text-black font-black text-xs">01:24</span>
                    <div className="flex-1 h-6 border-4 border-black rounded-full bg-white relative overflow-hidden shadow-[inset_0_3px_0_rgba(0,0,0,0.1)]">
                       <div className="absolute top-0 left-0 h-full bg-[#FF2D78] w-[45%] border-r-4 border-black"></div>
                    </div>
                    <span className="text-black font-black text-xs">03:42</span>
                  </div>

                  {/* Controls */}
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-3">
                       <button className="w-14 h-14 bg-white border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0_#111111] hover:translate-y-1 hover:shadow-none transition-all active:bg-gray-200">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5" strokeWidth="4"></line></svg>
                       </button>
                       <button className="w-16 h-16 bg-[#6EF3A5] border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0_#111111] hover:translate-y-1 hover:shadow-none transition-all active:bg-[#5CE093]">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                       </button>
                       <button className="w-14 h-14 bg-white border-4 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0_#111111] hover:translate-y-1 hover:shadow-none transition-all active:bg-gray-200">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19" strokeWidth="4"></line></svg>
                       </button>
                    </div>

                    {/* Volume Slider */}
                    <div className="hidden sm:flex w-32 h-14 border-4 border-black bg-white rounded-xl items-center px-3 relative shadow-[4px_4px_0_#111111]">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" className="absolute left-3 z-10"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeWidth="3"></path></svg>
                       <div className="absolute top-1/2 left-10 right-4 -translate-y-1/2 h-3 bg-gray-200 rounded-full overflow-hidden border-2 border-black">
                         <div className="w-[70%] h-full bg-[#FFED4A] border-r-2 border-black"></div>
                       </div>
                       {/* Knob */}
                       <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-5 h-8 bg-black rounded border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>
                    </div>
                  </div>

                  {/* Decorative Stickers */}
                  <AsteriskSticker className="w-16 h-16 text-[#FFED4A] absolute -bottom-6 -left-6 z-20 animate-spin-slow" />
                  <CrossSticker className="w-12 h-12 text-[#FF2D78] absolute -top-6 -right-6 rotate-12 z-20" />
                </div>
             </div>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter relative z-10 flex flex-col">
              <span className="font-thin italic font-serif text-white lowercase">drop your music,</span>
              <span className="text-[#6EF3A5] uppercase">we handle</span>
              <span className="text-[#FFED4A] uppercase" style={{ textShadow: '4px 4px 0 #111111' }}>the rest.</span>
              <ArrowNeo className="w-20 h-20 text-[#FFED4A] absolute -bottom-6 -right-10 md:-right-4 rotate-[15deg] hidden md:block" />
            </h2>
            <p className="text-lg font-medium text-gray-300 max-w-lg leading-relaxed opacity-90">
              Your fans want everything in one place. Connect your Spotify, Apple Music, bandsintown, and Shopify store. BeatLink automatically routes them to the right app.
            </p>
            <button className="bg-[#6EF3A5] text-black px-8 py-4 rounded-full font-black text-lg border-4 border-[#6EF3A5] hover:bg-transparent hover:text-[#6EF3A5] transition-colors mt-4 shadow-xl">
              Create your profile
            </button>
          </div>
        </div>
      </section>

      {/* INFINITE CAROUSEL - ARTISTS & PLATFORMS */}
      <section className="bg-white py-32 overflow-hidden border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
          <Sparkle className="w-16 h-16 text-[#FFED4A] absolute -top-8 right-4 md:right-32 rotate-[45deg]" />
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-black">
            Integrated with over 50 <br/><span className="text-[#8E84F3]">music platforms.</span>
          </h2>
          <AsteriskSticker className="w-12 h-12 text-[#1DB954] absolute -bottom-6 left-4 md:left-32 -rotate-[15deg] hidden md:block" />
        </div>
        
        {/* Marquee Track */}
        <div className="relative w-full flex overflow-hidden py-12 hover:[&>div]:[animation-play-state:paused]">
          <div className="flex animate-marquee whitespace-nowrap min-w-max">
            {/* Duplicating the array multiple times to ensure a seamless infinite loop */}
            {[...carouselItems, ...carouselItems, ...carouselItems].map((item, index) => (
              <CarouselCard key={`${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION - BENTO GRID CYAN */}
      <section className="bg-[#00E5FF] py-32 px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
          
          <div className="flex-1 grid grid-cols-2 gap-6 auto-rows-[180px] w-full max-w-xl perspective-1000">
            
            {/* Block 1: Big Chart */}
            <div className="col-span-2 rounded-[2.5rem] bg-[#6EF3A5] text-black p-6 md:p-8 flex flex-col justify-between border-4 border-black shadow-[8px_8px_0_#8E84F3] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#8E84F3] transition-all relative overflow-hidden group z-10">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="block text-5xl md:text-6xl font-black tracking-tighter mb-1">1.2M</span>
                  <span className="font-black tracking-widest uppercase text-xs">Monthly Streams</span>
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-full font-black text-sm border-2 border-transparent">
                  +12%
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-20 group-hover:scale-105 transition-transform duration-700 origin-bottom z-0 opacity-80">
                <svg viewBox="0 0 100 50" className="w-full h-full stroke-black fill-none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
                  <path d="M-10,50 L20,25 L40,40 L70,15 L90,30 L110,5" />
                </svg>
              </div>
            </div>
            
            {/* Block 2: Tickets */}
            <div className="col-span-1 rounded-[2.5rem] bg-[#FFED4A] text-black p-6 md:p-8 flex flex-col justify-center items-center text-center border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#111111] transition-all z-20">
              <span className="text-4xl md:text-5xl font-black tracking-tighter mb-2">15k</span>
              <span className="font-black uppercase tracking-widest text-[10px] md:text-xs">Tickets Sold</span>
            </div>

            {/* Block 3: Merch */}
            <div className="col-span-1 rounded-[2.5rem] bg-[#8E84F3] text-white p-6 md:p-8 flex flex-col justify-center items-center text-center border-4 border-black shadow-[8px_8px_0_#1DB954] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#1DB954] transition-all z-20">
              <span className="text-3xl md:text-4xl font-black tracking-tighter mb-2">$45k</span>
              <span className="font-black uppercase tracking-widest text-[10px] md:text-xs text-[#6EF3A5]">Merch Rev</span>
            </div>
            
            {/* Block 4: Bar Chart */}
            <div className="col-span-2 rounded-[2.5rem] bg-white text-black p-6 md:p-8 flex flex-row items-center justify-between border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#111111] transition-all z-10">
              <div className="flex gap-2 md:gap-3 items-end h-16">
                {[40, 70, 40, 90, 60, 100, 30].map((h, i) => (
                  <div key={i} className="w-4 md:w-5 bg-black rounded-t-sm relative group-hover:bg-[#8E84F3] transition-colors" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="text-right flex flex-col justify-center">
                <span className="text-4xl md:text-5xl font-black tracking-tighter mb-1">Top 5%</span>
                <span className="font-bold text-gray-500 uppercase tracking-widest text-[10px]">Spotify Creators</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-[#111111] relative z-10 uppercase">
              <SpringNeo className="w-20 h-20 text-[#1DB954] absolute -top-12 -left-8 md:-left-12 -z-10 -rotate-12" />
              Know exactly<br/>
              <span className="font-thin italic font-serif lowercase tracking-normal text-[#111111]">where your</span><br/>
              <span className="text-[#8E84F3]" style={{ textShadow: '-3px -3px 0 #111111, 3px -3px 0 #111111, -3px 3px 0 #111111, 3px 3px 0 #111111' }}>fans are.</span>
            </h2>
            <p className="text-lg font-bold text-[#111111]/80 max-w-lg leading-relaxed">
              Powerful analytics let you track pre-saves, ticket conversions, and merch clicks in real-time. Know what's popping before the label does.
            </p>
            <button className="bg-[#111111] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all mt-4 shadow-xl">
              View Analytics
            </button>
          </div>
        </div>
      </section>

      {/* SHARE ANYWHERE - PURE BLACK & NEON */}
      <section className="bg-[#FFED4A] py-32 px-6 overflow-hidden border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-[3rem] md:text-[6rem] lg:text-[7rem] leading-[0.85] font-black text-black mb-8 tracking-tighter uppercase relative z-10">
              <CircleSticker className="w-12 h-12 md:w-24 md:h-24 text-white absolute -top-6 -left-2 md:-top-12 md:-left-12 -z-10" />
              Stick it in your bio.<br/>
              <span className="text-[#FFED4A] lowercase" style={{ textShadow: '-3px -3px 0 #111111, 3px -3px 0 #111111, -3px 3px 0 #111111, 3px 3px 0 #111111, 0px 3px 0 #111111, 0px -3px 0 #111111, 3px 0px 0 #111111, -3px 0px 0 #111111' }}>Go viral </span>
              <span className="font-thin italic font-serif lowercase tracking-normal">everywhere.</span>
              <ZigZag className="w-24 h-12 text-[#8E84F3] absolute bottom-4 -right-12 hidden md:block" />
            </h1>
            <p className="text-xl md:text-2xl text-black font-bold mb-10 max-w-lg leading-snug">
              Add your custom BeatLink to your Instagram, TikTok, and YouTube descriptions. Track real-time analytics on which platform is driving the most streams.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-black text-lg border-4 border-black shadow-[8px_8px_0_#6EF3A5] hover:-translate-y-1 hover:shadow-[12px_12px_0_#6EF3A5] transition-all mt-4">
              Get your link
            </button>
          </div>

          <div className="flex-1 relative w-full h-[600px] flex items-center justify-center">
            {/* Bio Link Stack */}
            {/* Bio Link Stack */}
            <div className="relative w-[240px] sm:w-[280px] md:w-[340px] h-[380px] sm:h-[440px] md:h-[480px] group">
              {/* Stack Layers - True Fan Effect (Leque) */}
              <div className="absolute inset-0 bg-[#6EF3A5] border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom -rotate-[8deg] -translate-x-4 sm:-translate-x-6 md:-translate-x-8 translate-y-2 transition-all duration-500 group-hover:-rotate-[12deg] group-hover:-translate-x-8 md:group-hover:-translate-x-12 group-hover:translate-y-4"></div>
              <div className="absolute inset-0 bg-[#1DB954] border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom rotate-[8deg] translate-x-4 sm:translate-x-6 md:translate-x-8 translate-y-2 transition-all duration-500 group-hover:rotate-[12deg] group-hover:translate-x-8 md:group-hover:translate-x-12 group-hover:translate-y-4"></div>
              <div className="absolute inset-0 bg-[#8E84F3] border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom -rotate-[4deg] -translate-x-2 sm:-translate-x-3 md:-translate-x-4 translate-y-1 transition-all duration-500 group-hover:-rotate-[6deg] group-hover:-translate-x-4 md:group-hover:-translate-x-6 group-hover:translate-y-2"></div>
              <div className="absolute inset-0 bg-[#FFED4A] border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] origin-bottom rotate-[4deg] translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-1 transition-all duration-500 group-hover:rotate-[6deg] group-hover:translate-x-4 md:group-hover:translate-x-6 group-hover:translate-y-2"></div>
              
              {/* Main Card */}
              <div className="absolute inset-0 bg-white border-[4px] border-black rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 flex flex-col items-center shadow-[8px_8px_0_#111111] z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-translate-x-1">
                
                {/* Avatar */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 mb-3 md:mb-4 mt-2">
                  <div className="absolute inset-0 bg-[#FFED4A] rounded-full border-[4px] border-black translate-x-1.5 translate-y-1.5"></div>
                  <div className="relative w-full h-full rounded-full border-[4px] border-black overflow-hidden bg-white z-10">
                    <img src="/imgs/avatar.png" className="w-full h-full object-cover" alt="Profile" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black text-center mb-1 tracking-tight">@theband</h3>
                <p className="text-center font-bold mb-4 sm:mb-8 text-gray-400 uppercase tracking-widest text-[10px]">Link in bio</p>
                
                {/* Buttons */}
                <div className="flex flex-col gap-2 sm:gap-3 w-full px-1 sm:px-2">
                  <div className="bg-[#FFED4A] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl border-[3px] md:border-[4px] border-black font-black uppercase text-base sm:text-lg text-center shadow-[4px_4px_0_#111111] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_#111111] transition-all cursor-pointer [text-shadow:-1px_-1px_0_#111,1px_-1px_0_#111,-1px_1px_0_#111,1px_1px_0_#111]">
                    TikTok
                  </div>
                  <div className="bg-[#1DB954] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl border-[3px] md:border-[4px] border-black font-black uppercase text-base sm:text-lg text-center shadow-[4px_4px_0_#111111] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_#111111] transition-all cursor-pointer">
                    Spotify
                  </div>
                  <div className="bg-black text-[#6EF3A5] px-4 sm:px-6 py-2 sm:py-3 rounded-xl md:rounded-2xl border-[3px] md:border-[4px] border-black font-black uppercase text-base sm:text-lg text-center shadow-[4px_4px_0_#6EF3A5] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0_#6EF3A5] transition-all cursor-pointer">
                    Merch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE ULTIMATE BENTO GRID SECTION */}
      <section className="bg-[#6EF3A5] py-32 px-6 overflow-hidden border-b-4 border-black">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <CrossSticker className="w-16 h-16 text-[#FFED4A] absolute -top-8 -left-4 md:-top-10 md:-left-12 rotate-12" />
            <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-black uppercase">
              Everything<br/>
              <span className="font-thin italic font-serif lowercase tracking-normal">you need.</span><br/>
              <span className="text-[#8E84F3]" style={{ textShadow: '-3px -3px 0 #111111, 3px -3px 0 #111111, -3px 3px 0 #111111, 3px 3px 0 #111111' }}>One grid.</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[800px]">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Col 1 Top (Tall) */}
              <div className="flex-[3] min-h-[300px] rounded-[3rem] bg-black p-8 flex flex-col justify-end relative overflow-hidden group border-4 border-black shadow-[8px_8px_0_#8E84F3] hover:-translate-y-1 hover:shadow-[12px_12px_0_#8E84F3] transition-all">
                <img src="/imgs/dj.png" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="DJ" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-start">
                  <span className="bg-[#6EF3A5] text-black px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 inline-block shadow-[4px_4px_0_#1DB954] border-2 border-black transform -rotate-2">Featured Video</span>
                  <h3 className="text-5xl lg:text-6xl font-black text-white leading-[0.85] tracking-tighter group-hover:scale-105 transition-transform origin-bottom-left uppercase">
                    Watch<br/>
                    <span className="font-thin italic font-serif lowercase tracking-normal">The</span><br/>
                    <span className="text-[#6EF3A5]">Process.</span>
                  </h3>
                </div>
              </div>

              {/* Col 1 Bottom (Square) */}
              <div className="flex-[2] min-h-[250px] rounded-[3rem] bg-[#1DB954] p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:brightness-110 transition-all shadow-[8px_8px_0_#111111] hover:-translate-y-1 relative overflow-hidden border-4 border-black">
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-[4px_4px_0_#6EF3A5]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#1DB954]">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <h3 className="text-black font-black text-2xl tracking-tight">Pre-Save Now</h3>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Col 2 Top (Square) */}
              <div className="flex-[2] min-h-[250px] rounded-[3rem] bg-white p-6 flex flex-col justify-between border-4 border-black hover:-translate-y-1 transition-transform relative overflow-hidden shadow-[8px_8px_0_#111111] group">
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <span className="font-black text-black text-2xl tracking-tighter">VIP PASS</span>
                  <span className="text-black/50 font-black">2026</span>
                </div>
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <div className="flex gap-1 h-20 items-center group-hover:scale-105 transition-transform">
                    {[2,4,1,3,6,2,5,1,4,2,7,1,3,5].map((w, i) => (
                       <div key={i} className="bg-black h-full" style={{ width: `${w * 3}px` }}></div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 relative z-10">
                  <p className="font-black text-4xl tracking-tighter text-black uppercase leading-none">World Tour</p>
                  <p className="font-bold text-black/60 text-sm mt-2 uppercase tracking-wider">Add to Apple Wallet</p>
                </div>
              </div>

              {/* Col 2 Bottom (Tall) */}
              <div className="flex-[3] min-h-[300px] rounded-[3rem] bg-[#8E84F3] p-8 flex flex-col justify-end border-4 border-black transition-all cursor-pointer group shadow-[8px_8px_0_#111111] hover:shadow-[12px_12px_0_#111111] hover:-translate-y-1 relative overflow-hidden">
                 <img src="/imgs/crowd.png" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" alt="Crowd" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#8E84F3] via-[#8E84F3]/80 to-transparent"></div>
                 
                 <div className="relative z-10 flex flex-col text-left">
                   <div className="flex items-center gap-4 mb-4">
                     <img src="/imgs/studio.png" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-xl" alt="Profile" />
                     <div>
                       <div className="flex items-center gap-2">
                         <span className="text-white font-black text-2xl">Rhythm Riot</span>
                         <span className="bg-[#6EF3A5] text-black text-[10px] px-2 py-0.5 rounded-full font-black">VERIFIED</span>
                       </div>
                       <span className="text-white/80 font-bold text-sm">@rhythm_riot</span>
                     </div>
                   </div>
                   <p className="text-white font-bold leading-snug text-xl">"Album drops at midnight. Are you ready?"</p>
                 </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Col 3 Top (Very Tall) */}
              <div className="flex-[4] min-h-[400px] rounded-[3rem] bg-[#FFED4A] p-8 flex flex-col relative overflow-hidden border-4 border-black shadow-[8px_8px_0_#1DB954] hover:-translate-y-1 hover:shadow-[12px_12px_0_#1DB954] transition-all group cursor-pointer">
                <img src="/imgs/guitar.png" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Guitar" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFED4A]/90 via-[#FFED4A]/20 to-[#FFED4A]"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div>
                    <h3 className="text-black font-black text-6xl lg:text-7xl leading-[0.8] tracking-tighter uppercase drop-shadow-md">
                      Tour<br/>
                      <span className="font-thin italic font-serif lowercase drop-shadow-none">Dates</span>
                    </h3>
                  </div>
                  <div className="bg-black text-white p-6 rounded-[2rem] border-4 border-black shadow-[4px_4px_0_#6EF3A5] transform rotate-2">
                    <p className="font-black uppercase tracking-widest text-xs text-[#FFED4A] mb-2">Next Stop</p>
                    <h4 className="font-black text-4xl uppercase tracking-tighter">London, UK</h4>
                    <p className="font-bold mt-1 opacity-80">Wembley Stadium</p>
                  </div>
                </div>
              </div>

              {/* Col 3 Bottom (Very Short) */}
              <div className="flex-[1] min-h-[120px] rounded-[3rem] bg-[#1E1E1E] p-6 flex items-center justify-between border-4 border-black transition-all cursor-pointer group shadow-[8px_8px_0_#6EF3A5] hover:shadow-[12px_12px_0_#6EF3A5] hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#6EF3A5]/20 rounded-full blur-3xl"></div>
                <div className="z-10">
                  <h3 className="text-white font-black text-2xl tracking-tighter leading-none mb-1">Early access</h3>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Join the club</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-[#6EF3A5] transition-colors shrink-0 z-10 border-2 border-transparent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - DARK */}
      <section className="bg-[#0A0A0A] py-32 px-6 text-white pb-40 border-b-4 border-black">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-[3rem] md:text-[4rem] font-black tracking-tighter text-[#6EF3A5] uppercase leading-[0.9]">
              Got<br/>
              <span className="font-thin italic font-serif lowercase tracking-normal text-[#6EF3A5]">all the</span><br/>
              questions?
            </h2>
            <PillSticker className="w-20 h-10 text-[#FFED4A] absolute -top-8 right-4 md:right-16 rotate-[25deg] hidden md:block" />
          </div>
          
          {[
            { q: "How do I embed Spotify and Apple Music players?", a: "Just paste your track or playlist URL into the embed block. We automatically convert it into a playable widget so fans can listen without leaving your page." },
            { q: "Can I sell merch or digital downloads directly?", a: "Yes! Our Pro plan includes e-commerce integrations to let you sell physical merch, digital tracks, and even exclusive content directly to your fans." },
            { q: "Is there a limit on how many tour dates I can add?", a: "No limits at all. Whether it's a one-off gig or a massive world tour, you can list as many dates as you need with direct links to ticketing platforms." },
            { q: "How do I track my pre-save conversions?", a: "We provide detailed analytics showing exactly how many clicks your pre-save links received, broken down by streaming platform and location." }
          ].map((faq, i) => (
            <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className={`rounded-3xl p-6 md:p-8 flex flex-col cursor-pointer transition-all duration-300 border-4 ${openFaq === i ? 'bg-[#6EF3A5] border-black shadow-[8px_8px_0_#FFED4A] -translate-y-1' : 'bg-[#1E1E1E] border-transparent hover:border-[#6EF3A5]/50 hover:bg-[#252525]'}`}>
              <div className="flex items-center justify-between">
                <h3 className={`text-lg md:text-xl font-black tracking-tight ${openFaq === i ? 'text-black' : 'text-gray-200'}`}>{faq.q}</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#000000' : '#6EF3A5'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className={`font-bold text-base leading-relaxed pr-8 ${openFaq === i ? 'text-black/80' : 'text-gray-400'}`}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] px-6 pb-12 pt-10">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-10 lg:p-16 border-4 border-black shadow-[12px_12px_0_#FFED4A] flex flex-col">
          
          {/* Top Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-16 text-center sm:text-left">
            <div className="space-y-6">
              <h4 className="font-black text-xl text-black">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">The BeatLink Blog</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Engineering Blog</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Marketplace</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">What's New</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Link in Bio</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Social Good</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-xl text-black">Community</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">BeatLink for Enterprise</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">2026 Creator Report</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Charities</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Creator Profile Directory</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Explore Templates</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-xl text-black">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Help Topics</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Getting Started</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">BeatLink Pro</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Features & How-Tos</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Report a Violation</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-xl text-black">Trust & Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Privacy Notice</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Cookie Notice</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Trust Center</a></li>
                <li><a href="#" className="text-gray-600 font-bold text-sm hover:text-black hover:underline transition-colors">Transparency Report</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Actions Row */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-8 mt-auto pt-12 xl:pt-8 relative z-10">
            <SmileNeo className="w-16 h-16 text-[#6EF3A5] absolute -top-12 xl:-top-10 left-1/2 -translate-x-1/2 xl:left-[45%] rotate-[-15deg]" />
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto justify-center xl:justify-start">
              <button className="bg-gray-100 text-black px-8 py-4 rounded-full font-black text-base sm:text-lg hover:bg-gray-200 transition-colors whitespace-nowrap w-full sm:w-auto">Log in</button>
              <button className="bg-[#6EF3A5] text-black px-8 py-4 rounded-full font-black text-base sm:text-lg border-4 border-black shadow-[4px_4px_0_#111111] hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] transition-all whitespace-nowrap w-full sm:w-auto">Get started for free</button>
            </div>
            
            {/* Social & Stores */}
            <div className="flex items-center gap-3 flex-wrap justify-center xl:justify-end">
              {/* App Stores */}
              <button className="bg-black text-white px-5 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.689.827-1.33 2.272-1.144 3.61 1.35.105 2.61-.636 3.431-1.598z"/></svg>
                <div className="flex flex-col text-left"><span className="text-[9px] leading-tight text-gray-300">Download on the</span><span className="text-sm leading-tight">App Store</span></div>
              </button>
              <button className="bg-black text-white px-5 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1DB954]"><path d="M22.094 10.518L2.73 1.102A1.85 1.85 0 0 0 .003 2.76v18.47a1.85 1.85 0 0 0 2.738 1.666l19.344-9.416a1.851 1.851 0 0 0 .01-3.327L22.094 10.518z"/></svg>
                <div className="flex flex-col text-left"><span className="text-[9px] leading-tight text-gray-300">GET IT ON</span><span className="text-sm leading-tight">Google Play</span></div>
              </button>
              
              {/* Social Icons */}
              <div className="flex gap-2 ml-2">
                {/* Facebook */}
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                  </svg>
                </div>
                {/* Instagram */}
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                {/* Twitter / X */}
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Very Bottom Text */}
        <div className="max-w-4xl mx-auto mt-12 text-center space-y-4 px-6">
          <p className="text-gray-500 text-[11px] font-bold leading-relaxed">
            We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. BeatLink Pty Ltd (ABN 68 608 721 562), 1-9 Sackville St, Collingwood VIC 3066
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
