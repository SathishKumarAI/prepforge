---
qid: ing_becb7bf7ac__fp__local
question: How can each cache replica be updated? — Urlshorteningservicetinyurl
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 407
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:49:06-05:00'
sources: []
---

In a horizontally‑scalable URL‑shortening system the *cache* holds the mapping from short code → long URL so that most lookups hit in-memory rather than disk or database.  
The fundamental problem is: **every cache must reflect the latest mapping without forcing every read to go to the primary store**.  

1. **Write‑through + publish–subscribe**  
   * A request to create a new code writes the pair into the persistent store (e.g., Cassandra).  
   * The write‑through layer immediately propagates a “create” event to a message bus (Kafka, Redis Streams).  
   * Each cache replica subscribes to the stream; upon receiving the event it inserts or updates its local hash table.  

2. **Cache invalidation on update/delete**  
   * When a mapping is changed or removed, the same event pattern (“update”/“delete”) guarantees all caches evict or replace that key.  
   * The bus preserves order per partition, so replicas see events in a consistent sequence.

3. **Back‑off & retry for transient failures**  
   * If a replica misses an event (network hiccup), it periodically polls the primary store for missing keys or subscribes to a “catch‑up” topic.

### Non‑obvious insight
Because the short code space is tiny and lookups are read‑heavy, **eventual consistency is sufficient**: a cache can serve stale data for milliseconds while the event stream converges. The trick is that *stale reads are safe*—they simply return an old URL but still redirect correctly; only write‑side correctness matters. Thus we avoid costly distributed locks or global invalidation, keeping latency low and throughput high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
