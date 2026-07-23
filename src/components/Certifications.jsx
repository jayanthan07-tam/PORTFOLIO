import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => {
            const isCompleted = cert.badge === "Verified";
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${isCompleted ? 'text-emerald-400' : 'text-slate-400'}`}>
                      <Award className="w-6 h-6" />
                    </div>
                    
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border flex items-center gap-1 ${
                      isCompleted 
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30' 
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}>
                      {isCompleted ? <ShieldCheck className="w-3 h-3 text-emerald-400" /> : <Clock className="w-3 h-3" />}
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verification Status</span>
                  <span className={isCompleted ? "text-emerald-400 font-semibold" : "text-slate-500 font-mono"}>
                    {isCompleted ? "Verified Credential" : "To be updated"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
