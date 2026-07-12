/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Flame, Trophy, Percent, BadgeAlert, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { pricingPlans } from '../data';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Simple pricing helper that handles dynamic calculations for the cycle
  const getDisplayPrice = (planId: string, basePrice: string) => {
    const rawNumber = parseInt(basePrice);
    
    const formatFCFA = (num: number) => {
      return num.toLocaleString('fr-FR') + ' F CFA';
    };

    if (planId === 'plan-daily') return { price: formatFCFA(rawNumber), note: 'par séance' };
    
    if (billingCycle === 'annual') {
      // Apply a luxury 20% discount for annual billing
      const annualMonthlyRate = Math.floor((rawNumber * 12 * 0.8) / 12);
      // Round to the nearest 100 for a clean display
      const roundedRate = Math.round(annualMonthlyRate / 100) * 100;
      return { price: formatFCFA(roundedRate), note: 'par mois, facturé à l\'année' };
    }
    
    return { price: formatFCFA(rawNumber), note: planId === 'plan-annual' ? 'facturé à l\'année' : 'par mois' };
  };

  return (
    <section id="pricing" className="py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            OFFRES DE TRANSFORMATION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            INVESTISSEZ DANS VOTRE PHYSIQUE
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Choisissez votre niveau d'engagement athlétique. Profitez d'équipements de luxe, de coachs de niveau élite et d'espaces de récupération haut de gamme. Pas de frais de dossier cachés.
          </p>
        </div>

        {/* Premium Billing Cycle Toggle pill */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-xs font-mono uppercase tracking-widest ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
            Mensuel
          </span>
          
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-16 h-8 rounded-full bg-brand-card border border-white/10 p-1 relative flex items-center transition-colors hover:border-brand-red/50 cursor-pointer"
            aria-label="Toggle Billing Cycle"
            id="billing-cycle-toggle"
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-brand-red to-brand-orange shadow-md ${
                billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>

          <span className={`text-xs font-mono uppercase tracking-widest flex items-center gap-1 ${billingCycle === 'annual' ? 'text-white' : 'text-gray-500'}`}>
            Annuel (Engagement)
            <span className="px-2 py-0.5 rounded bg-brand-red/15 text-brand-red text-[9px] font-bold tracking-normal animate-pulse shrink-0">
              RÉDUCTION 20%
            </span>
          </span>
        </div>

        {/* 4 pricing cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const { price, note } = getDisplayPrice(plan.id, plan.price);
            return (
              <div
                key={plan.id}
                className={`rounded-2xl bg-brand-card p-6 flex flex-col justify-between transition-all duration-500 border relative ${
                  plan.isRecommended
                    ? 'border-brand-red shadow-2xl shadow-brand-red/5 bg-gradient-to-b from-brand-card via-brand-card to-brand-red/5 scale-105 z-10'
                    : 'border-white/5 hover:border-brand-orange/30 hover:shadow-xl'
                }`}
                id={`pricing-card-${plan.id}`}
              >
                {/* Visual Accent Label */}
                {plan.accentText && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-red to-brand-orange font-mono text-[9px] text-white tracking-widest font-black uppercase shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white animate-spin" style={{ animationDuration: '3s' }} />
                    {plan.accentText === 'Most Popular' ? 'Le Plus Populaire' : plan.accentText === 'Elite Tier' ? 'Niveau Élite' : plan.accentText}
                  </div>
                )}

                {/* Plan Metadata */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Rate Display */}
                  <div className="py-4 border-t border-b border-white/5 space-y-1">
                    <span className="block font-display font-black text-4xl sm:text-5xl text-white">
                      {price}
                    </span>
                    <span className="block font-mono text-[10px] text-brand-orange uppercase tracking-wider font-semibold">
                      {note}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                      Inclus
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-light leading-snug">
                          <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action button */}
                <div className="pt-8">
                  <a
                    href="#contact"
                    className={`w-full py-3.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] cursor-pointer ${
                      plan.isRecommended
                        ? 'bg-gradient-to-r from-brand-red to-brand-orange text-white hover:shadow-brand-red/20'
                        : 'bg-white/5 text-white hover:bg-white border border-white/10 hover:text-black hover:border-white'
                    }`}
                  >
                    <span>Choisir cette Formule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="block text-[9px] text-center text-gray-500 font-mono mt-3 uppercase tracking-widest">
                    Aucun frais caché à l'inscription
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Corporate Trust Badge */}
        <div className="mt-16 p-6 rounded-2xl glass-card border border-white/10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="h-12 w-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-display font-bold text-white text-base">Partenariats Bien-être en Entreprise</span>
              <p className="text-xs text-gray-400 font-light mt-0.5 leading-relaxed">
                Vous cherchez à améliorer la vitalité et la santé de vos collaborateurs ? Nous concevons des abonnements d'entreprise personnalisés avec accès privé exclusif.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg border border-white/10 hover:border-brand-orange text-white font-display font-semibold text-xs tracking-wider uppercase transition-all whitespace-nowrap"
          >
            Formules Corporate
          </a>
        </div>

      </div>
    </section>
  );
}
