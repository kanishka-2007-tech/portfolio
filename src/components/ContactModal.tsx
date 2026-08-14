import React, { useState } from 'react';
import { USER_BIO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1000);
  };

  const handleReset = () => {
    setSent(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#010f1f]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card card-laser-border rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#b9cacb] hover:text-[#00f0ff] p-1 rounded-lg"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>
          <div>
            <h3 className="font-geist text-xl font-bold text-[#d4e4fa]">Get In Touch</h3>
            <p className="font-label-sm text-xs text-[#00f0ff]">Connect directly with Kanishka Gupta</p>
          </div>
        </div>

        {sent ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h4 className="font-geist text-xl font-bold text-[#d4e4fa]">Message Dispatched!</h4>
            <p className="font-body-md text-sm text-[#b9cacb]">
              Thank you, <span className="text-[#00f0ff] font-semibold">{formData.name}</span>. Your message has been received. I will respond to <span className="text-[#00f0ff]">{formData.email}</span> shortly.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="btn-ghost font-label-sm text-xs px-4 py-2 rounded-lg"
              >
                Send Another
              </button>
              <button
                onClick={onClose}
                className="btn-primary font-label-sm text-xs px-5 py-2 rounded-lg"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-label-sm text-xs text-[#b9cacb] mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full bg-[#0d1c2d] border border-[#3b494b]/50 rounded-lg px-4 py-2.5 text-sm text-[#d4e4fa] focus:border-[#00f0ff] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-label-sm text-xs text-[#b9cacb] mb-1">Your Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@company.com"
                className="w-full bg-[#0d1c2d] border border-[#3b494b]/50 rounded-lg px-4 py-2.5 text-sm text-[#d4e4fa] focus:border-[#00f0ff] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-label-sm text-xs text-[#b9cacb] mb-1">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Inquiry / Collaboration / Project"
                className="w-full bg-[#0d1c2d] border border-[#3b494b]/50 rounded-lg px-4 py-2.5 text-sm text-[#d4e4fa] focus:border-[#00f0ff] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-label-sm text-xs text-[#b9cacb] mb-1">Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share project details or opportunities..."
                className="w-full bg-[#0d1c2d] border border-[#3b494b]/50 rounded-lg px-4 py-2.5 text-sm text-[#d4e4fa] focus:border-[#00f0ff] focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-label-sm text-[11px] text-[#b9cacb]">
                Or email directly: <span className="text-[#00f0ff]">{USER_BIO.email}</span>
              </span>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary font-label-sm text-xs px-6 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{sending ? 'Transmitting...' : 'Send Message'}</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
