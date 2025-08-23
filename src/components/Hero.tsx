'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Hero() {
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/Mr-spiky" },
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/shivam-gupta-58b63b32a/" },
    { icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com/spiky" },
    { icon: <HiOutlineMail className="w-5 h-5" />, url: "mailto:mrspiky1125@gmail.com" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-gray-900 to-purple-900/10 -z-20" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Animated Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-blue-400 font-mono mb-2">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Shivam Kumar
            </h1>
            <div className="text-2xl md:text-4xl font-semibold text-gray-300 h-12 md:h-16">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'Next.js Enthusiast',
                  2000,
                  'UI/UX Designer',
                  2000
                ]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12"
          >
            Crafting modern web experiences using React, Next.js, and Tailwind CSS — currently exploring AI & Redis integrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              View My Work <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800/50 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-gray-300 hover:text-blue-400"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Spiky Tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12 text-gray-400 text-sm font-mono flex items-center gap-2"
          >
            <span className="h-px w-8 bg-gray-500"></span>
            aka Spiky
            <span className="h-px w-8 bg-gray-500"></span>
          </motion.p>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce flex flex-col items-center">
          <p className="text-xs text-gray-400 mb-2">Scroll Down</p>
          <div className="w-4 h-8 border-2 border-gray-400 rounded-full">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}