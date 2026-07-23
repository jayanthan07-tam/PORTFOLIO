import React from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  UserCheck, 
  Check, 
  Sparkles 
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Database: Database,
  Cpu: Cpu,
  Wrench: Wrench,
  UserCheck: UserCheck
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Organized tech stack and foundational skill sets honed through coursework, personal projects, and continuous practice.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 transition duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-1.5 py-0.5 rounded">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
