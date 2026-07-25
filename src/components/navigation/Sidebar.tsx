'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/config/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false); // Tablet toggle
  const [isMobileOpen, setIsMobileOpen] = useState(false); // Mobile drawer
  const [scrolled, setScrolled] = useState(false);

  // Background blur opacity control on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on resize to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  return (
    <>
      {/* ========================================== */}
      {/* 1. MOBILE TOP BAR (320px - 767px)          */}
      {/* ========================================== */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 z-40 px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="text-sm font-light tracking-[0.2em] uppercase text-neutral-100">
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

      {/* ========================================== */}
      {/* 2. MOBILE DRAWER OVERLAY (320px - 767px)   */}
      {/* ========================================== */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-neutral-950/80 backdrop-blur-sm z-40"
            />

            {/* Slide-out Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-neutral-950 border-r border-neutral-800/80 z-50 p-6 flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Header */}
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

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
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

              {/* Drawer Footer */}
              <div className="pt-6 border-t border-neutral-900">
                <p className="text-xs font-mono text-neutral-600">
                  © {new Date().getFullYear()} Minimal Portfolio
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ========================================== */}
      {/* 3. TABLET COLLAPSIBLE SIDEBAR (768px - 1023px) */}
      {/* ========================================== */}
      <aside
        className={`hidden md:flex lg:hidden fixed top-0 left-0 bottom-0 z-30 bg-neutral-950 border-r border-neutral-800/80 flex-col justify-between transition-all duration-500 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="p-6 space-y-10">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <Link href="/" className="text-sm font-light tracking-[0.25em] uppercase text-neutral-100">
                Saidul Islam<span className="text-neutral-500 font-mono">.</span>
              </Link>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Toggle Sidebar"
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors mx-auto"
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          <nav className="flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-3.5 py-3 rounded-xl text-sm transition-all duration-300 flex items-center gap-3.5 ${
                    isActive
                      ? 'bg-neutral-900 text-neutral-100 font-medium border border-neutral-800'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/40'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-neutral-100 scale-100' : 'bg-neutral-600 scale-0 group-hover:scale-100'
                    }`}
                  />
                  {!isCollapsed && <span className="font-light tracking-wide">{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-neutral-900/80">
          {!isCollapsed ? (
            <p className="text-[11px] font-mono text-neutral-600 tracking-wider">PORTFOLIO v2.0</p>
          ) : (
            <span className="block text-center text-[10px] font-mono text-neutral-600">v2</span>
          )}
        </div>
      </aside>

      {/* ========================================== */}
      {/* 4. DESKTOP FLOATING NAVBAR (1024px +)      */}
      {/* ========================================== */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-16 lg:px-24 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="text-sm font-light tracking-[0.25em] uppercase text-neutral-100">
            Saidul Islam<span className="text-neutral-500 font-mono">.</span>
          </Link>

          {/* Center Pill Navbar Links */}
          <nav className="flex items-center space-x-1 border border-neutral-800/80 rounded-full bg-neutral-900/40 backdrop-blur-md px-3 py-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
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

          {/* Right Placeholder / Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-neutral-400">AVAILABLE</span>
          </div>
        </div>
      </header>
    </>
  );
}