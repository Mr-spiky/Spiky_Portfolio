'use client'; // Required for Framer Motion in Next.js 13+

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiTool } from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiNodedotjs, 
  SiRedis, 
  SiMongodb, 
  SiGit, 
  SiLinux, 
  SiFigma 
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode className="w-5 h-5" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" />, level: 85 },
        { name: "React", icon: <SiReact className="w-6 h-6 text-blue-400" />, level: 80 },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" />, level: 75 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />, level: 90 }
      ]
    },
    {
      title: "Backend",
      icon: <FiDatabase className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-green-500" />, level: 70 },
        { name: "RedisAI", icon: <SiRedis className="w-6 h-6 text-red-500" />, level: 65 },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-400" />, level: 60 }
      ]
    },
    {
      title: "Tools",
      icon: <FiTool className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: <SiGit className="w-6 h-6 text-orange-500" />, level: 80 },
        { name: "Linux", icon: <SiLinux className="w-6 h-6 text-white" />, level: 75 },
        { name: "Figma", icon: <SiFigma className="w-6 h-6 text-purple-400" />, level: 70 }
      ]
    },
    {
      title: "Learning",
      icon: <FiCpu className="w-5 h-5" />,
      skills: [
        { name: "DSA", icon: <span className="text-lg">🧠</span>, level: 60 },
        { name: "AI Integration", icon: <span className="text-lg">🤖</span>, level: 55 },
        { name: "System Design", icon: <span className="text-lg">📐</span>, level: 50 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My <span className="text-blue-400">Skills</span></h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies I work with and currently exploring
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-1.5 bg-gray-700 rounded-lg">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full group-hover:from-blue-400 group-hover:to-purple-500 transition-all"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}