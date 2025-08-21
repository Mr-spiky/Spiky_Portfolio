import { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import { FiGithub, FiCode, FiMail } from 'react-icons/fi'; // Removed unused FiExternalLink
import { featuredProjects } from '@/constants/projects'; // Import from constants
import Navbar from '@/components/Navbar';
import Link from 'next/link'; // Added for internal links

export const metadata: Metadata = {
  title: 'Projects | Shivam Kumar',
  description: 'Explore my web development projects built with React, Next.js, and modern technologies',
  keywords: ['projects', 'portfolio', 'React', 'Next.js', 'web development'],
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Here&apos;s a collection of projects I&apos;ve built to showcase my skills and passion for web development.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiCode className="text-blue-400" />
                <span>{featuredProjects.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FiGithub className="text-purple-400" />
                <span>100% Open Source</span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <ProjectsGrid projects={featuredProjects} />

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Like what you see?
            </h2>
            <p className="text-gray-300 mb-8">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
              >
                <FiMail /> Get In Touch
              </Link>
              <a
                href="https://github.com/Mr-spiky"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800/50 transition-all flex items-center gap-2"
              >
                <FiGithub /> View GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
