'use client';

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface RainDrop {
  id: number;
  x: string;
  delay: number;
  duration: number;
  height: string;
  opacity: number;
}

// Word-by-Word Animation Variants (100% Type-Safe)
const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};



const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

// Custom Social SVG Components
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com', icon: GitHubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { name: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
  { name: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
];

export default function HeroSection() {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);

  // Safely generate raindrops on client-side
  useEffect(() => {
    const drops: RainDrop[] = Array.from({ length: 45 }).map((_, index) => ({
      id: index,
      x: `${(index / 45) * 100}%`,
      delay: Math.random() * 4,
      duration: 1.2 + Math.random() * 1.8,
      height: `${40 + Math.random() * 60}px`,
      opacity: 0.4 + Math.random() * 0.5,
    }));
    setRainDrops(drops);
  }, []);

  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1920px] mx-auto overflow-hidden text-neutral-900 dark:text-neutral-100 py-6 lg:py-10 transition-colors duration-300">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:32px_32px] opacity-40 dark:opacity-30 pointer-events-none z-0" />

      {/* High-Visibility Rain Animation Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {rainDrops.map((drop) => (
          <motion.div
            key={drop.id}
            initial={{ y: '-20%', opacity: 0 }}
            animate={{
              y: ['0%', '125%'],
              opacity: [0, drop.opacity, 0],
            }}
            transition={{
              duration: drop.duration,
              repeat: Infinity,
              delay: drop.delay,
              ease: 'linear',
            }}
            style={{
              left: drop.x,
              height: drop.height,
            }}
            className="absolute w-[2px] bg-gradient-to-b from-transparent via-sky-400/80 dark:via-neutral-200/90 to-transparent rounded-full drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
          />
        ))}
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center z-10">
        <div className="lg:col-span-7 space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300/80 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/60 backdrop-blur-md text-xs text-neutral-700 dark:text-neutral-400 font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for High-Impact Roles</span>
          </motion.div>

          {/* Word-by-Word Animated Heading */}
          <motion.h1
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.08] text-neutral-900 dark:text-neutral-100 flex flex-wrap gap-x-3.5 gap-y-1"
          >
            <motion.span variants={wordVariants}>Crafting</motion.span>
            
            <motion.span
              variants={wordVariants}
              className="font-serif italic font-normal text-neutral-500 dark:text-neutral-400"
            >
              digital
            </motion.span>
            
            <motion.span
              variants={wordVariants}
              className="font-serif italic font-normal text-neutral-500 dark:text-neutral-400"
            >
              experiences
            </motion.span>
            
            <motion.span variants={wordVariants}>with</motion.span>
            <motion.span variants={wordVariants}>precision</motion.span>
            <motion.span variants={wordVariants}>&</motion.span>
            <motion.span variants={wordVariants}>purpose.</motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light leading-relaxed"
          >
            Full-Stack Software Engineer specializing in building scalable web architectures, 
            fluid micro-interactions, and high-performance digital products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <a
              href="/resume.pdf"
              download="Resume.pdf"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 font-medium text-xs sm:text-sm rounded-full overflow-hidden transition-all duration-300 active:scale-95 hover:shadow-lg"
            >
              <Download className="w-4 h-4 text-neutral-100 dark:text-neutral-950 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-200/80 dark:bg-neutral-900/80 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white font-medium text-xs sm:text-sm rounded-full transition-all duration-300 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="pt-3 border-t border-neutral-200 dark:border-neutral-900/80 flex items-center gap-4"
          >
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest mr-1">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neutral-300 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Profile Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-300/80 dark:border-neutral-800/80 bg-neutral-200/50 dark:bg-neutral-900/40 p-2 backdrop-blur-md">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-950">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Developer Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}