---
qid: ing_47cf1a6053__faang__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 526
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:57-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *pastebin*‑style service that supports creating short text snippets and retrieving them by ID. The key challenge is scaling reads while keeping writes cheap – this is where caching comes in. I’ll assume we have an eventual consistency requirement, high read traffic, and modest write volume.

**Approach**  
1. **Cache layer (Redis/Memcached)**: Store the most frequently accessed pastes keyed by paste‑ID.  
2. **Write path**: Persist to a relational or NoSQL DB first; once stored, push the paste into cache.  
3. **Read path**: Try cache → if miss, read from DB, populate cache, and return.  
4. **Eviction policy**: LRU with a size limit (e.g., 10 M entries) plus TTL for short‑lived pastes.  
5. **Cache invalidation**: On updates or deletes, evict the key.

**Depth**  
- *Complexity*: O(1) average read/write in cache; DB reads/writes are O(log n).  
- *Consistency*: Cache‑first write ensures eventual consistency; stale data is mitigated by TTL.  
- *Fault tolerance*: If cache goes down, we fall back to DB transparently.  
- *Scaling*: Horizontal scaling of cache nodes via consistent hashing; DB sharding on paste‑ID.

**Edge Cases**  
- **Cache stampede**: Multiple concurrent misses for a popular ID – mitigate with request coalescing or a “cache‑miss lock.”  
- **Hotspotting**: A single very popular paste could fill the cache—consider rate limiting reads or moving it to a dedicated hotspot shard.  
- **Expiration drift**: If TTL is too short, users might lose data; if too long, memory bloat.

**Optimize & Communicate**  
I’d start with a small in‑memory cache for prototyping, then move to Redis clusters once traffic hits ~10k QPS. I would monitor hit/miss ratios and adjust eviction thresholds accordingly. In discussion, I’d emphasize trade‑offs: tighter TTL → fresher data but higher DB load; larger cache → more memory cost. This balanced approach aligns with FAANG’s focus on clear communication, deep technical understanding, and scalability considerations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
