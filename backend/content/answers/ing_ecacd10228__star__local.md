---
qid: ing_ecacd10228__star__local
question: 'Explain: Distribution options to implement sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 313
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:13-05:00'
sources: []
---

**Situation** – In my last role I was building a recommendation engine that served millions of users per day. Our training pipeline had to ingest user interaction logs from three data centers and keep the model latency under 100 ms for real‑time scoring.

**Task** – I needed to shard the feature store so that each node could retrieve only the subset of features relevant to its user base, while keeping consistency across shards during nightly retraining.

**Action** – I evaluated two distribution strategies: hash‑based sharding and range‑partitioning on user ID. Using a consistent hashing ring with virtual nodes in Redis Cluster, we ensured even key distribution and easy rebalancing when adding new workers. For the training phase I implemented a custom partitioner in Apache Spark that routed data to HDFS directories keyed by shard id, then used Parquet column pruning so each executor read only its partition. We also added a lightweight coordination service (etcd) to broadcast schema changes.

**Result** – The sharded architecture cut feature lookup time from 75 ms to 28 ms on average and reduced disk I/O by 60 %. Nightly retraining completed 30 % faster, and we could add nodes with zero downtime. I learned that combining a hash ring for real‑time access with Spark’s partitioning for batch jobs gives the best of both worlds in ML production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
