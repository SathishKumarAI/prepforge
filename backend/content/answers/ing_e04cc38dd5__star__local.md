---
qid: ing_e04cc38dd5__star__local
question: 'Explain: Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 334
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:17-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine for an e‑commerce platform. The model had to ingest user click streams, update embeddings every few seconds, and serve predictions with sub‑50 ms latency.

**Task:**  
I was tasked with designing the data pipeline that could handle millions of events per minute, guarantee ordering for each user session, and allow multiple downstream services (model training, analytics, alerting) to consume the same stream without duplication.

**Action:**  
I chose Apache Kafka as the backbone. I defined a topic hierarchy: `clicks.raw`, `clicks.enriched`, and `recommendations`. Using Kafka Streams I built an enrichment processor that added user profile data and persisted session state in RocksDB, ensuring idempotent processing. For fault tolerance I set up three replicas per partition and enabled exactly‑once semantics for the training pipeline. I also implemented a consumer group for the model updater, which pulled batches every 10 s, retrained embeddings with Spark Structured Streaming, and pushed new weights to a Redis cache.

**Result:**  
The ingestion throughput increased from 200k to 1.2M events per minute while maintaining <30 ms latency for predictions. The training pipeline became fully automated, reducing model drift checks from manual daily jobs to continuous online updates. I learned that Kafka’s partitioning and stream processing capabilities are essential for scalable, real‑time ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
