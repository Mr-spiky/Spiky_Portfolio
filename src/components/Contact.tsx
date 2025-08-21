'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I&apos;ll get back to you soon.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later or contact me directly at shivam@example.com'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Let&apos;s <span className="text-blue-400">Create Magic</span> Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Open to internships, freelance projects, and collaborations. Typically respond within 1 day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-800/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-center ${submitStatus.success ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'}`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Other Ways to Reach Me</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 mt-1">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a 
                      href="mailto:mrspiky1125@gmail.com" 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      mrspiky1125@gmail.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-full text-purple-400 mt-1">
                    <FaTelegramPlane className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Telegram</h4>
                    <a 
                      href="https://t.me/spiky" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      @spiky
                    </a>
                    <p className="text-sm text-gray-400 mt-1">For quick messages and chats</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium text-lg mb-4">Connect on Socials</h4>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://github.com/spiky"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3 }}
                      href="https://linkedin.com/in/spiky"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-300 italic">
                  &quot;If you&apos;ve reached here, thank you for seeing my story. Let&apos;s build something great together.&quot;
                </p>
                <p className="mt-2 text-sm text-gray-400">— Shivam Kumar (Spiky)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
