/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Dumbbell, Sparkles, Zap, Flame, Heart, Music, TrendingUp, Award, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';
import Pricing from './Pricing';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Sparkles,
  Zap,
  Flame,
  Heart,
  Music,
  TrendingUp,
  Award,
};

interface ServicesProps {
  isStandalone?: boolean;
  onBackToHome?: () => void;
}

export default function Services({ isStandalone = false, onBackToHome }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Background visual additions */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-dark to-transparent"></div>
      <div className="absolute -top-40 right-10 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standalone Breadcrumbs & Back Nav */}
        {isStandalone && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-gray-500">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  if (onBackToHome) onBackToHome();
                }} 
                className="hover:text-brand-red transition-colors cursor-pointer bg-transparent border-none p-0 font-bold"
              >
                ACCUEIL
              </button>
              <span className="text-gray-700">/</span>
              <span className="text-white font-bold">NOS SERVICES & TARIFS</span>
            </div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:border-brand-red/40 hover:bg-brand-red/5 transition-all cursor-pointer"
            >
              ← Retour à l'accueil
            </button>
          </div>
        )}

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            NOS ENTRAÎNEMENTS D'ÉLITE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            CHOISISSEZ VOTRE DISCIPLINE
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Explorez nos disciplines d'entraînement de pointe. Chacune est conçue pour des objectifs athlétiques précis, avec des métriques de pointe et du matériel haut de gamme.
          </p>
        </motion.div>

        {/* Dynamic Interactive Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Dumbbell;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative h-[380px] rounded-2xl overflow-hidden border border-white/5 bg-brand-card hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-end cursor-pointer shadow-xl"
                onClick={() => setSelectedService(service)}
                id={`service-card-${service.id}`}
              >
                {/* Image Overlay with Dark Gradients */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.5] group-hover:brightness-[0.35]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle red tint on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                </div>

                {/* Card Floating Visual Elements */}
                <div className="relative z-20 p-6 space-y-4">
                  {/* Glowing Floating Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-dark/80 backdrop-blur-md border border-white/10 text-brand-orange group-hover:text-brand-red group-hover:border-brand-red/30 transition-colors duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Copy details */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Interactive Button */}
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brand-red tracking-wider uppercase pt-2 group-hover:text-brand-orange transition-colors">
                    <span>Avantages</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expandable Benefits Side Drawer / Modal (Luxurious Interaction) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-brand-dark/85 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl rounded-3xl glass-card border border-white/10 shadow-2xl overflow-hidden z-10"
                id="service-detail-modal"
              >
                {/* Header Image banner */}
                <div className="relative h-48 sm:h-64">
                  <img
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    className="w-full h-full object-cover filter brightness-[0.5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent"></div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-brand-dark/85 border border-white/10 text-white hover:text-brand-red transition-colors"
                    aria-label="Close modal"
                    id="close-service-modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Floating sector info */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/20">
                      {React.createElement(iconMap[selectedService.iconName] || Dumbbell, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-widest text-brand-orange uppercase leading-none font-semibold mb-1">Zone AFRIKA FIT</span>
                      <h3 className="font-display font-bold text-2xl text-white leading-none">{selectedService.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 space-y-6 bg-brand-card">
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-gray-500">Description du Programme</h4>
                    <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-gray-500">Bénéfices Physiologiques Clés</h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/10 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-300 font-light leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="flex justify-end gap-3 pt-6 border-t border-white/5">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-5 py-2.5 rounded-lg font-display text-xs uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
                    >
                      Fermer
                    </button>
                    <a
                      href="#pricing"
                      onClick={() => {
                        setSelectedService(null);
                        const pricingEl = document.getElementById('pricing');
                        if (pricingEl) {
                          window.scrollTo({
                            top: pricingEl.offsetTop - 80,
                            behavior: 'smooth',
                          });
                        }
                      }}
                      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-red to-brand-orange text-white font-display font-semibold uppercase text-xs tracking-wider shadow-lg shadow-brand-red/10 hover:shadow-brand-red/20 transition-all hover:scale-[1.02]"
                    >
                      Choisir cet Abonnement
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Pricing Section inside Standalone Services page */}
        {isStandalone && (
          <div className="mt-24 pt-16 border-t border-white/5">
            <Pricing isEmbedded={true} />
          </div>
        )}

      </div>
    </section>
  );
}
