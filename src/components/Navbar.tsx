'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', delay: 0.1 },
    { name: 'About', href: '/#about', delay: 0.2 },
    { name: 'Projects', href: '/projects', delay: 0.3 },
    { name: 'Contact', href: '/#contact', delay: 0.4 },
  ];

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com/Mr-spiky' },
    { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/shivam-gupta-58b63b32a/' },
    { icon: <FaTelegramPlane className="w-5 h-5" />, href: 'https://t.me/spiky' },
    { icon: <FiMail className="w-5 h-5" />, href: 'mailto:mrspiky1125@gmail.com' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${scrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Brand */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="#" className="flex items-center gap-2">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Shivam Kumar
                </span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300">
                  aka Spiky
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: link.delay }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center gap-4 ml-4">
                <ThemeToggle />
                {socialLinks.slice(0, 2).map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-blue-400"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-gray-900/95 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              {/* Mobile Navigation Links */}
              <motion.nav className="flex flex-col gap-6 mb-12">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-medium text-gray-300 hover:text-blue-400 transition-colors py-2 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Theme Toggle for Mobile */}
              <div className="flex justify-center mb-12">
                <ThemeToggle />
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12 text-center text-gray-500 text-sm"
              >
                <p>Let&apos;s build something amazing together!</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}