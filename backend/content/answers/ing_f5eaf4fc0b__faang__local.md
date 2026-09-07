---
qid: ing_f5eaf4fc0b__faang__local
question: 'Explain: Cache Warming — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 487
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:11:46-05:00'
sources: []
---

**Clarify**  
We’re asked how Uber scales to ~40 M reads/sec by “warming” a cache that sits on top of its persistent store. Key assumptions: the backend is an online storage layer (e.g., Cassandra/Redis‑like), traffic is read‑heavy, and the cache must stay coherent with writes.

**Approach**  
1. Identify hot data patterns (user locations, vehicle telemetry).  
2. Pre‑populate (“warm”) the cache before demand spikes.  
3. Keep the cache in sync via write‑through or event‑driven updates.  
4. Use sharding and replication to avoid bottlenecks.

**Depth**  
- **Data Ingestion**: Each ride request pushes a message to Kafka; a “cache‑warm” microservice consumes events for popular keys (e.g., top 1 M users) and writes them into an in‑memory store like Redis or Memcached.  
- **Cache Layer**: Partitioned across 200+ nodes, each node holds ~20 k keys with LRU eviction. Read latency drops to <10 µs.  
- **Write Path**: Writes go first to the online store; a background worker propagates updates to cache (write‑through). For high‑frequency telemetry, we use delta streams so only changed fields hit the cache.  
- **Consistency**: Use version stamps or MVCC; stale reads are acceptable up to 200 ms for most services.

**Edge Cases**  
- Cold starts for new users → fallback to backend with a “warm‑up” flag that prefetches their data on first access.  
- Cache churn during flash sales → increase replication factor temporarily.  
- Network partitions → local cache serves stale data; TTLs prevent long‑term divergence.

**Optimize & Communicate**  
To improve, we can:  
1. Adopt a *predictive* warming model (ML clustering) to prefetch future hot keys.  
2. Use adaptive eviction policies that consider write frequency.  
3. Instrument latency heatmaps to spot hotspots early.

By explaining the pipeline—from event ingestion to distributed in‑memory storage—and highlighting consistency trade‑offs, we demonstrate deep architectural insight while keeping the answer concise and structured.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
