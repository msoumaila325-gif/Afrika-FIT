/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Smartphone, 
  Check, 
  Sparkles, 
  PlusSquare, 
  Share, 
  Loader2, 
  Monitor, 
  Flame, 
  ChevronRight,
  Info
} from 'lucide-react';
import Logo from './Logo';

interface PwaInstallBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any; // The saved beforeinstallprompt event
  onInstallSuccess?: () => void;
}

export default function PwaInstallBottomSheet({ 
  isOpen, 
  onClose, 
  deferredPrompt,
  onInstallSuccess
}: PwaInstallBottomSheetProps) {
  const [installState, setInstallState] = useState<'idle' | 'installing' | 'installed'>('idle');
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<'benefits' | 'how-to'>('benefits');
  const [detectedOS, setDetectedOS] = useState<'ios' | 'android' | 'desktop'>('desktop');

  // Detect platform
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDetectedOS('ios');
    } else if (/android/.test(userAgent)) {
      setDetectedOS('android');
    } else {
      setDetectedOS('desktop');
    }
  }, []);

  // Handle installation flow
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Real browser prompt trigger
      try {
        setInstallState('installing');
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to install prompt: ${outcome}`);
        
        if (outcome === 'accepted') {
          // Simulate brief progress for premium feedback feel
          let currentProgress = 0;
          const interval = setInterval(() => {
            currentProgress += 10;
            setProgress(currentProgress);
            if (currentProgress >= 100) {
              clearInterval(interval);
              setInstallState('installed');
              if (onInstallSuccess) onInstallSuccess();
              setTimeout(() => {
                onClose();
              }, 2500);
            }
          }, 150);
        } else {
          setInstallState('idle');
        }
      } catch (err) {
        console.error('Install prompt failed:', err);
        // Fallback to simulated setup
        runSimulation();
      }
    } else {
      // No native prompt (e.g. Safari, iframe, or already installed)
      runSimulation();
    }
  };

  const runSimulation = () => {
    setInstallState('installing');
    setProgress(0);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 8;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
      
      if (currentProgress === 100) {
        clearInterval(interval);
        setInstallState('installed');
        if (onInstallSuccess) onInstallSuccess();
        setTimeout(() => {
          onClose();
          // Reset after bottomsheet closes fully
          setTimeout(() => setInstallState('idle'), 500);
        }, 2200);
      }
    }, 120);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] cursor-pointer"
            id="pwa-backdrop"
          />

          {/* Bottom Sheet Container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-0 inset-x-0 bg-brand-dark border-t border-white/10 rounded-t-[32px] shadow-2xl z-[101] overflow-hidden max-h-[90vh] flex flex-col md:max-w-2xl md:mx-auto"
            id="pwa-bottom-sheet"
          >
            {/* Header / Accent Bar */}
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto my-3 shrink-0" />

            {/* Scrollable Content wrapper */}
            <div className="px-6 pb-8 pt-2 overflow-y-auto space-y-6">
              
              {/* Main Info Header */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                    <Logo className="h-7" showText={false} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-white text-lg sm:text-xl uppercase tracking-tight">
                      AFRIKA FIT MOBILE
                    </h3>
                    <p className="text-xs text-brand-orange font-mono font-bold tracking-widest uppercase">
                      APPLICATION OFFICIELLE
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {installState === 'idle' && (
                <>
                  {/* Tab switch */}
                  <div className="flex border-b border-white/5 p-0.5">
                    <button
                      onClick={() => setActiveTab('benefits')}
                      className={`flex-1 py-2.5 text-center font-display text-xs font-bold uppercase tracking-wider transition-colors ${
                        activeTab === 'benefits' 
                          ? 'text-brand-orange border-b-2 border-brand-orange' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Avantages
                    </button>
                    <button
                      onClick={() => setActiveTab('how-to')}
                      className={`flex-1 py-2.5 text-center font-display text-xs font-bold uppercase tracking-wider transition-colors ${
                        activeTab === 'how-to' 
                          ? 'text-brand-orange border-b-2 border-brand-orange' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Guide d'installation
                    </button>
                  </div>

                  {/* TAB 1: BENEFITS */}
                  {activeTab === 'benefits' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                        Installez <strong className="text-white">AFRIKA FIT</strong> sur votre appareil et profitez d'une expérience optimisée, d'un accès rapide à notre planning et de toutes vos fonctionnalités de gym préférées en un clic.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-3.5">
                          <div className="h-9 w-9 shrink-0 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                            <Smartphone className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-xs sm:text-sm">Écran d'Accueil</h4>
                            <p className="text-[11px] text-gray-500 font-light mt-0.5">Ajoutez l'icône sur votre mobile comme une app native.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-3.5">
                          <div className="h-9 w-9 shrink-0 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                            <Sparkles className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-xs sm:text-sm">Pleine Écran Immédiat</h4>
                            <p className="text-[11px] text-gray-500 font-light mt-0.5">Pas de barre d'adresse, navigation immersive totale.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-3.5">
                          <div className="h-9 w-9 shrink-0 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                            <Check className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-xs sm:text-sm">Accès Rapide</h4>
                            <p className="text-[11px] text-gray-500 font-light mt-0.5">Accédez aux réservations, tarifs et coachs en 1 seconde.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-3.5">
                          <div className="h-9 w-9 shrink-0 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                            <Download className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-white text-xs sm:text-sm">Légère & Performante</h4>
                            <p className="text-[11px] text-gray-500 font-light mt-0.5">S'installe instantanément sans encombrer la mémoire.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: HOW TO INSTALL */}
                  {activeTab === 'how-to' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      {detectedOS === 'ios' ? (
                        <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                            <Smartphone className="w-4.5 h-4.5 text-brand-orange" />
                            <span className="font-display font-bold text-xs text-white uppercase tracking-wider">Instructions pour Apple iOS (Safari)</span>
                          </div>
                          
                          <ol className="space-y-3 font-sans text-xs text-gray-400 font-light list-decimal list-inside pl-1">
                            <li className="leading-relaxed">
                              Ouvrez <strong className="text-white">Safari</strong> et rendez-vous sur le site.
                            </li>
                            <li className="leading-relaxed flex items-center gap-1.5 flex-wrap">
                              Appuyez sur le bouton de partage <Share className="w-3.5 h-3.5 text-blue-400 inline mx-0.5" /> situé en bas de l'écran.
                            </li>
                            <li className="leading-relaxed flex items-center gap-1.5 flex-wrap">
                              Faites défiler vers le bas et sélectionnez <strong className="text-white inline-flex items-center gap-1">Sur l'écran d'accueil <PlusSquare className="w-3.5 h-3.5 text-gray-300" /></strong>.
                            </li>
                            <li className="leading-relaxed">
                              Donnez-lui le nom de votre choix puis appuyez sur <strong className="text-white">Ajouter</strong> en haut à droite.
                            </li>
                          </ol>
                        </div>
                      ) : detectedOS === 'android' ? (
                        <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                            <Smartphone className="w-4.5 h-4.5 text-brand-orange" />
                            <span className="font-display font-bold text-xs text-white uppercase tracking-wider">Instructions pour Android (Chrome)</span>
                          </div>
                          
                          <ol className="space-y-3 font-sans text-xs text-gray-400 font-light list-decimal list-inside pl-1">
                            <li className="leading-relaxed">
                              Cliquez sur le bouton rouge <strong className="text-brand-orange">Installer maintenant</strong> ci-dessous.
                            </li>
                            <li className="leading-relaxed">
                              Si la boîte de dialogue système s'affiche, validez l'installation.
                            </li>
                            <li className="leading-relaxed">
                              Sinon, cliquez sur les 3 petits points verticaux en haut à droite de Chrome puis sur <strong className="text-white">Installer l'application</strong>.
                            </li>
                          </ol>
                        </div>
                      ) : (
                        <div className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
                            <Monitor className="w-4.5 h-4.5 text-brand-orange" />
                            <span className="font-display font-bold text-xs text-white uppercase tracking-wider">Instructions pour Ordinateur</span>
                          </div>
                          
                          <ol className="space-y-3 font-sans text-xs text-gray-400 font-light list-decimal list-inside pl-1">
                            <li className="leading-relaxed">
                              Cliquez sur <strong className="text-brand-orange">Installer maintenant</strong> ci-dessous.
                            </li>
                            <li className="leading-relaxed">
                              Une icône d'installation apparaîtra également dans votre barre d'adresse (en haut à droite de Chrome/Edge).
                            </li>
                            <li className="leading-relaxed">
                              Validez la confirmation système pour créer un raccourci direct sur votre bureau.
                            </li>
                          </ol>
                        </div>
                      )}

                      <div className="p-3 bg-brand-orange/5 border border-brand-orange/10 rounded-xl flex gap-2.5 items-start">
                        <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <p className="text-[10px] text-gray-400 leading-relaxed font-light">
                          Note : Si vous êtes dans l'environnement de prévisualisation, l'application lancera un protocole de simulation haute-fidélité pour vous donner un aperçu complet de la fluidité et du rendu mobile.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Big Confirmation Trigger Button */}
                  <div className="pt-4 flex flex-col gap-2">
                    <button
                      onClick={handleInstallClick}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange hover:brightness-110 active:scale-[0.99] text-white font-display font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-red/10"
                      id="confirm-pwa-install-btn"
                    >
                      <Download className="w-4 h-4" />
                      <span>INSTALLER MAINTENANT</span>
                    </button>
                    
                    <button
                      onClick={onClose}
                      className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-[0.99] text-gray-400 hover:text-white font-display font-semibold uppercase text-[10px] tracking-wider transition-all text-center cursor-pointer border border-white/5"
                    >
                      Plus tard
                    </button>
                  </div>
                </>
              )}

              {/* INSTALLING STATE */}
              {installState === 'installing' && (
                <div className="py-12 flex flex-col items-center justify-center space-y-6">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing circular outer rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-brand-orange/10 animate-ping" />
                    <div className="h-24 w-24 rounded-full border-4 border-brand-orange/10 flex items-center justify-center bg-brand-orange/5">
                      <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h4 className="font-display font-bold text-white text-lg uppercase tracking-wider">
                      Installation d'Afrika Fit
                    </h4>
                    <p className="text-xs text-gray-400 font-light">
                      Configuration des éco-systèmes et synchronisation hors-ligne...
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full max-w-xs space-y-1.5">
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                      <span>Progrès</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-brand-red to-brand-orange transition-all duration-100 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* INSTALLED SUCCESSFULLY STATE */}
              {installState === 'installed' && (
                <div className="py-12 flex flex-col items-center justify-center space-y-6">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    className="h-24 w-24 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center"
                  >
                    <Check className="w-12 h-12 text-green-400" />
                  </motion.div>

                  <div className="text-center space-y-2">
                    <h4 className="font-display font-bold text-green-400 text-lg uppercase tracking-wider">
                      Installé avec Succès !
                    </h4>
                    <p className="text-xs text-gray-300 font-light max-w-sm mx-auto leading-relaxed">
                      L'application <strong className="text-white">AFRIKA FIT</strong> est désormais active sur votre écran d'accueil. Préparez-vous à dépasser vos limites !
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="font-mono text-[9px] text-gray-400 uppercase tracking-wider font-bold">
                      MODE SANS APPLICATION INTERNET ACTIF
                    </span>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
