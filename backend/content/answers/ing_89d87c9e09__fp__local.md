---
qid: ing_89d87c9e09__fp__local
question: 'Explain: Docstore Query Patterns — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 419
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:58:08-05:00'
sources: []
---

**DocStore Query Patterns – Uber’s 40 M RPS Engine**

At its core the problem is *low‑latency retrieval of highly dynamic documents* (user profiles, trip metadata) while keeping the write path simple and avoiding hot spots in a distributed key‑value store.  
Uber solves this by **decoupling read traffic from storage** through an *integrated cache layer* that sits directly above the primary online database.

1. **Cache‑first policy with write‑through semantics** – every read first probes the in‑memory cache; if miss, it fetches from disk and immediately writes back to the cache.  
2. **Segmented key sharding** – keys are hashed into 256 shards; each shard is served by a dedicated cache node. This linearizes contention: all replicas of a shard see identical traffic patterns, enabling *exact‑copy replication* without quorum delays.  
3. **Probabilistic eviction (LFU‑with‑TTL)** – the cache keeps the most frequently accessed documents while respecting freshness constraints via time‑to‑live tags.  

Why it works:  
- **Information‑theoretic locality** – queries exhibit *heavy‑tailed* access distributions; caching captures >95 % of requests with <1 % of memory.  
- **Stochastic buffering** – the cache absorbs bursty traffic, turning a Poisson arrival process into a nearly deterministic service time distribution (Little’s Law).  

Non‑obvious insight: *The cache is not just a speedup; it becomes an implicit load balancer.* Because each shard’s cache node owns its own eviction policy, hot keys never propagate to the underlying store, preventing cascading write amplification. This emergent separation of concerns lets Uber sustain >40 M reads/s with sub‑10 ms latency while keeping storage costs linear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
