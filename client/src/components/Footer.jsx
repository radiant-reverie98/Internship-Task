import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200/60 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-100">
          
          {/* Brand & Platform Summary */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-cyan-400 flex items-center justify-center shadow-sm shadow-cyan-500/10">
                <span className="text-white font-bold text-base tracking-tight">N</span>
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Noteflux<span className="text-cyan-500">.</span>
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm">
              The modern, distraction-free writing environment built entirely for independent authors, developers, and content creators. 
            </p>
          </div>

          {/* Quick Links Menu */}
          <div className="md:col-span-4 text-left md:justify-self-center">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Embedded Newsletter Form */}
          <div className="md:col-span-3 text-left">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Stay Connected
            </h3>
            <p className="text-sm font-medium text-slate-500 mb-4 leading-relaxed">
              Get weekly strategies on writing and distribution directly in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                required
                placeholder="your@email.com"
                className="w-full px-3 py-1.5 bg-[#F8FAFC] border border-slate-200 rounded-lg text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all"
              />
              <button 
                type="submit" 
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all active:scale-[0.98]"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Panel: Copyright & Brand Actions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <p className="text-xs font-medium text-slate-400 order-2 sm:order-1">
            &copy; {currentYear} Noteflux. All rights reserved. Built with precision.
          </p>

          {/* Social Links without GitHub */}
          <div className="flex items-center gap-5 order-1 sm:order-2">
            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-cyan-500 transition-colors duration-200"
              aria-label="Twitter Profile"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-cyan-500 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784-.79 1.75-1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email Contact (Lucide Utility) */}
            <a 
              href="mailto:hello@noteflux.com" 
              className="text-slate-400 hover:text-cyan-500 transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-4 w-4 stroke-[2]" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;