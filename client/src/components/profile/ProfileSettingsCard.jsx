import React, { useState } from 'react';

const ProfileSettingsCard = () => {
  const [formData, setFormData] = useState({
    name: 'Tejendra Singh',
    email: 'tejendra@example.com',
    phone: '+91 98765 43210',
    bio: 'Full-stack engineer and technical writer. Passionate about designing modular web architectures and micro-frontends with crisp, minimal typography layout aesthetics.',
  });

  const [avatarPreview, setAvatarPreview] = useState(
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving profile configurations:', { ...formData, avatarPreview });
  };

  return (
    <section className="w-full bg-[#F8FAFC] pb-24 font-sans antialiased p-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Core Settings Form Card */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.015),0_1px_3px_rgba(0,0,0,0.01)] space-y-8"
        >
          
          {/* 1. Profile Photo Upload UI with Circular Avatar Preview */}
          <div className="space-y-3 flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1 text-left">
              <h3 className="text-xs font-bold text-slate-700 tracking-wider uppercase">Profile Avatar</h3>
              <p className="text-xs font-medium text-slate-400 max-w-[200px] sm:max-w-xs">
                Click the image container to upload your identity asset. Recommended size 250x250px.
              </p>
            </div>
            
            {/* Interactive File Input Wrapper */}
            <label className="relative h-24 w-24 rounded-full bg-slate-50 border border-slate-200 shadow-sm overflow-hidden cursor-pointer group shrink-0 focus-within:ring-4 focus-within:ring-cyan-500/10 focus-within:border-cyan-500/40 transition-all duration-200">
              <input 
                type="file" 
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10" 
              />
              
              {/* Dynamic Image Display */}
              <img 
                src={avatarPreview} 
                alt="Active account user profile presentation" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Modern Hover Edit Overlay Grid */}
              <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                <svg className="h-4 w-4 stroke-current fill-none stroke-[2] text-white mb-0.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                <span className="text-[10px] font-bold tracking-wide uppercase">Edit</span>
              </div>
            </label>
          </div>

          {/* Form Core Metadata Split Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 2. Full Name Input */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150"
              />
            </div>

            {/* 3. Email Input */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150"
              />
            </div>

            {/* 4. Phone Number Input */}
            <div className="space-y-1.5 text-left sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150"
              />
            </div>
          </div>

          {/* 5. Short Bio Textarea */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-slate-700 tracking-wider uppercase" htmlFor="bio">
              Short Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Describe your writing perspective..."
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-150 resize-none leading-relaxed"
            />
          </div>

          {/* Form Action Submissions Block */}
          <div className="flex items-center justify-end pt-5 border-t border-slate-100">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm rounded-xl shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-200 active:scale-[0.98]"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ProfileSettingsCard;