import React from 'react';

// Production-ready dummy content array representing typical platform posts
const FEATURED_POSTS = [
  {
    id: 1,
    title: 'Designing for the Modern Web: Balances, Blurs, and Borders',
    excerpt: 'Explore how modern SaaS applications leverage micro-shadows, delicate gradients, and strict whitespace rules to drive user engagement.',
    category: 'Design',
    publishedDate: 'May 18, 2026',
    readingTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 2,
    title: 'Scaling Beyond the Monolith: A Clean Edge-First Approach',
    excerpt: 'An in-depth breakdown of serverless architecture patterns, low-latency framework paradigms, and globally distributed databases.',
    category: 'Engineering',
    publishedDate: 'May 14, 2026',
    readingTime: '8 min read',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 3,
    title: 'Building a Community Around Your Technical Writing Stack',
    excerpt: 'How shifting your standard publishing roadmap from unformatted markdown files to conversational editorial logic changes churn metrics.',
    category: 'Growth',
    publishedDate: 'May 10, 2026',
    readingTime: '4 min read',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Devon King',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80'
    }
  }
];

const FeaturedBlogs = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 md:py-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Featured Blogs
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Handpicked editorial updates, structural strategies, and design perspectives curated daily by industry pioneers.
          </p>
        </div>

        {/* Responsive Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
            >
              
              {/* Thumbnail Frame */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                {/* Clean Layer Accent over image link */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/[0.01] transition-colors duration-300"></div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  
                  {/* Category Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-100/60 text-xs font-semibold text-cyan-700 tracking-wide">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-200 line-clamp-2 leading-snug tracking-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt Descriptions */}
                  <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Metadata Container */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  {/* Author Profile Information */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-slate-800 leading-none mb-0.5">
                        {post.author.name}
                      </p>
                      <p className="text-[11px] font-medium text-slate-400">
                        {post.publishedDate}
                      </p>
                    </div>
                  </div>

                  {/* Reading Duration Indicator */}
                  <div className="flex items-center text-xs font-medium text-slate-400 gap-1">
                    <svg className="h-3.5 w-3.5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{post.readingTime}</span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedBlogs;