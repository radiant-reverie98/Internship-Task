import React from 'react';

const BlogHeader = ({ blog }) => {

  return (
    <header className="w-full bg-white pt-16 pb-8 md:pt-24 font-sans antialiased">

      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col items-center text-center space-y-6">

          {/* Category */}
          <span className="inline-block px-3 py-1 rounded-md bg-cyan-50 border border-cyan-100/60 text-xs font-bold text-cyan-700 uppercase tracking-wider">
            {blog.category}
          </span>


          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-2xl">
            {blog.title}
          </h1>


          {/* Excerpt */}
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
            {blog.excerpt}
          </p>


          {/* Divider */}
          <div className="w-full pt-4">
            <div className="w-full h-[1px] bg-slate-100"></div>
          </div>


          {/* Metadata */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">

            {/* Author */}
            <div className="flex items-center gap-3">

              <img
                src={
                  blog.author_avatar ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt={blog.author_name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-100 shadow-sm"
              />

              <div className="text-left">

                <p className="text-sm font-bold text-slate-800 leading-tight mb-0.5">
                  {blog.author_name}
                </p>

                <p className="text-xs font-medium text-slate-400">

                  {
                    blog.author_bio ||
                    "Passionate writer and blogger."
                  }

                </p>

              </div>
            </div>


            {/* Date */}
            <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">

              <span className="bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-md">

                {
                  new Date(blog.created_at)
                    .toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                }

              </span>


              <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-200"></span>


              {/* Blog Indicator */}
              <div className="flex items-center gap-1.5 text-slate-500 bg-cyan-50/40 border border-cyan-100/30 px-2.5 py-1 rounded-md">

                <svg
                  className="h-3.5 w-3.5 text-cyan-600 stroke-current fill-none stroke-[2.5]"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="text-cyan-700">
                  Article
                </span>

              </div>

            </div>

          </div>


          {/* Bottom Divider */}
          <div className="w-full pt-4">
            <div className="w-full h-[1px] bg-slate-200/80"></div>
          </div>

        </div>

      </div>

    </header>
  );
};

export default BlogHeader;