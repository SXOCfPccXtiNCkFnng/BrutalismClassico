import { ZigZag, SpringNeo, CrossSticker, AsteriskSticker, Sparkle } from './BrutalistIcons';

export const Footer = () => {
  return (
    <footer className="bg-brand-black pt-32 pb-16 px-6 border-t-[16px] border-brand-yellow relative overflow-hidden">
      <ZigZag className="w-40 h-20 text-brand-purple absolute top-12 left-12 rotate-[-15deg] z-0 opacity-80 hidden md:block" />
      <SpringNeo className="w-32 h-32 text-brand-pink absolute bottom-20 right-12 rotate-[35deg] z-0 opacity-80 hidden lg:block" />
      
      {/* More scattered elements */}
      <CrossSticker className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] text-brand-black absolute -top-20 md:-top-40 -right-20 md:-right-40 rotate-[15deg] z-0 pointer-events-none hidden md:block" />
      <AsteriskSticker className="w-12 h-12 text-brand-green absolute top-40 right-1/4 z-0 animate-spin-slow hidden xl:block" />
      <Sparkle className="w-8 h-8 text-brand-white absolute bottom-1/3 left-10 rotate-45 z-0 hidden md:block" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 bg-brand-white rounded-[3rem] p-10 lg:p-16 border-4 border-brand-black shadow-[12px_12px_0_var(--brand-yellow)] flex flex-col">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-16">
          <div className="flex-1 max-w-sm">
             <span className="text-4xl font-black tracking-tighter text-brand-black flex items-center gap-1 mb-6">
              BeatLink<AsteriskSticker className="w-10 h-10 ml-2 text-brand-green" />
             </span>
             <p className="font-bold text-brand-muted text-lg">
                The loudest link-in-bio for artists who break the rules. Drop your tracks, build your cult.
             </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24 font-bold text-lg">
             <div className="flex flex-col gap-4">
                <span className="font-black uppercase tracking-widest text-brand-black mb-2">Platform</span>
                <a href="#" className="text-brand-muted hover:text-brand-pink transition-colors">Features</a>
                <a href="#" className="text-brand-muted hover:text-brand-pink transition-colors">Pricing</a>
                <a href="#" className="text-brand-muted hover:text-brand-pink transition-colors">Pro</a>
             </div>
             <div className="flex flex-col gap-4">
                <span className="font-black uppercase tracking-widest text-brand-black mb-2">Support</span>
                <a href="#" className="text-brand-muted hover:text-brand-purple transition-colors">Help Center</a>
                <a href="#" className="text-brand-muted hover:text-brand-purple transition-colors">Community</a>
                <a href="#" className="text-brand-muted hover:text-brand-purple transition-colors">Contact</a>
             </div>
             <div className="flex flex-col gap-4">
                <span className="font-black uppercase tracking-widest text-brand-black mb-2">Legal</span>
                <a href="#" className="text-brand-muted hover:text-brand-green transition-colors">Privacy</a>
                <a href="#" className="text-brand-muted hover:text-brand-green transition-colors">Terms</a>
             </div>
          </div>
        </div>

        <div className="w-full h-1 bg-brand-black mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-bold text-brand-muted">
           <span>© 2026 BeatLink. No rights reserved. Go crazy.</span>
           <div className="flex gap-4">
             {/* Social Links... */}
             <a href="#" className="w-12 h-12 rounded-full border-2 border-brand-black bg-brand-white flex items-center justify-center hover:bg-brand-yellow hover:scale-110 transition-all text-brand-black shadow-[4px_4px_0_var(--brand-black)]">X</a>
             <a href="#" className="w-12 h-12 rounded-full border-2 border-brand-black bg-brand-white flex items-center justify-center hover:bg-brand-pink hover:scale-110 transition-all text-brand-black shadow-[4px_4px_0_var(--brand-black)]">IG</a>
             <a href="#" className="w-12 h-12 rounded-full border-2 border-brand-black bg-brand-white flex items-center justify-center hover:bg-brand-purple hover:scale-110 transition-all text-brand-black shadow-[4px_4px_0_var(--brand-black)]">TT</a>
           </div>
        </div>
      </div>
    </footer>
  );
};
