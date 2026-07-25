'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section 
      id="education" 
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
         Academic Background
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
          Educational <span className="font-serif italic text-neutral-500 dark:text-neutral-400">qualification</span>.
        </h2>
      </motion.div>

      {/* Main Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="group relative p-6 sm:p-10 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500 overflow-hidden"
      >
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-neutral-300/20 dark:bg-neutral-800/20 rounded-full blur-3xl pointer-events-none group-hover:bg-neutral-400/20 dark:group-hover:bg-neutral-700/20 transition-all duration-500" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Degree & Institution Info (Left Side - 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300/80 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-800/40 text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <GraduationCap className="w-4 h-4 text-emerald-500" />
              <span>Bachelor of Science</span>
            </div>

            {/* Degree Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
              B.Sc. (Honours) in Mathematics
            </h3>

            {/* Institution & Details */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-medium">
                <BookOpen className="w-4 h-4 text-neutral-400" />
                National University, Bangladesh
              </span>
            </div>

            {/* Overview Paragraph */}
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-light leading-relaxed pt-2">
              My academic journey in pure mathematics laid the foundational bedrock for my analytical thinking. It trained me to decompose complex real-world problems into structured logic, algorithmic models, and optimized system architectures.
            </p>
          </div>

          {/* Focus & Core Pillars (Right Side - 5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-200/40 dark:bg-neutral-950/50 border border-neutral-300/50 dark:border-neutral-800/60 space-y-4">
            
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-neutral-500" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-neutral-200 font-semibold">
                Core Focus & Capabilities
              </h4>
            </div>

            {/* Key Skill Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                'Applied Analytical Logic',
                'Mathematical Structures',
                'Problem-Solving',
                'Computational Thinking',
              ].map((focus) => (
                <div
                  key={focus}
                  className="px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-300/60 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}