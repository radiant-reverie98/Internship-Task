import React from 'react';

const BlogsHeader = () => {
  return (
    <section className="w-full bg-[#F8FAFC] pt-20 pb-12 md:pt-28 md:pb-16 font-sans antialiased overflow-hidden relative text-center">
      
      {/* Decorative Blur Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-100/30 via-slate-100/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-12 left-1/3 w-72 h-72 bg-cyan-200/10 rounded-full blur-2xl pointer-events-none mix-blend-multiply animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
        
        {/* Small Premium Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50"></span>
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Our Publication</span>
        </div>

        {/* Main Section Heading */}
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-none">
          Explore <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">Blogs</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-base sm:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
          Discover stories, ideas, and insights from creators around the world.
        </p>

        {/* Minimal Bottom Separation Rule */}
        <div className="w-12 h-[2px] bg-slate-200 mx-auto mt-8 rounded-full"></div>

      </div>
    </section>
  );
};

export default BlogsHeader;