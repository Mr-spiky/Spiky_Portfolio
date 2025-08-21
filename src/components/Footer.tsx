'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { FaTelegramPlane, FaCode } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/spiky", label: "GitHub" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/spiky", label: "LinkedIn" },
    { icon: <FaTelegramPlane />, url: "https://t.me/spiky", label: "Telegram" },
    { icon: <FiMail />, url: "mailto:shivam@example.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900/50 to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Creative Signature */}
          <div className="flex items-center mb-6 group">
            <FaCode className="text-blue-400 mr-2 group-hover:text-purple-500 transition-colors" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shivam Kumar
            </span>
            <span className="ml-2 text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300">
              aka Spiky
            </span>
          </div>

          {/* Social Links with Creative Hover */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all group relative"
              >
                {social.icon}
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Compact Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 mb-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 hover:after:w-full after:transition-all"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Copyright with Creative Typography */}
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="text-xs text-gray-500 flex items-center gap-1"
          >
            <span>© {currentYear} Built with</span>
            <span className="text-blue-400 font-mono">{"<Code/>"}</span>
            <span>and</span>
            <span className="text-purple-400 font-mono">{"<Coffee/>"}</span>
          </motion.p>
        </motion.div>

        {/* Hidden Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <p className="text-[10px] text-gray-600 font-mono">
            psst... looking for my secret message? just say hi!
          </p>
        </motion.div>
      </div>
    </footer>
  );
}