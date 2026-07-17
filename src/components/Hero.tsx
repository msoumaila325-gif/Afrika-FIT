/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ShieldCheck, Flame, Trophy, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/hero_black_man_gym_1784292711195.jpg';

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
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={heroImage}
          alt="Athlète musculation"
          className="absolute right-0 top-0 h-full w-full lg:w-[60%] object-cover object-center sm:object-right opacity-75 lg:opacity-95 scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic dark gradients to blend image into background smoothly without covering the athlete */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 via-35% lg:via-[45%] to-transparent z-10 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10 lg:hidden"></div>
        
        {/* Animated ambient glow blobs */}
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
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] uppercase"
              >
                FORGEZ VOTRE <br />
                MÉTRIQUE ULTIME
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
              >
                Une sélection d'entraînements d'élite, de suivis biométriques de pointe et de programmes de transformation athlétique conçus pour forger votre physique et libérer votre potentiel.
              </motion.p>
            </div>

            {/* Main Red Solid Action Button like "Join Club Now!" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={onJoinClick}
                className="relative overflow-hidden group px-10 py-4.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-display font-black uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-red-600/20 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                id="hero-join-now"
              >
                REJOINDRE LE CLUB !
              </button>

              <button
                onClick={onExploreClick}
                className="group px-8 py-4.5 rounded-lg glass-card text-white hover:text-black font-display font-semibold tracking-wider text-xs sm:text-sm hover:bg-white transition-all duration-300 border border-white/10 hover:border-white shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
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
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5 max-w-lg mx-auto lg:mx-0"
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

          {/* Floating Metric Cards (Right side) - Matching reference screenshot */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[400px] w-full flex flex-col justify-between p-4 sm:p-8">
            
            {/* Top Right Widget: Heart Rate */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-brand-card/90 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-2xl flex items-center gap-4 shadow-2xl self-end md:mr-10"
            >
              <div className="h-10 w-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center animate-pulse">
                <Heart className="w-5 h-5 fill-red-600 text-red-600" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] font-mono tracking-widest text-gray-500 uppercase">FÉQUENCE</span>
                <span className="block font-display font-black text-lg text-white">100 bpm</span>
              </div>
            </motion.div>

            {/* Bottom Right Widget: Soundwave/Intensity indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-brand-card/90 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-2xl flex items-center gap-4 shadow-2xl self-start md:ml-6 mt-auto"
            >
              <div className="flex items-end gap-1 h-8 w-10 shrink-0">
                <span className="w-1.5 bg-brand-orange rounded-full animate-bounce" style={{ height: '65%', animationDuration: '0.9s', animationDelay: '0.1s' }}></span>
                <span className="w-1.5 bg-brand-red rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.7s', animationDelay: '0.3s' }}></span>
                <span className="w-1.5 bg-brand-orange rounded-full animate-bounce" style={{ height: '40%', animationDuration: '1.1s', animationDelay: '0.5s' }}></span>
                <span className="w-1.5 bg-brand-red rounded-full animate-bounce" style={{ height: '80%', animationDuration: '0.8s', animationDelay: '0.2s' }}></span>
              </div>
              <div className="text-left">
                <span className="block text-[9px] font-mono tracking-widest text-gray-500 uppercase">INTENSITÉ</span>
                <span className="block font-display font-black text-lg text-brand-orange uppercase">Niveau Élite</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
