/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GymStat, ServiceItem, GalleryItem, PricingPlan, TrainerItem, TestimonialItem, FAQItem, TimetableDay, Product } from './types';

import wheyImg from '@/assets/images/whey_protein_1784315527528.jpg';
import creatineImg from '@/assets/images/creatine_powder_1784315539963.jpg';
import beltImg from '@/assets/images/lifting_belt_1784315552754.jpg';
import glovesImg from '@/assets/images/gym_gloves_1784315565261.jpg';
import kneesleevesImg from '@/assets/images/knee_sleeves_1784315575554.jpg';
import jumpropeImg from '@/assets/images/jump_rope_1784315585045.jpg';

export const productsData: Product[] = [
  // Nutrition & Suppléments
  { 
    id: 'prod-1', 
    name: 'Optimum Nutrition 100% Whey Gold Standard', 
    category: 'nutrition', 
    images: [wheyImg, wheyImg], 
    badge: 'Best-Seller',
    specs: ['24g de protéines par portion', '5.5g de BCAA', 'Cookies & Cream'],
    description: "La Whey Gold Standard d'Optimum Nutrition est l'une des protéines les plus vendues au monde. Formulée pour favoriser le développement musculaire et la récupération post-entraînement. Elle se mélange facilement et offre un goût délicieux.",
    features: ['Idéal pour la récupération musculaire', 'Se mélange facilement sans grumeaux', 'Goût délicieux Cookies & Cream']
  },
  { 
    id: 'prod-2', 
    name: 'Optimum Nutrition Creatine Powder', 
    category: 'nutrition', 
    images: [creatineImg, creatineImg],
    specs: ['5g de monohydrate de créatine pure', 'Zéro calorie', 'Non aromatisé'],
    description: "Le monohydrate de créatine est un supplément incontournable pour augmenter la force, la puissance et l'endurance. Cette poudre non aromatisée peut être mélangée à n'importe quelle boisson pour booster vos performances.",
    features: ['Améliore la force explosive', 'Soutient la croissance musculaire', 'Poudre micronisée pour une meilleure absorption']
  },

  // Force & Musculation Lourde
  { 
    id: 'prod-3', 
    name: 'Ceinture de Force Fitgriff', 
    category: 'powerlifting', 
    images: [beltImg, beltImg], 
    badge: 'Best-Seller',
    specs: ['Cuir véritable double épaisseur', 'Boucle en acier robuste', 'Maintien lombaire optimal'],
    description: "Cette ceinture de levage en cuir est conçue pour les charges lourdes. Elle fournit un soutien abdominal et lombaire indispensable pour le squat, le soulevé de terre et autres mouvements de force.",
    features: ['Protège le bas du dos', 'Augmente la pression intra-abdominale', 'Ajustement sécurisé']
  },
  {
    id: 'prod-4',
    name: 'Gants de Musculation Tactiques',
    category: 'powerlifting',
    images: [glovesImg, glovesImg],
    badge: 'Nouveau',
    specs: ['Protection des paumes anti-callosités', 'Serrage velcro sécurisé', 'Design respirant'],
    description: "Gants respirants conçus pour une prise en main maximale et une protection contre les callosités et les ampoules. Idéal pour la musculation quotidienne et l'entraînement croisé.",
    features: ['Évite la formation de callosités', 'Améliore la prise en main', 'Matière respirante et lavable']
  },
  {
    id: 'prod-5',
    name: 'Genouillère de Compression',
    category: 'powerlifting',
    images: [kneesleevesImg, kneesleevesImg],
    specs: ['Tricot 3D respirant', 'Stabilisation articulaire', 'Idéal pour le squat et l\'haltérophilie'],
    description: "Manchons de compression pour genoux offrant chaleur et stabilité. Parfait pour les squats lourds et les entraînements intenses, ils préviennent les blessures et soulagent les douleurs.",
    features: ['Maintient les articulations au chaud', 'Fournit une légère compression', 'Design ergonomique pour le confort']
  },

  // Conditionnement, Cardio & CrossFit
  {
    id: 'prod-6',
    name: 'Corde à Sauter avec Poignées Mousse',
    category: 'crossfit',
    images: [jumpropeImg, jumpropeImg],
    badge: 'Best-Seller',
    specs: ['Poignées ergonomiques antidérapantes', 'Câble ultra-rapide', 'Conditionnement métabolique'],
    description: "Corde à sauter de vitesse idéale pour les doubles under, le conditionnement métabolique et le cardio. Équipée de roulements à billes pour une rotation fluide.",
    features: ['Parfait pour brûler des calories', 'Rotation fluide et rapide', 'Longueur ajustable']
  }
];

