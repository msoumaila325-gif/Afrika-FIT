import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { productsData } from '../data';
import { Product } from '../types';
import ProductDetails from './ProductDetails';

interface ShopProps {
  isStandalone?: boolean;
  onBackToHome?: () => void;
}

export default function Shop({ isStandalone, onBackToHome }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'nutrition' | 'powerlifting' | 'crossfit' | 'gear'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = productsData.filter(
    (product) => activeCategory === 'all' || product.category === activeCategory
  );

  if (selectedProduct) {
    return (
      <ProductDetails 
        product={selectedProduct} 
        onBack={() => setSelectedProduct(null)} 
        onSelectProduct={(p) => setSelectedProduct(p)} 
      />
    );
  }

  return (
    <div className={`w-full min-h-screen bg-[#050505] ${isStandalone ? 'pt-24' : 'pt-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-[10px] tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Équipement & Performance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6"
          >
            BOUTIQUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">AFRIKA FIT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-gray-400 font-light text-sm sm:text-base"
          >
            Découvrez notre sélection d'équipements professionnels pour optimiser vos performances à la salle. Force, conditionnement et accessoires tactiques.
          </motion.p>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { id: 'all', label: 'TOUS LES ARTICLES' },
            { id: 'nutrition', label: '💊 NUTRITION' },
            { id: 'powerlifting', label: '🏋️ FORCE' },
            { id: 'crossfit', label: '⚡ CROSSFIT' },
            { id: 'gear', label: '🎒 GEAR' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2.5 rounded-full font-display font-semibold text-xs sm:text-sm transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20'
                  : 'bg-brand-dark border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer flex flex-col bg-brand-card rounded-2xl border border-white/10 overflow-hidden hover:border-brand-orange/30 transition-all duration-300 shadow-xl"
              >
                {/* Product Image */}
                <div className="relative h-64 sm:h-72 bg-white overflow-hidden">
                  <img
                   src={product.images[0]} 
                  //  src={heroImage}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 rounded-lg">
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${
                        product.badge === 'Rupture de stock' ? 'text-gray-400' :
                        product.badge === 'Nouveau' ? 'text-green-400' : 'text-brand-orange'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  {product.badge === 'Rupture de stock' && (
                     <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                       <span className="px-4 py-2 bg-brand-red text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg transform -rotate-12">Épuisé</span>
                     </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-white mb-3 leading-snug group-hover:text-brand-orange transition-colors">
                    {product.name}
                  </h3>
                  
                  {product.specs && (
                    <ul className="mb-4 space-y-1.5 flex-1">
                      {product.specs.slice(0, 2).map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                           <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                           <span className="leading-tight">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-brand-orange group-hover:translate-x-1 transition-transform">
                    <span className="font-mono text-xs uppercase font-bold tracking-widest">Voir détails</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
