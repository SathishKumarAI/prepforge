---
qid: ing_a75cdade91__fp__local
question: 'Explain: Cassandra vs. MongoDB: Read Performance — Cassandra Vs MongoDB
  Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 447
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:01:05-05:00'
sources: []
---

### Why do reads differ between Cassandra and MongoDB?

At the core of a distributed database is *data locality*: how many nodes you must touch to answer a query.  
Both systems store data across a cluster, but they choose different partitioning and caching strategies that change the number of disk seeks per read.

| Feature | Cassandra | MongoDB |
|---------|-----------|--------|
| **Primary key model** | Partition key → single node; clustering columns → sorted on‑disk. | Document key → sharded by hashed value; secondary indexes use B‑trees. |
| **Read path** | One or two *read requests* to the responsible replica(s). The data is already in a page‑aligned, sorted format (LSM tree). | Query may hit a primary shard and then any replica set nodes that have the document. Secondary index lookups add an extra hop. |
| **Caching** | Built‑in *commit log* + per‑node LRU cache; reads are served from memory if recent. | WiredTiger’s block cache is shared across shards; each query incurs a page fetch even for hot data unless it hits the cache. |

Because Cassandra places all rows of a partition on one node and keeps them sorted, a read that matches the partition key requires **only a single disk seek** (or a cached page). MongoDB, by contrast, must first locate the shard, then possibly traverse an index B‑tree, and finally fetch the document—often from a different node. This extra hop is why Cassandra typically shows lower latency for *wide‑column* workloads.

#### Non‑obvious insight  
Cassandra’s LSM tree writes data in append‑only runs; reads benefit because *merge operations are backgrounded*. MongoDB’s B‑tree updates can cause page splits that, while invisible to the user, increase read fragmentation. Thus, even when both systems appear “write‑optimized,” Cassandra’s architecture inherently gives it a head start on reads for partition‑key queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
