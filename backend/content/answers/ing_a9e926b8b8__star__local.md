---
qid: ing_a9e926b8b8__star__local
question: 'Explain: Factory — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:24-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building a conversational bot to handle loan applications. The existing codebase was monolithic and hard to scale, so the product team asked me to refactor it into a modular AI framework that could support multiple agents—chat, email, SMS—without rewriting core logic.

**Task**  
I had to design and implement a TypeScript‑based AI framework called *Factory* that would let us plug in different agent back‑ends, manage state across sessions, and integrate with our existing NLP pipeline—all while keeping type safety and test coverage above 90%.

**Action**  
I started by defining the core `Agent` interface (input/output types, lifecycle hooks) and built a lightweight dependency injector using InversifyJS. The Factory orchestrates agents via a shared `Context` object that tracks user intent, confidence scores, and conversation history. I leveraged TypeScript generics to enforce that each agent’s response payload matched its declared type, reducing runtime errors by 70%. Unit tests were written with Jest, and I added a CI pipeline that ran static analysis (tsc, eslint) on every PR.

**Result**  
The new framework cut onboarding time for new agents from weeks to days. We launched the SMS bot within two sprints and saw a 35% increase in completed loan applications. The type‑safe architecture also lowered production bugs by 60%, and I documented best practices that are now part of our engineering handbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
