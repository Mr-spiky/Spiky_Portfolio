'use client'; // Essential for Framer Motion in Next.js 13+

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

export default function About() {
  const traits = [
    {
      icon: <FaCode className="w-5 h-5" />,
      title: "Clean code advocate",
      description: "I write maintainable, well-structured code with best practices"
    },
    {
      icon: <FaLightbulb className="w-5 h-5" />,
      title: "Problem solver",
      description: "Enjoy breaking down complex problems into simple solutions"
    },
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: "Fast learner",
      description: "Quick to adapt to new technologies and frameworks"
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      title: "Team player",
      description: "Collaborate effectively and communicate clearly"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Profile Image */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
            <Image
              src="/images/avatar.jpg"
              alt="Shivam Kumar"
              fill
              className="rounded-full object-cover border-4 border-gray-700/50 dark:border-gray-300/50"
              priority
            />
          </div>

          {/* About Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-xl font-medium">Hi, I'm Shivam Kumar</span>, a passionate web developer currently pursuing BCA from IGNOU.
              </p>
              
              <p>
                I enjoy building clean, functional UIs with <span className="text-blue-400">React</span> and <span className="text-blue-400">Next.js</span>. 
                Currently learning <span className="text-purple-400">Linux</span>, <span className="text-purple-400">DSA</span> and exploring 
                AI tools like <span className="text-purple-400">RedisAI</span>.
              </p>
              
              <p className="pt-2">
                I'm open to <span className="font-medium text-blue-400">internships</span>, <span className="font-medium text-blue-400">freelance projects</span>, 
                and <span className="font-medium text-blue-400">collaborations</span>.
              </p>
            </div>

            {/* Personality Traits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">
                      {trait.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{trait.title}</h4>
                      <p className="text-sm text-gray-400">{trait.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 p-4 border-l-4 border-blue-500 bg-gray-800/30 rounded-r-lg"
            >
              <p className="italic text-gray-300">
                "The journey from Google search to GitHub commits changed everything."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}