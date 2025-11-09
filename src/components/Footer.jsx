import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white dark:bg-[#0b1d15] text-[#013220] dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#013220]/70 dark:text-white/70">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded hover:bg-emerald-500/10 text-[#013220] dark:text-white hover:text-emerald-400 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded hover:bg-emerald-500/10 text-[#013220] dark:text-white hover:text-emerald-400 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded hover:bg-emerald-500/10 text-[#013220] dark:text-white hover:text-emerald-400 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
