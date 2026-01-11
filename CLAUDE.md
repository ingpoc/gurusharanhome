---
name: hompage
description: Personal portfolio and resume homepage showcasing skills, projects, and Claude Code expertise
keywords: portfolio, homepage, resume, Claude Code, AI, full-stack
project_type: nextjs
framework: Next.js
---

# hompage

**Purpose**: Personal homepage and job application portfolio. Showcases development philosophy, major projects, technical expertise, and Claude Code as core resume. Deployed on Netlify for easy sharing with recruiters.

**GitHub**: [github.com/ingpoc](https://github.com/ingpoc)

---

## Project Overview

| Aspect | Details |
|--------|---------|
| **Type** | Portfolio website (Next.js) |
| **Purpose** | Job applications + skill showcase |
| **Target Audience** | Hiring managers, recruiters, technical teams |
| **Tech Stack** | Next.js, TypeScript, Tailwind CSS |
| **Deployment** | Netlify |

---

## Core Identity

**Development Philosophy** (design-v3):

- Single agent with continuous shared context (not multi-agent)
- Token-efficient: Progressive disclosure, 98% context savings
- Deterministic: Code verification over LLM judgment
- Incremental: Feature-based progress with git commits
- Sandboxed execution for security

**Based On**:

- [Effective Harnesses for Long-Running Agents](https://anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Code Execution with MCP](https://anthropic.com/engineering/code-execution-with-mcp)
- [Claude Code Sandboxing](https://anthropic.com/engineering/claude-code-sandboxing)
- [Don't Build Multi-Agents](https://cognition.ai/blog/dont-build-multi-agents)

---

## Featured Projects

| Project | Tech | Purpose |
|---------|------|---------|
| **Dashboard** | Next.js, Tavily, Claude | Autonomous content creation for X (Twitter) |
| **Robo Trader** | Python, FastAPI, Claude SDK | Multi-agent trading system with AI orchestration |
| **AadhaarChain** | Solana, Anchor, Next.js | Blockchain identity platform |
| **Agent Harness Test** | Python | CLI tool for agent testing |

---

## Architecture & Skills

### Full-Stack Expertise

| Category | Technologies |
|----------|--------------|
| **Frontend** | React, Next.js, TypeScript, Tailwind CSS, GSAP |
| **Backend** | Node.js, Python, FastAPI, NestJS, Prisma |
| **Blockchain** | Solana, Anchor (Rust), Web3.js |
| **AI/ML** | Claude SDK, LLMs, Agent Harnesses, MCP |
| **DevOps** | Vercel, Netlify, Docker, PostgreSQL, Redis |

### Architectural Patterns (design-v3)

- Single agent with continuous context
- Progressive disclosure (token-efficient)
- Feature-based incremental development
- Code verification (determinism)
- Sandboxed execution
- Git commits for progress tracking

---

## Common Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Health check | `curl -sf http://localhost:3000` |
| Check state | `.claude/scripts/check-state.sh` |
| View features | `.claude/progress/feature-list.json` |

---

## Config Files

| File | Purpose |
|------|---------|
| `.claude/config/project.json` | Project settings (Next.js, Netlify) |
| `.claude/progress/state.json` | Current state (INIT/IMPLEMENT/TEST/COMPLETE) |
| `.claude/progress/feature-list.json` | 10 homepage features with priorities |
| `.mcp.json` | MCP server configuration |

---

## MCP Servers

**token-efficient**: Code execution, data processing (98%+ savings)
**context-graph**: Decision traces, learning loops
**context7**: Documentation queries
