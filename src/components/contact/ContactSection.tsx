'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, Check, Copy, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactDetails = {
    email: 'said38383742@gmail.com',
    phone: '+8801911625953',
    whatsapp: '+8801911625953',
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1920px] mx-auto border-t border-neutral-200 dark:border-neutral-900/80 transition-colors duration-300"
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 sm:mb-16 space-y-3"
      >
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
          Let’s start a <span className="font-serif italic text-neutral-500 dark:text-neutral-400">conversation</span>.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* DIRECT CONTACT CARDS (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group p-6 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md flex items-center justify-between gap-4 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Email Address</span>
                <a 
                  href={`mailto:${contactDetails.email}`}
                  className="text-sm sm:text-base font-light text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-1"
                >
                  {contactDetails.email}
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(contactDetails.email, 'email')}
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              title="Copy Email"
            >
              {copiedText === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group p-6 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md flex items-center justify-between gap-4 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">WhatsApp Direct</span>
                <a 
                  href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-light text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-1"
                >
                  {contactDetails.whatsapp}
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(contactDetails.whatsapp, 'whatsapp')}
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              title="Copy WhatsApp"
            >
              {copiedText === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group p-6 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md flex items-center justify-between gap-4 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Phone Call</span>
                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="text-sm sm:text-base font-light text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-1"
                >
                  {contactDetails.phone}
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(contactDetails.phone, 'phone')}
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              title="Copy Phone"
            >
              {copiedText === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </motion.div>

        </div>

        {/* INTERACTIVE FORM (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md"
        >
          {formSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100">Message Sent Successfully!</h3>
              <p className="text-xs text-neutral-500 font-mono">Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 font-medium text-xs sm:text-sm rounded-full transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}