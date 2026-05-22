import React from 'react';

const ProfileHeader = () => {
  return (
    <section className="w-full bg-white pt-16 pb-10 md:pt-24 md:pb-14 font-sans antialiased overflow-hidden relative border-b border-slate-100">
      
      {/* Soft Ambient Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-6 left-1/4 w-72 h-72 bg-slate-100/40 rounded-full blur-2xl pointer-events-none -z-10"></div>

      {/* Comfortable centered container width */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-left space-y-4">
        
        {/* Settings Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.005)]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/30"></span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Account Settings</span>
        </div>

        {/* Heading & Paragraph Group */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Edit <span className="bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">Profile</span>
          </h1>
          
          <p className="text-sm sm:text-base font-medium text-slate-500 leading-relaxed max-w-xl">
            Manage your personal information and profile settings. Changes will reflect instantly across your publication channel.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProfileHeader;