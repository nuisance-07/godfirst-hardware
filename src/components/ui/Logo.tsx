import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  return (
    <svg 
      viewBox={showText ? "0 0 300 310" : "0 0 300 190"} 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
    >
      <g>
        {/* Mask to hide the bottom of the D inside the house */}
        <mask id="house-mask">
          <rect width="300" height="310" fill="white" />
          <polygon points="150,85 220,135 220,190 80,190 80,135" fill="black" />
        </mask>

        {/* The Red D */}
        <path 
          d="M 90 20 L 160 20 C 230 20, 260 60, 260 100 C 260 140, 230 180, 160 180 L 90 180 Z M 130 55 L 130 145 C 180 145, 215 130, 215 100 C 215 70, 180 55, 130 55 Z" 
          fill="#ff0000" 
          mask="url(#house-mask)" 
        />

        {/* The Roof */}
        <path 
          d="M 40 145 L 150 65 L 260 145 L 240 160 L 150 95 L 60 160 Z" 
          className="fill-slate-900 dark:fill-white transition-colors duration-300" 
        />

        {/* The Window Panes */}
        <g className="fill-slate-900 dark:fill-white transition-colors duration-300">
          <rect x="138" y="115" width="10" height="10" />
          <rect x="152" y="115" width="10" height="10" />
          <rect x="138" y="129" width="10" height="10" />
          <rect x="152" y="129" width="10" height="10" />
        </g>

        {/* Text Area */}
        {showText && (
          <>
            <text x="150" y="225" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="36" textAnchor="middle" className="fill-slate-900 dark:fill-white transition-colors duration-300 tracking-wide">
              DHAWAKAH
            </text>
            <text x="150" y="255" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="20" textAnchor="middle" fill="#ff0000" className="tracking-widest">
              — HARDWARE —
            </text>
            <text x="150" y="275" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="13" textAnchor="middle" className="fill-slate-900 dark:fill-slate-200 transition-colors duration-300">
              <tspan fill="#ff0000">Your First,</tspan> Priority Hardware
            </text>
            <g transform="translate(55, 285)">
              <rect x="0" y="0" width="190" height="22" className="fill-slate-900 dark:fill-white transition-colors duration-300" />
              <text x="95" y="15" fontFamily="'Inter', sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle" className="fill-white dark:fill-slate-900 transition-colors duration-300">
                0746978736 / 0791453675
              </text>
            </g>
          </>
        )}
      </g>
    </svg>
  );
}
