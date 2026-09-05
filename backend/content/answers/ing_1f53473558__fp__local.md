---
qid: ing_1f53473558__fp__local
question: 'Explain: Requirements — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 369
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:36-05:00'
sources: []
---

**Why a “requirements” cheat‑sheet is indispensable**

In a system‑design interview the interviewer doesn’t hand you a spec; they give you a *problem statement* (e.g., “build a URL shortener”). Your first move must be to formalize what that problem actually asks:  
1. **What must the system do?** – core functional needs (CRUD, search, real‑time updates).  
2. **Under which constraints will it operate?** – latency targets, throughput, cost ceilings, data consistency guarantees.  
3. **Which stakeholders care?** – end‑users (latency), ops (availability), business (scaling revenue).

These three pillars are the *requirements* that any viable design must satisfy. If you skip them, you’ll wander into a forest of clever micro‑optimisations and miss the forest’s purpose: delivering the right service at the right cost.

**Key insight:**  
Requirements are *not* optional trade‑offs; they are *boundary conditions*. Every architectural choice—partitioning strategy, caching layer, consistency model—must be justified against these constraints. A design that meets functional needs but violates a latency or cost requirement is useless in production.  

A cheat‑sheet should therefore list the typical question prompts (“What are the non‑functional requirements?”), the core constraints you must ask for (latency, throughput, availability, consistency), and a quick sanity check (“Does this choice satisfy all three?”). This framework turns an open‑ended interview into a disciplined optimization problem, ensuring you cover every necessary dimension before you dive into the nitty‑gritty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
