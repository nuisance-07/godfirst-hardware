"use client";
import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-12 w-auto", showText = true }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before mounting, show light version to avoid flash
  const src = mounted && resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo.png';

  return (
    <img 
      src={src} 
      alt="Dhawakah Logo" 
      className={`object-contain transition-opacity duration-300 ${className}`}
    />
  );
}

