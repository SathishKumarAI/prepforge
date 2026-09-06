---
qid: ing_61add12e47__fp__local
question: 'Explain: How Sharding Works — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 487
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:33:03-05:00'
sources: []
---

**Why we shard at all**

A relational database is a *single* table of tuples that the engine can scan in O(n) time.  
When an application needs to read or write millions of rows per second, that linear cost becomes a bottleneck.  
The fundamental problem is **throughput ≠ capacity**: adding more CPU or memory only helps until the *I/O* bound is hit.  
Thus we partition the data so that each worker handles a *disjoint* subset, turning an O(n) scan into many O(k) scans where k = n/|shards|.

**How sharding solves it**

1. **Partition function** – pick a key (user‑id, hash of primary key).  
   The goal is to map keys to shards uniformly; this reduces variance in load and keeps each shard’s size ≈ n/|shards|.
2. **Locality** – queries that touch the same key hit one shard, preserving ACID semantics without cross‑node coordination.
3. **Parallelism** – every shard can run on a separate machine or process, so total throughput scales roughly linearly with the number of shards.

**Deep principle**

Sharding is an *instance of load‑balanced hashing*, a special case of *consistent hashing* when the key space is fixed.  
It trades a small amount of extra metadata (the routing table) for asymptotically optimal read/write latency: O(1) per shard instead of O(n).

**Non‑obvious insight**

Most people view sharding as merely “split the data.” The subtlety lies in **how we decide the partition function**.  
If you hash the *primary key* (the most common case), you implicitly assume that keys are already uniformly distributed.  
In practice, many workloads generate keys sequentially or with locality (e.g., timestamp‑based IDs).  
Hashing such a skewed distribution can create hot shards and degrade performance.  
A principled approach is to first *transform* the key into a uniform space (e.g., by hashing the primary key itself) before applying the shard function, ensuring true load balance even for sequential keys.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
