/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, ShieldCheck, Flame, Sparkles, Award, ArrowUpRight } from 'lucide-react';

interface HomeAboutProps {
  onLearnMore?: () => void;
}

export default function HomeAbout({ onLearnMore }: HomeAboutProps) {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 1,
      title: 'Zone Athlétique',
      tagline: 'HAUTE INTENSITÉ',
      description: 'Un plateau de force brute et fonctionnelle doté d\'équipements olympiques, d\'une zone de sprint synthétique et d\'éco-systèmes d\'haltérophilie haute performance.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
      icon: Flame,
      color: 'from-brand-red to-brand-orange',
      metric: '180+ Postes'
    },
    {
      id: 2,
      title: 'Coaching Scientifique',
      tagline: 'SCIENCES DU SPORT',
      description: 'Vos biométries analysées en temps réel par des coachs diplômés d\'État, des plans d\'entraînement sur mesure et une optimisation complète de votre potentiel athlétique.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
      icon: Award,
      color: 'from-brand-orange to-red-500',
      metric: '45+ Experts'
    },
    {
      id: 3,
      title: 'Récupération de Luxe',
      tagline: 'BIO-HACKING & SAUNA',
      description: 'Accédez à nos saunas scandinaves, nos lits de cryothérapie, nos bains glacés profonds et notre salon zen pour recharger vos réserves énergétiques après l\'effort.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
      icon: Sparkles,
      color: 'from-red-500 to-rose-600',
      metric: 'Zone Premium'
    }
  ];

  return (
    <section id="home-about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative High-End Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Dynamic line background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Typography & Brand Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse"></span>
                <span className="font-mono text-[10px] text-brand-orange tracking-[0.2em] uppercase font-bold">
                  SÉLECTION PREMIUM
                </span>
              </motion.div>
              
              <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-[1.1] uppercase">
                À PROPOS DU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-orange to-red-500">
                  SANCTUAIRE AFRIKA FIT
                </span>
              </h2>
              
              <p className="font-sans text-gray-400 font-light text-sm sm:text-base leading-relaxed pt-2">
                Fondé en 2018, AFRIKA FIT combine l'intensité brute de l'entraînement de niveau élite avec le raffinement absolu d'un sanctuaire privé. Notre mission est d'éveiller votre plein potentiel à travers une synergie unique entre science sportive, préparation athlétique et bio-hacking de récupération.
              </p>
            </div>

            {/* Quick value statements */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between transition-all duration-300"
              >
                <div className="h-9 w-9 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4">
                  <Trophy className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Design & Performance</h4>
                  <p className="text-xs text-gray-500 font-light mt-1">Espace d'entraînement d'exception pensé pour le geste parfait.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: 'rgba(239, 68, 68, 0.3)' }}
                className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between transition-all duration-300"
              >
                <div className="h-9 w-9 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm">Suivi 100% Individualisé</h4>
                  <p className="text-xs text-gray-500 font-light mt-1">Bilans de forme personnalisés et suivi scientifique continu.</p>
                </div>
              </motion.div>
            </div>

            {/* CTA row linking to page À propos */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 group px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-white hover:text-brand-orange hover:border-brand-orange/40 hover:bg-brand-orange/5 transition-all duration-300 cursor-pointer"
              >
                <span>DÉCOUVRIR NOTRE PHILOSOPHIE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Slider of Sanctuary Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="font-mono text-xs text-gray-500 tracking-wider">NOS PILIERS FONDAMENTAUX</span>
              <span className="font-mono text-xs text-brand-orange font-bold">0{activePillar + 1} / 03</span>
            </div>

            {/* Large interactive card visualizer */}
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/card">
              {/* Image banner for active pillar */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePillar}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={pillars[activePillar].image}
                    alt={pillars[activePillar].title}
                    className="w-full h-full object-cover brightness-[0.35]"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
              </div>

              {/* Float indicators */}
              <div className="absolute top-6 left-6 p-3 rounded-xl bg-brand-dark/80 backdrop-blur-md border border-white/5 font-mono text-[10px] text-gray-300 tracking-widest uppercase">
                {pillars[activePillar].metric}
              </div>

              <div className="absolute top-6 right-6 flex gap-2">
                {pillars.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePillar(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activePillar === idx ? 'w-8 bg-brand-orange' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
                    aria-label={`Pillar ${p.id}`}
                  />
                ))}
              </div>

              {/* Bottom detail text with animations */}
              <div className="absolute bottom-0 inset-x-0 p-8 space-y-3 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-2"
                  >
                    <span className="font-mono text-xs text-brand-orange tracking-widest uppercase font-bold block">
                      {pillars[activePillar].tagline}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {pillars[activePillar].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xl">
                      {pillars[activePillar].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Quick interactive switches below */}
            <div className="grid grid-cols-3 gap-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-brand-card/85 border-brand-orange/40 shadow-lg shadow-brand-orange/5' 
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                      isActive ? 'bg-brand-orange text-white' : 'bg-white/5 text-gray-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`block font-display text-xs sm:text-sm font-semibold leading-tight ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      {pillar.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
