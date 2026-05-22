import React from 'react';

// Production dummy object representing the active single article data
const ARTICLE_DATA = {
  title: 'Architecting a Resilient Web Hook Notification Engine for High-Scale SaaS Platforms',
  excerpt: 'A comprehensive deep-dive into managing distributed retry state, handling circuit-breaking edge drops, and verifying cryptographic webhook payloads safely under extreme traffic surges.',
  category: 'Engineering',
  publishedDate: 'May 22, 2026',
  readingTime: '11 min read',
  author: {
    name: 'Tejendra Singh',
    role: 'Core Platform Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
};

const BlogHeader = () => {
  return (
    <header className="w-full bg-white pt-16 pb-8 md:pt-24 font-sans antialiased">
      {/* Comfortable reading width limitation constraint (max-w-3xl / ~65-70ch) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-md bg-cyan-50 border border-cyan-100/60 text-xs font-bold text-cyan-700 uppercase tracking-wider">
            {ARTICLE_DATA.category}
          </span>

          {/* Large Bold Title with responsive fluid scaling */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-2xl">
            {ARTICLE_DATA.title}
          </h1>

          {/* Descriptive Excerpt / Subtitle */}
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
            {ARTICLE_DATA.excerpt}
          </p>

          {/* Separation Divider line */}
          <div className="w-full pt-4">
            <div className="w-full h-[1px] bg-slate-100"></div>
          </div>

          {/* Integrated Metadata Row Layout */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            
            {/* Author Profile Info */}
            <div className="flex items-center gap-3">
              <img 
                src={ARTICLE_DATA.author.avatar} 
                alt={ARTICLE_DATA.author.name} 
                className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-100 shadow-sm"
              />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800 leading-tight mb-0.5">
                  {ARTICLE_DATA.author.name}
                </p>
                <p className="text-xs font-medium text-slate-400">
                  {ARTICLE_DATA.author.role}
                </p>
              </div>
            </div>

            {/* Publication Timestamp Meta details */}
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
              <span className="bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-md">
                {ARTICLE_DATA.publishedDate}
              </span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-200"></span>
              <div className="flex items-center gap-1.5 text-slate-500 bg-cyan-50/40 border border-cyan-100/30 px-2.5 py-1 rounded-md">
                <svg className="h-3.5 w-3.5 text-cyan-600 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-cyan-700">{ARTICLE_DATA.readingTime}</span>
              </div>
            </div>

          </div>

          {/* Sub-header structural boundary */}
          <div className="w-full pt-4">
            <div className="w-full h-[1px] bg-slate-200/80"></div>
          </div>

        </div>

      </div>
    </header>
  );
};

export default BlogHeader;