"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "Single Agent, Continuous Context",
    description:
      "One capable agent maintains full context across the session. No fragmented multi-agent systems, no lost decisions, no conflicting outputs.",
    source: "Cognition: Don't Build Multi-Agents",
    url: "https://cognition.ai/blog/dont-build-multi-agents",
  },
  {
    number: "02",
    title: "Progressive Disclosure",
    description:
      "Load only what's needed, when it's needed. Tools presented as code APIs. 98.7% token savings by keeping intermediate results in the execution environment.",
    source: "Anthropic: Code Execution with MCP",
    url: "https://www.anthropic.com/engineering/code-execution-with-mcp",
    source2: "Anthropic: Agent Skills",
    url2: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
  },
  {
    number: "03",
    title: "Deterministic Verification",
    description:
      "Code verification over LLM judgment. Exit codes, not opinions. If it can be checked programmatically, it must be checked programmatically.",
    source: "Anthropic: Effective Agent Harnesses",
    url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
  },
  {
    number: "04",
    title: "Sandboxed Execution",
    description:
      "Filesystem and network isolation at the kernel level. Even successful prompt injections remain contained. Security enables autonomy.",
    source: "Anthropic: Claude Code Sandboxing",
    url: "https://www.anthropic.com/engineering/claude-code-sandboxing",
  },
  {
    number: "05",
    title: "Closed Learning Loop",
    description:
      "Store decision traces with semantic search. Extract patterns from 3+ successful outcomes. Auto-update skills. The system improves itself.",
    source: "Foundation Capital: Context Graphs",
    url: "https://foundationcapital.com/context-graphs-ais-trillion-dollar-opportunity/",
  },
];

export default function TechStack() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
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
    <section className="min-h-screen section-light py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-number text-dark/50">03 — How I Build</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-dark">
            Design Principles
          </h2>
          <p className="text-dark/60 mt-4 max-w-2xl">
            A system distilled from Anthropic engineering blogs and
            Cognition&apos;s insights. Not opinions — proven patterns.
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-8">
          {principles.map((principle, i) => (
            <div
              key={principle.number}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group"
            >
              <div className="flex gap-6 md:gap-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="font-mono text-accent text-sm">
                    {principle.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 border-b border-dark/10">
                  <h3 className="font-serif text-xl md:text-2xl text-dark mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-dark/60 leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <div className="flex flex-col gap-1">
                    {principle.url ? (
                      <a
                        href={principle.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/40 text-sm font-mono hover:text-accent transition-colors"
                      >
                        ← {principle.source} ↗
                      </a>
                    ) : (
                      <p className="text-dark/40 text-sm font-mono">
                        ← {principle.source}
                      </p>
                    )}
                    {principle.url2 && (
                      <a
                        href={principle.url2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark/40 text-sm font-mono hover:text-accent transition-colors"
                      >
                        ← {principle.source2} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-8 border-t border-dark/10">
          <p className="text-dark/50 text-sm">
            Full system documentation:{" "}
            <span className="font-mono text-accent">design-v3.md</span>
          </p>
        </div>
      </div>
    </section>
  );
}
