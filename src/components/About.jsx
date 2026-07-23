import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, GraduationCap, Code2, Brain, Sparkles, Target, Compass } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: "Academic Background",
      desc: "2nd Year B.Tech CSBS Student at VSB Engineering College, Karur."
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "Core Stack",
      desc: "Python, Java, JavaScript, MySQL, SQLite, HTML5/CSS3 & Web APIs."
    },
    {
      icon: <Brain className="w-5 h-5 text-sky-400" />,
      title: "Focus Areas",
      desc: "AI desktop assistants, GUI tools, CRUD systems, and frontend portals."
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: "Career Objective",
      desc: "Seeking technical internships to solve real-world software challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Jayanthan P.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Decorative gradient blur outline */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-xl">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                        JP
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">{personalInfo.title}</p>
                    <p className="text-xs text-slate-400 font-mono mt-1">{personalInfo.college}</p>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Degree</span>
                    <span className="text-slate-200 font-medium">B.Tech CSBS</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Academic Standing</span>
                    <span className="text-cyan-400 font-semibold">{personalInfo.year}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">CGPA</span>
                    <span className="text-indigo-400 font-bold bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                      {personalInfo.cgpa}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Location</span>
                    <span className="text-slate-200 font-medium">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={personalInfo.resumePath}
                    download="Jayanthan_P_Resume.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition duration-300"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download Full Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Compass className="w-6 h-6 text-cyan-400" />
                Aspiring Software Developer & Problem Solver
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                My academic journey in Computer Science and Business Systems equips me with both technical programming fundamentals and an understanding of modern enterprise technology workflows. I thrive on translating concepts into tangible projects — from voice-command desktop automation to relational database applications and responsive web applications.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-400 transition">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
