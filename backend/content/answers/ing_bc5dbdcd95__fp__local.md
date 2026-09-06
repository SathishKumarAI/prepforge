---
qid: ing_bc5dbdcd95__fp__local
question: What is a shard? — How many shards should I have in my Elasticsearch cluster?
  | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 397
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:44:19-05:00'
sources: []
---

**Shards in Elasticsearch**

At its core, an index is a logical namespace that stores documents.  
Because data can grow beyond what a single node’s memory or CPU can handle, Elasticsearch splits each index into *shards*—small, independently searchable partitions that can be stored on any node.

Why this works:  

1. **Parallelism & Scale** – Each shard is an isolated Lucene index; queries run in parallel across shards, so throughput grows linearly with the number of active shards.
2. **Fault‑Tolerance** – Replicas are simple copies of a primary shard. If a node dies, another node can serve the replica without data loss.
3. **Resource Isolation** – A single heavy shard won’t monopolize RAM or CPU; each node’s heap is shared only among its local shards.

**How many shards?**

There is no one‑size‑fits‑all answer. The guiding principle is *“one shard per 50 GB of data on average, but not more than ~30 shards per node”*.  
- **Too few**: you lose parallelism; a single shard becomes a bottleneck.  
- **Too many**: each shard incurs overhead (thread pools, file handles) and increases recovery time.

A practical rule: estimate the total data size, divide by 50 GB to get an initial primary count, then spread those shards evenly across nodes while keeping ≤30 per node.  

**Non‑obvious insight:**  
Shards are *not* just a storage trick; they also act as a *capacity planning unit*. Because each shard consumes a fixed amount of heap and CPU, you can predict cluster headroom by counting shards rather than raw data size. This turns the abstract “how many documents” question into concrete resource budgeting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
