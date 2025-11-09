import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 bg-white dark:bg-[#0b1d15] text-[#013220] dark:text-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-8"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

export function About() {
  return (
    <Section id="about" title="About Me">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-lg leading-relaxed text-[#013220]/80 dark:text-white/80"
      >
        I'm a Computer Science diploma student passionate about UI/UX design, coding, and technology. I love crafting clean, intuitive interfaces and building performant, accessible web experiences. My goal is to bridge design and engineering to ship delightful, real-world products.
      </motion.p>
    </Section>
  );
}

export function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'C++', 'UI/UX Design', 'Figma'];
  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-xl border border-emerald-500/20 bg-emerald-50 dark:bg-white/5 p-4 hover:shadow-[0_0_30px_-10px] hover:shadow-emerald-300/60 transition"
          >
            <span className="font-medium text-[#013220] dark:text-white">{skill}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Futuristic Dashboard',
      desc: 'A modern analytics dashboard with real-time charts and smooth interactions.',
      img: 'https://images.unsplash.com/photo-1551281044-8d8a6bd62de5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'UX Case Study',
      desc: 'Research-to-prototype journey improving onboarding UX for a mobile app.',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website',
      desc: 'Responsive personal portfolio with dark/light themes and micro-interactions.',
      img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="group rounded-xl overflow-hidden border border-white/10 bg-white dark:bg-[#0f241b] hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-400/10 transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg text-[#013220] dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-[#013220]/80 dark:text-white/70">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

export function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[#013220]/80 dark:text-white/80">Download my latest resume to view my experience, projects, and education in detail.</p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 text-[#013220] font-semibold shadow-[0_0_30px_-8px] shadow-emerald-400 hover:shadow-emerald-300 transition-transform hover:-translate-y-0.5"
        >
          <Download className="h-5 w-5" /> Download Resume
        </a>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thanks! Your message has been sent.');
          e.currentTarget.reset();
        }}
        className="grid md:grid-cols-2 gap-4"
      >
        <input required name="name" placeholder="Your Name" className="rounded-lg border border-emerald-500/30 bg-white dark:bg-[#0f241b] px-4 py-3 text-[#013220] dark:text-white placeholder:text-[#013220]/50 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        <input required type="email" name="email" placeholder="Your Email" className="rounded-lg border border-emerald-500/30 bg-white dark:bg-[#0f241b] px-4 py-3 text-[#013220] dark:text-white placeholder:text-[#013220]/50 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        <textarea required name="message" placeholder="Your Message" rows={5} className="md:col-span-2 rounded-lg border border-emerald-500/30 bg-white dark:bg-[#0f241b] px-4 py-3 text-[#013220] dark:text-white placeholder:text-[#013220]/50 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
        <div className="md:col-span-2">
          <button type="submit" className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500 text-[#013220] font-semibold shadow-[0_0_30px_-8px] shadow-emerald-400 hover:shadow-emerald-300 transition-transform hover:-translate-y-0.5">
            Send Message
          </button>
        </div>
      </form>
    </Section>
  );
}
