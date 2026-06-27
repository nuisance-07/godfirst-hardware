import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  return (
    <svg 
      viewBox={showText ? "0 0 480 120" : "0 0 110 120"} 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
    >
      {/* Icon group */}
      <g transform="translate(10, 15)">
        {/* Left Building block */}
        <path d="M20 80 L20 40 L45 20 L45 80 Z" fill="#0ea5e9" opacity="0.8" />
        {/* Right Building block */}
        <path d="M50 80 L50 10 L75 25 L75 80 Z" fill="#38bdf8" opacity="0.9" />
        {/* Slanted Arrow Shaft */}
        <path d="M15 65 L85 15 L85 30 L30 75 Z" fill="#0284c7" />
        {/* Arrow Head */}
        <path d="M70 10 L95 10 L85 30 Z" fill="#0369a1" />
      </g>
      
      {/* Text group */}
      {showText && (
        <g transform="translate(120, 0)">
          <text 
            x="0" 
            y="65" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="800" 
            fontSize="48" 
            letterSpacing="0.02em"
            className="fill-slate-900 dark:fill-white transition-colors duration-300"
          >
            DHAWAKAH
          </text>
          <text 
            x="2" 
            y="95" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="500" 
            fontSize="14" 
            letterSpacing="0.15em"
            className="fill-slate-500 dark:fill-slate-400 transition-colors duration-300"
          >
            HARDWARE & CONSTRUCTION
          </text>
        </g>
      )}
    </svg>
  );
}
