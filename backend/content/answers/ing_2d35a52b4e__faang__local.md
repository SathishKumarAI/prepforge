---
qid: ing_2d35a52b4e__faang__local
question: 'Explain: Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 527
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:28:11-05:00'
sources: []
---

**Clarify**

We’re asked to describe *caching strategies* in a system‑design context—i.e., when, why, and how we decide what data lives in memory versus disk or remote store.  
Key assumptions:  
- Data has variable access patterns (hot vs cold).  
- Latency budgets differ per service tier.  
- We can use in‑memory stores (Redis, Memcached) or local cache layers.

**Approach**

1. **Cache Granularity** – object‑level vs page‑level.  
2. **Placement** – edge (CDN), application server, or distributed cluster.  
3. **Consistency model** – read‑through, write‑back, or stale‑while‑revalidate.  
4. **Eviction policy** – LRU, LFU, TTL, size‑based.  
5. **Cache invalidation** – event‑driven vs time‑to‑live.

**Depth**

| Strategy | Use‑case | Consistency | Complexity |
|----------|----------|-------------|------------|
| *Read‑through* (proxy fetch) | Simple, ensures cache hit on read | Strong after load | O(1) read, O(n) on miss |
| *Write‑behind* (async flush) | High write throughput | Eventually consistent | Requires background worker |
| *Cache-aside* (client decides) | Custom TTLs per key | Application‑controlled | More code, but fine‑grained |
| *Distributed cache with sharding* | Massive scale | Consistent hashing + replication | Higher network overhead |

**Edge Cases**

- **Stale data**: use version tags or event invalidation.  
- **Cache stampede**: employ request coalescing or “cache aside” with locks.  
- **Memory pressure**: monitor hit ratio, adjust TTLs.

**Optimize & Communicate**

1. Start with a *hot‑key* cache for the top 5 % of requests.  
2. Use CDN edge caching for static assets to reduce RTT.  
3. For write‑heavy workloads, shift to write‑behind and batch flushes.  
4. Continuously monitor hit ratio; if < 70 %, revisit eviction policy or shard count.

By structuring the decision tree—what data is cached, where, with what consistency—and iterating on metrics, we achieve low latency, high throughput, and manageable complexity in a production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
