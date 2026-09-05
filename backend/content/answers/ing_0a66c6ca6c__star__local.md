---
qid: ing_0a66c6ca6c__star__local
question: 'Explain: Cons : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:34-05:00'
sources: []
---

**Situation:**  
During the rollout of our real‑time recommendation engine, the in‑memory feature store started to hit its 2 GB limit, causing a 15% spike in latency for user sessions.

**Task:**  
I had to design and implement a cache eviction policy that would keep high‑value features resident while keeping memory usage below threshold, without affecting model accuracy.

**Action:**  
1. **LRU (Least Recently Used)** – removed items that hadn’t been accessed in the longest time; good for bursty traffic but risky if a feature is needed again soon.  
2. **LFU (Least Frequently Used)** – tracked access counts via a Redis sorted set, favoring features that were consistently queried.  
3. **ARC (Adaptive Replacement Cache)** – combined LRU and LFU with dynamic weighting to adapt to changing workloads; I used an open‑source ARC implementation in Go.  
4. **Time‑to‑Live (TTL)** – set short TTLs for volatile user attributes, ensuring stale data didn’t linger.  
5. **Policy Mix** – applied a tiered approach: LRU for transient UI flags, LFU for static product metadata, and ARC for dynamic embedding vectors.  
6. **Instrumentation** – instrumented eviction events with Prometheus metrics to monitor hit ratios and eviction rates in real time.

**Result:**  
Memory usage stayed under 1.8 GB, cache hit ratio improved from 78% to 92%, and overall request latency dropped by 22%. I learned that a hybrid strategy tuned to data access patterns yields the best balance between performance and resource limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
