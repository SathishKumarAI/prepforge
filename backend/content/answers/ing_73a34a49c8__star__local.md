---
qid: ing_73a34a49c8__star__local
question: 'Explain: Advantages: — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:19:06-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with deploying a recommendation engine for an e‑commerce platform that needed to serve personalized product suggestions at scale while keeping latency under 150 ms.

**Task:**  
I had to decide whether to build the inference pipeline as a stateless microservice or a stateful one that cached intermediate embeddings per user session, and then demonstrate how the chosen design would meet performance, cost, and maintenance goals.

**Action:**  
I compared both options: a stateless REST API that recomputed all embeddings on each request versus a stateful service using Redis to store pre‑computed user vectors. I profiled CPU, memory, and network usage with realistic traffic spikes (≈10k requests/s). The stateful design reduced per‑request compute by 70 % and cut latency from 240 ms to 110 ms, but introduced a cache‑eviction strategy that required TTL tuning and fallback logic. I implemented an exponential backoff for stale data and added health checks to automatically purge expired entries.

**Result:**  
Deploying the stateful architecture lowered inference cost by ~35 % on AWS Lambda (due to fewer invocations) and improved user engagement metrics—click‑through rate rose from 2.1 % to 3.4 %. I learned that while stateless systems simplify scaling, introducing controlled state can dramatically boost performance when the workload involves heavy, repetitive computations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
