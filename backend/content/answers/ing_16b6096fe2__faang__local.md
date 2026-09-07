---
qid: ing_16b6096fe2__faang__local
question: 'Explain: Summary — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 497
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:37:18-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level overview of caching strategies in system design—how we decide *what* to cache, *where* to store it, and *when* to evict it so that latency is minimized while consistency and cost stay acceptable.

Key assumptions:  
- Workload has read‑heavy traffic with some write churn.  
- Data size exceeds memory limits of a single node.  
- Consistency requirements range from strong (e.g., banking) to eventual (social feeds).

**Approach**  
1. **Cache placement:** in‑process, local RAM, distributed in‑memory store (Redis/Memcached), or CDN edge caches.  
2. **Key strategy:** composite keys that capture versioning (hash of data + timestamp).  
3. **Eviction policy:** LRU for read‑heavy, LFU when certain items are hot over time, FIFO for simple workloads.  
4. **Invalidation:** push‑based (e.g., pub/sub on write) vs pull‑based (TTL, scheduled refresh).  
5. **Consistency model:** eventual with background sync, or strong via synchronous updates to cache and DB.

**Depth**  
- *Read‑through*: fetch from DB if miss, populate cache; complexity O(1) amortized, but adds latency on miss.  
- *Write‑back*: write to cache first, later flush to DB—reduces write latency but risks data loss on crash.  
- *Cache-aside*: client decides when to read/write cache; simplest to implement.  
Trade‑offs: stronger consistency → higher write overhead and potential stale reads if TTL is long.

**Edge Cases**  
- Cache stampede: guard with locking or “dog‑leg” pattern.  
- Memory pressure spikes: fallback to disk or tiered storage.  
- Highly dynamic data: set short TTLs or use versioned keys.

**Optimize & Communicate**  
Start with a simple cache‑aside for hot queries, monitor hit ratios, then iterate: add push‑based invalidation for critical paths, move to CDN edges for global reads, and consider sharding the cache for scale. Explain each decision in terms of latency reduction, cost per request, and consistency guarantees—exactly what interviewers expect from a FAANG candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
