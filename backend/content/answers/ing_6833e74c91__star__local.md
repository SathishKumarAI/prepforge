---
qid: ing_6833e74c91__star__local
question: 'Explain: Summary — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:50-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a real‑time data pipeline for an e‑commerce recommendation engine that relied on user interaction logs. The existing batch ingestion ran nightly and caused the model to lag by 12 hours, hurting personalization accuracy.

**Task:**  
Design a Change Data Capture (CDC) system to stream transactional changes from our PostgreSQL catalog and MySQL clickstream tables into a Kafka cluster, ensuring low latency, fault tolerance, and minimal impact on source databases.

**Action:**  
I chose Debezium as the CDC connector because of its native support for both databases and ability to emit JSON change events. I configured it with logical decoding slots in PostgreSQL and binlog reading in MySQL, then routed the events through Kafka topics partitioned by user ID to preserve order. To handle schema evolution, I implemented Confluent Schema Registry and added a transformation layer that normalizes timestamps into ISO‑8601 UTC. For downstream consumption, I built a Spark Structured Streaming job that aggregates per‑user activity in 5‑second windows and feeds the result to an ML inference service hosted on Kubernetes. I also set up Prometheus alerts for lag > 2 seconds and used Kafka’s MirrorMaker for cross‑region redundancy.

**Result:**  
The new CDC pipeline reduced data latency from 12 hours to < 10 seconds, increasing recommendation click‑through rate by 18 % within the first month. I learned how to balance throughput with consistency using partitioning strategies and the importance of monitoring lag metrics in a production CDC setup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
