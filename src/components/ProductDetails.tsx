import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Share2, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { productsData } from '../data';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductDetails({ product, onBack, onSelectProduct }: ProductDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const shareProduct = async () => {
    const shareData = {
      title: `${product.name} - AFRIKA FIT`,
      text: product.description || `Découvrez ${product.name} chez AFRIKA FIT`,
      url: window.location.href, // If we had real routing
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Erreur lors du partage', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const orderViaWhatsApp = () => {
    const message = `Bonjour AFRIKA FIT, je souhaite commander l'article : ${product.name}. Pouvez-vous me donner plus d'informations ?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/22370000000?text=${encodedMessage}`; // Replace with actual phone number if needed
    window.open(whatsappUrl, '_blank');
  };

  // Get similar products (same category, exclude current)
  const similarProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3); // Max 3

  // If no similar products, get some new or best sellers
  const recommendedProducts = similarProducts.length > 0 
    ? similarProducts 
    : productsData.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour à la boutique
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="relative flex flex-col gap-4">
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 sm:p-8"
                />
              </AnimatePresence>

              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 p-2 bg-black/50 hover:bg-brand-orange text-white rounded-full backdrop-blur-md transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 p-2 bg-black/50 hover:bg-brand-orange text-white rounded-full backdrop-blur-md transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {product.badge && (
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-brand-dark/80 backdrop-blur-md border border-white/10 rounded-lg">
                  <span className={`font-mono text-xs font-bold uppercase tracking-widest ${
                    product.badge === 'Rupture de stock' ? 'text-gray-400' :
                    product.badge === 'Nouveau' ? 'text-green-400' : 'text-brand-orange'
                  }`}>
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden bg-white border-2 transition-all ${
                      idx === currentImageIndex 
                        ? 'border-brand-orange scale-[1.02] shadow-lg shadow-brand-orange/20 opacity-100' 
                        : 'border-transparent hover:border-white/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} miniature ${idx + 1}`} 
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-white/5 text-gray-300 rounded-full font-mono text-[10px] uppercase tracking-widest border border-white/10">
                  {product.category}
                </span>
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
                {product.name}
              </h1>

              {product.description && (
                <p className="font-sans text-gray-400 text-base sm:text-lg font-light leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={orderViaWhatsApp}
                  disabled={product.badge === 'Rupture de stock'}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-display font-bold text-sm uppercase tracking-widest transition-all ${
                    product.badge === 'Rupture de stock'
                      ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                      : 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {product.badge === 'Rupture de stock' ? 'Épuisé' : 'Commander via WhatsApp'}
                </button>
                <button
                  onClick={shareProduct}
                  className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-display font-bold text-sm uppercase tracking-widest text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Share2 className="w-5 h-5" />
                  Partager
                </button>
              </div>

              {/* Specs & Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-orange" />
                      Avantages
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm font-light">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.specs && product.specs.length > 0 && (
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-orange" />
                      Caractéristiques
                    </h3>
                    <ul className="space-y-3">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm font-light">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/10">
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tight mb-8">
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProducts.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => {
                    onSelectProduct(rec);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer flex flex-col bg-brand-card rounded-2xl border border-white/10 overflow-hidden hover:border-brand-orange/30 transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-56 bg-white overflow-hidden">
                    <img
                      src={rec.images[0]}
                      alt={rec.name}
                      className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    />
                    {rec.badge && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-brand-dark/80 backdrop-blur-md border border-white/10 rounded-lg">
                        <span className={`font-mono text-[9px] font-bold uppercase tracking-widest ${
                          rec.badge === 'Rupture de stock' ? 'text-gray-400' :
                          rec.badge === 'Nouveau' ? 'text-green-400' : 'text-brand-orange'
                        }`}>
                          {rec.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-sm text-white mb-2 leading-snug group-hover:text-brand-orange transition-colors">
                      {rec.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
