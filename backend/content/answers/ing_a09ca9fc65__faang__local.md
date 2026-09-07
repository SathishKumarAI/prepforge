---
qid: ing_a09ca9fc65__faang__local
question: 'Explain: Caching — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 598
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:57:56-05:00'
sources: []
---

**Clarify**  
You’re asking for practical caching tactics that let a database‑heavy app stay fast and cheap at scale. I’ll assume we have a relational or key‑value store behind a stateless API layer, with read‑heavy traffic and occasional writes.

**Approach**  
1. Identify hot data (high hit ratio).  
2. Pick an appropriate cache tier (in‑memory vs distributed).  
3. Decide invalidation strategy (TTL, write‑through, event‑driven).  
4. Layer caches: application, CDN, database query cache.  
5. Monitor & iterate.

**Depth**  

| # | Strategy | Why it works | Typical tech |
|---|----------|--------------|--------------|
| 1 | **Read‑Through / Write‑Back Cache** | Keeps the cache source of truth for reads; writes propagate asynchronously, reducing DB load. | Redis, Memcached |
| 2 | **Cache Partitioning (Sharding)** | Distributes keys across nodes to avoid hot spots and increase parallelism. | Consistent hashing in Redis Cluster |
| 3 | **Lazy Expiration + TTL** | Guarantees freshness without costly invalidation scans; balances staleness vs consistency. | `EXPIRE` in Redis |
| 4 | **Event‑Driven Eviction (Pub/Sub)** | Invalidate or refresh cache when a write occurs, keeping data fresh. | Kafka → Redis |
| 5 | **Cache Aside for Write‑Heavy Ops** | Application explicitly loads into cache on read and writes to DB + invalidates cache; best for complex transactions. | Spring Cache |
| 6 | **Query Result Caching with Fingerprints** | Store deterministic query results keyed by a hash of the SQL & parameters, saving repeated expensive joins. | In‑memory map or external cache |
| 7 | **CDN Edge Caching for Static/Computed Data** | Offloads read traffic to edge nodes, reduces round‑trips and latency. | CloudFront, Akamai |

**Edge Cases**  
- Stale reads after a write if TTL too long.  
- Cache stampede when many clients miss the same key.  
- Inconsistent cache & DB state during failure of propagation channel.

Test: simulate 10k concurrent readers with 1% writes; verify hit ratio >90%, latency <50 ms, and data consistency via read-after-write checks.

**Optimize & Communicate**  
Start simple (read‑through + TTL), then add sharding for hot keys. Use metrics dashboards to trigger auto‑shrink/shuffle when hit ratios drop. When explaining to interviewers, emphasize the trade‑off between complexity (event bus) and latency savings, and how each strategy addresses a specific bottleneck in scalable DB workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
