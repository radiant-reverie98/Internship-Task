import React, { useState } from 'react';

const BlogFormCard = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
  });
  const [imageName, setImageName] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Publishing Blog Data:', { ...formData, fileName: imageName });
  };

  return (
    <section className="w-full bg-[#F8FAFC] pb-24 font-sans antialiased p-4">
      {/* Centered container with max-width optimized for high-end workspace layouts */}
      <div className="max-w-3xl mx-auto">
        
        {/* Core Form Card */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.015),0_1px_3px_rgba(0,0,0,0.01)] space-y-6"
        >
          
          {/* 1. Blog Title Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="title">
              Blog Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Architecting a Resilient Web Hook Engine"
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150"
            />
          </div>

          {/* 2. Category Dropdown Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="category">
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 appearance-none focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150 cursor-pointer"
              >
                <option value="" disabled>Select a category</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="growth">Growth</option>
                <option value="writing">Writing</option>
              </select>
              {/* Custom SVG chevron arrow right-aligned */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                <svg className="h-4 w-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3. Featured Image Upload UI */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 tracking-wider uppercase">
              Featured Image
            </label>
            <label className="relative flex flex-col items-center justify-center w-full min-h-[160px] bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 hover:border-cyan-500/40 focus-within:ring-4 focus-within:ring-cyan-500/10 focus-within:border-cyan-500/40 transition-all duration-200 group p-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                {/* Upload Action Icon */}
                <div className="h-10 w-10 rounded-xl bg-white border border-slate-200/80 text-slate-400 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] group-hover:text-cyan-500 group-hover:border-cyan-500/20 transition-all duration-200">
                  <svg className="h-5 w-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                </div>
                
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors">
                    {imageName ? imageName : 'Click to upload or drag image file'}
                  </p>
                  <p className="text-xs font-medium text-slate-400">
                    PNG, JPG, or WEBP formats up to 5MB max
                  </p>
                </div>
              </div>
            </label>
          </div>

          {/* 4. Short Excerpt Textarea */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="excerpt">
              Short Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows="2"
              required
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Write a concise overview summaries snippet explaining what your article addresses..."
              className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150 resize-none leading-relaxed"
            />
          </div>

          {/* 5. Blog Content Textarea */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="content">
              Blog Content
            </label>
            <textarea
              id="content"
              name="content"
              rows="8"
              required
              value={formData.content}
              onChange={handleChange}
              placeholder="Unleash your perspective... Compose using standard text structure parameters."
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150 resize-y leading-relaxed"
            />
          </div>

          {/* Form Action Submissions Block */}
          <div className="flex items-center justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm rounded-xl shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-200 active:scale-[0.98]"
            >
              Publish Article
            </button>
          </div>

        </form>
        
      </div>
    </section>
  );
};

export default BlogFormCard;