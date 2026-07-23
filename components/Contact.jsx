import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, Send, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    // Construct mailto URL
    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setStatusMessage('Opening your default email client...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Me</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2">
            Interested in collaboration, internship opportunities, or technical inquiries? Reach out via email, phone, or LinkedIn!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-lg bg-slate-950 text-cyan-400 border border-slate-800">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] font-medium text-slate-400 uppercase">Email Address</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-950 text-indigo-400 border border-slate-800">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-slate-400 uppercase">Phone Number</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-indigo-400 transition">
                        +91 {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 text-sky-400 border border-slate-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-400 uppercase">Institution & Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200">
                      {personalInfo.college}, {personalInfo.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Online Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition duration-200"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 transition duration-200"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Mail Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Send Me a Message
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your details to draft an email directly to my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Inquiry / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 transition resize-none"
                  />
                </div>

                {statusMessage && (
                  <p className="text-xs text-cyan-400 font-semibold bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-500/20">
                    {statusMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition duration-300 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
