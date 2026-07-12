/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Flame, X, ShieldAlert, MonitorPlay, Clock, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // High-quality public gym motivation video embed URL
  const videoUrl = "https://www.youtube.com/embed/Zz83m0k8t4k?autoplay=1&mute=1";

  return (
    <section id="promo-video" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      {/* Absolute visual noise blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Grid Layout: Left Content, Right Video Box */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Copy Content info */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
                MOTIVATION CINÉMATIQUE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
                L'EXPÉRIENCE <br className="hidden lg:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-orange to-red-500">
                  APEX CLUB
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <p className="font-sans text-gray-400 font-light text-sm sm:text-base leading-relaxed">
              Découvrez l'intensité brute, nos installations impeccables et l'énergie communautaire qui définissent notre écosystème de luxe. Visionnez notre bande-annonce officielle pour apercevoir ce qui vous attend à l'intérieur.
            </p>

            {/* Video spec tags */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 max-w-sm mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Durée</span>
                <span className="text-sm font-display font-semibold text-white flex items-center gap-1 mt-1">
                  <Clock className="w-3.5 h-3.5 text-brand-red" /> 2:15 Min
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Qualité</span>
                <span className="text-sm font-display font-semibold text-white flex items-center gap-1 mt-1">
                  <MonitorPlay className="w-3.5 h-3.5 text-brand-orange" /> 4K HDR
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Intensité</span>
                <span className="text-sm font-display font-semibold text-white flex items-center gap-1 mt-1">
                  <Compass className="w-3.5 h-3.5 text-red-500 animate-pulse" /> 100% Brut
                </span>
              </div>
            </div>

            {/* Click to Play action */}
            <div className="pt-2">
              <button
                onClick={() => setIsPlaying(true)}
                className="relative overflow-hidden group px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-red/30 text-white font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 cursor-pointer"
                id="promo-play-btn"
              >
                <Play className="w-4 h-4 text-brand-red animate-pulse" />
                <span>Voir la bande-annonce</span>
              </button>
            </div>
          </div>

          {/* Elegant Video Play Frame Mockup */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer bg-brand-card"
              onClick={() => setIsPlaying(true)}
              id="promo-video-frame"
            >
              {/* Background cover image */}
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200"
                alt="Miniature vidéo promotionnelle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75"
                referrerPolicy="no-referrer"
              />
              
              {/* Luxury red color glow mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent"></div>
              <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Central Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glowing halo rings */}
                  <div className="absolute -inset-4 rounded-full bg-brand-red/20 blur-md animate-ping"></div>
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange blur-sm"></div>
                  
                  {/* Button body */}
                  <div className="relative h-16 w-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-brand-red fill-brand-red translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Lower Overlay Status Indicator */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-brand-red animate-bounce" />
                  <span className="font-mono text-xs uppercase text-gray-300 tracking-wider">Visite Guidée APEX Club</span>
                </div>
                <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-widest">4K</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Elegant Modal Player (Triggers when isPlaying is true) */}
        <AnimatePresence>
          {isPlaying && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPlaying(false)}
                className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
              />

              {/* Dynamic YouTube Iframe container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/15 bg-black shadow-2xl z-10"
                id="promo-video-modal"
              >
                <iframe
                  src={videoUrl}
                  title="APEX Promotional Cinematic"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>

                {/* Close Button overlay */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-brand-dark border border-white/10 text-white hover:text-brand-red transition-all cursor-pointer z-20 shadow-lg"
                  aria-label="Fermer le lecteur vidéo"
                  id="close-video-modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
