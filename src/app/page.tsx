"use client";

import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import SplashScreen from '@/components/SplashScreen';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
