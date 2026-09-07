---
qid: ing_476e33580d__faang__local
question: 'Explain: Table Schemas — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 490
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:15-05:00'
sources: []
---

**Clarify**  
You’re asking how Uber’s architecture can deliver ~40 M reads/second from a “single source of truth” (online storage) while keeping latency low. Key assumptions: *reads dominate writes*, *data is mostly read‑only for each service*, and *the cache must stay coherent with the source*.  

**Approach**  
1. **Single source** – PostgreSQL/PostGIS or a distributed OLTP store holds canonical tables.  
2. **Integrated cache layer** – Uber’s own “Scribe” + “Cache‑as‑Service” (e.g., Aerospike/Redis) sits in front of the DB.  
3. **Write‑through / write‑back policy** – every update goes to both DB and cache; stale data is refreshed via pub/sub.  
4. **Coherence via CDC** – Change Data Capture streams propagate changes to all caches, guaranteeing eventual consistency.  

**Depth**  
- *Cache hits* serve 99 % of traffic, reducing DB load by ~10×.  
- *Read‑through* logic automatically loads missing keys into cache (lazy loading).  
- *Eviction policy*: LRU with TTL tuned per table; hot spots are pinned in a dedicated “hot” shard.  
- *Latency*: <5 ms for 99th percentile reads, thanks to in‑memory storage and minimal serialization overhead.  
- *Scalability*: Shard cache horizontally; each node handles ~1 M reads/s, so ~40 nodes suffice.

**Edge Cases**  
- **Cache miss storms** during schema changes → mitigated by back‑off + pre‑warming.  
- **Stale data** if CDC lag > 100 ms → alerting and fallback to DB read.  
- **Write bursts** could overwhelm cache → rate limiting and write‑back buffer.

**Optimize & Communicate**  
Future improvements: use a multi‑level cache (SSD + RAM) for cold data, adopt per‑row version vectors for fine‑grained invalidation, and integrate ML‑based hotness prediction to pre‑populate caches. I’d explain each trade‑off—memory cost vs. hit ratio—and show that this design keeps read latency low while preserving a single source of truth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
