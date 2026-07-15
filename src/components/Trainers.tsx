/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Trophy, ShieldCheck, Star, Sparkles, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { trainersData } from '../data';
import { TrainerItem } from '../types';

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerItem | null>(null);

  return (
    <section id="trainers" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            MAÎTRES DE LA PERFORMANCE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            NOTRE ÉQUIPE DE COACHS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Entraînez-vous aux côtés de directeurs de performance certifiés à l'international, d'anciens champions d'haltérophilie et de spécialistes de la biomécanique déterminés à libérer votre potentiel athlétique.
          </p>
        </motion.div>

        {/* Trainers Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-brand-card shadow-2xl flex flex-col justify-end h-[420px] cursor-pointer"
              onClick={() => setSelectedTrainer(trainer)}
              id={`trainer-card-${trainer.id}`}
            >
              {/* Photo background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-[0.4]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-transparent z-10"></div>
              </div>

              {/* Top Row Hover tag */}
              <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-red/90 text-white font-mono text-[9px] tracking-wider uppercase font-bold shadow-md">
                  <Star className="w-3 h-3 fill-white text-white animate-pulse" />
                  <span>{trainer.experience} d'Expérience</span>
                </div>
              </div>

              {/* Details container */}
              <div className="relative z-20 p-6 space-y-4">
                
                {/* Specialties / Specialty */}
                <div className="space-y-1">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-orange leading-none font-semibold">
                    {trainer.specialty}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-red transition-colors leading-tight">
                    {trainer.name}
                  </h3>
                </div>

                {/* Certifications Preview (Visible on Hover) */}
                <div className="h-0 group-hover:h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed">
                    Certifications : {trainer.certifications.slice(0, 2).join(', ')}...
                  </p>
                </div>

                {/* Social media icons & Action bar */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  
                  {/* Social media links */}
                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    {trainer.socials.instagram && (
                      <a
                        href={trainer.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-red hover:text-white text-gray-400 flex items-center justify-center transition-all cursor-pointer shadow"
                        aria-label={`${trainer.name} Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a
                        href={trainer.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-red hover:text-white text-gray-400 flex items-center justify-center transition-all cursor-pointer shadow"
                        aria-label={`${trainer.name} Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {trainer.socials.linkedin && (
                      <a
                        href={trainer.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-red hover:text-white text-gray-400 flex items-center justify-center transition-all cursor-pointer shadow"
                        aria-label={`${trainer.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Profile Plus Trigger */}
                  <div className="h-8 w-8 rounded-lg bg-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-white flex items-center justify-center transition-all">
                    <Plus className="w-4 h-4" />
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Trainer Bio Modal (Luxurious Interaction) */}
        <AnimatePresence>
          {selectedTrainer && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop click */}
              <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm" onClick={() => setSelectedTrainer(null)} />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl rounded-3xl glass-card border border-white/10 shadow-2xl overflow-hidden z-10"
                id="trainer-bio-modal"
              >
                <div className="grid md:grid-cols-12">
                  
                  {/* Left Column - Large visual portrait */}
                  <div className="md:col-span-5 relative h-64 md:h-[400px]">
                    <img
                      src={selectedTrainer.imageUrl}
                      alt={selectedTrainer.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-card via-transparent to-transparent"></div>
                  </div>

                  {/* Right Column - Certifications copy */}
                  <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-brand-card">
                    
                    <div className="space-y-4">
                      {/* Name header */}
                      <div className="space-y-1">
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-brand-orange">
                          {selectedTrainer.specialty}
                        </span>
                        <h3 className="font-display font-bold text-2xl text-white">
                          {selectedTrainer.name}
                        </h3>
                        <p className="text-xs text-brand-red font-mono font-bold tracking-wider uppercase">
                          Expérience : {selectedTrainer.experience}
                        </p>
                      </div>

                      {/* Bio introduction */}
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        Dédié à la recherche de la perfection athlétique, {selectedTrainer.name} élabore des programmes personnalisés basés sur des évaluations biomécaniques rigoureuses et un suivi précis des performances de force.
                      </p>

                      {/* Full certifications checklist */}
                      <div className="space-y-2.5 pt-4 border-t border-white/5">
                        <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                          Certifications Vérifiées
                        </span>
                        <div className="space-y-2">
                          {selectedTrainer.certifications.map((cert, index) => (
                            <div key={index} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                              <Trophy className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                              <span>{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        AFRIKA FIT COACHING ACADEMY
                      </span>
                      <button
                        onClick={() => setSelectedTrainer(null)}
                        className="px-5 py-2 rounded-lg bg-white/5 hover:bg-brand-red text-white hover:text-white text-xs font-display font-semibold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Fermer
                      </button>
                    </div>

                  </div>

                </div>

                {/* Close absolute button */}
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-brand-dark border border-white/10 text-white hover:text-brand-red transition-all cursor-pointer z-20"
                  aria-label="Fermer la bio"
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
