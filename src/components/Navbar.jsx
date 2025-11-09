import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X, Linkedin, Github, Instagram } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/20 bg-white/70 dark:bg-[#0b1d15]/70 border-b border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-emerald-500/20 border border-emerald-400/40 shadow-[0_0_30px_-10px] shadow-emerald-400" />
          <span className="font-semibold tracking-wide text-[#013220] dark:text-white">My Portfolio</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                active === item.id
                  ? 'text-emerald-600 dark:text-emerald-300'
                  : 'text-[#013220]/80 dark:text-white/70 hover:text-emerald-700 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
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

          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="p-2 rounded-md border border-white/10 hover:bg-emerald-500/10 text-[#013220] dark:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/80 dark:bg-[#0b1d15]/80 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  active === item.id ? 'text-emerald-500' : 'text-[#013220]/80 dark:text-white/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
