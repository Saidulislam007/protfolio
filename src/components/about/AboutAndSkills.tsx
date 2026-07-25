'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function AboutAndSkills() {
  return (
    <section 
      id="about" 
      className="py-10 sm:py-14 px-4 sm:px-8 max-w-[900px] mx-auto border-t border-neutral-200 dark:border-neutral-900/80 transition-colors duration-300"
    >
      {/* Location Badge & Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-6"
      >
        <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          <MapPin className="w-3 h-3 text-emerald-500" />
          <span>Khulna, Bangladesh</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
          About <span className="font-serif italic text-neutral-500 dark:text-neutral-400">Me</span>
        </h2>
      </motion.div>

      {/* Compact Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4 text-neutral-700 dark:text-neutral-300 font-light text-xs sm:text-sm leading-relaxed"
      >
        {/* Intro */}
        <p className="text-sm sm:text-base font-normal text-neutral-900 dark:text-neutral-100">
          Hi, I&apos;m <span className="font-medium underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">Saidul Islam</span>, a passionate Full Stack Web Developer who enjoys building modern, scalable, and user-friendly web applications.
        </p>

        {/* Programming Journey */}
        <p>
          My programming journey started with curiosity about how websites work behind the scenes. I began by learning HTML, CSS, and JavaScript, then gradually expanded into <strong className="font-medium text-neutral-900 dark:text-neutral-100">React, Next.js, TypeScript, Node.js, Express.js, and MongoDB</strong>. Along the way, I developed real-world projects that strengthened my understanding of frontend architecture, backend development, authentication, APIs, database design, and responsive UI development. Every project has helped me improve my problem-solving skills and write cleaner, more maintainable code.
        </p>

        {/* Work Enjoyed */}
        <p>
          The work I enjoy most is creating full-stack applications that solve real-world problems. I love designing intuitive user interfaces, building secure backend systems, optimizing performance, and turning ideas into polished products. I&apos;m especially interested in writing scalable code, improving user experience, and continuously learning modern technologies and best practices.
        </p>

        {/* Outside of Programming */}
        <p>
          Outside of programming, I enjoy exploring new technologies, reading about software engineering, contributing to personal projects, and improving my development workflow. I also like spending time with family and friends, watching technology-related content, and occasionally playing sports to stay active and maintain a healthy work-life balance.
        </p>

        {/* Developer Mindset */}
        <p className="pt-3 border-t border-neutral-200 dark:border-neutral-900 text-neutral-900 dark:text-neutral-100 font-normal">
          I consider myself a curious, patient, and detail-oriented developer. I enjoy learning from challenges, collaborating with others, and continuously improving my skills. My goal is not just to write code, but to build meaningful digital experiences that provide real value to users.
        </p>
      </motion.div>
    </section>
  );
}