export const statsData: GymStat[] = [
  { id: 'stat-1', value: '2 500+', label: 'Membres Actifs' },
  { id: 'stat-2', value: '12+', label: 'Coachs d\'Élite' },
  { id: 'stat-3', value: '80+', label: 'Postes d\'Entraînement' },
  { id: 'stat-4', value: '5+', label: 'Années d\'Excellence' },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-bodybuilding',
    title: 'Musculation & Force',
    iconName: 'Dumbbell',
    description: 'Sculptez votre physique avec du matériel de musculation haut de gamme, des poids libres et des protocoles d\'hypertrophie personnalisés conçus par des champions.',
    benefits: ['Hypertrophie musculaire ciblée', 'Suivi de l\'optimisation de la force', 'Progression d\'entraînement sur mesure'],
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'srv-fitness',
    title: 'Fitness & Conditionnement',
    iconName: 'Sparkles',
    description: 'Transformez votre capacité physique globale, améliorez votre tonus musculaire et augmentez votre efficacité métabolique grâce à un entraînement fonctionnel polyvalent.',
    benefits: ['Composition corporelle améliorée', 'Densité osseuse et articulaire accrue', 'Amélioration de la posture et stabilité du tronc'],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'srv-cardio',
    title: 'Entraînement Cardio',
    iconName: 'Zap',
    description: 'Brûlez des calories et boostez votre endurance cardiovasculaire à l\'aide de tapis de course, de rameurs, de vélos elliptiques de pointe et de séances HIIT spécialisées.',
    benefits: ['Oxydation maximale des graisses', 'Capacité pulmonaire et cardiaque accrue', 'Séances stimulantes libératrices d\'endorphines'],
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'srv-crossfit',
    title: 'Box de CrossFit',
    iconName: 'Flame',
    description: 'Surmontez des mouvements fonctionnels constamment variés et de haute intensité. Haltérophilie olympique, kettlebells, anneaux de gymnastique et défis communautaires motivants.',
    benefits: ['Puissance globale inégalée', 'Agilité et athlétisme pur', 'Esprit d\'équipe et camaraderie d\'élite'],
    imageUrl: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'srv-yoga',
    title: 'Yoga Zen & Pilates',
    iconName: 'Heart',
    description: 'Harmonisez votre clarté mentale, votre souplesse et vos muscles stabilisateurs profonds dans notre studio insonorisé à température contrôlée.',
    benefits: ['Souplesse et alignement améliorés', 'Réduction profonde du stress', 'Renforcement de la sangle abdominale'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'srv-zumba',
    title: 'Zumba Énergique',
    iconName: 'Music',
    description: 'Associez des rythmes de danse internationaux entraînants à des intervalles cardiovasculaires actifs pour une célébration de danse exaltante et brûleuse de calories.',
    benefits: ['Entraînement de la coordination rythmique', 'Séance aérobie active sur tout le corps', 'Haute énergie et dynamique de groupe'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'srv-coaching',
    title: 'Coaching Personnel',
    iconName: 'TrendingUp',
    description: 'Travaillez en tête-à-tête avec nos entraîneurs d\'élite certifiés. Accédez à des programmes d\'entraînement scientifiques personnalisés, une analyse dynamique de la composition corporelle et des corrections posturales.',
    benefits: ['Programmes 100% sur mesure', 'Correction de la posture & prévention des blessures', 'Responsabilisation directe pour des résultats garantis'],
    imageUrl: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'srv-weightloss',
    title: 'Programmes Perte de Poids',
    iconName: 'Award',
    description: 'Combinez un entraînement métabolique brûleur de graisses avec un accompagnement nutritionnel personnalisé au niveau des macronutriments. Obtenez une transformation saine, durable et permanente.',
    benefits: ['Perte de graisse corporelle durable', 'Plans de macronutriments approuvés par des nutritionnistes', 'Suivi régulier de la composition corporelle'],
    imageUrl: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    title: 'Entraînement à la barre olympique',
    category: 'workout',
  },
  {
    id: 'gal-2',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    title: 'Plateau de musculation de luxe',
    category: 'facilities',
  },
  {
    id: 'gal-3',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    title: 'Rameurs cardio haute technologie',
    category: 'cardio',
  },
  {
    id: 'gal-4',
    imageUrl: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800',
    title: 'Espace fonctionnel de CrossFit',
    category: 'crossfit',
  },
  {
    id: 'gal-5',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    title: 'Alignement postural au coucher du soleil',
    category: 'yoga',
  },
  {
    id: 'gal-6',
    imageUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
    title: 'Systèmes de charge de disques d\'élite',
    category: 'facilities',
  },
  {
    id: 'gal-7',
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    title: 'Stations en fonte sur mesure',
    category: 'workout',
  },
  {
    id: 'gal-8',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800',
    title: 'Piste de course sur tapis incliné',
    category: 'cardio',
  },
];

export const timetableData: TimetableDay[] = [
  {
    day: 'Lundi - Vendredi',
    hours: '16h00 - 23h00',
    classes: ['17h00 - Musculation & Force', '18h30 - WOD CrossFit', '19h30 - Entraînement Cardio', '20h30 - Yoga Zen & Pilates'],
    note: 'Hammam de luxe et douches accessibles toute la journée.',
  },
  {
    day: 'Samedi',
    hours: '16h00 - 22h00',
    classes: ['17h00 - Conditionnement HIIT', '18h30 - CrossFit en équipe', '20h00 - Yoga Vinyasa'],
    note: 'Bar à nutrition et comptoir de shakes protéinés ouverts.',
  },
  {
    day: 'Dimanche',
    hours: 'Jour de repos',
    classes: [],
    note: 'L\'établissement est fermé pour le nettoyage et la récupération des athlètes.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-daily',
    name: 'Pass Journalier',
    price: '10000',
    period: 'Session Unique',
    description: 'Parfait pour les voyageurs et les visiteurs d\'un jour qui souhaitent vivre un entraînement d\'élite.',
    features: [
      'Accès complet d\'une journée au plateau de force haut de gamme',
      'Casiers et douches de luxe inclus',
      '1 shake de pré-entraînement offert au bar nutrition',
      'Wi-Fi haut débit gratuit pour les membres',
      'Service de serviette inclus'
    ],
    isRecommended: false,
  },
  {
    id: 'plan-monthly',
    name: 'Abonnement Mensuel',
    price: '45000',
    period: 'par mois',
    description: 'Conçu pour les résidents sérieux déterminés à progresser régulièrement.',
    features: [
      'Accès illimité aux installations et équipements',
      'Tous les cours collectifs inclus (Zumba, Yoga, HIIT)',
      '1 scan d\'analyse corporelle 3D dynamique par mois',
      '2 invitations d\'invités gratuites par mois',
      'Accès par badge magnétique offert'
    ],
    isRecommended: false,
  },
  {
    id: 'plan-quarterly',
    name: 'Élite Trimestriel',
    price: '120000',
    period: 'par trimestre',
    description: 'Notre plan le plus populaire pour une transformation durable et un suivi régulier des progrès.',
    features: [
      'Tout ce qui est inclus dans l\'Abonnement Mensuel',
      '1 session de coaching personnel par mois',
      'Réservation prioritaire pour les cours collectifs prisés',
      '10% de réduction sur tous les shakes protéinés',
      'Accès à l\'espace de récupération (bains de glace & saunas)'
    ],
    isRecommended: true,
    accentText: 'LE PLUS POPULAIRE'
  },
  {
    id: 'plan-annual',
    name: 'Prestige Annuel de Luxe',
    price: '400000',
    period: 'par an',
    description: 'Pour une véritable transformation de style de vie. La valeur à long terme absolue avec avantages VIP.',
    features: [
      'Tout ce qui est inclus dans l\'Élite Trimestriel',
      '12 heures de coaching personnel privé en tête-à-tête',
      'Plans nutritionnels sur mesure basés sur les macronutriments',
      'Accès illimité à l\'espace de récupération de luxe',
      'Sweat à capuche exclusif AFRIKA FIT offert',
      'Option de gel d\'abonnement annuel (jusqu\'à 30 jours)'
    ],
    isRecommended: false,
    accentText: 'MEILLEURE VALEUR'
  },
];

export const trainersData: TrainerItem[] = [
  {
    id: 'trn-1',
    name: 'Amadou Diarra',
    specialty: 'Force Athlétique & Haltérophilie',
    experience: '12 Ans',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=600',
    certifications: ['Coach d\'Élite USAPL', 'Spécialiste de la Performance', 'Diplôme d\'État'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'trn-2',
    name: 'Awa Keita',
    specialty: 'CrossFit & Conditionnement',
    experience: '8 Ans',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600',
    certifications: ['Entraîneur CrossFit Niveau 3', 'Nutrition Sportive', 'Préparation Physique'],
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'trn-3',
    name: 'Ousmane Traoré',
    specialty: 'Boxe & Cardio Haute Intensité',
    experience: '10 Ans',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
    certifications: ['Maître d\'Armes', 'Certifié FMS Niveau 2', 'Spécialiste Arts Martiaux'],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 'trn-4',
    name: 'Fatoumata Coulibaly',
    specialty: 'Yoga, Pilates & Souplesse',
    experience: '7 Ans',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600',
    certifications: ['Professeure de yoga certifiée', 'Instructrice de Pilates', 'Praticienne de la pleine conscience'],
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'tst-1',
    name: 'Fatoumata Traore ',
    role: 'Athlète de Compétition',
    rating: 5,
    comment: 'AFRIKA FIT n\'est pas seulement une salle de sport ; c\'est un temple athlétique de luxe. Le réglage des machines est parfait, les coachs sont d\'une rigueur scientifique remarquable et l\'environnement vous incite à dépasser vos limites. Rejoindre le programme Élite Trimestriel a complètement sculpté mon corps.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'tst-2',
    name: 'Seydou Diarra',
    role: 'Directeur de Projet Senior',
    rating: 5,
    comment: 'Avec mes longues journées de travail, avoir accès à une salle d\'exception ouverte à 5h00 du matin dotée de systèmes de récupération impeccables (les saunas et bains de glace sont magiques) a tout changé pour moi. Les entraîneurs ont réglé mes problèmes de posture en 3 mois.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'tst-3',
    name: 'Mamadou Toure',
    role: 'Haltérophile & Coach',
    rating: 5,
    comment: 'Le standard d\'excellence absolu. Des plateformes olympiques officielles, des disques en fonte brute, des barres de spécialité sur mesure et une communauté formidable. Les entraîneurs maîtrisent la biomécanique à la perfection.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'tst-4',
    name: 'Abdoul Maiga',
    role: 'Praticienne de ',
    rating: 5,
    comment: 'Les cours de Yoga Zen sont tout simplement divins. Le studio bénéficie d\'une régulation thermique ultra-moderne, d\'une insonorisation totale et d\'ambiances tamisées idéales pour la pleine conscience. Elena et Sophia guident chacun avec bienveillance.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Puis-je essayer la salle avant d\'acheter un abonnement ?',
    answer: 'Absolument ! Vous pouvez acheter notre Pass Journalier (25 €) pour un accès complet, ou contacter notre équipe via le formulaire en ligne pour planifier une visite accompagnée et potentiellement bénéficier d\'une invitation.'
  },
  {
    id: 'faq-2',
    question: 'Les cours de fitness en groupe sont-ils inclus ?',
    answer: 'Oui ! Tous nos abonnements récurrents (Mensuel, Trimestriel et Annuel) incluent un accès illimité à l\'ensemble de nos cours collectifs : Yoga Zen, Pilates, séances CrossFit, Zumba à haute intensité et conditionnement physique.'
  },
  {
    id: 'faq-3',
    question: 'Comment réserver une séance en tête-à-tête avec un coach ?',
    answer: 'Une fois inscrit chez AFRIKA FIT, vous aurez accès à notre interface de planification en ligne pour les membres. Vous pouvez également réserver votre premier bilan directement auprès d\'un coach à l\'accueil ou remplir le formulaire ci-dessous.'
  },
  {
    id: 'faq-4',
    question: 'Est-il possible de suspendre temporairement mon abonnement ?',
    answer: 'Oui, nous comprenons que les imprévus arrivent ! Nos abonnements Annuels permettent jusqu\'à 30 jours de gel gratuit par an. Les abonnements trimestriels peuvent être gelés jusqu\'à 14 jours. Il suffit de prévenir l\'accueil 48 heures à l\'avance.'
  },
  {
    id: 'faq-5',
    question: 'Qu\'est-ce que l\'espace récupération et comment y accéder ?',
    answer: 'Notre espace de récupération comprend des saunas infrarouges haut de gamme, des bains froids régulés (bains de glace) et des équipements de compression. Cet espace est ouvert en accès illimité aux membres Annuels et Trimestriels, et accessible à la séance pour les autres.'
  }
];
