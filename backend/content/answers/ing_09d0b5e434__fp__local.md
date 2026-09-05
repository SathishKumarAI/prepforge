---
qid: ing_09d0b5e434__fp__local
question: 'Explain: Example: — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 526
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:42-05:00'
sources: []
---

**Scaling a database for machine‑learning workloads**

At its core, an ML pipeline needs *fast, consistent access* to large feature tables and model artefacts while ingesting new data at high velocity. The problem is that relational engines are built around ACID guarantees; they serialize writes, lock rows, and grow linearly with table size. To satisfy the *throughput–latency trade‑off*, we must re‑think how the database stores, partitions, and serves data.

1. **Horizontal partitioning (sharding)** – split tables by a deterministic hash of a key (e.g., user id). This distributes load across nodes, allowing parallel reads/writes without lock contention. The underlying principle is *data locality*: each query touches only one shard, so network hops are minimized.

2. **Append‑only storage** – many ML pipelines are write‑heavy and read‑light on historical data. Using a log‑structured merge tree (LSM) or columnar store lets us batch writes into immutable segments; compaction later reorders for reads. This exploits the *amortized cost* of sequential I/O versus random seeks.

3. **Index‑free reads** – feature tables are often scanned entirely during training. A distributed, compressed column store (e.g., Parquet on a block device) yields better cache utilisation and SIMD‑friendly access patterns, leveraging *data‑parallelism* rather than index lookups.

4. **Consistent caching layer** – an in‑memory key–value cache (Redis or Memcached) sits atop the shards to absorb hot reads. The cache is invalidated by a lightweight publish/subscribe mechanism, ensuring eventual consistency while keeping latency sub‑millisecond.

5. **Capacity planning via queuing theory** – model the system as M/M/k queues; set k (number of replicas) such that the probability of queueing exceeds an acceptable threshold. This ties directly to *Little’s Law* and guarantees SLA‑compliant throughput.

**Non‑obvious insight:**  
Most designers treat sharding as a one‑time decision, but *feature drift* often shifts data distributions over time (e.g., new user segments). Dynamically rebalancing shards based on real‑time access patterns—using online learning to predict shard load—ensures that the database adapts automatically rather than requiring manual migration. This blends ML with system design, closing the loop between the problem it solves and its solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
