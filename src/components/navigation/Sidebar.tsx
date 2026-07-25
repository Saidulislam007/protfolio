'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/config/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync hash state with current URL
  useEffect(() => {
    // Initial load
    if (typeof window !== 'undefined') {
      setActiveHash(window.location.hash || '/');
    }

    const handleHashChange = () => {
      setActiveHash(window.location.hash || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Helper function to check if item is active
  const checkIsActive = (itemHref: string) => {
    // For Hash links like '#contact' or '/#contact'
    if (itemHref.startsWith('#')) {
      return activeHash === itemHref;
    }
    if (itemHref.startsWith('/#')) {
      return activeHash === itemHref.replace('/', '');
    }
    // For standard routes
    if (itemHref === '/') {
      return pathname === '/' && (activeHash === '' || activeHash === '/');
    }
    return pathname === itemHref;
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. MOBILE TOP BAR */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 z-40 px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" onClick={() => setActiveHash('')} className="text-sm font-light tracking-[0.2em] uppercase text-neutral-100">
          Saidul Islam<span className="text-neutral-500 font-mono">.</span>
        </Link>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation"
          className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* 2. MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-40"
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-neutral-950 border-r border-neutral-800/80 z-50 p-6 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = checkIsActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileOpen(false);
                          setActiveHash(item.href.replace('/', ''));
                        }}
                        className={`px-4 py-3 rounded-xl text-base font-light transition-all duration-300 flex items-center justify-between ${
                          isActive
                            ? 'bg-neutral-900 text-neutral-100 font-normal border border-neutral-800'
                            : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 3. DESKTOP FLOATING NAVBAR */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-16 lg:px-24 flex items-center justify-between">
          <Link href="/" onClick={() => setActiveHash('')} className="text-sm font-light tracking-[0.25em] uppercase text-neutral-100">
            Saidul Islam<span className="text-neutral-500 font-mono">.</span>
          </Link>

          <nav className="flex items-center space-x-1 border border-neutral-800/80 rounded-full bg-neutral-900/40 backdrop-blur-md px-3 py-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = checkIsActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveHash(item.href.startsWith('/#') ? item.href.replace('/', '') : item.href)}
                  className={`relative px-5 py-2 text-xs font-light tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? 'text-neutral-100' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTabDesktop"
                      className="absolute inset-0 bg-neutral-800 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-neutral-400">AVAILABLE</span>
          </div>
        </div>
      </header>
    </>
  );
}