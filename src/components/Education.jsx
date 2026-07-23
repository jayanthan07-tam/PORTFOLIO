import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-3" />
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-6">
              
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Education Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition duration-300 shadow-xl space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2 border border-cyan-500/20">
                      {edu.degree}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.department}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 mt-2">
                      <span className="flex items-center gap-1.5 font-medium text-slate-200">
                        <BookOpen className="w-4 h-4 text-indigo-400" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.status}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-100 bg-gradient-to-r from-indigo-950 to-slate-900 px-3 py-1.5 rounded-lg border border-indigo-500/30">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Program Overview & Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
