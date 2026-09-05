---
qid: ing_1cadbf170d__fp__local
question: 'Explain: Cache Layer (Redis) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 470
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:07:08-05:00'
sources: []
---

**Why a Cache Layer is Essential**

A URL‑shortener must resolve millions of hits per second while keeping the write path (creating new short URLs) fast. The core operation is *lookup*: given `s` → original `u`.  
If every lookup hit the database, latency would be dominated by network round‑trips and disk I/O—unacceptable at scale.  
Caching solves this by exploiting **temporal locality**: most requests are for a tiny fraction of URLs that have been recently accessed.

---

### Design Principles

| Principle | Why it matters |
|-----------|----------------|
| **Read‑through & Write‑back** | Keeps the cache “fresh” without forcing every write to propagate immediately. |
| **LRU eviction with TTL** | Balances memory use and hit rate; URLs that stop being accessed drop out automatically. |
| **Consistent hashing of keys** | Distributes load evenly across Redis nodes, enabling horizontal scaling. |

---

### Implementation Sketch

1. **Lookup Flow**  
   *Query Redis* → if miss, *query DB*, then *store in Redis with TTL*.  
2. **Write Flow (create short URL)**  
   *Persist to DB* → *evict or update cache entry* (optimistic).  
3. **Cache Invalidation**  
   On deletion/update of a short URL, issue `DEL` on the key; otherwise rely on TTL.

---

### Non‑Obvious Insight

> **Cache keys should be deterministic hashes of the full short URL, not the raw string.**  
> This guarantees that even if URLs contain user‑supplied characters (e.g., emojis), they map to a fixed, small key space, avoiding accidental cache collisions or excessive memory consumption.

---

### Result

With Redis, read latency drops from ~10 ms (DB) to <1 µs, while write throughput remains bounded only by the DB. The system achieves *linear scalability* for reads and *constant‑time writes*, satisfying the core constraints of a high‑traffic URL shortener.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
