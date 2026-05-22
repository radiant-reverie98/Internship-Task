import React from 'react';
import { FileSearch } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-24 md:py-32 flex items-center justify-center p-4 font-sans antialiased">
      {/* Container Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-2xl p-8 md:p-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.01),0_1px_3px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.04)] group">
        
        {/* Modern Icon Presentation */}
        <div className="relative mx-auto h-16 w-16 rounded-2xl bg-cyan-50/50 border border-cyan-100/50 text-cyan-600 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:bg-cyan-50 group-hover:text-cyan-500">
          <FileSearch className="h-7 w-7 stroke-[1.5]" />
          
          {/* Subtle Decorative Ambient Ring */}
          <div className="absolute -inset-1 rounded-2xl border border-cyan-500/0 group-hover:border-cyan-500/10 group-hover:scale-110 transition-all duration-500 pointer-events-none"></div>
        </div>

        {/* Text Group */}
        <div className="space-y-2 mb-8">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            No blogs found
          </h3>
          <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm mx-auto">
            There are no blogs available at the moment. Check back later for new content.
          </p>
        </div>

        {/* Action Button */}
        <a
          href="/"
          className="inline-flex items-center justify-center font-semibold text-white bg-cyan-500 hover:bg-cyan-600 shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20 px-5 py-2.5 rounded-xl text-sm transition-all duration-200 active:scale-[0.98]"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default EmptyState;