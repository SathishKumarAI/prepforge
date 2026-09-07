---
qid: ing_5e34369746__faang__local
question: 'Explain: Cache as Primary Storage — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 591
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:22:50-05:00'
sources: []
---

**1️⃣ Clarify**

*Problem:* Explain what caching means in a system‑design context and why you might choose cache as the primary storage layer instead of a traditional database.

*Assumptions to confirm:*  
- The data set is read‑heavy with occasional writes.  
- Latency requirements are sub‑millisecond.  
- Consistency can be relaxed or handled via eventual consistency.  

**2️⃣ Approach**

1. Define caching and its basic components (key/value store, eviction policy).  
2. Contrast cache vs database in terms of durability, consistency, and latency.  
3. Explain scenarios where cache is the primary store (e.g., session data, real‑time analytics).  
4. Discuss trade‑offs: persistence loss, write amplification, scaling.

**3️⃣ Depth**

Caching is a fast, in‑memory key/value layer that stores hot data to reduce read latency and backend load. Typical engines: Redis, Memcached. Eviction policies (LRU, LFU, TTL) keep the most useful items resident.

Using cache as **primary storage** means every write goes directly into the cache; the backing store is either an append‑only log or a separate persistence layer that is updated asynchronously. This pattern shines when:

- *Latency* dominates: sub‑millisecond reads for session tokens, leaderboard scores, etc.  
- *Write volume* is low enough to tolerate eventual consistency.  
- *Durability* can be relaxed; data loss on crash is acceptable or recoverable via replay.

**Trade‑offs**

| Aspect | Cache‑primary | Traditional DB |
|--------|---------------|----------------|
| Durability | None (in‑memory) | Strong |
| Consistency | Eventual | ACID |
| Scalability | Horizontal scaling + sharding | Vertical/hybrid |
| Cost | Low per node, high memory cost | Storage‑centric |

**4️⃣ Edge Cases**

- **Data loss on crash:** Implement write‑through to a log or use Redis persistence (RDB/AOF).  
- **Large objects exceeding memory:** Store only keys in cache; values stay in object store.  
- **Stale data:** Use TTLs and background refreshes.

**5️⃣ Optimize & Communicate**

If latency is the top KPI, I’d start with an in‑memory key/value cache, add a write‑through log for durability, and monitor hit/miss ratios to trigger horizontal scaling. I’d explain that while this sacrifices strict consistency, it delivers the required speed for high‑frequency reads—exactly what services like Redis‑powered session stores or leaderboard caches need.  

*Key takeaway:* Cache as primary storage is a deliberate trade‑off favoring low latency and high throughput over durability, suitable when data can be regenerated or is non‑critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
