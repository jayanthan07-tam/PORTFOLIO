import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { Trophy, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Milestones</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mx-auto">
              <RefreshCw className="w-5 h-5 animate-spin-slow" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {achievementsData.message}
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              {achievementsData.note}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
