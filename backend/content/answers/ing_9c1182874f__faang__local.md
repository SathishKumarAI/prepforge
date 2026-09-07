---
qid: ing_9c1182874f__faang__local
question: 'Explain: Cache Invalidation — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 421
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:45-05:00'
sources: []
---

**Clarify**  
We’re asked how a system can keep cached data fresh when the underlying source changes—i.e., *cache invalidation via Change Data Capture (CDC)*. I’d confirm:  
- What data types and volume are involved?  
- Is the cache read‑heavy or write‑heavy?  
- Do we need strict consistency or eventual consistency?  

**Approach**  
1. **Capture changes** at the source (DB/stream).  
2. **Propagate** those events to a consumer that updates or invalidates the cache.  
3. **Decide policy**: exact eviction vs. “mark stale & refresh on next read”.  

**Depth**  
- Use database triggers or log‑based CDC (e.g., Debezium) to stream `INSERT/UPDATE/DELETE`.  
- Push events into a message broker (Kafka, Pulsar).  
- A cache worker subscribes, maps keys to affected cache entries, and either deletes them (`evict`) or writes fresh values.  
- For distributed caches (Redis Cluster, Memcached), include node routing logic.  
Complexity: O(1) per event for key eviction; overall throughput limited by broker and consumer scaling.  

**Edge Cases**  
- **Bulk updates**: batch invalidation to avoid thrashing.  
- **Out‑of‑order events**: use timestamps or sequence numbers to idempotently apply changes.  
- **Cache miss storms**: guard with rate limiting or lazy refresh.  

**Optimize & Communicate**  
To reduce traffic, coalesce consecutive updates on the same key into a single eviction. If latency is critical, consider *write‑through* caching so writes go directly to cache and DB in parallel. I’d explain trade‑offs between consistency guarantees (strong vs. eventual) and system complexity, showing how CDC gives near‑real‑time freshness with minimal added latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
