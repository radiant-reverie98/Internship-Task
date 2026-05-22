import React from 'react';

const BlogHeader = () => {
  return (
    <section className="w-full bg-white pt-16 pb-10 md:pt-24 md:pb-14 font-sans antialiased overflow-hidden relative border-b border-slate-100">
      
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-4 left-1/3 w-80 h-80 bg-slate-100/40 rounded-full blur-2xl pointer-events-none -z-10"></div>

      {/* Centered container matching standard comfortable layout widths */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-left space-y-4">
        
        {/* Small Premium Editor Tagline */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.005)]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Draft Workspace</span>
        </div>

        {/* Large Bold Heading with responsive fluid scaling */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Create New <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          
          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base font-medium text-slate-500 leading-relaxed max-w-xl">
            Share your ideas, stories, and insights with the world. Your draft auto-saves automatically.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BlogHeader;