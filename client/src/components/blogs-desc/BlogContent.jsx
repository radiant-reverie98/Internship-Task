import React from 'react';

const BlogContent = ({ content }) => {

  return (
    <article className="w-full bg-white pb-24 md:pb-32 font-sans antialiased">

      {/* Content Container */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        <div className="text-slate-800 text-[17px] sm:text-[18px] leading-relaxed font-normal whitespace-pre-line">

          {content}

        </div>

      </div>

    </article>
  );
};

export default BlogContent;