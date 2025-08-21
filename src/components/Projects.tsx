'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Twitter UI Clone",
      description: "Fully responsive replica of Twitter's home UI built with Tailwind CSS",
      tech: ["Tailwind CSS", "React", "Next.js"],
      image: "/images/twitter-clone.png",
      liveUrl: "https://mr-spiky.github.io/my-webite/",
      githubUrl: "https://github.com/Mr-spiky"
    },
    {
      id: 2,
      title: "NexWork (Frontend)",
      description: "Job/community UI site with React and modern design patterns",
      tech: ["React", "Tailwind CSS", "Context API"],
      image: "/images/nexwork.png",
      liveUrl: "https://nexwork-project.vercel.app/",
      githubUrl: "https://github.com/Mr-spiky"
    },
    {
      id: 3,
      title: "CareerFinder AI",
      description: "AI-based career suggestion tool with RedisAI integration in backend",
      tech: ["Next.js", "RedisAI", "ONNX", "Node.js"],
      image: "/images/career-finder.png",
      liveUrl: "https://careerfinder.spiky.dev",
      githubUrl: "https://github.com/spiky/career-finder"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-500/50 to-gray-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.1]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">My <span className="text-blue-400">Projects</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent works that showcase my skills and passion for development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200 border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700/50 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <FiGithub /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all group text-lg font-medium"
          >
            View All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}