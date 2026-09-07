---
qid: ing_08d8297034__faang__local
question: 'Explain: CacheFront — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 499
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:57-05:00'
sources: []
---

**Clarify**  
We’re asked how Uber’s *CacheFront* architecture delivers ~40 M RPS for read‑heavy traffic while keeping latency low and data fresh.  
Key assumptions: the backend store is an eventually consistent key‑value service (e.g., DynamoDB/Bigtable), request patterns are highly skewed, and reads dominate writes.

**Approach**  
1. Identify hot keys → keep them in a distributed cache layer.  
2. Use a write‑through / read‑through policy to stay consistent.  
3. Scale the cache horizontally; each node holds a partition of the keyspace.  
4. Evict stale data via TTL or LRU, but also support *cache misses* by fetching from storage and warming the cache.

**Depth**  
- **Cache layer**: Memcached‑style in‑memory store (≈10 GB per node), sharded by consistent hashing.  
- **Read path**: Client → CacheFront shard → hit → return; miss → fetch from storage, populate cache, then return.  
- **Write path**: Application writes to backend first, then asynchronously propagates a “cache‑invalidate” message (e.g., via Kafka) to evict stale entries.  
- **Consistency model**: *Eventual* with TTL guarantees freshness; read‑through ensures no stale reads after eviction.  
- **Performance**: With ~1 ms cache latency and 2 kB per record, a single node can sustain ~500 k RPS; scaling to 80 nodes gives ~40 M RPS.

**Edge Cases**  
- *Cache stampede*: use lock‑per‑key or “cache‑aside” with exponential backoff.  
- *Hot key spikes*: employ request coalescing (promises) to avoid duplicate fetches.  
- *Network partitions*: fallback to backend reads; accept higher latency.

**Optimize & Communicate**  
We can reduce memory footprint by compressing values, add multi‑level caching (intra‑node L1 + inter‑node L2), and monitor hit rates to auto‑scale shards. In an interview I’d emphasize the trade‑off between consistency guarantees and throughput, and how CacheFront’s async invalidation keeps writes fast while maintaining near‑real‑time freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
