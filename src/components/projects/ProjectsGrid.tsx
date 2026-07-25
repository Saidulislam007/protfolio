'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
import { Project } from '@/types/portfolio';

const PROJECTS_DATA: Project[] = [
  {
  id: '1',
  title: 'ATELIER',
  category: 'E-Commerce / SaaS',
  description: 'An architectural suite designed for real-time analytics, dynamic node management, and automated workflow triggers.',
  image: '/Screenshot 2026-07-25 132332.png',
  tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MongoDB'],
  liveUrl: 'https://furniture-client-chi.vercel.app',
  githubUrl: 'https://github.com/example/digitools-client',
  challenges: [
    'Managing real-time state synchronization across multiple client sessions without layout shifts.',
    'Optimizing complex SVG canvas re-renders for large-scale node graphs.',
  ],
  futureImprovements: [
    'Implement collaborative live-editing using WebSockets/Socket.io.',
    'Add dark-mode themes with custom CSS variables export.',
  ],
},
  {
  id: '2',
  title: 'BiblioDrop',
  category: 'E-Commerce',
  description: 'High-end e-commerce experience crafted with server-side rendering, seamless micro-animations, and Stripe integration.',
  image: '/Screenshot 2026-07-25 132741.png',
  tags: ['React', 'Framer Motion', 'Zustand', 'Tailwind CSS', 'Stripe'],
  liveUrl: 'https://bibliodrop-client-eight.vercel.app',
  githubUrl: 'https://github.com/example/aura-store-client',
  challenges: [
    'Handling optimistic UI updates during cart state changes while ensuring accurate price calculations.',
    'Optimizing image load times and preventing Cumulative Layout Shift (CLS) on dynamic grids.',
  ],
  futureImprovements: [
    'Integrate AI-powered personalized product recommendations.',
    'Add multi-currency and localization support.',
  ],
},
  {
  id: '3',
  title: 'MedReserve',
  category: 'Full-Stack App',
  description: 'Data visualization and metrics tracking platform built for high-scale enterprise applications with real-time sync.',
  image: '/doc.png',
  tags: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
  liveUrl: 'https://doctor-client-beta.vercel.app',
  githubUrl: 'https://github.com/example/pulse-analytics-client',
  challenges: [
    'Structuring aggregated MongoDB queries for fast data retrieval under heavy write loads.',
    'Securing API endpoints using JWT authentication and HTTP-only cookies.',
  ],
  futureImprovements: [
    'Add automated PDF report generation and scheduling.',
    'Build custom dashboard widgets with drag-and-drop support.',
  ],
},
];

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1920px] mx-auto">
      {/* Section Title */}
      <div className="mb-12 space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
          Featured Projects
        </h2>
        <p className="text-2xl sm:text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
          Crafted with care & technical precision.
        </p>
      </div>

      {/* Grid Layout for 3 Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onViewDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}