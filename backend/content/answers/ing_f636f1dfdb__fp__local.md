---
qid: ing_f636f1dfdb__fp__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 375
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:07-05:00'
sources: []
---

**Step 2 – Crafting a High‑Level Design (HLD)**  
When you’re asked to build a platform like Twitter, the first thing that must *not* be skipped is an HLD: a map that shows how data and traffic flow through your services.  

1. **Why it’s essential** – The system’s purpose is “fast, scalable micro‑blogging.” A high‑level diagram turns that vague goal into concrete constraints (latency ≤ 50 ms, 100 M tweets/day). It exposes the *bottlenecks* early: a single database for all tweets will choke at write rate, a monolithic API server can’t handle traffic spikes.  

2. **Underlying principle** – **Modularity + Information‑theoretic separation**. By partitioning data (user profiles vs. tweet streams) and responsibilities (API gateway, stream processor, search index), you reduce coupling. Each module’s input/output entropy is bounded, allowing you to reason about scalability with Little’s Law or the capacity of a queueing system.  

3. **Non‑obvious insight** – *Treat read/write paths as separate micro‑architectures.* A “tweet” is written once but read many times. Optimizing for writes (e.g., log‑structured storage) can degrade reads; separating them lets you use an append‑only event store for writes and a materialized view for feeds, keeping latency low without duplicating effort.

In short, the HLD is your “blueprint” that translates business goals into architectural constraints, grounded in modularity and information flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
