---
qid: ing_95c71ea2c4__star__local
question: What is Cassandra? — Cassandra Vs MongoDB Comparison | MongoDB
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 351
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:27-05:00'
sources: []
---

**Situation**  
In my last role I led the migration of our recommendation engine from a legacy MySQL cluster to a more scalable NoSQL solution. The data volume had grown to 12 TB and read latency was hitting 200 ms, so we needed a database that could handle high write throughput and horizontal scaling.

**Task**  
I had to evaluate candidate systems—Cassandra, MongoDB, and others—and choose the one that best met our need for linear scalability, tunable consistency, and a wide‑column data model suited to our time‑series click logs.

**Action**  
I set up side‑by‑side benchmarks: using Cassandra’s CQL with a token‑range partitioner and MongoDB’s sharded cluster. I scripted realistic write loads (≈1 M writes/second) and read patterns, measured latency, and profiled GC overhead. Cassandra’s tunable consistency let us lock in *QUORUM* for critical reads while using *ANY* for bulk ingestion. We also leveraged its built‑in anti‑entropy repair to keep replicas consistent without external tooling.

**Result**  
We deployed Cassandra on a 32‑node cluster, achieving 4× write throughput and reducing average read latency from 200 ms to <30 ms. The system scaled linearly as we added nodes, and operational costs dropped by ~25% compared with MongoDB’s sharding overhead. I learned that choosing the right consistency model and understanding data partitioning are key to unlocking NoSQL performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
