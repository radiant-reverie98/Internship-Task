import React from 'react';

const ProfileActions = () => {
  const handleCancel = () => {
    console.log('Cancel action triggered');
  };

  const handleDeleteProfile = () => {
    console.log('Delete Profile sequence initialized');
  };

  return (
    <div className="w-full bg-[#F8FAFC] pb-24 font-sans antialiased p-4">
      {/* Centered layout constrained to match your main settings card widths */}
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* 1. SECONDARY FORM ACTIONS (CANCEL ONLY) */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={handleCancel}
            className="font-semibold text-slate-500 bg-white border border-slate-200/80 hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50/50 px-5 py-2.5 rounded-xl text-xs transition-all duration-200 active:scale-[0.98] shadow-[0_1px_2px_rgba(0,0,0,0.005)]"
          >
            Cancel and Exit
          </button>
        </div>

        {/* 2. PREMIUM MINIMAL DANGER ZONE AREA */}
        <div className="bg-white border border-red-100 rounded-2xl overflow-hidden shadow-[0_4px_25px_-5px_rgba(239,68,68,0.01)] relative">
          {/* Accent Danger Anchor Bar */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-400 to-rose-500"></div>
          
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider flex items-center gap-1.5">
                <svg className="h-4 w-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Danger Zone
              </h3>
              <p className="text-sm font-bold text-slate-800 tracking-tight pt-1">
                Delete this profile channel permanently
              </p>
              <p className="text-xs font-medium text-slate-400 max-w-md leading-relaxed">
                Once confirmed, your account indexing node, public stories backlog, and newsletter distribution routing parameters are fully purged. This action cannot be reversed.
              </p>
            </div>

            {/* Elegant Destructive Button */}
            <button
              type="button"
              onClick={handleDeleteProfile}
              className="w-full sm:w-auto whitespace-nowrap text-center font-semibold text-red-600 bg-red-50/40 border border-red-200/60 hover:bg-red-50 hover:border-red-300 px-4 py-2.5 rounded-xl text-xs transition-all duration-200 active:scale-[0.98]"
            >
              Delete Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileActions;