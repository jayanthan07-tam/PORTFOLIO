import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Terminal, 
  Code, 
  Cpu, 
  ChevronDown 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const titles = [
  "CSBS Engineering Student",
  "Python & Java Developer",
  "Full-Stack Web Enthusiast",
  "AI Assistant & Automation Builder"
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Top Status Chip */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-md animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              Available for Internships & Projects
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
              VSB Engineering College
            </span>
          </div>

          {/* Main Title & Typing Text */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hello, I'm <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-10 sm:h-12 flex items-center justify-center">
              <p className="text-lg sm:text-2xl font-mono font-medium text-slate-300 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400 shrink-0 inline" />
                <span className="text-cyan-400 font-semibold">{displayedText}</span>
                <span className="w-2 h-6 bg-cyan-400 animate-pulse inline-block" />
              </p>
            </div>

            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
              Building practical software projects with Python, Java, web technologies, and automation — while continuously learning and solving real-world problems.
            </p>
          </div>

          {/* Floating Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span>Python & Java</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full-Stack Web</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Database Systems</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Jayanthan_P_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-5 pt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 shadow-md"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 text-slate-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 shadow-md"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 text-slate-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110 shadow-md"
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll down indicator */}
          <div className="pt-12 animate-bounce">
            <a href="#about" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <ChevronDown className="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
