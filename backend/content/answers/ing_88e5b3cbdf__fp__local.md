---
qid: ing_88e5b3cbdf__fp__local
question: 'Explain: Range-based sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 445
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:54-05:00'
sources: []
---

**Why we shard at all**

A single database table quickly becomes a bottleneck when the number of rows grows beyond what one machine can store or scan efficiently.  
The fundamental problem is *contention*: every query must contend for CPU, memory and I/O on one node, so latency rises linearly with size.  
If we could split the data into disjoint pieces that live on independent nodes, each query would touch only the relevant piece, eliminating contention and allowing linear scalability.

**Range‑based sharding as a solution**

Pick an attribute \(A\) (e.g., order_id or timestamp).  
Define non‑overlapping intervals \([l_i,r_i)\) such that every row’s key falls into exactly one interval.  
Store each interval on its own shard.  
When a query arrives, the routing layer evaluates \(A\)’s value against the boundaries and forwards the request to the matching shard.

**Why it works**

1. **Deterministic locality** – A single key maps to a unique shard; no coordination is needed during reads.
2. **Load predictability** – If the distribution of \(A\) is known, we can size shards so that each handles roughly equal traffic (load balancing).
3. **Simplified joins** – Range queries naturally stay within one shard; cross‑shard joins become expensive only when required.

**Deeper principle**

Range sharding embodies *divide‑and‑conquer* in a probabilistic setting: by partitioning the key space into disjoint intervals we reduce contention (a resource‑bounded optimization) while preserving data locality, which is the essence of scalable distributed systems.

**Non‑obvious insight**

A shard boundary can be *dynamic*: when one interval’s traffic grows, you split it and redistribute the range. Because ranges are contiguous, redistributing does not require moving every row—only those crossing the new boundary—making rebalancing far cheaper than hash sharding, where any change forces a global reshuffle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
