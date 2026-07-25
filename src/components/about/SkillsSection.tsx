'use client';

import { motion } from 'framer-motion';
import { Layout, Server, Wrench, CheckCircle2 } from 'lucide-react';

interface SkillItem {
  name: string;
  proficiency: number; // Percentage (e.g. 90)
  level: string; // e.g. Advanced, Proficient
}

interface SkillCategory {
  category: string;
  icon: React.ElementType;
  description: string;
  skills: SkillItem[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: Layout,
    description: 'Crafting responsive, component-driven, and high-performance user interfaces.',
    skills: [
      { name: 'React.js / Next.js', proficiency: 92, level: 'Advanced' },
      { name: 'TypeScript', proficiency: 85, level: 'Proficient' },
      { name: 'Tailwind CSS', proficiency: 95, level: 'Expert' },
      { name: 'Framer Motion', proficiency: 88, level: 'Proficient' },
      { name: 'HTML5 / CSS3 / JavaScript (ES6+)', proficiency: 95, level: 'Expert' },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: Server,
    description: 'Building secure server architectures, RESTful APIs, and database models.',
    skills: [
      { name: 'Node.js / Express.js', proficiency: 82, level: 'Proficient' },
      { name: 'MongoDB / Mongoose', proficiency: 80, level: 'Proficient' },
      { name: 'RESTful API Design', proficiency: 88, level: 'Proficient' },
      { name: 'JWT & Web Security', proficiency: 85, level: 'Proficient' },
      { name: 'Prisma ORM', proficiency: 75, level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & Architecture',
    icon: Wrench,
    description: 'Workflow optimization, version control, and modern dev environment tooling.',
    skills: [
      { name: 'Git & GitHub', proficiency: 90, level: 'Advanced' },
      { name: 'Postman & API Testing', proficiency: 88, level: 'Proficient' },
      { name: 'Vercel / Netlify Deployment', proficiency: 92, level: 'Advanced' },
      { name: 'Clean Architecture & Type-Safety', proficiency: 85, level: 'Proficient' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
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
           Technical Competencies
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
          Technical Capabilities & <span className="font-serif italic text-neutral-500 dark:text-neutral-400">proficiency</span>.
        </h2>
      </motion.div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {SKILLS_DATA.map((cat, catIdx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 backdrop-blur-md space-y-6"
            >
              {/* Category Title & Icon */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight text-neutral-900 dark:text-neutral-100">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Progress Bars Container */}
              <div className="space-y-5 pt-2">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-2">
                    {/* Skill Info Header */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-neutral-500">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.2 + skillIdx * 0.1, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        className="h-full rounded-full bg-neutral-900 dark:bg-neutral-100"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}