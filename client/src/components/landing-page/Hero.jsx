import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] font-sans antialiased overflow-hidden py-16 md:py-24 lg:py-32">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl mix-blend-multiply opacity-70 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-slate-200/60 rounded-full blur-3xl mix-blend-multiply opacity-60 pointer-events-none -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100/80 shadow-[0_2px_12px_rgba(6,182,212,0.05)]">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-cyan-700 tracking-wide uppercase">Introducing Noteflux</span>
            </div>

            {/* Main Catchy Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Write. Share. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">Inspire.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Meet the modern, lightning-fast publishing platform crafted for independent writers. Create beautiful stories, grow your email list, and analyze your readers seamlessly.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="/register" 
                className="w-full sm:w-auto text-center font-semibold text-white bg-cyan-500 hover:bg-cyan-600 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 px-6 py-3 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                Start Writing — Free
              </a>
              <a 
                href="/blogs" 
                className="w-full sm:w-auto text-center font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 px-6 py-3 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                Explore Blogs
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive UI Mockup Visual */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[400px] sm:min-h-[480px]">
            
            {/* Core Workspace Canvas (Glassmorphism backdrop structure) */}
            <div className="w-full max-w-[480px] aspect-[4/3] bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.01)] rounded-2xl p-6 relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] group">
              
              {/* Fake App Header Controls */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                  <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                  <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                </div>
                <div className="h-4 w-28 bg-slate-100 rounded-md"></div>
                <div className="h-6 w-12 bg-cyan-50 rounded-md border border-cyan-100"></div>
              </div>

              {/* Mock Blog Post Main Frame */}
              <div className="space-y-3">
                <div className="h-6 w-3/4 bg-slate-900/90 rounded-md"></div>
                <div className="h-4 w-1/2 bg-slate-400/60 rounded-md"></div>
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-full bg-slate-200/80 rounded-sm"></div>
                  <div className="h-3 w-full bg-slate-200/80 rounded-sm"></div>
                  <div className="h-3 w-4/5 bg-slate-200/80 rounded-sm"></div>
                </div>
              </div>

              {/* FLOATING CARD 1: Live Analytics Tracker (Top Right Drop-in) */}
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-slate-100 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] w-44 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live Readers</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-slate-900 tracking-tight">1,482</span>
                  <span className="text-xs font-semibold text-emerald-500">+12%</span>
                </div>
                {/* Micro Chart Simulator */}
                <div className="flex items-end gap-1 h-6 mt-3">
                  <div className="bg-slate-100 w-full h-1/2 rounded-sm"></div>
                  <div className="bg-slate-100 w-full h-2/3 rounded-sm"></div>
                  <div className="bg-cyan-400 w-full h-3/4 rounded-sm"></div>
                  <div className="bg-cyan-500 w-full h-full rounded-sm"></div>
                </div>
              </div>

              {/* FLOATING CARD 2: Quick Author Snippet (Bottom Left Overlap) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md border border-slate-100 p-3.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] w-52 flex items-center gap-3 transition-transform duration-300 group-hover:translate-y-1 group-hover:-translate-x-1">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-400 shrink-0"></div>
                <div className="space-y-1 w-full">
                  <div className="h-3 w-20 bg-slate-900 rounded-sm"></div>
                  <div className="h-2.5 w-28 bg-slate-400/60 rounded-sm"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;