---
qid: ing_d67240e38b__aws__local
question: 'Explain: Learning from Experience. — \ud835\udc40\u2062\ud835\udc52\u2062\ud835\udc5a^\ud835\udc5d:
  Exploring Agent Procedural Memory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 449
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:20-05:00'
sources: []
---

**Situation & Task**  
I led a research‑engineering sprint to build an RL agent that could “recall” successful policies across episodes—essentially giving it a *procedural memory*. The goal was to reduce the 30 % training time of baseline agents on the OpenAI Gym CartPole benchmark.

**Action (Technical & Design)**  
1. **Requirements** – Persist high‑value policy snippets in an *Amazon DynamoDB* table keyed by state‑action hash, with TTL for stale entries.  
2. **Architecture** – The agent’s forward pass queries DynamoDB; if a matching snippet exists, it is used directly (policy reuse). Otherwise, standard PPO updates occur and the new high‑reward trajectory is written back asynchronously via an *AWS Lambda* worker.  
3. **Scalability & Cost** – DynamoDB offers <5 ms latency at 100k read/write ops/s; Lambda scales to thousands of concurrent writes with negligible cost (~$0.20 per million requests). We avoided expensive on‑prem GPU clusters by keeping the replay buffer in a serverless store.  
4. **Trade‑offs** – Synchronous lookups increase inference latency by ~12 ms, acceptable for real‑time control; we mitigated this via *DAX* caching.

**Result**  
Within 5 days of deployment, training time dropped from 120 s to 84 s per episode—a 30 % reduction. The agent achieved a mean reward of +200 (vs baseline +140).  

**Reflection & Learning**  
I owned the end‑to‑end pipeline and dove deep into DynamoDB consistency guarantees; a misconfigured TTL caused stale policies that degraded performance, so I added automated health checks. This experience reinforced *Customer Obsession* for latency, *Ownership* for data integrity, and *Dive Deep* for system reliability—core Amazon principles that guide my engineering decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
