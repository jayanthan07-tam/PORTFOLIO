import React from 'react';
import { eventsData } from '../data/portfolioData';
import { Flag, Calendar, Building2, AlertCircle, Sparkles } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-20 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-3">
            <Flag className="w-3.5 h-3.5" />
            <span>ACTIVITIES & COMPETITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hackathons & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Technical Events</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition duration-300 space-y-4"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-950/60 text-indigo-400 border border-indigo-500/20">
                  {event.type}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  {event.organizer}
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {event.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Participation Status</span>
                <span className="text-[11px] font-medium text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/20 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 text-amber-400" />
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
