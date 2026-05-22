import React, { useState } from 'react';

// Production dummy content array representing typical platform user comments
const INITIAL_COMMENTS = [
  {
    id: 1,
    username: 'Sarah Chen',
    date: '2 hours ago',
    text: 'This architecture deep-dive is exactly what our team needed. We’ve been running into relational row-locking bottlenecks during our peak webhooks bursts. The decoupling model with a memory stream makes absolute sense.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    username: 'Marcus Vance',
    date: '1 day ago',
    text: 'Beautiful layout readability. The explanation regarding jittered backoff paths is super important. Implementing a clean fallback queue instead of standard repeating loops instantly cuts down systemic self-inflicted DDoS spikes.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

const Comments = () => {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const addedComment = {
      id: Date.now(),
      username: 'Alex Mercer', // Fallback username representing active local session
      date: 'Just now',
      text: newComment,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    };

    setComments([addedComment, ...comments]);
    setNewComment('');
  };

  return (
    <section className="w-full bg-white pb-24 font-sans antialiased">
      {/* Centered container constrained to the standard comfortable reading width */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Comments</h2>
          <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
            {comments.length}
          </span>
        </div>

        {/* Comment Input Card Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01),0_1px_3px_rgba(0,0,0,0.01)] mb-10 transition-all duration-300 focus-within:shadow-[0_8px_30px_rgba(6,182,212,0.03)]">
          <div className="space-y-4">
            <textarea
              rows="3"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Join the discussion... Share your thoughts."
              required
              className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500/30 transition-all resize-none leading-relaxed"
            />
            
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-xs rounded-xl shadow-sm shadow-cyan-500/10 transition-all duration-200 active:scale-[0.98]"
              >
                Submit Comment
              </button>
            </div>
          </div>
        </form>

        {/* Display Stack Cards Container */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div 
              key={comment.id}
              className="bg-white border border-slate-200/60 p-5 sm:p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.005),0_1px_3px_rgba(0,0,0,0.005)] transition-all duration-300 hover:shadow-[0_12px_35px_-10px_rgba(0,0,0,0.02)] flex items-start gap-4"
            >
              {/* User Avatar */}
              <img 
                src={comment.avatar} 
                alt={comment.username} 
                className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
              />

              {/* Comment Content Block */}
              <div className="flex-1 text-left space-y-2">
                
                {/* Meta Row Headers */}
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-none">
                    {comment.username}
                  </h4>
                  <span className="text-xs font-medium text-slate-400">
                    {comment.date}
                  </span>
                </div>

                {/* Actual Comment Body Text */}
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {comment.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Comments;