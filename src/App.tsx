/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import PromoVideo from './components/PromoVideo';
import Timetable from './components/Timetable';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  // Utility scrolling actions to pass down to navbar & hero components
  const handleScrollToJoin = () => {
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      window.scrollTo({
        top: pricingEl.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToExplore = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      window.scrollTo({
        top: aboutEl.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaite obtenir des informations sur l'inscription à la salle de gym AFRIKA FIT.");
    window.open(`https://wa.me/22390353941?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans antialiased">
      {/* Floating Header */}
      <Navbar onJoinClick={handleScrollToJoin} />

      {/* Hero Section */}
      <Hero
        onJoinClick={handleScrollToJoin}
        onExploreClick={handleScrollToExplore}
      />

      {/* About Us section with mission, vision and counters */}
      <About />

      {/* 8 beautiful custom-animated services cards */}
      <Services />

      {/* Masonry gallery with category sorting and Lightbox */}
      <Gallery />

      {/* Elegant promotional 4K video player section */}
      <PromoVideo />

      {/* Opening hours & interactive timetable scheduling booking slot */}
      <Timetable />

      {/* Membership pricing cards with monthly/annual calculation toggle */}
      <Pricing />

      {/* Certified trainer profiles with detail biodialogues & socials */}
      <Trainers />

      {/* Customer review carousel with star ratings and user portraits */}
      <Testimonials />

      {/* FAQ modern accordion system */}
      <FAQ />

      {/* Contact Form with mock coordinates card, open map, and direct whatsapp */}
      <Contact />

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
