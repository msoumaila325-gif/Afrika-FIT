/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Flame, Instagram, Twitter, Linkedin, Youtube, Facebook, Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const footerLinks = {
    explore: [
      { name: 'À Propos', href: '#about' },
      { name: 'Zones & Services', href: '#services' },
      { name: 'Galerie Photo', href: '#gallery' },
      { name: 'Horaires d\'Ouverture', href: '#timetable' },
    ],
    membership: [
      { name: 'Formules d\'Abonnement', href: '#pricing' },
      { name: 'Nos Coachs d\'Élite', href: '#trainers' },
      { name: 'Questions Fréquentes', href: '#faq' },
      { name: 'Nous Contacter', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-20 pb-8 text-gray-400 font-sans relative overflow-hidden">
      {/* Background flare particle */}
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1 - Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-center md:text-left">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="inline-flex items-center gap-2 group"
              id="footer-logo"
            >
              <Logo className="h-10" />
            </a>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Vivez le summum de la performance physique de haute intensité. Nos zones d'entraînement de classe mondiale, notre équipe de coachs d'élite et nos espaces de récupération de luxe sont conçus pour forger votre métrique physique ultime.
            </p>

            {/* Social media connections */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 rounded-lg bg-white/5 hover:bg-brand-red text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Links Area 1 (2 cols) */}
          <div className="lg:col-span-2 space-y-5 text-center md:text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              EXPLORER LE CLUB
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Links Area 2 (2 cols) */}
          <div className="lg:col-span-2 space-y-5 text-center md:text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              ABONNEMENTS & OFFRES
            </h4>
            <ul className="space-y-3">
              {footerLinks.membership.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter subscription (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-center md:text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white">
              RAPPORT HEBDOMADAIRE
            </h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Inscrivez-vous à notre liste privée pour recevoir chaque semaine des guides nutritionnels, des routines d'entraînement d'élite et des accès prioritaires.
            </p>

            {/* Newsletter form with direct dynamic callback */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Inscrit avec succès ! Vérifiez votre boîte de réception.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        required
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Votre adresse e-mail"
                        className="w-full bg-brand-dark border border-white/5 rounded-xl pl-9 pr-4 py-3 text-xs text-white focus:outline-none focus:border-brand-red transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-3 rounded-xl bg-brand-red hover:bg-brand-orange text-white font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      id="newsletter-subscribe-btn"
                    >
                      S'inscrire
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Lower row: copyright & details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} AFRIKA FIT Salle de Gym Fitness • Tous droits réservés.
          </span>
          <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-gray-600">
            <a href="#about" className="hover:text-brand-orange transition-colors">Politique de Confidentialité</a>
            <a href="#about" className="hover:text-brand-orange transition-colors">Conditions Générales</a>
            <a href="#about" className="hover:text-brand-orange transition-colors">Plan du Site</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
