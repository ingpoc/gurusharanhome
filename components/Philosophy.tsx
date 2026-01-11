"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
    <section ref={sectionRef} className="min-h-[60vh] section-light py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="section-number text-dark/50">01 — Philosophy</span>
        </div>

        {/* Life Influences */}
        <div className="mb-16">
          <h3 className="font-mono text-sm text-dark/50 mb-6 uppercase tracking-wider">
            Life Influences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              ref={(el) => { if (el) cardsRef.current[0] = el; }}
            >
              <h4 className="font-serif text-2xl mb-2">Elon Musk</h4>
              <p className="text-dark/60 text-sm mb-3 leading-relaxed">
                Five-step algorithm: Make requirements less dumb, delete and simplify, optimize, accelerate cycle time, automate.
              </p>
              <a
                href="https://www.corporate-rebels.com/blog/musks-algorithm-to-cut-bureaucracy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xs font-mono hover:underline"
              >
                Read more ↗
              </a>
            </div>

            <div
              ref={(el) => { if (el) cardsRef.current[1] = el; }}
            >
              <h4 className="font-serif text-2xl mb-2">Steve Jobs</h4>
              <p className="text-dark/60 text-sm mb-3 leading-relaxed">
                Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. Love what you do.
              </p>
              <a
                href="https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xs font-mono hover:underline"
              >
                Read more ↗
              </a>
            </div>
          </div>
        </div>

        {/* Design Influences */}
        <div>
          <h3 className="font-mono text-sm text-dark/50 mb-6 uppercase tracking-wider">
            Design Influences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              ref={(el) => { if (el) cardsRef.current[2] = el; }}
            >
              <h4 className="font-serif text-2xl mb-2">Dieter Rams</h4>
              <p className="text-dark/60 text-sm mb-3 leading-relaxed">
                Good design is innovative, useful, aesthetic, understandable, unobtrusive, honest, long-lasting, thorough, environmentally friendly, and involves as little design as possible.
              </p>
              <a
                href="https://bellroy.com/journal/heroes-of-design-dieter-rams"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xs font-mono hover:underline"
              >
                Read more ↗
              </a>
            </div>

            <div
              ref={(el) => { if (el) cardsRef.current[3] = el; }}
            >
              <h4 className="font-serif text-2xl mb-2">Edward Tufte</h4>
              <p className="text-dark/60 text-sm mb-3 leading-relaxed">
                Data-ink ratio, small multiples, layering, and integration. Show comparisons, causality, and multivariate data. Above all, tell the truth.
              </p>
              <a
                href="https://medium.com/@yahiazakaria445/edward-tuftes-6-data-visualization-principles-1193d8b49478"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xs font-mono hover:underline"
              >
                Read more ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
