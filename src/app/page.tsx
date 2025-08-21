import { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticalBackground';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Shivam Kumar | Web Developer',
  description: 'Portfolio of Shivam Kumar (Spiky) - Web Developer specializing in React, Next.js, and modern web technologies',
  keywords: ['portfolio', 'web developer', 'React', 'Next.js', 'Shivam Kumar', 'Spiky'],
};

export default function Home() {
  return (
    <>
      {/* Background Elements */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10 bg-gray-900/50">
        <Navbar />
        
        <main className="overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}