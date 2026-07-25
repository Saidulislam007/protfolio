'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: () => void;
}

export default function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-neutral-100/60 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Project Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-200 dark:bg-neutral-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-2.5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
            {project.category}
          </span>
          <h3 className="text-xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/60 flex items-center justify-between">
          <button
            onClick={onViewDetails}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Live Site"
              className="p-1.5 text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}