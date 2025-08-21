'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  status: string;
}

interface ProjectsGridProps {
  projects?: Project[]; // Make optional with ?
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  // Debug: Check what's being received
  console.log('Projects received:', projects);
  
  // Handle case where projects might be undefined or empty
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No projects to display yet.</p>
        <p className="text-gray-500 text-sm mt-2">Check the console for debugging info.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all group"
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Status Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {project.status}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Category */}
            <span className="text-sm text-blue-400 font-medium mb-2 block">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 bg-gray-700 rounded-md text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm"
              >
                <FiExternalLink /> Live Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-700 transition flex items-center justify-center gap-2 text-sm"
              >
                <FiGithub /> Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}