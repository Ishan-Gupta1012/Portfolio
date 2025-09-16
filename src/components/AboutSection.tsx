"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { about } from "@/lib/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });

    tl.from(".about-title", { opacity: 0, y: -50, duration: 0.8, ease: "power3.out" })
      .from(".bio-content", { opacity: 0, x: -100, duration: 1, ease: "power3.out" }, "-=0.5")
      .from(".education-content", { opacity: 0, x: 100, duration: 1, ease: "power3.out" }, "<");

  }, { scope: container });

  return (
    <section id="about" className="bg-secondary/50 overflow-hidden">
      <div ref={container} className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary about-title">About Me</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 bio-content">
              <h3 className="font-headline text-3xl font-bold">Ishan Gupta | Frontend Developer</h3>
              {about.bio.map((paragraph, index) => (
                  <p key={index} className="text-lg text-foreground/80 leading-relaxed">
                      {paragraph}
                  </p>
              ))}
            </div>
            <div className="space-y-6 education-content">
                <h3 className="font-headline text-3xl font-bold">Education</h3>
                <div className="space-y-2">
                    <h4 className="text-xl font-bold text-accent">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">Maharaja Agrasen Institute of Technology</p>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        My degree in Computer Science, with a specialization in Artificial Intelligence, provided a strong foundation in core programming principles and algorithms.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}