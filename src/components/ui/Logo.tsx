import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  return (
    <img 
      src="/logo.png" 
      alt="Dhawakah Logo" 
      className={`object-contain transition-all duration-300 dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] ${className}`}
    />
  );
}
