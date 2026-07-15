/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqData } from '../data';

interface FAQProps {
  isEmbedded?: boolean;
}

export default function FAQ({ isEmbedded = false }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default open the first one

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={`${isEmbedded ? 'py-4 bg-transparent' : 'py-24 bg-brand-dark relative overflow-hidden'}`}>
      {/* Absolute decorative backings */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            BASE DE CONNAISSANCES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            QUESTIONS FRÉQUENTES
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Vous avez des questions concernant les abonnements, les plannings de coaching ou l'accès aux locaux ? Trouvez les réponses compilées par notre équipe d'accueil ci-dessous.
          </p>
        </div>

        {/* Accordion Layout List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl bg-brand-card border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-brand-red/40 bg-gradient-to-b from-brand-card to-brand-red/5'
                    : 'border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                }`}
                id={`faq-item-${item.id}`}
              >
                {/* Accordion Trigger row */}
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer transition-colors group"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${item.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                      isOpen ? 'bg-brand-red/20 text-brand-red' : 'bg-white/5 text-gray-400 group-hover:text-white'
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="font-display font-semibold text-white text-sm sm:text-base pr-4">
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Indicator icon */}
                  <div className={`h-8 w-8 rounded-lg border border-white/5 flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-brand-red text-white border-brand-red' : 'text-gray-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Collapsible Expandable Area */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 ml-11 border-t border-white/5 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Dynamic Chat / Question Trigger Help box */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <div className="h-10 w-10 rounded-xl bg-brand-orange/15 border border-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <span className="block font-display font-bold text-white text-sm sm:text-base">Vous avez encore des questions ?</span>
              <p className="text-xs text-gray-500 font-light mt-0.5">
                Contactez notre équipe à tout moment via WhatsApp ou notre formulaire de contact ci-dessous.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                window.scrollTo({
                  top: contactEl.offsetTop - 80,
                  behavior: 'smooth',
                });
              }
            }}
            className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-brand-orange text-white text-xs font-display font-semibold uppercase tracking-wider transition-all"
          >
            Poser une question
          </a>
        </div>

      </div>
    </section>
  );
}
