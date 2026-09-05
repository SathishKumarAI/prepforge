---
qid: ing_270455b30a__star__local
question: 'Explain: Concurrency — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 365
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:35-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our real‑time fraud detection engine was hitting a bottleneck: the in‑memory cache that held user transaction patterns could only serve ~3k requests per second before latency spiked. The team needed to support 15k req/s during peak trading hours without dropping any cache hits.

**Task:**  
Redesign the cache layer for high concurrency and scalability while keeping read latency under 2 ms and ensuring eventual consistency across microservices.

**Action:**  
I chose a sharded, thread‑local LRU implementation using Java’s `ConcurrentHashMap` combined with per‑shard `ReentrantLock`s to avoid global contention. Each shard was backed by a `LinkedHashMap` wrapped in a `ReadWriteLock` so reads could proceed lock‑free while writes acquired the write lock only for eviction. To propagate updates, I integrated an asynchronous event bus (Kafka) that pushed “invalidate” messages; services subscribed and updated local shards without blocking their request flow. For cross‑region scaling, we deployed Redis Cluster as a secondary tier, using Lua scripts to perform atomic compare‑and‑swap operations for high‑frequency counters.

**Result:**  
The new cache handled 18k req/s with <1.5 ms average latency during peak loads and reduced the 99th‑percentile latency from 12 ms to 3 ms. The system also cut memory usage by 30% thanks to smarter eviction. I learned that fine‑grained locking coupled with async invalidation can unlock concurrency without sacrificing consistency, a pattern I now apply whenever scaling stateful services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
