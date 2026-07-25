import AboutAndSkills from '@/components/about/AboutAndSkills';
import SkillsSection from '@/components/about/SkillsSection';
import ContactSection from '@/components/contact/ContactSection';
import EducationSection from '@/components/education/EducationSection';
import HeroSection from '@/components/home/HeroSection';
import ProjectsGrid from '@/components/projects/ProjectsGrid';

export const metadata = {
  title: 'Developer Portfolio | Premium & Minimal',
  description:
    'A high-impact developer portfolio showcasing software architecture, scalable web applications, and refined UI engineering.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-neutral-200">
      {/* Hero Section */}
      <HeroSection />
      <AboutAndSkills/>
      <EducationSection/>

      {/* Decorative Divider */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      </div>

      {/* Selected Works / Projects Section */}
      <ProjectsGrid />
      
      <SkillsSection/>
      
      <ContactSection/>
    </main>
  );
}