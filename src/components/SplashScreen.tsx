"use client";

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function SplashScreen() {
  const container = useRef<HTMLDivElement>(null);
  const name = "Ishan Gupta";
  const letters = name.split("");

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".letter", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power3.out",
      duration: 0.8
    }).to(".letter", {
        opacity: 0,
        y: -50,
        stagger: 0.05,
        ease: "power3.in",
        duration: 0.5
    }, "+=1.5");

  }, { scope: container });

  return (
    <div 
      ref={container}
      className="flex h-screen w-screen items-center justify-center bg-background animate-fade-out" 
      style={{ animationFillMode: 'forwards', animationDelay: '3.5s' }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-primary">
        {letters.map((letter, index) => (
          <span key={index} className="letter inline-block" style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}
