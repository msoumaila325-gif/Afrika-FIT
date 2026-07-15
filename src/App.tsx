/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import PromoVideo from './components/PromoVideo';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Timetable from './components/Timetable';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Trainers from './components/Trainers';
import HomeAbout from './components/HomeAbout';
import Accompagnement from './components/Accompagnement';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'contact' | 'gallery' | 'services' | 'about'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Utility scrolling actions to pass down to navbar & hero components
  const handleScrollToJoin = () => {
    if (currentView !== 'services') {
      setCurrentView('services');
      setTimeout(() => {
        const pricingEl = document.getElementById('pricing');
        if (pricingEl) {
          window.scrollTo({
            top: pricingEl.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 150);
      return;
    }
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      window.scrollTo({
        top: pricingEl.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToExplore = () => {
    setCurrentView('about');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaite obtenir des informations sur l'inscription à la salle de gym AFRIKA FIT.");
    window.open(`https://wa.me/22390353941?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans antialiased">
      {/* Floating Header */}
      <Navbar 
        onJoinClick={handleScrollToJoin} 
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
      />

      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <Hero
              onJoinClick={handleScrollToJoin}
              onExploreClick={handleScrollToExplore}
            />

            {/* Alternately designed Sanctuary About section for the home page */}
            <HomeAbout onLearnMore={() => setCurrentView('about')} />

            {/* Elegant promotional 4K video player section */}
            <PromoVideo />

            {/* Premium training companion programs section with call to action */}
            <Accompagnement 
              onJoinClick={handleScrollToJoin}
              onWhatsAppClick={handleWhatsAppClick}
            />

            {/* Opening hours & interactive timetable scheduling booking slot */}
            <Timetable />

            {/* Customer review carousel with star ratings and user portraits */}
            <Testimonials />
          </motion.div>
        )}

        {currentView === 'about' && (
          <motion.div
            key="about-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="pt-20"
          >
            {/* Standalone About Page */}
            <About isStandalone={true} onBackToHome={() => setCurrentView('home')} />
          </motion.div>
        )}

        {currentView === 'services' && (
          <motion.div
            key="services-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="pt-20"
          >
            {/* Standalone Services and Pricing Page */}
            <Services isStandalone={true} onBackToHome={() => setCurrentView('home')} />
          </motion.div>
        )}

        {currentView === 'gallery' && (
          <motion.div
            key="gallery-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="pt-20"
          >
            {/* Standalone Gallery Page */}
            <Gallery isStandalone={true} onBackToHome={() => setCurrentView('home')} />
          </motion.div>
        )}

        {currentView === 'contact' && (
          <motion.div
            key="contact-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="pt-20"
          >
            {/* Standalone Contact and FAQ Page */}
            <Contact isStandalone={true} onBackToHome={() => setCurrentView('home')} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand copyright links and subscription newsletter form */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-40 animate-ping"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 scale-0 group-hover:scale-100 transition-all duration-300 origin-bottom-right bg-brand-dark/95 border border-white/10 text-white font-mono text-[10px] tracking-wider uppercase font-bold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap">
          Discutez avec nous
        </div>

        {/* Floating Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:bg-[#20ba5a] cursor-pointer"
          id="floating-whatsapp-fab"
        >
          <MessageCircle className="w-7 h-7 fill-white/10" />
        </motion.button>
      </div>
    </div>
  );
}
