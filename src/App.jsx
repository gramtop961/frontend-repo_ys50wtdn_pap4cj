import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills, Projects, Resume, Contact } from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1d15] selection:bg-emerald-300 selection:text-[#013220]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
