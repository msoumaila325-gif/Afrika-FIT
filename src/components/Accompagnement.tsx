/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Apple, 
  Smartphone, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2,
  CalendarDays
} from 'lucide-react';

interface AccompagnementProps {
  onJoinClick?: () => void;
  onWhatsAppClick?: () => void;
}

export default function Accompagnement({ onJoinClick, onWhatsAppClick }: AccompagnementProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pillars = [
    {
      id: 1,
      title: 'Diagnostic Biométrique',
      subtitle: 'ANALYSE INBODY & POSTURE',
      description: 'Chaque transformation commence par une cartographie scientifique précise. Nous évaluons vos ratios de masse musculaire, de graisses segmentaires, d\'hydratation et vos déséquilibres posturaux pour concevoir votre feuille de route unique.',
      features: [
        'Mesure de composition corporelle de précision (InBody)',
        'Analyse de la mobility articulaire & de la flexibilité',
        'Détermination précise des zones de fréquence cardiaque',
        'Évaluation de la force maximale de base (RPE/1RM)'
      ],
      icon: LineChart,
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      title: 'Planification Nutritionnelle',
      subtitle: 'REPROGRAMMATION MÉTABOLIQUE',
      description: 'L\'alimentation d\'un athlète n\'est pas faite de privations, mais de carburant ciblé. Nos experts élaborent des protocoles macro-nutritionnels adaptés à vos objectifs, votre rythme biologique et vos contraintes du quotidien.',
      features: [
        'Plans de repas personnalisés mis à jour chaque mois',
        'Calcul précis de la dépense métabolique au repos',
        'Guide d\'intégration de suppléments certifiés anti-dopage',
        'Suivi hebdomadaire de la balance d\'hydratation'
      ],
      icon: Apple,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      title: 'Mentoring & Suivi Continu',
      subtitle: 'CONNEXION DIGITALE 24/7',
      description: 'L\'intensité de la salle ne s\'arrête pas à la porte. Votre coach dédié supervise vos entraînements à distance, analyse vos vidéos de posture et reste disponible en direct via notre canal privé pour maintenir votre élan.',
      features: [
        'Messagerie privée instantanée avec votre coach certifié',
        'Adaptation dynamique de vos charges et volumes de travail',
        'Analyse technique à distance de vos mouvements clés',
        'Rapports d\'évolution mensuels complets et objectifs'
      ],
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const highlights = [
    {
      title: 'Coachs Certifiés',
      desc: 'Formés aux techniques athlétiques.'
    },
    {
      title: '100% Individualisé',
      desc: 'Aucun programme pré-conçu.'
    },
    {
      title: 'Suivi Scientifique',
      desc: 'Basé sur vos métriques.'
    }
  ];

  return (
    <section id="accompagnement" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Visual background aesthetics */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Fine-grid accent */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span className="font-mono text-[10px] text-brand-orange tracking-widest uppercase font-bold">
              SUIVI ULTRA-PERSONNALISÉ
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            L'ACCOMPAGNEMENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-orange to-red-500">
              AFRIKA FIT ELITE
            </span>
          </h2>
          
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Un athlète ne progresse jamais seul. Notre système d'accompagnement haut de gamme fusionne la rigueur de l'analyse athlétique et de la nutrition clinique pour dessiner votre propre excellence.
          </p>
        </motion.div>

        {/* Dynamic 2-Column interactive showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Selector list & detail card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="font-mono text-xs text-gray-500 tracking-wider block mb-2 uppercase">
              ÉTAPES DE VOTRE PRÉPARATION
            </span>
            
            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full p-5 rounded-2xl border text-left transition-all cursor-pointer flex gap-4 items-start group ${
                      isSelected 
                        ? 'bg-brand-card/90 border-brand-red/30 shadow-lg shadow-brand-red/5' 
                        : 'bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-gradient-to-r from-brand-red to-brand-orange text-white' : 'bg-white/5 text-gray-400'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`block font-mono text-[10px] tracking-widest ${isSelected ? 'text-brand-orange font-bold' : 'text-gray-500'}`}>
                        ÉTAPES 0{pillar.id}
                      </span>
                      <h3 className={`font-display text-base font-bold mt-1 ${isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-light mt-1.5 line-clamp-1">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5 mt-6">
              {highlights.map((hl, i) => (
                <div key={i} className="text-center sm:text-left">
                  <span className="block font-display text-xs font-bold text-white leading-tight">{hl.title}</span>
                  <span className="block text-[10px] text-gray-500 font-light mt-1">{hl.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual and interactive feature expansion details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="bg-brand-card/40 border border-white/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md min-h-[460px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Card visual background image placeholder */}
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden group">
                    <img
                      src={pillars[activeStep].image}
                      alt={pillars[activeStep].title}
                      className="w-full h-full object-cover brightness-50 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="font-mono text-[10px] text-brand-orange tracking-widest font-bold block bg-brand-dark/80 px-2.5 py-1 rounded border border-white/5 w-fit">
                        {pillars[activeStep].subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Textual Details */}
                  <div className="space-y-4">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                      {pillars[activeStep].title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {pillars[activeStep].description}
                    </p>

                    {/* Features bullet points */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-3">
                      {pillars[activeStep].features.map((feat, index) => (
                        <div key={index} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-gray-300 font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

        {/* THE CTA BLOCK: PERSUASIVE INVITATION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0f0f0f] p-6 sm:p-10 md:p-12 text-center shadow-xl"
        >
          {/* Subtle warm lighting sphere */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-red/5 rounded-full blur-[90px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white uppercase">
              REJOINDRE LE CLUB AFRIKA FIT
            </h3>
            
            <p className="font-sans text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Réservez votre séance d'essai d'exception ou échangez directement par message avec l'un de nos coachs certifiés.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onJoinClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange text-white font-display font-bold uppercase text-[11px] tracking-wider transition-all cursor-pointer shadow-lg shadow-brand-red/10"
                id="cta-join-membership"
              >
                <span>REJOINDRE LE CLUB</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-semibold uppercase text-[11px] tracking-wider transition-all cursor-pointer"
                id="cta-whatsapp-chat"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>CONTACTER PAR WHATSAPP</span>
              </motion.button>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-500 text-[9px] font-mono uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-orange" />
                <span>Bilan initial offert</span>
              </div>
              <div className="hidden sm:inline text-gray-800">•</div>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-3 h-3 text-brand-orange" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
