---
qid: ing_2b600f9cbc__fp__local
question: 'Explain: Directory-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 458
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:36:48-05:00'
sources: []
---

**Why we shard at all**

In a distributed key‑value store the workload is a *stream of lookups*  
`k → v`. If every node holds the whole table, each request must be
forwarded to a single “master” and then broadcast back – latency blows
up linearly with the number of nodes. The natural remedy is **sharding**:
partition keys so that each node owns a disjoint subset.

**The directory‑based scheme**

Instead of hashing keys into shards, we maintain an explicit *directory*  
`D: shard_id → {range_of_keys}`.  
When a client looks up `k`, it first consults the directory (a small,
replicated table). The directory tells the node responsible for `k`.  
The request then goes directly to that node; no extra routing hop is
needed.

**Why this works**

* **Deterministic routing** – every key maps to exactly one shard, so
  load is predictable.  
* **Fine‑grained control** – administrators can move arbitrary ranges,
  not just whole hash buckets, which lets us rebalance without
  rewriting all keys.  
* **Consistency guarantees** – the directory itself can be a strongly
  consistent service (e.g., Paxos), so every lookup sees the same
  mapping.

**Deep principle**

The directory is an *implicit index* that turns a global search space
into a set of local sub‑spaces, exploiting the fact that most queries
are *point lookups*. By keeping `D` small and highly replicated we
achieve **O(1)** routing latency while preserving the *partitioning*
principle of distributed systems.

**Non‑obvious insight**

Because the directory is a logical partitioner, it can be stored in
memory on each node. This eliminates the need for a central “gateway”
and allows the system to scale horizontally without sacrificing lookup
speed – a trade‑off that hash‑based sharding typically forces you to
accept (more complex routing logic vs. easier rebalancing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
