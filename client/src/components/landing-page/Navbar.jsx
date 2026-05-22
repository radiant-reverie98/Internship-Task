import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02),0_4px_6px_-2px_rgba(0,0,0,0.01)] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side: Brand Logo */}
          <div className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-cyan-400 flex items-center justify-center shadow-sm shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg tracking-tight">N</span>
            </div>
            <Link to="/"><span className="text-lg font-bold text-slate-900 tracking-tight transition-colors duration-200 group-hover:text-slate-800">
              Noteflux<span className="text-cyan-500">.</span>
            </span></Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200">
              Home
            </a>
            <a href="/blogs" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200">
              Blogs
            </a>
            <a href="/about" className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200">
              About
            </a>
          </div>

          {/* Right Side: Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/login" 
              className="text-sm font-semibold text-slate-700 bg-transparent border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-4 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              Login
            </a>
            <a 
              href="/register" 
              className="text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20 px-4 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100/80 focus:outline-none transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/80 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-3 pb-6 space-y-3">
          <a href="/" className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-600 transition-all">
            Home
          </a>
          <a href="/blogs" className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-600 transition-all">
            Blogs
          </a>
          <a href="/about" className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-600 transition-all">
            About
          </a>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 px-3">
            <a 
              href="/login" 
              className="w-full text-center font-semibold text-slate-700 bg-transparent border border-slate-200 py-2.5 rounded-xl text-sm hover:bg-slate-50 transition-all"
            >
              Login
            </a>
            <a 
              href="/register" 
              className="w-full text-center font-semibold text-white bg-cyan-500 hover:bg-cyan-600 py-2.5 rounded-xl text-sm transition-all shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;