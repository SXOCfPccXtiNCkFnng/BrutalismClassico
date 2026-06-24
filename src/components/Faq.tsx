import { AsteriskSticker, CircleSticker, SmileNeo, SpringNeo, Sparkle } from './BrutalistIcons';

interface FaqProps {
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

export const Faq = ({ openFaq, setOpenFaq }: FaqProps) => {
  return (
    <section className="bg-brand-black py-32 px-6 relative overflow-hidden">
      {/* Background graphic elements */}
      <AsteriskSticker className="w-[800px] h-[800px] text-brand-black absolute -top-1/4 -right-1/4 rotate-45 pointer-events-none z-0 hidden lg:block" />
      <CircleSticker className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] text-brand-black absolute bottom-10 -left-10 md:-left-20 pointer-events-none z-0 hidden md:block" />
      
      <SmileNeo className="w-16 h-16 text-brand-yellow absolute top-12 left-12 md:left-32 rotate-[-20deg] z-0 hidden lg:block" />
      <SpringNeo className="w-20 h-20 text-brand-green absolute bottom-32 right-12 lg:right-32 rotate-[40deg] z-0 opacity-70 hidden md:block" />
      <Sparkle className="w-10 h-10 text-brand-pink absolute top-1/3 right-8 md:right-1/4 z-0 animate-spin-slow hidden md:block" />
      
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <div className="text-center mb-16 relative z-10">
           <h2 className="text-5xl md:text-7xl font-black text-brand-white uppercase tracking-tighter mb-4">
             Drop Some<br/>Knowledge.
           </h2>
           <p className="text-brand-muted font-bold text-lg md:text-xl">Everything you need to know about BeatLink.</p>
        </div>

        {[
          { 
            q: "Is BeatLink really free?", 
            a: "The core platform is 100% free. You can build your page, link your music, and track basic analytics without paying a dime. Pro features are available for serious artists.",
            colorClass: "border-brand-pink shadow-[4px_4px_0_var(--brand-pink)] hover:shadow-[8px_8px_0_var(--brand-pink)]",
            textClass: "text-brand-pink"
          },
          { 
            q: "Can I connect my Spotify?", 
            a: "Yes. Drop your Spotify URI and we'll instantly generate a brutalist mini-player right on your bio link. Works for Apple Music and SoundCloud too.",
            colorClass: "border-brand-green shadow-[4px_4px_0_var(--brand-green)] hover:shadow-[8px_8px_0_var(--brand-green)]",
            textClass: "text-brand-green"
          },
          { 
            q: "How do I customize the colors?", 
            a: "Hit the 'Theme' button in your dashboard. You can choose from our curated neo-brutalist palettes or input your own hex codes to match your era.",
            colorClass: "border-brand-cyan shadow-[4px_4px_0_var(--brand-cyan)] hover:shadow-[8px_8px_0_var(--brand-cyan)]",
            textClass: "text-brand-cyan"
          },
          { 
            q: "Do I need to know how to code?", 
            a: "Absolutely not. The builder is completely drag-and-drop. It looks like you paid an agency $10k, but you did it from your phone.",
            colorClass: "border-brand-yellow shadow-[4px_4px_0_var(--brand-yellow)] hover:shadow-[8px_8px_0_var(--brand-yellow)]",
            textClass: "text-brand-yellow"
          }
        ].map((faq, i) => (
          <div 
            key={i} 
            className={`bg-brand-white border-4 p-6 rounded-2xl cursor-pointer transition-all group hover:-translate-y-1 ${faq.colorClass}`}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-black text-brand-black">{faq.q}</h3>
              <span className={`text-3xl font-black transition-transform duration-300 ${openFaq === i ? 'rotate-45 ' + faq.textClass : 'text-brand-black group-hover:' + faq.textClass}`}>+</span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 mt-4' : 'max-h-0'}`}>
              <p className="text-brand-muted font-bold text-lg">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
