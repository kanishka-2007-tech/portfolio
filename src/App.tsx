import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechnicalArsenal } from './components/TechnicalArsenal';
import { ExperienceAndAchievements } from './components/ExperienceAndAchievements';
import { Certifications } from './components/Certifications';
import { Hackathons } from './components/Hackathons';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { TerminalDrawer } from './components/TerminalDrawer';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('work');

  // Handle Cmd+K / Ctrl+K shortcut for Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // IntersectionObserver for tracking active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'experience', 'technical-arsenal', 'certifications', 'hackathons'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-body-md text-body-md antialiased min-h-screen flex flex-col relative selection:bg-[#00f0ff] selection:text-black">
      {/* Top Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-28 sm:pt-32 pb-[120px] px-4 sm:px-8 md:px-16 max-w-[1280px] mx-auto w-full">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Technical Arsenal Section */}
        <TechnicalArsenal />

        {/* Experience & Achievements Section */}
        <ExperienceAndAchievements />

        {/* Certifications Section */}
        <Certifications />

        {/* Hackathons Section */}
        <Hackathons />

        {/* Featured Projects Section */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => {
            const el = document.getElementById('work');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
        onOpenContact={() => {
          setTerminalOpen(false);
          setContactOpen(true);
        }}
      />
    </div>
  );
}
