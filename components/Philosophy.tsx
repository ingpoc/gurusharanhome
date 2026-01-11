"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const philosophyItems = [
  {
    title: "Single Agent",
    description: "One capable agent with continuous shared context, not fragmented multi-agents",
  },
  {
    title: "Token Efficient",
    description: "Progressive disclosure, 98% context savings via code execution in sandbox",
  },
  {
    title: "Deterministic",
    description: "Code verification over LLM judgment — exit codes, not opinions",
  },
  {
    title: "Self-Improving",
    description: "Closed learning loop: traces → patterns → skills → better traces",
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Animate cards on scroll
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
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
    <section ref={sectionRef} className="min-h-screen section-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-number text-dark/50">01 — Philosophy</span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {philosophyItems.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="p-8 border border-dark/10 rounded-lg card-hover"
            >
              <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
              <p className="text-dark/60">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
