---
qid: ing_b917718791__fp__local
question: 'Explain: Cache in Distributed Systems — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 449
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:25-05:00'
sources: []
---

**Caching in distributed systems**

At its core, a distributed system solves *“how do many nodes share data quickly?”*  
The naive answer is: each node queries the authoritative store (e.g., a database).  
But network latency and load grow linearly with the number of requests.  
The principle that resolves this is **redundancy for locality**: if a piece of data is *likely* to be requested again soon, keep it close to the requester.

Formally, caching implements an online *knuth–morris‑pratt* style “guess‑and‑replace” policy:  
- **Guess** – predict future accesses using a decay function (time‑based or frequency‑based).  
- **Replace** – evict the least valuable item when space is needed.  

This satisfies two optimization criteria:

1. **Minimize expected access cost** \(E[C] = \sum_{i} p_i\,c_i\) where \(p_i\) is the probability of requesting key \(i\) and \(c_i\) its remote cost.  
2. **Respect capacity constraints** by keeping the cache size \(k\).

A non‑obvious insight: *the optimal eviction policy is not purely “least recently used” (LRU)*. When request patterns exhibit long‑term correlations (e.g., page faults in OS), a **time‑decay weighted least recently used (TLRU)** outperforms LRU because it discounts stale hits that would never recur.

In practice, distributed caches expose two invariants:

| Invariant | Why it matters |
|-----------|----------------|
| **Staleness ≤ Δ** | Guarantees consistency within a bounded window. |
| **Cache hit ratio ≥ R** | Ensures that the cost of maintaining cache outweighs remote access savings. |

Thus, caching is not merely a performance trick; it is an *optimization layer* that transforms a linear‑time communication problem into a sublinear one by exploiting locality, probability, and geometry of request patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
