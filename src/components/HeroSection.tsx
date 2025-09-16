import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { about } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === "profile");
  const professions = ["Frontend Developer", "Competitive Programmer"];
  const typedProfession = useTypingEffect(professions, {
    typeSpeed: 100,
    deleteSpeed: 50,
    delay: 2000,
  });

  const container = useRef(null);

  useGSAP(() => {
    if (container.current) {
        gsap.from(container.current, {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5
        });
    }
  }, { scope: container });

  return (
    <section id="hero">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
              {about.name}
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-muted-foreground min-h-[64px] md:min-h-[40px]">
              {typedProfession}
              <span className="animate-pulse">|</span>
            </p>
            <p className="mt-4 max-w-md text-lg text-foreground/80">
              {about.introduction}
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">
                  My Work <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div ref={container} className="flex justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={400}
                height={400}
                className="rounded-full border-8 border-secondary object-cover shadow-lg"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
