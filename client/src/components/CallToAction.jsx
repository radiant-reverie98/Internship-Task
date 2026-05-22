import React from 'react';

const CallToAction = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 font-sans antialiased overflow-hidden relative">
      
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core CTA Card Element */}
        <div className="w-full bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-[0_8px_30px_rgb(0,0,0,0.01),0_1px_3px_rgba(0,0,0,0.01)] relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.03)] transition-all duration-500">
          
          {/* Top subtle visual accent bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[3px] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-b-full"></div>

          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Start sharing your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">ideas today.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
              Join a growing collective of creative writers, engineers, and independent creators. Setting up takes less than two minutes.
            </p>

            {/* Action Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/register"
                className="w-full sm:w-auto text-center font-semibold text-white bg-cyan-500 hover:bg-cyan-600 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 px-6 py-3 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                Get Started
              </a>
              <a
                href="/blogs"
                className="w-full sm:w-auto text-center font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 px-6 py-3 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                Explore Blogs
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;