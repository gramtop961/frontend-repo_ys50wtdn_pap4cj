import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-20 grid place-items-center bg-[#013220] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#013220]/30 via-[#013220]/70 to-[#013220]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Hey, I'm <span className="text-emerald-300">Your Name</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-emerald-100/90"
          >
            Computer Science student crafting elegant UI/UX, writing clean code, and building meaningful tech experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500 text-[#013220] font-semibold shadow-[0_0_30px_-8px] shadow-emerald-400 hover:shadow-emerald-300 transition-transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center px-6 py-3 rounded-lg border border-emerald-400/60 text-white/90 hover:bg-white/10 transition"
            >
              See Projects
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
