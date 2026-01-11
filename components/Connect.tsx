"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  {
    label: "GitHub",
    href: "https://github.com/ingpoc",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gurusharangupta/",
  },
  {
    label: "Resume",
    href: "https://gurusharangupta.netlify.app/",
  },
];

export default function Connect() {
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const linkElements = linksRef.current;

    linkElements.forEach((link, i) => {
      gsap.fromTo(
        link,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: link,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="min-h-[60vh] section-light py-24 px-6 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Section header */}
        <div className="mb-12">
          <span className="section-number text-dark/50">05 — Connect</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className="font-serif text-2xl md:text-3xl accent-underline text-dark hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Email */}
        <p className="text-dark/50">
          <a
            href="mailto:gurusharan@example.com"
            className="hover:text-accent transition-colors"
          >
            gurusharan@example.com
          </a>
        </p>
      </div>
    </section>
  );
}
