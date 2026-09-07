---
qid: ing_7c00fc52ef__faang__local
question: 'Explain: Compare Cache — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 514
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:32:29-05:00'
sources: []
---

**Clarify**  
You’re asking how Uber scales to > 40 M reads/sec by coupling online storage with a cache layer. I’ll assume: *reads dominate*, the data set is large (tens of TB), latency < 10 ms, and consistency can be relaxed for performance.

**Approach**  
1. **Cache‑as‑first‑line** – keep hot objects in memory (Redis/Memcached).  
2. **Read‑through / write‑back** – on miss fetch from PostgreSQL/Bigtable, populate cache; on update, invalidate or update the cache.  
3. **Partitioning & sharding** – split key space by user ID or geographic region to keep hot shards small and avoid hotspots.  
4. **Multi‑tiered storage** – tier 1: in‑memory, tier 2: SSD‑backed local cache (e.g., Aerospike), tier 3: cloud object store.

**Depth**  
- *Cache hit rate* ≥ 95 % gives ~ 40 M reads/sec → ≈ 4.2 M ops per second on the database, feasible for a sharded Postgres cluster.  
- Use *consistent hashing* to balance load; add *replication factor 3* for fault tolerance.  
- Employ *read‑through libraries* (e.g., Lettuce for Redis) to hide cache logic from services.  
- Complexity: O(1) cache lookup, O(log n) DB fetch on miss.  
- Trade‑off: eventual consistency vs. strong guarantees; we accept stale reads for 99.9 % of traffic.

**Edge Cases**  
- Cache stampede: mitigate with *request coalescing* or *cache pre‑warming*.  
- Hot keys: detect and move to a dedicated shard or use *dynamic partitioning*.  
- Network partitions: fall back to DB but increase latency; monitor TTLs.

**Optimize & Communicate**  
Explain that the integrated cache reduces DB load by 20–30×, lowers cost, and enables sub‑10 ms latency at scale. Highlight monitoring (hit/miss ratios, evictions) and automated scaling of cache nodes. Conclude that a well‑engineered tiered cache + sharded storage is the key to Uber’s >40 M RPS read throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
