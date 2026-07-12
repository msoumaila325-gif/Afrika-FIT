/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Automatic slide rotation every 6 seconds to keep it high-energy and active
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const activeReview = testimonialsData[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      {/* Visual neon particles */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            TÉMOIGNAGES REÇUS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            LA VOIX DES ATHLÈTES
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Découvrez les retours de nos membres actifs, qu'ils soient compétiteurs de force ou amateurs de bien-être, qui ont transformé leur physique chez AFRIKA FIT.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-6 sm:px-12">
          
          <div className="relative overflow-hidden min-h-[340px] sm:min-h-[260px] rounded-3xl glass-card border border-white/10 p-6 sm:p-12 flex flex-col justify-between shadow-2xl">
            
            {/* Background Quotes */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.02] pointer-events-none" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeReview.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-6 flex flex-col justify-between h-full"
              >
                {/* Rating Stars row */}
                <div className="flex items-center gap-1 text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < activeReview.rating ? 'fill-brand-orange' : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest ml-2 font-semibold">
                    Membre Vérifié
                  </span>
                </div>

                {/* Review Comment */}
                <p className="font-sans text-sm sm:text-lg text-gray-200 font-light italic leading-relaxed">
                  "{activeReview.comment}"
                </p>

                {/* User Portrait details */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="relative">
                    <img
                      src={activeReview.imageUrl}
                      alt={activeReview.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-red"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-brand-orange text-white p-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <div>
                    <span className="block font-display font-bold text-white text-base">
                      {activeReview.name}
                    </span>
                    <span className="block font-mono text-[10px] text-brand-orange uppercase tracking-wider font-semibold">
                      {activeReview.role}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-brand-dark border border-white/10 text-white hover:text-brand-red hover:border-brand-red transition-all cursor-pointer z-10 shadow-lg"
            aria-label="Previous testimonial"
            id="testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-brand-dark border border-white/10 text-white hover:text-brand-red hover:border-brand-red transition-all cursor-pointer z-10 shadow-lg"
            aria-label="Next testimonial"
            id="testimonial-next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel Dots index tracker indicator */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === index ? 'w-8 bg-brand-red' : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              id={`testimonial-dot-${index}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
