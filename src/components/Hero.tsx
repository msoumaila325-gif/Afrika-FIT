/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, ArrowRight, ShieldCheck, Flame, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onJoinClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-luxury-gradient pt-24 overflow-hidden"
    >
      {/* Immersive Dark Gym Background with Parallax Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=2000"
          alt="Atmosphère de salle de sport haut de gamme"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark"></div>
        
        {/* Animated ambient red glow blobs for high contrast luxury */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center lg:text-left">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Elegant luxury tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange font-mono text-xs tracking-widest uppercase"
            >
              <Flame className="w-3.5 h-3.5 text-brand-red animate-pulse" />
              LE SOMMET DE L'ATHLÉTISME D'ÉLITE
            </motion.div>

            {/* Giant Luxury Typography */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
              >
                FORGEZ VOTRE <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-orange to-red-500">
                  MÉTRIQUE ULTIME
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
              >
                Entrez dans un écosystème d'entraînement de classe mondiale conçu pour la performance absolue. Technologie de pointe, coachs d'élite internationaux et espaces de récupération premium.
              </motion.p>
            </div>

            {/* Two Core Luxury CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Join Now */}
              <button
                onClick={onJoinClick}
                className="relative overflow-hidden group px-8 py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange text-white font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-xl shadow-brand-red/20 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                id="hero-join-now"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  REJOINDRE LE CLUB APEX <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Explore Our Gym */}
              <button
                onClick={onExploreClick}
                className="group px-8 py-4 rounded-xl glass-card text-white hover:text-black font-display font-semibold tracking-wider text-sm hover:bg-white transition-all duration-300 border border-white/10 hover:border-white shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                id="hero-explore-gym"
              >
                <span>EXPLORER LE GYM</span>
              </button>
            </motion.div>

            {/* Fine line premium perks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
                <span>Espace 100% sécurisé</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider">
                <Trophy className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Club Élite Primé</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-wider">
                <Flame className="w-4 h-4 text-brand-red shrink-0" />
                <span>Sans engagement</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive Gym Badge / Creative Visual Ornament (Right side of Hero) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/40 via-transparent to-brand-orange/40 z-10 mix-blend-overlay"></div>
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
                alt="Altères haut de gamme"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Float Glass Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/10 z-20 flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-mono tracking-widest text-brand-orange uppercase">En direct</span>
                  <span className="block font-display font-bold text-lg text-white">APEX CENTRAL</span>
                  <span className="block text-xs text-gray-400">92 athlètes s'entraînent actuellement</span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/20 text-brand-red animate-pulse">
                  <span className="block w-3 h-3 rounded-full bg-brand-red"></span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
