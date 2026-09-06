---
qid: ing_e0db4f1e42__think__local
question: 'Explain: Caching — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 520
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:49:39-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   * Is the interview about general database scaling or a specific system (e.g., key‑value store, relational DB)?  
   * Assume we have read/write traffic that is heavy enough to warrant caching, and that latency/throughput are critical KPIs.

**2. Adopt a layered mental model**  
   * **Data layer**: primary database (SQL or NoSQL).  
   * **Cache layer**: in‑memory store (Redis/Memcached) with eviction policy.  
   * **Application layer**: cache‑aware code (read‑through, write‑through/around).  
   * **Consistency model**: eventual vs strong.

**3. Step‑by‑step reasoning**  

1. **Identify hot data patterns** – profile queries to find frequently accessed rows or result sets.  
2. **Choose a caching strategy** – read‑through (cache miss → DB fetch + cache store) or write‑through (write to DB and cache simultaneously).  
3. **Select cache key design** – avoid collisions, support TTLs, consider namespace prefixes for multi‑tenant systems.  
4. **Handle updates** – invalidate or update cache entries on writes; use publish/subscribe if multiple nodes need sync.  
5. **Scale the cache** – shard horizontally (consistent hashing), add replicas for read load, monitor eviction rates.  
6. **Database sharding / replication** – partition data across nodes to reduce single‑point bottlenecks; ensure cache keys map to correct shards.  
7. **Failover & resilience** – fall back to DB on cache miss or outage; keep write‑through atomicity via transactions or two‑phase commit if needed.

**4. Common pitfalls to avoid**  

* Cache “stale” data because of delayed invalidation → leads to incorrect reads.  
* Over‑caching everything → waste memory, hurt performance.  
* Ignoring cache consistency model mismatch with application semantics.  
* Not sizing the cache properly → high eviction rate or underutilization.

**5. Sanity‑check & verbalize**  

* Verify that read latency meets SLA and write throughput is not throttled by cache writes.  
* Ask: “If a node fails, can we still serve reads from the cache? What happens to pending writes?”  
* Summarize trade‑offs (latency vs consistency) and explain how scaling decisions affect them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
