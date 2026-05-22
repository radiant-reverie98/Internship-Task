import React from 'react';

const FeaturedImage = () => {
  // Cinematic, high-quality production image representation
  const IMAGE_URL = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80";
  const IMAGE_ALT = "Modern minimalist desktop setup representing software architecture workspace";

  return (
    <section className="w-full bg-white py-6 md:py-10 font-sans antialiased">
      {/* 
        Maximum layout boundary configuration.
        Matches standard single article text widths perfectly or can scale to max-w-4xl/5xl 
        depending on how pronounced you want the header break to be.
      */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Core Media Framing Container */}
        <div className="w-full aspect-[16/9] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/50 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.01)] group relative cursor-pointer">
          
          {/* Main Visual Image Element */}
          <img 
            src={IMAGE_URL} 
            alt={IMAGE_ALT}
            loading="eager" // Eager load as it's the main contextual fold element
            className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.015] transition-transform duration-700 ease-out"
          />

          {/* Micro Ambient Glass Overlap Mask */}
          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/[0.005] pointer-events-none transition-colors duration-500"></div>
          
        </div>

        {/* Optional Clean Minimal Image Caption Layout */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400">
          <span>Workspace setup</span>
          <span className="inline-block h-1 w-1 rounded-full bg-slate-300"></span>
          <span>Photography via Unsplash</span>
        </div>

      </div>
    </section>
  );
};

export default FeaturedImage;