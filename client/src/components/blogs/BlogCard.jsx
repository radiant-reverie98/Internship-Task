import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {

  return (
    <Link to ={`/blog/${post.id}`}>
    <article className="group flex flex-col bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.06)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">

      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">

        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/[0.01] transition-colors duration-300"></div>
      </div>


      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">

        <div className="space-y-3">

          {/* Category */}
          <span className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-100/60 text-xs font-semibold text-cyan-700 tracking-wide">
            {post.category}
          </span>


          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-200 line-clamp-2 leading-snug tracking-tight">
            {post.title}
          </h3>


          {/* Excerpt */}
          <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed font-medium">
            {post.excerpt}
          </p>

        </div>


        {/* Footer */}
        <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">

          {/* Author */}
          <div className="flex items-center gap-3">

            <img
              src={
                post.author_avatar ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt={post.author_name}
              className="h-8 w-8 rounded-full object-cover ring-2 ring-slate-100"
            />

            <div className="text-left">

              <p className="text-xs font-semibold text-slate-800 leading-none mb-0.5">
                {post.author_name}
              </p>

              <p className="text-[11px] font-medium text-slate-400">

                {
                  new Date(post.created_at)
                    .toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                }

              </p>
            </div>
          </div>


          {/* Optional Reading Icon */}
          <div className="flex items-center text-xs font-medium text-slate-400 gap-1">

            <svg
              className="h-3.5 w-3.5 stroke-current fill-none stroke-[2]"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Blog</span>

          </div>

        </div>
      </div>
    </article>
    </Link>
  );
};

export default BlogCard;