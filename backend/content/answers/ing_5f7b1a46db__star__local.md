---
qid: ing_5f7b1a46db__star__local
question: What is Data Consistency in Distributed System?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 278
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:22-05:00'
sources: []
---

**Situation:** While leading the migration of our recommendation engine to a multi‑region Kubernetes cluster, we noticed user clicks and purchase events were being duplicated across shards, causing skewed model inputs.

**Task:** I had to ensure strong read/write consistency for event streams so that downstream ML pipelines received an accurate, single source of truth without sacrificing latency or scalability.

**Action:** I introduced a two‑phase commit protocol over Apache Kafka with idempotent producers and exactly‑once semantics. First, I added a unique deduplication key (event_id) to each message and enabled Kafka’s transactional API. Second, I wrapped the consumer logic in an Akka Streams flow that checkpointed offsets to a distributed lock service (etcd), ensuring no two consumers processed the same event concurrently. Finally, I tuned ZooKeeper‑based leader election for partition assignments to guarantee that each shard had a single active writer.

**Result:** The system achieved 99.999% data consistency; duplicate events dropped from ~12% to <0.001%. Model training time improved by 30%, and the recommendation accuracy (AUC) increased from .72 to .78. I learned that balancing distributed consensus with performance requires careful protocol choice and idempotent design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
