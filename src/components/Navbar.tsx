import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsNavVisible(false);
        setIsMenuOpen(false); // Close menu on scroll down
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 pt-8 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-48'}`}>
      <div className="max-w-7xl mx-auto bg-brand-white rounded-full h-20 flex items-center justify-between px-4 md:px-8 border-4 border-brand-black shadow-[8px_8px_0_var(--brand-black)] relative z-50">
        <div className="flex items-center gap-8 xl:gap-12">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-black flex items-center gap-1 shrink-0">
            BeatLink<span className="text-[1.5rem] mt-1"></span>
          </span>
          <div className="hidden xl:flex items-center gap-1 font-bold text-brand-muted text-sm xl:text-base">
            <a href="#" className="hover:bg-brand-surface hover:text-brand-black px-4 py-3 rounded-full transition-all">Products</a>
            <a href="#" className="hover:bg-brand-surface hover:text-brand-black px-4 py-3 rounded-full transition-all">Templates</a>
            <a href="#" className="hover:bg-brand-surface hover:text-brand-black px-4 py-3 rounded-full transition-all">Marketplace</a>
            <a href="#" className="hover:bg-brand-surface hover:text-brand-black px-4 py-3 rounded-full transition-all">Learn</a>
            <a href="#" className="hover:bg-brand-surface hover:text-brand-black px-4 py-3 rounded-full transition-all">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button 
            onClick={() => document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'inverted' ? '' : 'inverted')}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border-2 border-brand-black text-brand-black bg-brand-yellow hover:scale-110 transition-transform shadow-[4px_4px_0_var(--brand-black)]"
            title="Inverter Cores (Modo Dark/Caos)"
          >
            ☯
          </button>
          <button className="hidden md:block font-bold text-brand-black bg-brand-surface hover:brightness-90 px-6 py-3.5 rounded-full text-sm md:text-base transition-colors border-2 border-transparent hover:border-brand-black">Log In</button>
          <button className="hidden sm:block bg-brand-black text-brand-white font-bold text-sm md:text-base px-6 py-3.5 rounded-full hover:scale-105 transition-transform">Sign up</button>
          
          {/* Hamburger Menu Button */}
          <button 
            className="xl:hidden flex items-center justify-center w-12 h-12 rounded-full bg-brand-surface border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white transition-colors ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-24 left-6 right-6 bg-brand-white border-4 border-brand-black rounded-[2rem] p-6 shadow-[8px_8px_0_var(--brand-black)] transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-4 font-black text-2xl text-brand-black text-center">
          <a href="#" className="py-2 hover:text-brand-pink transition-colors">Products</a>
          <a href="#" className="py-2 hover:text-brand-green transition-colors">Templates</a>
          <a href="#" className="py-2 hover:text-brand-cyan transition-colors">Marketplace</a>
          <a href="#" className="py-2 hover:text-brand-yellow transition-colors">Learn</a>
          <a href="#" className="py-2 hover:text-brand-purple transition-colors">Pricing</a>
          
          <div className="h-[4px] w-full bg-brand-black my-4"></div>
          
          <div className="flex flex-col sm:hidden gap-4">
             <button className="w-full font-black text-brand-black bg-brand-surface py-4 rounded-full border-4 border-brand-black hover:bg-brand-yellow transition-colors">Log In</button>
             <button className="w-full bg-brand-black text-brand-white font-black py-4 rounded-full border-4 border-brand-black hover:bg-brand-green hover:text-brand-black transition-colors">Sign up free</button>
          </div>
          
          <button 
            onClick={() => document.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') === 'inverted' ? '' : 'inverted')}
            className="md:hidden flex items-center justify-center gap-4 w-full mt-4 py-4 rounded-full border-4 border-brand-black bg-brand-yellow font-black text-xl hover:bg-brand-pink transition-colors"
          >
            ☯ Invert Theme
          </button>
        </div>
      </div>
    </nav>
  );
};
