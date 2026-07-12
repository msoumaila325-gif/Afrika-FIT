/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="afrika-fit-logo">
      {/* Precision Vector Africa Fitness Icon */}
      <svg
        viewBox="0 0 120 120"
        className="h-full w-auto shrink-0 drop-shadow-[0_4px_10px_rgba(0,154,48,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Upper part of Africa in Mali Green */}
        <path
          d="M45 15 C55 12, 70 10, 85 18 C92 22, 95 28, 93 35 C90 42, 83 48, 78 54 L32 54 C30 50, 24 48, 22 40 C24 32, 32 25, 38 22 C41 20, 42 17, 45 15 Z"
          fill="#009a30"
        />

        {/* Gym Sport figures stylized in white inside the top part */}
        {/* Figure 1: Lifting Weights */}
        <circle cx="48" cy="24" r="2" fill="#ffffff" opacity="0.9" />
        <path d="M44 32 L52 32 M48 26 L48 32 L46 38 M48 32 L50 38" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
        <path d="M42 30 L45 28 L48 29 L51 28 L54 30" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
        <circle cx="41" cy="30" r="1" fill="#ffffff" opacity="0.9" />
        <circle cx="55" cy="30" r="1" fill="#ffffff" opacity="0.9" />

        {/* Figure 2: Running athlete / cardio */}
        <circle cx="70" cy="28" r="1.8" fill="#ffffff" opacity="0.9" />
        <path d="M66 33 L72 31 L75 35 M69 31 L68 37 L72 41 M70 35 L66 39" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.9" />

        {/* Solid Red horizontal divider bar like the user's logo */}
        <rect x="25" y="56" width="75" height="4" rx="1.5" fill="#ce1126" />

        {/* Lower part of Africa in Mali Green */}
        <path
          d="M72 62 C68 66, 63 74, 61 82 C60 85, 58 87, 56 85 C53 79, 49 73, 46 66 C44 62, 40 62, 35 62 Z"
          fill="#009a30"
        />
      </svg>

      {/* Brand Text styled with precise colors and professional weights */}
      {showText && (
        <div className="flex flex-col leading-none text-left">
          <div className="flex items-center font-display font-black text-2xl tracking-tight uppercase">
            <span className="text-[#fcdd09] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Afrika</span>
            <span className="text-[#ce1126] ml-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">Fit</span>
          </div>
          <span className="text-[9px] font-mono tracking-[0.22em] text-gray-400 uppercase font-bold mt-1">
            Salle de Gym Fitness
          </span>
        </div>
      )}
    </div>
  );
}
