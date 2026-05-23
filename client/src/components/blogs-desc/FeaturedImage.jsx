import React from 'react';

const FeaturedImage = ({ image, title }) => {

  return (
    <section className="w-full bg-white py-6 md:py-10 font-sans antialiased">

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Image Container */}
        <div className="w-full aspect-[16/9] bg-slate-100 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/50 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.01)] group relative">

          <img
            src={image}
            alt={title}
            loading="eager"
            className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.015] transition-transform duration-700 ease-out"
          />


          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/[0.005] pointer-events-none transition-colors duration-500"></div>

        </div>


        {/* Optional Caption */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400">

          <span>Featured article image</span>

          <span className="inline-block h-1 w-1 rounded-full bg-slate-300"></span>

          <span>Uploaded by author</span>

        </div>

      </div>

    </section>
  );
};

export default FeaturedImage;