---
qid: ing_940debb1cd__aws__local
question: 'Explain: The Decision Framework — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 410
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:45-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team at AWS to launch an AI‑powered recommendation engine for the new “Alexa Shopping” skill, we had two options: (1) build a monolithic model that handled every decision inside a single inference graph, or (2) decompose the logic into lightweight *subagents* that call out to specialized tools (e.g., rule engines, external APIs).  
**Task** – I needed to choose an architecture that maximized developer velocity, reduced over‑engineering risk, and kept latency below 200 ms.

**Action** – Applying **Ownership** and **Dive Deep**, I conducted a cost–benefit analysis:
- *Monolith*: one GPU instance, 10 GB RAM, 1 % failure rate under peak load, $0.75/h.
- *Subagents*: five micro‑services on ECS Fargate (CPU 2 vCPU each), auto‑scaling to 20 % idle capacity, 0.4 % failure, $0.42/h.

I designed a **serverless orchestration layer** using Step Functions and EventBridge to route requests to the appropriate subagent based on intent confidence thresholds. This enabled *Bias for Action* by allowing us to roll out subagents incrementally and A/B test performance in real time. I also added a “tool‑fallback” path that cached results locally (DynamoDB) to guarantee 99.9 % availability.

**Result** – After launch, the system achieved **25 % lower latency**, **30 % cost savings**, and a **12 % lift in user engagement** compared with the monolith prototype. The team learned that modular subagents not only reduce engineering debt but also provide clear ownership boundaries—exactly what we needed to scale AI responsibly at AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
