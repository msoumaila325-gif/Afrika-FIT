/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { timetableData } from '../data';

interface TimetableProps {
  isEmbedded?: boolean;
}

export default function Timetable({ isEmbedded = false }: TimetableProps) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  const activeDay = timetableData[activeDayIndex];

  const handleBookClass = (className: string) => {
    setSelectedClass(className);
    setBookingSuccess(null);
  };

  const confirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedClass) {
      setBookingSuccess(`Séance réservée avec succès : "${selectedClass}". Un code de validation vous a été envoyé !`);
      setTimeout(() => {
        setSelectedClass(null);
        setBookingSuccess(null);
      }, 4000);
    }
  };

  return (
    <section id="timetable" className={`${isEmbedded ? 'py-4 bg-transparent' : 'py-24 bg-brand-dark relative overflow-hidden'}`}>
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            PLANNING DES SÉANCES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            HORAIRES & COURS COLLECTIFS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Planifiez vos entraînements en toute simplicité. Cliquez sur un cours du planning interactif pour réserver instantanément votre session avec nos coachs d'élite.
          </p>
        </motion.div>

        {/* Mobile/Tablet Day Selector & Opening Hours Header */}
        <div className="lg:hidden mb-8 space-y-4">
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-red animate-pulse" />
            Heures d'Ouverture & Séances
          </h3>
          
          <div className="bg-brand-card/60 p-1 rounded-2xl border border-white/5 flex gap-1">
            {timetableData.map((dayData, idx) => {
              const displayName = dayData.day === 'Lundi - Vendredi' ? 'Lun - Ven' : dayData.day;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`flex-1 py-3 px-1.5 rounded-xl text-center transition-all cursor-pointer font-display text-xs font-semibold ${
                    activeDayIndex === idx
                      ? 'bg-gradient-to-r from-brand-red to-brand-orange text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="block text-xs sm:text-sm">{displayName}</span>
                  <span className="block font-mono text-[9px] sm:text-xs text-white/70 font-medium mt-1">
                    {dayData.hours}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Outer Grid: Left Opening Cards, Right Active Scheduler */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: 3 Opening Hour Cards (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex lg:col-span-5 flex-col space-y-6"
          >
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-red animate-pulse" />
              Heures d'Ouverture
            </h3>

            <div className="flex flex-col gap-6">
              {timetableData.map((dayData, idx) => (
                <motion.div
                  whileHover={{ y: -2, borderColor: 'rgba(239, 68, 68, 0.25)' }}
                  whileTap={{ scale: 0.98 }}
                  key={idx}
                  className={`p-6 rounded-2xl bg-brand-card border transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer select-none ${
                    activeDayIndex === idx
                      ? 'border-brand-red/40 shadow-lg shadow-brand-red/5'
                      : 'border-white/5 opacity-80 hover:opacity-100 hover:border-white/10'
                  }`}
                  onClick={() => setActiveDayIndex(idx)}
                  id={`timetable-day-card-${idx}`}
                >
                  {activeDayIndex === idx && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-brand-red to-brand-orange rounded-bl-xl font-mono text-[9px] text-white tracking-widest font-bold uppercase">
                      Sélectionné
                    </div>
                  )}

                  <div className="space-y-2">
                    <span className="block font-display font-semibold text-white text-lg">
                      {dayData.day}
                    </span>
                    {/* Time in JetBrains Mono for athletic/technical precision */}
                    <span className="block font-mono text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-400">
                      {dayData.hours}
                    </span>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                    <p className="text-xs text-gray-500 font-light italic">
                      {dayData.note || 'Tous les services et installations sont pleinement opérationnels.'}
                    </p>
                    <ChevronRight className="w-4 h-4 text-brand-red shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Dynamic Scheduler listing active classes for selected day */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 w-full"
          >
            <div className="p-5 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col h-full justify-between">
              
              {/* Active Day Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-white/5 mb-6">
                <div>
                  <span className="block font-mono text-[10px] text-brand-orange uppercase tracking-widest font-semibold">Planning Actif</span>
                  <h4 className="font-display font-bold text-2xl text-white mt-1">
                    Séances du {activeDay.day}
                  </h4>
                  <p className="lg:hidden text-xs text-gray-400 font-light italic mt-1.5">
                    {activeDay.note || 'Tous les services et installations sont pleinement opérationnels.'}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  <span>{activeDay.classes.length} cours planifiés</span>
                </div>
              </div>

              {/* Classes list */}
              <div className="space-y-4">
                {activeDay.classes.map((className, index) => {
                  const [timePart, namePart] = className.split(' - ');
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="p-4 rounded-xl bg-brand-dark/50 border border-white/5 hover:border-brand-orange/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="py-2.5 px-3.5 rounded-lg bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-center shrink-0 flex items-center gap-2 sm:gap-0 sm:flex-col sm:justify-center sm:min-w-[80px]">
                          <Clock className="w-3.5 h-3.5 text-brand-orange sm:hidden" />
                          <span className="font-mono text-xs sm:text-sm font-bold leading-none">
                            {timePart}
                          </span>
                        </div>
                        <div>
                          <h5 className="font-display font-bold text-white text-sm sm:text-base group-hover:text-brand-orange transition-colors">
                            {namePart}
                          </h5>
                          <p className="text-[11px] sm:text-xs text-gray-400 font-light mt-0.5">
                            Niveau : Intermédiaire à Élite • Service de serviettes inclus
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleBookClass(`${timePart} - ${namePart}`)}
                        className="w-full sm:w-auto px-4 py-2.5 sm:py-2 rounded-lg border border-white/10 hover:border-brand-red hover:bg-brand-red text-white text-xs font-display font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md text-center justify-center inline-flex"
                        id={`book-class-btn-${activeDayIndex}-${index}`}
                      >
                        Réserver
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Fine Print Note */}
              <p className="text-[10px] text-gray-500 font-mono text-center mt-6 tracking-wide">
                * Veuillez vous présenter 10 minutes avant le début de la séance. Aucun retard ne sera toléré pour ne pas perturber l'entraînement.
              </p>

            </div>
          </motion.div>

        </div>

        {/* Dynamic Booking confirmation modal (Luxurious feedback) */}
        <AnimatePresence>
          {selectedClass && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm" onClick={() => setSelectedClass(null)} />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md rounded-2xl glass-card border border-white/15 p-6 sm:p-8 bg-brand-card shadow-2xl z-10"
                id="booking-confirmation-modal"
              >
                <div className="text-center space-y-4 mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">RÉSERVER MA PLACE</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    Confirmez votre participation pour : <br />
                    <span className="font-semibold text-brand-red font-mono text-sm mt-1 block">{selectedClass}</span>
                  </p>
                </div>

                {bookingSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs text-center font-light leading-relaxed mb-4"
                  >
                    <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-green-500 animate-bounce" />
                    {bookingSuccess}
                  </motion.div>
                ) : (
                  <form onSubmit={confirmBooking} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider">Nom Complet</label>
                      <input
                        required
                        type="text"
                        placeholder="Ex. Jean Dupont"
                        className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider">Numéro de Téléphone</label>
                      <input
                        required
                        type="tel"
                        placeholder="Ex. +33 6 12 34 56 78"
                        className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedClass(null)}
                        className="flex-1 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all font-display font-semibold text-xs uppercase tracking-wider"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-red/10 hover:shadow-brand-red/20 transition-all cursor-pointer"
                        id="confirm-booking-btn"
                      >
                        Confirmer
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
