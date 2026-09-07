---
qid: ing_b778b380ef__faang__local
question: 'Explain: Cache Invalidation — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 468
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:35-05:00'
sources: []
---

**Clarify**  
You’re asking how Uber scales to ~40 M RPS with a single‑tier cache backed by online storage (e.g., DynamoDB). Key assumptions: *write‑through or write‑back policy?* *Consistency model?* *Latency budget?* *Cache eviction strategy?*  

**Approach**  
1. Build a distributed in‑memory cache layer (Memcached/Redis) that sits in front of the persistent store.  
2. Use a consistent hashing ring to map keys to cache nodes, ensuring even load and easy scaling.  
3. Implement write‑through for critical data so every mutation goes to both cache and DB; use asynchronous replication for less critical writes.  
4. Employ a *time‑to‑live* (TTL) plus *logical expiration* mechanism to invalidate stale entries.  

**Depth**  
- **Cache Invalidation:** On any update, the service publishes an invalidation message on a pub/sub channel. All cache nodes subscribe; upon receipt they delete or refresh the key.  
- **Consistency:** Strong consistency for location data via write‑through + eventual sync for pricing tables.  
- **Latency:** Read path hits the cache (≈1 µs). Cache miss triggers DB read, result cached, and returned to client (~10–20 ms).  
- **Complexity:** O(1) per request; invalidation events are batched to reduce network chatter.

**Edge Cases**  
- *Cache stampede*: use distributed locking (RedLock) or a “hot key” cache‑only region.  
- *Network partitions*: fall back to DB read, mark cache as stale until repair.  
- *Memory pressure*: LRU eviction plus TTL to avoid over‑growth.

**Optimize & Communicate**  
Future work: replace Memcached with a custom in‑process cache for ultra‑low latency; integrate a machine‑learning model that predicts hot keys and pre‑fetches them. I would explain this roadmap in a concise slide deck, emphasizing trade‑offs (write amplification vs. read latency) and showing metrics (hit rate >95%, RPS scaling linear with node count).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
