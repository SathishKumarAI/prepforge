---
qid: ing_941a753330__faang__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 489
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:47-05:00'
sources: []
---

**Clarify**  
You’re asking how Twitter’s caching layer is described in the System‑Design‑Primer. The goal: reduce database load and latency for read‑heavy traffic while keeping data fresh. I’ll assume we need a horizontally scalable cache that supports key‑value access, eviction, and eventual consistency.

**Approach**  
1. **Cache tier** – In‑memory store (Redis/Memcached) per region.  
2. **Key design** – `user:{id}` → profile; `tweet:{id}` → tweet; `timeline:{user_id}:{page}` → precomputed lists.  
3. **Eviction policy** – LRU for hot keys, TTL for stale data (e.g., 5 min).  
4. **Write‑through / write‑back** – Updates go to DB first, then invalidate or update cache.  
5. **Cache invalidation strategy** – Pub/Sub or event bus: when a tweet is posted/edited/deleted, publish an event; subscribers purge related keys.  
6. **Multi‑region replication** – Read replicas per region; write only to primary; read from local cache.

**Depth**  
- Redis cluster with sharding (hash slot) gives O(1) get/set and horizontal scaling.  
- TTL ensures eventual consistency; LRU keeps hot data in memory.  
- Pub/Sub reduces stale reads: `pub tweet_update:{tweet_id}` → `sub timeline_user_{id}` → delete cached timeline.  
- Complexity: O(1) for CRUD ops; network overhead is minimal if cache hits are >90 %.  

**Edge Cases**  
- Cache miss bursts after TTL expiry → DB surge (thundering herd). Mitigate with *cache‑aside* back‑off or request coalescing.  
- Partition failures → fallback to DB, degrade gracefully.  
- Data skew: a few users generating huge timelines; may need sharding per user.

**Optimize & Communicate**  
Explain trade‑offs: higher cache hit ratio vs. memory cost; stronger consistency (write‑through) vs. latency. Mention monitoring metrics (hit rate, eviction count). Conclude that this design balances read performance with acceptable staleness for Twitter’s high‑traffic environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
