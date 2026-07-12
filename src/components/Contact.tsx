/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquareCode, CheckCircle2, Navigation, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'plan-quarterly',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real server-side API request proxying
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'plan-quarterly',
        message: '',
      });
      // Reset success banner after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleWhatsAppChat = () => {
    // Open a friendly direct whatsapp chat
    const message = encodeURIComponent("Bonjour l'équipe APEX ! Je souhaite rejoindre le club. Pouvez-vous me donner plus de détails sur les abonnements ?");
    window.open(`https://wa.me/33612345678?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-luxury-gradient relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-brand-orange tracking-[0.25em] uppercase font-bold block">
            CONTACTEZ-NOUS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            REJOINDRE LA LIGUE
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-red to-brand-orange mx-auto rounded-full"></div>
          <p className="font-sans text-gray-400 font-light text-sm sm:text-base">
            Prêt à redéfinir vos performances athlétiques ? Remplissez le formulaire d'inscription, appelez-nous directement ou discutez avec l'accueil sur WhatsApp.
          </p>
        </div>

        {/* Form and Info grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - Contact Coordinates and Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Info Cards */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">
                Siège Social APEX
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-4 p-4 rounded-xl bg-brand-card/50 border border-white/5 hover:border-brand-red/25 transition-all">
                  <div className="h-10 w-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500 tracking-wider">Adresse Physique</span>
                    <span className="block text-sm text-gray-200 font-light mt-0.5">
                      921 Boulevard de l'Apex, Performance City, PC 50293
                    </span>
                  </div>
                </div>

                {/* Direct Call */}
                <div className="flex gap-4 p-4 rounded-xl bg-brand-card/50 border border-white/5 hover:border-brand-red/25 transition-all">
                  <div className="h-10 w-10 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500 tracking-wider">Ligne Directe</span>
                    <span className="block text-sm text-gray-200 font-light mt-0.5">
                      +33 1 45 67 89 10
                    </span>
                  </div>
                </div>

                {/* Email inbox */}
                <div className="flex gap-4 p-4 rounded-xl bg-brand-card/50 border border-white/5 hover:border-brand-red/25 transition-all">
                  <div className="h-10 w-10 rounded-lg bg-red-400/10 text-red-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-gray-500 tracking-wider">Inscriptions & Renseignements</span>
                    <span className="block text-sm text-gray-200 font-light mt-0.5">
                      contact@apexfitness.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxurious Dark Map Placeholder box */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-brand-card h-64 relative shadow-inner group">
              <div className="absolute inset-0 bg-[#121212] flex items-center justify-center overflow-hidden">
                {/* Tech lines for dark grid elegance */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                
                {/* Dynamic radar rings */}
                <div className="absolute h-32 w-32 rounded-full border border-brand-red/10 animate-ping"></div>
                <div className="absolute h-20 w-20 rounded-full border border-brand-orange/20 animate-pulse"></div>

                {/* Marker */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-brand-red/40 animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="block font-display font-bold text-xs text-white mt-2 tracking-widest uppercase">EMPLACEMENT APEX</span>
                  <span className="block text-[9px] font-mono text-gray-500 mt-1">LAT : 48.8566 • LON : 2.3522</span>
                </div>
              </div>

              {/* Float map action */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/10 flex items-center justify-between z-20">
                <span className="text-[10px] font-mono text-gray-400">Ouvrir l'itinéraire GPS</span>
                <a
                  href="https://maps.google.com/?q=Paris,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-brand-red text-white hover:bg-brand-orange transition-colors flex items-center justify-center"
                  aria-label="Open Map Directions"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick WhatsApp chat trigger */}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppChat}
                className="w-full py-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                id="contact-whatsapp-btn"
              >
                <MessageSquareCode className="w-5 h-5 animate-bounce" />
                <span>Contacter l'accueil sur WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column - Premium contact form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 h-full flex flex-col justify-between">
              
              <div className="space-y-4 mb-6">
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">Demande d'Inscription</h3>
                <p className="text-xs text-gray-400 font-light">
                  Soumettez vos coordonnées ci-dessous. Notre coordinateur administratif étudiera votre demande et planifiera votre première visite d'évaluation sous 12 heures ouvrées.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider font-semibold">Nom Complet</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex. Jean Dupont"
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider font-semibold">Adresse E-mail</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex. jeandupont@gmail.com"
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Mobile phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider font-semibold">Numéro de Téléphone</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex. +33 6 12 34 56 78"
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>

                  {/* Program selection */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider font-semibold">Abonnement Souhaité</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer"
                    >
                      <option value="plan-daily">Pass Journalier (25 €)</option>
                      <option value="plan-monthly">Abonnement Mensuel (89 €)</option>
                      <option value="plan-quarterly">Élite Trimestriel (239 €) - RECOMMANDÉ</option>
                      <option value="plan-annual">Prestige Annuel de Luxe (799 €)</option>
                      <option value="corporate">Partenariat Entreprise / Corporate</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider font-semibold">Vos Objectifs Physiques & Sportifs</label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous de votre expérience, de vos objectifs de force ou de perte de poids, ou de vos disponibilités..."
                    className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-red transition-all resize-none"
                  ></textarea>
                </div>

                {/* Status/Submit Row */}
                <div className="pt-2">
                  <AnimatePresence mode="wait">
                    {submitSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Demande reçue ! Notre équipe administrative vous contactera très rapidement pour planifier votre visite.</span>
                      </motion.div>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange text-white font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-brand-red/10 hover:shadow-brand-red/25 transition-all disabled:opacity-50 cursor-pointer"
                        id="contact-submit-btn"
                      >
                        {isSubmitting ? (
                          <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Réserver ma visite d'évaluation</span>
                          </>
                        )}
                      </button>
                    )}
                  </AnimatePresence>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
