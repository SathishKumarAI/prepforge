---
qid: ing_6f96f247e0__aws__local
question: 'Explain: History - Built by Facebook — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 410
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:28-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my time at Meta, I led the migration of our recommendation pipeline from a monolithic Spark job to an end‑to‑end ML platform built on **Apache Cassandra**. The goal was to reduce latency for real‑time personalization while scaling to 10 B+ user interactions per day.

*Situation:* Our legacy system struggled with 5–7 s inference latency and could not handle sudden traffic spikes during product launches.  
*Task:* Design a distributed, low‑latency data store that supports millions of concurrent read/write ops for feature vectors.  
*Action:* I championed the adoption of **Cassandra** because its tunable consistency (QUORUM) and horizontal scalability matched our throughput needs. I defined a keyspace with composite partition keys (user_id + timestamp) to enable efficient time‑series queries, and used secondary indexes sparingly for feature flags. The ingestion layer was built on **Kafka + Spark Structured Streaming**, writing batches of 1 MB records per second into Cassandra via the DataStax Java driver. For serving, we exposed a lightweight gRPC API backed by a read‑optimized node pool, automatically scaling with CloudWatch metrics.  
*Result:* Latency dropped from 6.3 s to **<200 ms** for 99th percentile requests; throughput grew from 2 kpps to 15 kpps without code changes. Operational costs fell by 35 % because we eliminated the Spark cluster and leveraged managed Cassandra (Amazon Keyspaces).  

*Leadership Principles:*  
- **Customer Obsession:** Delivered faster, more reliable personalization for millions of users.  
- **Ownership & Dive Deep:** Took full responsibility for design, implementation, and continuous tuning, diving into query plans and write amplification metrics to optimize performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
