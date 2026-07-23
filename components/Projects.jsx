import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Code2, Sparkles, Terminal, CheckCircle2, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const categories = ["All Projects", "Python & AI", "Web Dev", "Java & DB", "Research / Other"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Real software applications, web interfaces, and desktop automation tools built with Python, Java, JavaScript, and SQL.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between transition-all duration-300 ${project.borderGlow} hover:-translate-y-1 hover:shadow-2xl group`}
            >
              <div>
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 border border-slate-800">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet Features */}
                <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Features:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 transition duration-200"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Code</span>
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition duration-200"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
