"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const codeLines = [
  { type: "comment", text: "// Welcome. Let me show you what I build." },
  { type: "command", text: "$ ls projects/" },
  { type: "output", text: "aadhaarchain/  xcontent/  agent-harness/  ramayana/" },
  { type: "command", text: "$ cat philosophy.txt" },
  { type: "output", text: "→ Single agent. Autonomous. Production-ready." },
  { type: "success", text: "→ Scroll to explore" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const lines = linesRef.current;
    const cursor = cursorRef.current;

    // Hide all lines initially
    gsap.set(lines, { opacity: 0, x: -20 });

    // Animate lines appearing one by one
    const tl = gsap.timeline({ delay: 0.5 });

    lines.forEach((line, i) => {
      tl.to(
        line,
        {
          opacity: 1,
          x: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        i * 0.4
      );
    });

    // Blink cursor
    if (cursor) {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case "comment":
        return "text-light/40";
      case "command":
        return "text-accent";
      case "output":
        return "text-light/70";
      case "success":
        return "text-green-400";
      default:
        return "text-light";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center section-dark px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Name - smaller, left aligned */}
        <div className="mb-12">
          <p className="text-light/50 text-sm uppercase tracking-widest mb-2">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">
            Gurusharan Gupta
          </h1>
          <p className="text-light/60 text-lg max-w-xl">
            Building with Claude Code. Single-agent systems that are
            token-efficient, deterministic, and production-ready.
          </p>
        </div>

        {/* Terminal */}
        <div
          ref={terminalRef}
          className="bg-[#0d0d0c] border border-light/10 rounded-lg overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-light/5 border-b border-light/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-light/40 text-sm font-mono">
              ~/projects/portfolio
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm md:text-base space-y-2">
            {codeLines.map((line, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) linesRef.current[i] = el;
                }}
                className={`${getLineColor(line.type)}`}
              >
                {line.text}
              </div>
            ))}

            {/* Input line with cursor */}
            <div className="flex items-center text-light/70 mt-4">
              <span className="text-accent">$</span>
              <span className="ml-2">_</span>
              <span
                ref={cursorRef}
                className="w-2 h-5 bg-accent ml-1 inline-block"
              />
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-light/10">
          <div>
            <p className="text-3xl font-serif text-accent">4</p>
            <p className="text-light/50 text-sm mt-1">Projects Shipped</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-accent">98%</p>
            <p className="text-light/50 text-sm mt-1">Token Savings</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-accent">v3</p>
            <p className="text-light/50 text-sm mt-1">Design System</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-light/30"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
