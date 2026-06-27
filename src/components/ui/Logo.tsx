import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  return (
    <svg 
      viewBox={showText ? "0 0 400 320" : "0 0 400 200"} 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
    >
      <g>
        {/* The New AI Generated Icon with Transparent Background */}
        <image 
          href="/logo-icon.png" 
          x="110" 
          y="0" 
          width="180" 
          height="190" 
          preserveAspectRatio="xMidYMid meet"
          className="dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
        />

        {/* Text Area (Remains dynamic SVG text for perfect scaling and dark mode support) */}
        {showText && (
          <>
            <text x="200" y="225" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="40" textAnchor="middle" className="fill-slate-900 dark:fill-white transition-colors duration-300 tracking-wider">
              DHAWAKAH
            </text>
            <text x="200" y="255" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.1em" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 transition-colors duration-300">
              HARDWARE & CONSTRUCTION
            </text>
            <text x="200" y="275" fontFamily="'Inter', sans-serif" fontWeight="600" fontSize="11" letterSpacing="0.1em" textAnchor="middle" className="fill-primary dark:fill-sky-400 transition-colors duration-300">
              BUILDING SOLUTIONS
            </text>
            <g transform="translate(110, 285)">
              <rect x="0" y="0" width="180" height="22" rx="11" className="fill-slate-900 dark:fill-white transition-colors duration-300 opacity-10" />
              <text x="90" y="15" fontFamily="'Inter', sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle" className="fill-slate-900 dark:fill-white transition-colors duration-300">
                QUALITY GUARANTEED
              </text>
            </g>
          </>
        )}
      </g>
    </svg>
  );
}
