/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryData } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'workout' | 'cardio' | 'crossfit' | 'facilities' | 'yoga'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters: { label: string; value: typeof activeFilter }[] = [
    { label: 'Tous les Médias', value: 'all' },
    { label: 'Plateau Musculation', value: 'workout' },
    { label: 'Espace Cardio', value: 'cardio' },
    { label: 'Box CrossFit', value: 'crossfit' },
    { label: 'Studio Yoga', value: 'yoga' },
    { label: 'Installations & Récupération', value: 'facilities' },
  ];

  const filteredItems = galleryData.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIndex = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-brand-dark relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            SANCTUAIRE VISUEL
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            LA SCÈNE ATHLÉTIQUE
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Faites une visite virtuelle de nos infrastructures d'entraînement premium. Conçues pour associer une fonctionnalité athlétique rigoureuse à un design luxueux.
          </p>
        </div>

        {/* Categories / Filter Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative px-5 py-2 rounded-full font-display text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === filter.value
                  ? 'text-white border-brand-red bg-brand-red/10'
                  : 'text-gray-400 border-white/5 hover:border-white/10 hover:text-white bg-white/[0.01]'
              }`}
            >
              {filter.label}
              {activeFilter === filter.value && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute -inset-px rounded-full border border-brand-red bg-brand-red/5 -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry-Like Layout Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-square sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/5 bg-brand-card shadow-lg cursor-pointer"
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-75"
                  referrerPolicy="no-referrer"
                />

                {/* Cover visual overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-orange">
                        {item.category === 'workout' ? 'plateau force' : item.category === 'facilities' ? 'installations' : item.category}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white">
                        {item.title}
                      </h4>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Lightbox Overlayer Carousel */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark/95 backdrop-blur-md p-4">
              {/* Close background click */}
              <div className="absolute inset-0 z-0" onClick={() => setLightboxIndex(null)} />

              {/* Top info and close */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Image className="w-4 h-4 text-brand-orange" />
                  <span className="font-display font-semibold text-xs sm:text-sm">
                    {filteredItems[lightboxIndex].title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 uppercase tracking-widest text-brand-orange">
                    {filteredItems[lightboxIndex].category}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:text-brand-red transition-colors z-20 cursor-pointer"
                  aria-label="Close Lightbox"
                  id="lightbox-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main lightbox stage */}
              <div className="relative z-10 w-full max-w-4xl max-h-[70vh] flex items-center justify-center">
                {/* Left arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-16 h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-red/20 hover:border-brand-red transition-colors z-20 cursor-pointer"
                  aria-label="Previous Slide"
                  id="lightbox-prev"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Display Image */}
                <motion.img
                  key={filteredItems[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Right arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-16 h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-red/20 hover:border-brand-red transition-colors z-20 cursor-pointer"
                  aria-label="Next Slide"
                  id="lightbox-next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom counter index tracker */}
              <div className="absolute bottom-6 z-10 text-center font-mono text-xs text-gray-500 uppercase tracking-widest">
                Média {lightboxIndex + 1} sur {filteredItems.length}
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
