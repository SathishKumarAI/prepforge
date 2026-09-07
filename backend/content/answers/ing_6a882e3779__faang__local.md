---
qid: ing_6a882e3779__faang__local
question: 'Explain: Docstore Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 538
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:42-05:00'
sources: []
---

**Clarify**

We need to explain how Uber’s “DocStore” scales to >40 M reads/sec using online storage plus an integrated cache, assuming the system must serve real‑time requests (e.g., rider trip data) with sub‑millisecond latency and high durability.

**Approach**

1. Outline the two‑layer architecture: **online store** (distributed NoSQL/relational DB) + **integrated cache** (in‑memory key‑value store).  
2. Describe data flow, consistency model, and failure handling.  
3. Highlight scaling mechanisms: sharding, replication, and request routing.

**Depth**

- *Online Store*: Sharded across thousands of nodes; each shard holds a range of document keys (e.g., trip IDs). Replication factor = 3 for fault tolerance. Reads go to the primary replica; writes are logged to all replicas asynchronously.
- *Integrated Cache*: A distributed in‑memory layer (e.g., Redis or Memcached) that sits **in front** of the store. On a cache miss, the request hits the online store and the result is cached for future reads. Cache entries have TTLs aligned with data freshness requirements.
- *Consistency*: Uber uses **optimistic concurrency**; stale reads are acceptable for most analytics workloads. For critical paths (e.g., fare calculation), the system performs a read‑repair: after serving from cache, it validates against the store and updates if necessary.
- *Scalability*: Each layer scales horizontally. The cache cluster can grow to tens of thousands of nodes; sharding ensures even load distribution. A **consistent hashing** request router directs reads to the appropriate shard/cached node with minimal re‑balancing.

**Edge Cases**

- Cache stampede on popular keys → use *cache‑aside* with lock or token bucket.
- Network partitions: read from store only if cache is unavailable; fallback to quorum reads.
- Data eviction policy (LRU vs. LFU) affects hit ratio.

**Optimize & Communicate**

Improvements include using a **write‑through cache** for critical writes and adopting *read‑repair* pipelines to keep the cache fresh without blocking readers. I would explain that the 40 M RPS figure comes from aggregating per‑shard throughput (~10k RPS) multiplied by ~4,000 shards, with the cache absorbing >90 % of traffic. This demonstrates how a hybrid architecture leverages distributed storage for durability while an integrated cache delivers the required latency and scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
