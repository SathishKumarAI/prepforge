---
qid: ing_f139ab5d2a__faang__local
question: 'Explain: High-Level Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 510
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:00:35-05:00'
sources: []
---

**Clarify**  
We need a scalable read‑heavy architecture that can deliver ~40 M reads/s from persistent storage while keeping latency low. Assume: (1) data is immutable or updates are batched, (2) traffic is read‑oriented, (3) we have control over caching layers and backend storage.

**Approach**  
1. **Distributed cache layer** (e.g., Redis cluster, Memcached, or a custom in‑memory store).  
2. **Hot‑data sharding & replication** across many nodes to parallelize reads.  
3. **Back‑end object store** (S3‑compatible) for durability; only evicted keys go here.  
4. **Cache warming & prefetching** based on access patterns.  
5. **Metrics/monitoring** to auto‑scale and detect cache misses.

**Depth**  
- *Cache tier*: A 100 GB per node in‑memory store, partitioned by consistent hashing. Each node handles ~2 M reads/s; with 20 nodes we hit 40 M.  
- *Replication*: 3× replicas for fault tolerance; read‑through from a secondary on miss.  
- *Eviction policy*: LRU + size‑based to keep hot items in memory.  
- *Backend*: Use an eventually consistent object store; reads bypass cache only on misses, incurring ~10–20 ms latency.  
- *Complexity*: Cache read O(1), write (for updates) O(log N) for rehashing; storage write cost negligible.

**Edge Cases**  
- Sudden traffic spikes → auto‑spin new cache nodes.  
- Consistency gaps on updates → use version tags or CAS to avoid stale reads.  
- Cache churn due to large data objects → increase object size threshold.

**Optimize & Communicate**  
We can introduce a *read‑through proxy* that batches parallel cache lookups and falls back to backend in one request, reducing round trips. Also, compress frequently accessed keys to double effective capacity. In discussion, I’d emphasize the trade‑off between latency (cache hit) vs durability (object store), how we monitor hit ratios, and how we plan for future growth by adding more cache shards or moving to a hybrid memory‑disk tier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
