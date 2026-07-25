'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertCircle, Lightbulb, Code2 } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types/portfolio';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/70 backdrop-blur-sm">
        {/* Backdrop Click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-900 border border-neutral-800 text-neutral-100 p-6 sm:p-8 space-y-6 z-10 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Banner Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Technology Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Main Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-neutral-800 text-neutral-300 border border-neutral-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Brief Overview
            </h4>
            <p className="text-sm font-light text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenges Faced */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-2 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Key Challenges Faced
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm font-light text-neutral-300 space-y-1">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Plans */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <div className="space-y-2 p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Potential Improvements & Future Plans
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm font-light text-neutral-300 space-y-1">
                {project.futureImprovements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Links Actions */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-950 font-medium text-xs rounded-full hover:bg-white transition-all"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-800 text-neutral-200 font-medium text-xs rounded-full border border-neutral-700 hover:text-white transition-all"
              >
                <span>Client Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}