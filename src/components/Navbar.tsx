/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, ArrowRight, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  onJoinClick: () => void;
  currentView?: 'home' | 'contact' | 'gallery' | 'services' | 'about';
  onViewChange?: (view: 'home' | 'contact' | 'gallery' | 'services' | 'about') => void;
  onPwaClick?: () => void;
}

export default function Navbar({ onJoinClick, currentView = 'home', onViewChange, onPwaClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('apex-theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  const navLinks = [
    { name: 'Accueil', href: '#hero', id: 'hero' },
    { name: 'À Propos', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Galerie', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    if (currentView === 'contact') {
      setActiveSection('contact');
      setScrolled(true);
      return;
    }
    if (currentView === 'about') {
      setActiveSection('about');
      setScrolled(true);
      return;
    }
    if (currentView === 'gallery') {
      setActiveSection('gallery');
      setScrolled(true);
      return;
    }
    if (currentView === 'services') {
      setScrolled(true);
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 120;
        const el = document.getElementById('pricing');
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection('pricing');
        } else {
          setActiveSection('services');
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link detection
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        if (link.id === 'contact' || link.id === 'gallery' || link.id === 'services' || link.id === 'pricing') continue;
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('apex-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    
    if (targetId === 'contact') {
      if (onViewChange) onViewChange('contact');
    } else if (targetId === 'gallery') {
      if (onViewChange) onViewChange('gallery');
    } else if (targetId === 'services') {
      if (onViewChange) onViewChange('services');
    } else if (targetId === 'about') {
      if (onViewChange) onViewChange('about');
    } else if (targetId === 'pricing') {
      if (onViewChange) onViewChange('services');
      setTimeout(() => {
        const element = document.getElementById('pricing');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 150);
    } else {
      if (onViewChange) onViewChange('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 150);
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-brand-dark/90 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex-1 flex justify-start">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2 group cursor-pointer"
              id="nav-logo"
            >
              <Logo className="h-10" />
            </a>
          </div>

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative font-sans text-xs uppercase tracking-widest transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-brand-red font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions (Right) */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-6">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center border border-white/5"
              aria-label="Changer de thème"
              title="Changer de thème"
              id="theme-toggle-desktop"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-brand-orange animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-brand-red" />
              )}
            </button>

            {/* CTA Join Now Button */}
            <button
              onClick={onJoinClick}
              className="relative overflow-hidden group px-5 py-2.5 rounded-lg bg-white text-black font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:text-white hover:bg-transparent border border-white/10 shadow-lg"
              id="desktop-join-btn"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Nous rejoindre{' '}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-0"></div>
            </button>
          </div>

          {/* Mobile menu and theme buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            {onPwaClick && (
              <button
                onClick={onPwaClick}
                className="p-2 rounded-lg bg-white/5 text-brand-orange hover:text-white hover:bg-brand-orange/10 transition-colors cursor-pointer border border-white/5 flex items-center justify-center animate-pulse"
                aria-label="Installer l'application mobile"
                title="Installer l'application mobile"
                id="pwa-install-mobile-icon"
              >
                <Download className="w-4 h-4 text-brand-orange" />
              </button>
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/5"
              aria-label="Changer de thème"
              id="theme-toggle-mobile"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-brand-orange" />
              ) : (
                <Moon className="w-4 h-4 text-brand-red" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slidedown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block py-2.5 px-4 rounded-lg font-sans text-sm uppercase tracking-widest transition-colors text-center ${
                    activeSection === link.id
                      ? 'bg-brand-red/10 text-brand-red font-semibold border-b border-brand-red'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-4 px-4 flex justify-center">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onJoinClick();
                  }}
                  className="w-full max-w-xs flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-brand-red to-brand-orange text-white font-display font-semibold uppercase text-xs tracking-wider shadow-lg"
                  id="mobile-join-btn"
                >
                  Rejoindre le club <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
