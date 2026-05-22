import React from 'react';
import { Feather, Mail, ShieldCheck } from 'lucide-react';

const FEATURES_DATA = [
  {
    id: 1,
    title: 'Minimal Writing Experience',
    description: 'A distraction-free canvas designed entirely around typography. Experience a beautiful Markdown editor that keeps you focused on your thoughts, not messy configuration menus.',
    icon: Feather,
  },
  {
    id: 2,
    title: 'Built-in Newsletter Stack',
    description: 'Deliver your stories directly to your readers\' inboxes the moment you hit publish. Grow an audience you own with simple, native subscription features.',
    icon: Mail,
  },
  {
    id: 3,
    title: 'Responsive Reading Experience',
    description: 'Deliver crisp text delivery to your readers across any device architecture. Perfectly balanced line-heights and sizing tailored for prolonged reading sessions.',
    icon: ShieldCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 md:py-28 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose Noteflux
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Engineered exclusively to give independent authors, technical writers, and content teams full authority over their publications.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id}
                className="group relative bg-white border border-slate-200/60 p-8 rounded-2xl shadow-[0_4px_25px_-5px_rgba(0,0,0,0.01),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.05)] hover:border-slate-200/80 hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-start text-left"
              >
                {/* Accent Backdrop Line Effect */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 rounded-t-2xl transition-opacity duration-300"></div>

                {/* Styled Icon Container */}
                <div className="h-12 w-12 rounded-xl bg-cyan-50/50 border border-cyan-100/50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-cyan-50 group-hover:text-cyan-500 transition-all duration-300">
                  <IconComponent className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Content Elements */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-200 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;