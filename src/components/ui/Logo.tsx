import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  return (
    <img 
      src="/logo.jpg" 
      alt="Dhawakah Logo" 
      className={`object-contain rounded-xl ${className}`}
    />
  );
}
