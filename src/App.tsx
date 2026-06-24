import { BentoCard } from './components/BentoCard';

function App() {
  return (
    <div className="font-sans selection:bg-[#111111] selection:text-[#CCFF00] bg-[#111111]">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
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
      <nav className="fixed top-8 w-full z-50 px-6">
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
      <section className="bg-[#0038FF] pt-40 pb-20 px-6 min-h-[100vh] flex flex-col justify-center overflow-hidden relative">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          <div className="flex-1 space-y-8 max-w-2xl py-10">
            <h1 className="text-[5rem] lg:text-[6rem] font-black leading-[0.9] tracking-tighter text-[#F4F4F4]">
              One link to drop your next track.
            </h1>
            <p className="text-xl font-bold text-[#F4F4F4]/80 max-w-lg leading-relaxed">
              Connect your fans to your latest singles, tour dates, merch drops, and Spotify playlists. BeatLink is the ultimate bio hub for modern musicians.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg pt-4">
              <div className="flex items-center bg-[#1E1E1E] rounded-md h-16 flex-1 px-4 shadow-xl">
                <span className="font-bold text-[#CCFF00]">beat.lk/</span>
                <input type="text" placeholder="artistname" className="bg-transparent border-none outline-none w-full font-bold text-white h-full placeholder:text-gray-600" />
              </div>
              <button className="bg-[#CCFF00] text-[#1E1E1E] h-16 px-8 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl whitespace-nowrap">
                Start for free
              </button>
            </div>
          </div>
          
          {/* Vertical Marquee Carousel Container */}
          <div className="flex-1 w-full relative h-[600px] lg:h-full min-h-[800px] flex justify-center lg:justify-end">
            
            {/* Bleeding wrapper that extends far beyond the section vertically */}
            <div className="absolute top-[-50vh] bottom-[-50vh] w-full max-w-[450px] flex justify-center overflow-visible pointer-events-none">
              
              <div className="flex flex-col animate-marquee-vertical w-full h-fit pointer-events-auto" style={{ animationDuration: '20s' }}>
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="flex flex-col gap-8 pb-8 shrink-0">
                    {/* Item 1 */}
                    <div className="w-full aspect-[4/5] bg-[#111111] rounded-[3rem] overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 2 */}
                    <div className="w-full aspect-[4/5] bg-[#111111] rounded-[3rem] overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 3 */}
                    <div className="w-full aspect-[4/5] bg-[#111111] rounded-[3rem] overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 4 */}
                    <div className="w-full aspect-[4/5] bg-[#111111] rounded-[3rem] overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&fit=crop" className="w-full h-full object-cover" />
                    </div>
                    {/* Item 5 */}
                    <div className="w-full aspect-[4/5] bg-[#111111] rounded-[3rem] overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&fit=crop" className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CREATE AND CUSTOMIZE - DEEP PURPLE */}
      <section className="bg-[#111111] py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="flex-1 relative w-full h-[600px] flex items-center justify-center perspective-1000">
             {/* Mini Bento Grid Mockup replacing Phone */}
             <div className="relative w-full max-w-[600px] h-auto transform -rotate-[4deg] hover:rotate-0 hover:-translate-y-2 transition-all duration-700 z-10 perspective-1000">
               <div className="grid grid-cols-3 gap-4 auto-rows-[120px]">
                  
                  {/* Block 1: Green Stat */}
                  <div className="col-span-1 row-span-1 bg-[#1DB954] rounded-[2rem] p-5 flex flex-col justify-between shadow-lg border border-black/5">
                    <div className="flex justify-between items-start">
                      <span className="text-black font-black text-3xl tracking-tighter">4.8M</span>
                      <span className="text-black">🎧</span>
                    </div>
                    <div>
                      <span className="text-black font-bold text-xs uppercase tracking-widest">Total Streams</span>
                      <p className="text-black/70 text-[10px] font-bold mt-1">last year</p>
                    </div>
                  </div>

                  {/* Block 2: Dark Stat */}
                  <div className="col-span-1 row-span-1 bg-[#FF0050] rounded-[2rem] p-5 flex flex-col justify-between shadow-lg border border-white/10">
                    <span className="text-white/70 font-bold text-[10px] uppercase tracking-widest">New Fans</span>
                    <span className="text-white font-black text-[2.5rem] leading-none tracking-tighter">57K</span>
                    <span className="text-white font-bold text-xs">+12.5%</span>
                  </div>

                  {/* Block 3: Vertical Team/Profile */}
                  <div className="col-span-1 row-span-2 bg-white rounded-[2rem] p-5 flex flex-col shadow-lg border border-gray-100 relative overflow-hidden">
                    <span className="bg-[#CCFF00] text-black font-bold text-[10px] px-3 py-1 rounded-full w-max mb-3 uppercase tracking-widest">Global Reach</span>
                    <p className="font-black text-black leading-tight text-sm">Fans across 50+ countries tuning in daily.</p>
                    <div className="mt-auto flex -space-x-3">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"/>
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"/>
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0038FF] text-white flex items-center justify-center text-xs font-bold shadow-sm">+9</div>
                    </div>
                  </div>

                  {/* Block 4: Large Chart */}
                  <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#EAEFFF] to-white rounded-[2rem] p-6 flex flex-col justify-between shadow-lg border border-gray-100 relative overflow-hidden">
                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <h4 className="text-[#0038FF] font-black text-xl tracking-tight leading-none mb-1">BeatLink Revenue</h4>
                        <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">This Year</span>
                      </div>
                      <div className="text-right">
                        <span className="block font-black text-3xl text-black tracking-tighter">$14.2K</span>
                        <span className="text-red-500 font-bold text-xs flex items-center justify-end gap-1">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                           -2.3%
                        </span>
                      </div>
                    </div>
                    {/* Graph SVG */}
                    <div className="absolute bottom-0 left-0 w-full h-32 z-0">
                      <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0,30 Q15,20 25,35 T50,25 T75,30 T100,10 L100,40 L0,40 Z" fill="url(#grad1)" opacity="0.3"></path>
                        <path d="M0,30 Q15,20 25,35 T50,25 T75,30 T100,10" fill="none" stroke="#0038FF" strokeWidth="2"></path>
                        <circle cx="25" cy="35" r="2" fill="white" stroke="#0038FF" strokeWidth="1"></circle>
                        <circle cx="75" cy="30" r="2" fill="white" stroke="#0038FF" strokeWidth="1"></circle>
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0038FF" stopOpacity="1" />
                            <stop offset="100%" stopColor="#0038FF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Block 5: Small White Stat */}
                  <div className="col-span-1 row-span-1 bg-white rounded-[2rem] p-5 flex flex-col justify-between shadow-lg border border-gray-100">
                    <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Daily Plays</span>
                    <span className="text-black font-black text-4xl tracking-tighter">84</span>
                    <span className="text-[#1DB954] font-bold text-xs">+40%</span>
                  </div>

                  {/* Block 6: Wide Lime Banner */}
                  <div className="col-span-2 row-span-1 bg-[#CCFF00] rounded-[2rem] p-5 flex items-center justify-between shadow-lg">
                    <div>
                       <h4 className="text-black font-black text-xl tracking-tight leading-none mb-1">Monetize your link.</h4>
                       <span className="text-black/70 font-bold text-xs uppercase tracking-widest">Direct to fans</span>
                    </div>
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                       <span className="text-[#CCFF00] font-black">→</span>
                    </div>
                  </div>

                  {/* Block 7: Logo Block */}
                  <div className="col-span-1 row-span-1 bg-[#0038FF] rounded-[2rem] p-5 flex flex-col items-center justify-center shadow-lg group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="relative z-10 text-center">
                      <span className="text-white font-black text-3xl tracking-tighter block leading-none">BL.</span>
                      <span className="text-white/70 font-bold text-[8px] uppercase tracking-widest mt-1">Platform</span>
                    </div>
                  </div>

               </div>
             </div>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-[#CCFF00]">
              Drop your music, <br/>we handle the rest.
            </h2>
            <p className="text-lg font-medium text-gray-300 max-w-lg leading-relaxed opacity-90">
              Your fans want everything in one place. Connect your Spotify, Apple Music, bandsintown, and Shopify store. BeatLink automatically routes them to the right app.
            </p>
            <button className="bg-[#CCFF00] text-black px-8 py-4 rounded-full font-black text-lg border-4 border-[#CCFF00] hover:bg-transparent hover:text-[#CCFF00] transition-colors mt-4 shadow-xl">
              Create your profile
            </button>
          </div>
        </div>
      </section>

      {/* SHARE ANYWHERE - PURE BLACK & NEON */}
      <section className="bg-[#FF0050] py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-black">
              Stick it in your bio. <br/>Go viral everywhere.
            </h2>
            <p className="text-lg font-bold text-white max-w-lg leading-relaxed">
              Add your custom BeatLink to your Instagram, TikTok, and YouTube descriptions. Track real-time analytics on which platform is driving the most streams.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-black text-lg border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111] transition-all mt-4">
              Get your link
            </button>
          </div>

          <div className="flex-1 relative w-full h-[500px] flex items-center justify-center">
            {/* Stack of Neo-Brutalist Cards */}
            <div className="relative w-[300px] h-[400px]">
              <div className="absolute inset-0 bg-[#FF0050] rounded-[3rem] border-4 border-black shadow-[8px_8px_0_#111111] transform translate-x-[120px] -rotate-12 transition-transform duration-500 hover:translate-x-[140px]"></div>
              <div className="absolute inset-0 bg-[#1DB954] rounded-[3rem] border-4 border-black shadow-[8px_8px_0_#111111] transform translate-x-[90px] -rotate-6 transition-transform duration-500 hover:translate-x-[110px]"></div>
              <div className="absolute inset-0 bg-[#F4F4F4] rounded-[3rem] border-4 border-black shadow-[8px_8px_0_#111111] transform translate-x-[60px] rotate-0 transition-transform duration-500 hover:translate-x-[80px]"></div>
              <div className="absolute inset-0 bg-[#CCFF00] rounded-[3rem] border-4 border-black shadow-[8px_8px_0_#111111] transform translate-x-[30px] rotate-6 transition-transform duration-500 hover:translate-x-[50px]"></div>
              
              {/* Front Card - Link in Bio Mockup */}
              <div className="absolute inset-0 bg-white border-4 border-black rounded-[3rem] shadow-[12px_12px_0_#111111] transform rotate-12 transition-transform duration-500 hover:rotate-6 hover:-translate-y-4 p-8 flex flex-col items-center justify-start z-10">
                 <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&fit=crop" className="w-24 h-24 rounded-full border-4 border-black shadow-[4px_4px_0_#111111] mb-4 object-cover" alt="Avatar" />
                 <h4 className="font-black text-black text-2xl tracking-tighter leading-none mb-1">@theband</h4>
                 <span className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-6">Link in Bio</span>
                 
                 <div className="w-full space-y-3">
                   <div className="w-full h-12 bg-[#FF0050] border-2 border-black rounded-xl shadow-[4px_4px_0_#111111] flex items-center justify-center text-white font-black uppercase text-sm tracking-widest hover:translate-x-1 transition-transform cursor-pointer">TikTok</div>
                   <div className="w-full h-12 bg-[#1DB954] border-2 border-black rounded-xl shadow-[4px_4px_0_#111111] flex items-center justify-center text-black font-black uppercase text-sm tracking-widest hover:translate-x-1 transition-transform cursor-pointer">Spotify</div>
                   <div className="w-full h-12 bg-black border-2 border-black rounded-xl shadow-[4px_4px_0_#CCFF00] flex items-center justify-center text-[#CCFF00] font-black uppercase text-sm tracking-widest hover:translate-x-1 transition-transform cursor-pointer">Merch</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - BENTO GRID OFF-WHITE */}
      <section className="bg-[#F4F4F4] py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
          
          <div className="flex-1 grid grid-cols-2 gap-6 auto-rows-[180px] w-full max-w-xl perspective-1000">
            
            {/* Block 1: Big Chart */}
            <div className="col-span-2 rounded-[2.5rem] bg-[#CCFF00] text-black p-8 flex flex-col justify-between border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#111111] transition-all relative overflow-hidden group z-10">
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="block text-6xl font-black tracking-tighter mb-1">1.2M</span>
                  <span className="font-bold tracking-widest uppercase text-xs">Monthly Streams</span>
                </div>
                <div className="bg-black text-white px-4 py-1.5 rounded-full font-bold text-xs">
                  +12% 🔥
                </div>
              </div>
              <div className="absolute -bottom-8 left-0 w-full h-32 opacity-30 group-hover:opacity-60 transition-opacity">
                <svg viewBox="0 0 100 50" className="w-full h-full stroke-black fill-none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M-10,50 L10,20 L30,40 L60,10 L80,30 L110,-10" className="animate-pulse" />
                </svg>
              </div>
            </div>
            
            {/* Block 2: Tickets */}
            <div className="col-span-1 rounded-[2.5rem] bg-[#FF0050] text-white p-8 flex flex-col justify-center items-center text-center border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#111111] transition-all z-20">
              <span className="text-5xl font-black tracking-tighter mb-2">15k</span>
              <span className="font-bold uppercase tracking-widest text-xs">Tickets Sold</span>
            </div>

            {/* Block 3: Merch */}
            <div className="col-span-1 rounded-[2.5rem] bg-[#0038FF] text-white p-8 flex flex-col justify-center items-center text-center border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#111111] transition-all z-20">
              <div className="mb-2 text-4xl">🛒</div>
              <span className="text-3xl font-black tracking-tighter mb-1">$45k</span>
              <span className="font-bold uppercase tracking-widest text-xs text-[#CCFF00]">Merch Rev</span>
            </div>
            
            {/* Block 4: Bar Chart */}
            <div className="col-span-2 rounded-[2.5rem] bg-white text-black p-8 flex flex-row items-center justify-between border-4 border-black shadow-[8px_8px_0_#111111] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_#111111] transition-all z-10">
              <div className="flex gap-3 items-end h-16">
                {[40, 70, 40, 90, 60, 100, 30].map((h, i) => (
                  <div key={i} className="w-5 bg-black rounded-t-sm relative group-hover:bg-[#0038FF] transition-colors" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="text-right flex flex-col justify-center">
                <span className="text-5xl font-black tracking-tighter mb-1">Top 5%</span>
                <span className="font-bold text-gray-500 uppercase tracking-widest text-[10px]">Spotify Creators</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <h2 className="text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-[#111111]">
              Know exactly where your fans are listening.
            </h2>
            <p className="text-lg font-medium text-gray-600 max-w-lg leading-relaxed">
              Powerful analytics let you track pre-saves, ticket conversions, and merch clicks in real-time. Know what's popping before the label does.
            </p>
            <button className="bg-[#111111] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all mt-4 shadow-xl">
              View Analytics
            </button>
          </div>
        </div>
      </section>

      {/* THE ULTIMATE BENTO GRID SECTION */}
      <section className="bg-[#CCFF00] py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[4rem] lg:text-[5rem] font-black leading-[0.9] tracking-tighter text-black">
              Everything you need. <br/><span className="text-[#0038FF]">In one grid.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
            {/* Block 1: Massive Featured (Cover Art / Video) - Pure Image */}
            <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-[3rem] bg-black p-8 flex flex-col justify-end relative overflow-hidden group border-4 border-black shadow-[8px_8px_0_#111111]">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Music" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative z-10">
                <span className="bg-[#CCFF00] text-black px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-4 inline-block shadow-[4px_4px_0_#111111] border-2 border-black">Featured Video</span>
                <h3 className="text-4xl font-black text-white tracking-tighter leading-none mb-2">Midnight Sessions</h3>
                <p className="text-gray-300 font-medium">Watch the official music video now.</p>
              </div>
            </div>

            {/* Block 2: Tour Pass (Vertical) - WHITE */}
            <div className="col-span-1 md:col-span-1 md:row-span-2 rounded-[3rem] bg-white p-6 flex flex-col justify-between border-4 border-black hover:-translate-y-1 transition-transform relative overflow-hidden shadow-[8px_8px_0_#111111] group">
              <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="font-black text-black text-xl tracking-tighter">VIP PASS</span>
                <span className="text-black/50 font-bold">2026</span>
              </div>
              <div className="flex-1 flex items-center justify-center relative z-10">
                {/* Barcode visual */}
                <div className="flex gap-1 h-24 items-center group-hover:scale-105 transition-transform">
                  {[2,4,1,3,6,2,5,1,4,2,7,1,3,5].map((w, i) => (
                     <div key={i} className="bg-black h-full" style={{ width: `${w * 3}px` }}></div>
                  ))}
                </div>
              </div>
              <div className="mt-4 relative z-10">
                <p className="font-black text-3xl tracking-tighter text-black uppercase leading-none">World Tour</p>
                <p className="font-bold text-black/60 text-sm mt-1">Add to Apple Wallet</p>
              </div>
            </div>

            {/* Block 3: Pre-save (Square) - SPOTIFY GREEN */}
            <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-[3rem] bg-[#1DB954] p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:brightness-110 transition-all shadow-[8px_8px_0_#111111] hover:-translate-y-1 relative overflow-hidden border-4 border-black">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-lg">
                <span className="text-3xl">🎵</span>
              </div>
              <h3 className="text-black font-black text-xl tracking-tight">Pre-Save Now</h3>
            </div>

            {/* Block 4: Fan Map (Square) - WHITE */}
            <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-[3rem] bg-[#F4F4F4] p-6 flex flex-col justify-between relative overflow-hidden border-4 border-black shadow-[8px_8px_0_#0038FF]">
              <div className="relative z-10">
                <h3 className="text-black font-black text-[3.5rem] leading-none tracking-tighter">#1</h3>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest mt-2">In London, UK</p>
              </div>
              <div className="absolute -bottom-10 -right-4 text-[8rem] opacity-20 select-none pointer-events-none grayscale">🇬🇧</div>
            </div>

            {/* Block 5: Social Update (Horizontal) - ELECTRIC BLUE */}
            <div className="col-span-1 md:col-span-2 md:row-span-1 rounded-[3rem] bg-[#0038FF] p-8 flex flex-row items-center gap-6 border-4 border-black hover:bg-blue-700 transition-all cursor-pointer group shadow-[8px_8px_0_#111111] hover:shadow-[12px_12px_0_#111111] hover:-translate-y-1 relative overflow-hidden">
               <div className="shrink-0 relative">
                 <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80&fit=crop" className="w-24 h-24 rounded-full object-cover border-4 border-white group-hover:scale-110 transition-transform shadow-xl" alt="Profile" />
               </div>
               <div className="flex flex-col text-left z-10">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="text-white font-black text-xl">Rhythm Riot</span>
                   <span className="bg-white text-[#0038FF] text-[10px] px-2 py-0.5 rounded-full font-bold">VERIFIED</span>
                 </div>
                 <p className="text-white/90 font-medium leading-snug text-lg">"Album drops at midnight. Are you ready? 💿✨"</p>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            </div>

            {/* Block 6: Newsletter / Mini Action - DEEP DARK */}
            <div className="col-span-1 md:col-span-2 md:row-span-1 rounded-[3rem] bg-[#1E1E1E] p-8 flex flex-col justify-center border-4 border-black transition-all cursor-pointer group shadow-[8px_8px_0_#111111] hover:shadow-[12px_12px_0_#111111] hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#CCFF00]/20 rounded-full blur-3xl"></div>
              <div className="flex items-center justify-between z-10">
                <div>
                  <h3 className="text-white font-black text-3xl tracking-tighter leading-none mb-2">Get early access</h3>
                  <p className="text-gray-400 font-medium text-sm">Join the secret club. No spam, just music.</p>
                </div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-[#CCFF00] transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE CAROUSEL - ARTISTS & PLATFORMS */}
      <section className="bg-white py-32 overflow-hidden border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-[4rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-black">
            Integrated with over 50 <br/><span className="text-[#0038FF]">music platforms.</span>
          </h2>
        </div>
        
        {/* Marquee Track */}
        <div className="relative w-full flex overflow-hidden py-8 hover:[&>div]:[animation-play-state:paused]">
          <div className="flex animate-marquee whitespace-nowrap min-w-max">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex gap-6 pr-6 shrink-0">
                <div className="w-[300px] h-[300px] bg-black rounded-[3rem] shrink-0 flex flex-col items-center justify-center text-white cursor-pointer border-4 border-black shadow-[8px_8px_0_#111111]">
                  <span className="text-5xl font-black tracking-tighter text-[#1DB954]">Spotify</span>
                </div>
                <div className="w-[450px] h-[300px] bg-[#FF0050] rounded-[3rem] shrink-0 flex items-center justify-center cursor-pointer text-white border-4 border-black shadow-[8px_8px_0_#111111]">
                  <span className="text-5xl font-black tracking-tighter">TikTok</span>
                </div>
                <div className="w-[300px] h-[300px] rounded-[3rem] shrink-0 overflow-hidden cursor-pointer border-4 border-black shadow-[8px_8px_0_#111111] relative bg-black">
                  <img src="https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=600&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" alt="Vinyl" />
                </div>
                <div className="w-[350px] h-[300px] bg-white rounded-[3rem] shrink-0 flex items-center justify-center text-black cursor-pointer border-4 border-black shadow-[8px_8px_0_#111111]">
                  <span className="text-5xl font-black tracking-tighter">Apple Music</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - DARK */}
      <section className="bg-[#0A0A0A] py-32 px-6 text-white pb-40">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-16">
            <h2 className="text-[4rem] font-black tracking-tighter text-[#CCFF00]">Got questions?</h2>
          </div>
          
          {[
            "How do I embed Spotify and Apple Music players?",
            "Can I sell merch or digital downloads directly?",
            "Is there a limit on how many tour dates I can add?",
            "How do I track my pre-save conversions?"
          ].map((q, i) => (
            <div key={i} className="bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 md:p-8 flex items-center justify-between cursor-pointer hover:border-[#CCFF00] hover:bg-[#111111] transition-all">
              <h3 className="text-lg md:text-xl font-bold text-gray-200">{q}</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 ml-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] px-6 pb-12 pt-10">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-10 lg:p-16 border-4 border-black shadow-[12px_12px_0_#0038FF] flex flex-col">
          
          {/* Top Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
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
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8 mt-auto pt-8">
            {/* CTA Buttons */}
            <div className="flex items-center gap-4 w-full xl:w-auto justify-center xl:justify-start">
              <button className="bg-gray-100 text-black px-8 py-4 rounded-full font-black text-lg hover:bg-gray-200 transition-colors">Log in</button>
              <button className="bg-[#CCFF00] text-black px-8 py-4 rounded-full font-black text-lg border-4 border-black shadow-[4px_4px_0_#111111] hover:-translate-y-1 hover:shadow-[6px_6px_0_#111111] transition-all">Get started for free</button>
            </div>
            
            {/* Social & Stores */}
            <div className="flex items-center gap-3 flex-wrap justify-center xl:justify-end">
              {/* App Stores */}
              <button className="bg-black text-white px-5 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.8 3.59-.8 1.58.05 2.81.7 3.56 1.81-1.32.78-1.57 2.44-.31 3.25-.65 1.76-1.55 3.32-2.92 4.91zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div className="flex flex-col text-left"><span className="text-[9px] leading-tight text-gray-300">Download on the</span><span className="text-sm leading-tight">App Store</span></div>
              </button>
              <button className="bg-black text-white px-5 py-3 rounded-full font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#1DB954]"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 01-.58-.87L3 20.211V3.789c0-.447.164-.847.435-1.186l.174-.789zm11.233 11.233L19.46 15.7a1.933 1.933 0 010 1.673l-4.618 2.653-3.666-3.666zm.943-.943L12.119 8.44l4.618-2.652a1.933 1.933 0 012.723.98l1.455 2.544c.264.462.264 1.026 0 1.488L19.46 13.34zM11.176 9.382L4.545 2.75a1.983 1.983 0 011.644.02l4.987 2.865v3.747z"/></svg>
                <div className="flex flex-col text-left"><span className="text-[9px] leading-tight text-gray-300">GET IT ON</span><span className="text-sm leading-tight">Google Play</span></div>
              </button>
              
              {/* Social Icons */}
              <div className="flex gap-2 ml-2">
                {[
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>,
                  <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
                  <path d="M22 4.01c-1 .49-2.13.82-3.32.96 1.2-.72 2.12-1.86 2.56-3.22-1.08.64-2.28 1.1-3.56 1.35C16.66 2.02 15.26 1.3 13.72 1.3 10.76 1.3 8.36 3.7 8.36 6.66c0 .42.05.83.14 1.22C4.08 7.66 2.17 5.56 1.04 3.16c-.46.79-.72 1.71-.72 2.68 0 1.86.95 3.5 2.39 4.46-.92-.03-1.78-.28-2.54-.7v.07c0 2.72 1.93 4.98 4.5 5.5-.45.12-.92.18-1.41.18-.34 0-.68-.03-1.01-.09.71 2.23 2.79 3.85 5.24 3.89-1.92 1.5-4.34 2.4-6.97 2.4-.43 0-.86-.03-1.28-.08 2.48 1.59 5.43 2.52 8.59 2.52 10.3 0 15.93-8.53 15.93-15.93 0-.24-.01-.48-.02-.72 1.09-.79 2.04-1.78 2.79-2.9z"/>
                ].map((path, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">{path}</svg>
                  </div>
                ))}
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
