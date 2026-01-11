"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AadhaarChain",
    description: "Self-Sovereign Identity on Solana",
    details:
      "Revolutionary Solana-based identity platform bridging government-grade verification with decentralized ownership.",
    tech: ["Solana", "Anchor", "Next.js", "TypeScript"],
    link: "https://aadhaarchain.netlify.app/",
  },
  {
    title: "X Content",
    description: "Autonomous Content Creation",
    details:
      "AI-powered autonomous content creation system for X. Researches, drafts, reviews, posts, and learns from performance.",
    tech: ["Next.js", "Claude", "Tavily", "Prisma"],
    link: "https://xcontent.netlify.app/",
  },
  {
    title: "Agent Harness",
    description: "Multi-Agent Testing Framework",
    details:
      "Four-layer framework for building and testing Claude-powered multi-agent systems with comprehensive tooling.",
    tech: ["Python", "Claude SDK", "GSAP", "SVG"],
    link: "https://gurusharangupta.netlify.app/agent-harness.html",
  },
  {
    title: "Robo Trader",
    description: "Autonomous Trading Agent",
    details:
      "Self-learning trading agent using multi-agent systems to analyze markets and execute strategies autonomously.",
    tech: ["Python", "Claude", "Pandas", "TradingView"],
    link: undefined,
    comingSoon: true,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen section-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-number text-light/50">04 — Featured Work</span>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el as unknown as HTMLDivElement;
              }}
              className="group p-8 border border-light/10 rounded-lg card-hover bg-light/5 transition-colors"
            >
              <h3 className="font-serif text-3xl mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-light/70 mb-4">{project.description}</p>
              <p className="text-light/50 text-sm mb-6">{project.details}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* View link or Coming Soon */}
              <div className="flex items-center gap-2 text-accent text-sm">
                {project.comingSoon ? (
                  <>
                    <span>Coming Soon</span>
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </>
                ) : (
                  <>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                    >
                      <span>View Project</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
