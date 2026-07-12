/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Eye, Trophy, Sparkles, Zap, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { statsData } from '../data';

export default function About() {
  const coreValues = [
    {
      icon: Trophy,
      title: "Excellence d'Élite",
      desc: "Notre équipe est composée exclusivement de coachs certifiés de niveau élite et d'anciens champions athlétiques déterminés à vous faire progresser.",
      color: 'text-brand-red bg-brand-red/10',
    },
    {
      icon: Zap,
      title: 'Équipements High-Tech',
      desc: 'Nous disposons de machines de musculation de pointe, de scanners biomécaniques numériques et de plateaux de force haut de gamme.',
      color: 'text-brand-orange bg-brand-orange/10',
    },
    {
      icon: Heart,
      title: 'Récupération de Luxe',
      desc: 'Rechargez vos batteries après l\'effort dans nos saunas premium, nos bains de glace profonds et nos zones de méditation insonorisées.',
      color: 'text-red-400 bg-red-400/10',
    },
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-orange/5 rounded-full blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            À PROPOS DU SANCTUAIRE APEX
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            REDÉFINIR LES LIMITES PHYSIQUES
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Fondé en 2011, le centre de fitness Apex a commencé comme une alternative rebelle aux salles commerciales traditionnelles. Aujourd'hui, nous sommes un sanctuaire mondial d'élite proposant un développement physique personnalisé, de la science nutritionnelle et des écosystèmes de récupération haut de gamme.
          </p>
        </div>

        {/* Presentational Grid with Image & Info Cards */}
        <div className="grid lg:grid-cols-12 gap-12 lg:items-center mb-24">
          
          {/* Left Column - Large Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1200"
                alt="Station d'entraînement d'élite"
                className="w-full h-[350px] sm:h-[450px] object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay badge */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-brand-orange uppercase font-bold tracking-wider">Club d'Exception</span>
                  <span className="block text-sm font-display font-semibold text-white">Salle de Sport N°1 2025</span>
                </div>
              </div>
            </div>

            {/* Absolute floating box on mobile-hidden */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 p-6 rounded-2xl glass-card border border-white/10 shadow-2xl max-w-[280px]">
              <span className="block font-mono text-3xl font-bold text-brand-red mb-1 font-mono">15+ Ans</span>
              <span className="block font-display font-semibold text-white text-sm mb-2">Expérience Inégalée</span>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Nous guidons vos transformations physiques grâce à des évaluations athlétiques précises et un suivi régulier des performances.
              </p>
            </div>
          </div>

          {/* Right Column - Mission, Vision, and Highlights */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Split Mission & Vision cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="p-6 rounded-2xl bg-brand-card/50 border border-white/5 hover:border-brand-red/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-brand-red/15 text-brand-red">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">Notre Mission</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Permettre à chaque athlète de dépasser ses limites physiques en associant la science du sport, des environnements d'entraînement exceptionnels et un coaching professionnel rigoureux.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-2xl bg-brand-card/50 border border-white/5 hover:border-brand-orange/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-brand-orange/15 text-brand-orange">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">Notre Vision</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Diriger le paysage du fitness haut de gamme à l'échelle internationale, en rendant l'entraînement de performance et la récupération de pointe accessibles et durables.
                </p>
              </div>
            </div>

            {/* Why Choose Us Bullet Blocks */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wider">
                POURQUOI CHOISIR LA MÉTRIQUE APEX ?
              </h3>
              <p className="text-sm text-gray-400 font-light">
                Nous pensons que le fitness n'est pas un simple passe-temps, mais un véritable investissement de vie. Notre méthode allie l'excellence de l'accompagnement, la performance mécanique et des protocoles de restauration physique raffinés.
              </p>
              
              <div className="space-y-3">
                {coreValues.map((value, idx) => {
                  const Icon = value.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-3.5 rounded-xl hover:bg-white/[0.02] transition-colors">
                      <div className={`p-2 rounded-xl shrink-0 ${value.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white text-sm">{value.title}</h4>
                        <p className="text-xs text-gray-400 font-light leading-relaxed mt-0.5">{value.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Statistics Grid - Interactive Metrics */}
        <div className="border-t border-b border-white/10 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-1.5 group cursor-default"
              >
                <div className="font-display text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
