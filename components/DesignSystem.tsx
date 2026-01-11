"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const states = [
  { name: "START", skill: "detect", color: "text-light/50" },
  { name: "INIT", skill: "initialization", color: "text-accent" },
  { name: "IMPLEMENT", skill: "implementation", color: "text-accent" },
  { name: "TEST", skill: "testing", color: "text-accent" },
  { name: "COMPLETE", skill: "context-graph", color: "text-green-400" },
];

const metrics = [
  { label: "Context Reduction", value: "70-85%", detail: "vs 500+ lines in v2" },
  { label: "Manual Invocations", value: "0", detail: "auto-detect from prompt" },
  { label: "Token Efficiency", value: "98%", detail: "sandbox execution" },
];

const autoLoadSteps = [
  { step: "01", label: "Hook Triggers", desc: "UserPromptSubmit event fires" },
  { step: "02", label: "Intent Detection", desc: "Match prompt + state to skill" },
  { step: "03", label: "Progressive Load", desc: "Extract ~70 relevant lines" },
  { step: "04", label: "Skill Active", desc: "Zero manual invocation" },
];

const mcpServers = [
  {
    name: "token-efficient",
    purpose: "Code execution, CSV/log parsing",
    savings: "98% token savings via sandbox",
    tools: "execute_code, process_csv, process_logs",
  },
  {
    name: "context-graph",
    purpose: "Decision storage + retrieval",
    feature: "Semantic search with Voyage embeddings",
    tools: "store_trace, query_traces, update_outcome",
  },
];

export default function DesignSystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const statesRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement[]>([]);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate states
    if (statesRef.current) {
      gsap.fromTo(
        statesRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate metrics
    metricsRef.current.forEach((metric, i) => {
      gsap.fromTo(
        metric,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: i * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: metric,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate steps
    stepsRef.current.forEach((step, i) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen section-dark py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-number text-light/50">04 — The System</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-light">
            design-v3
          </h2>
          <p className="text-light/60 mt-4 max-w-2xl">
            Token-efficient, autonomous, self-improving agent framework.
            Zero manual skill invocation. Continuous learning from traces.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              ref={(el) => {
                if (el) metricsRef.current[i] = el;
              }}
              className="text-center p-6 border border-light/10 rounded-lg bg-light/5"
            >
              <p className="text-3xl md:text-4xl font-serif text-accent">
                {metric.value}
              </p>
              <p className="text-light/70 text-sm mt-2">{metric.label}</p>
              <p className="text-light/40 text-xs mt-1">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* State Machine */}
        <div className="mb-16">
          <h3 className="font-mono text-sm text-light/50 mb-6 uppercase tracking-wider">
            State Machine
          </h3>
          <div
            ref={statesRef}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-6 bg-[#0d0d0c] rounded-lg border border-light/10"
          >
            {states.map((state, i) => (
              <div key={state.name} className="flex items-center gap-2 md:gap-4">
                <div className="text-center">
                  <div
                    className={`font-mono text-sm md:text-base ${state.color} font-medium`}
                  >
                    {state.name}
                  </div>
                  <div className="text-light/30 text-xs mt-1">
                    {state.skill}
                  </div>
                </div>
                {i < states.length - 1 && (
                  <span className="text-light/30">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Auto-Load Flow */}
        <div className="mb-16">
          <h3 className="font-mono text-sm text-light/50 mb-6 uppercase tracking-wider">
            Auto-Load System
          </h3>
          <div className="space-y-4">
            {autoLoadSteps.map((item, i) => (
              <div
                key={item.step}
                ref={(el) => {
                  if (el) stepsRef.current[i] = el;
                }}
                className="flex items-start gap-4 p-4 border-l-2 border-accent/30 hover:border-accent transition-colors"
              >
                <span className="font-mono text-accent text-sm flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <p className="font-mono text-light/90">{item.label}</p>
                  <p className="text-light/50 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MCP Servers */}
        <div className="mb-16">
          <h3 className="font-mono text-sm text-light/50 mb-6 uppercase tracking-wider">
            Custom MCP Servers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mcpServers.map((mcp) => (
              <div
                key={mcp.name}
                className="p-6 border border-light/10 rounded-lg bg-light/5"
              >
                <p className="font-mono text-accent text-lg mb-2">
                  {mcp.name}
                </p>
                <p className="text-light/70 text-sm mb-3">{mcp.purpose}</p>
                <p className="text-light/50 text-xs mb-2">
                  {mcp.savings || mcp.feature}
                </p>
                <p className="text-light/30 text-xs font-mono">
                  tools: {mcp.tools}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <div>
          <h3 className="font-mono text-sm text-light/50 mb-6 uppercase tracking-wider">
            Skills Inventory
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border border-light/10 rounded-lg">
              <p className="text-accent text-2xl font-serif">5</p>
              <p className="text-light/50 text-sm mt-1">Core State</p>
              <p className="text-light/30 text-xs mt-2">
                orchestrator, init, implement, test, context-graph
              </p>
            </div>
            <div className="p-4 border border-light/10 rounded-lg">
              <p className="text-accent text-2xl font-serif">5</p>
              <p className="text-light/50 text-sm mt-1">Setup</p>
              <p className="text-light/30 text-xs mt-2">
                hooks, enforcement, determinism, mcp-setup
              </p>
            </div>
            <div className="p-4 border border-light/10 rounded-lg">
              <p className="text-accent text-2xl font-serif">5</p>
              <p className="text-light/50 text-sm mt-1">Utility</p>
              <p className="text-light/30 text-xs mt-2">
                token-efficient, skill-creator, browser-testing
              </p>
            </div>
            <div className="p-4 border border-light/10 rounded-lg">
              <p className="text-accent text-2xl font-serif">8</p>
              <p className="text-light/50 text-sm mt-1">Global Hooks</p>
              <p className="text-light/30 text-xs mt-2">
                auto-load, verify-state, session-end
              </p>
            </div>
          </div>
        </div>

        {/* Bottom reference */}
        <div className="mt-12 pt-8 border-t border-light/10 flex items-center justify-between">
          <p className="text-light/40 text-sm font-mono">
            Full documentation: design-v3.md
          </p>
          <a
            href="https://github.com/ingpoc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm hover:underline"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
