"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Architecture() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const boxes = boxesRef.current;
    const subtitle = subtitleRef.current;

    // Animate path drawing
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate boxes
    boxes.forEach((box, i) => {
      gsap.fromTo(
        box,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.3 + i * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate subtitle
    if (subtitle) {
      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const architectureSteps = [
    { title: "Single Agent", subtitle: "Continuous Context" },
    { title: "Token Efficient", subtitle: "Progressive Disclosure" },
    { title: "Deterministic", subtitle: "Code Verification" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen section-dark py-24 px-6 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-number text-light/50">04 — How I Build</span>
        </div>

        {/* Architecture diagram */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-12">
          {/* SVG connecting lines (hidden on mobile) */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M 200 80 L 400 80 M 500 80 L 700 80"
              stroke="#D97756"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Boxes */}
          {architectureSteps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => {
                if (el) boxesRef.current[i] = el;
              }}
              className="relative z-10 flex flex-col items-center justify-center w-48 h-24 border border-light/20 rounded-lg bg-dark"
            >
              <span className="font-serif text-lg">{step.title}</span>
              <span className="text-light/50 text-sm">{step.subtitle}</span>
            </div>
          ))}

          {/* Arrows between boxes (mobile only) */}
          <div className="md:hidden absolute inset-0 flex flex-col items-center justify-between py-28 pointer-events-none">
            <svg width="24" height="24" className="text-accent">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <svg width="24" height="24" className="text-accent">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-center text-light/50 text-lg tracking-wide"
        >
          Feature-Based • Incremental • Sandboxed Execution
        </p>
      </div>
    </section>
  );
}
