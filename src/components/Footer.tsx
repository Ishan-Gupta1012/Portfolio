"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
];

export default function Footer() {

  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2">
            <p className="text-sm text-muted-foreground">
              &copy; 2025 ishanportfolio. All rights reserved.
            </p>
            <a href="mailto:ishangupta1012@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ishangupta1012@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon">
                <a href="mailto:ishangupta1012@gmail.com">
                    <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    <span className="sr-only">Email</span>
                </a>
            </Button>
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="ghost" size="icon">
                <Link href={link.url} target="_blank">
                  <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
