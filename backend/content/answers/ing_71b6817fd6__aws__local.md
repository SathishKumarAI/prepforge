---
qid: ing_71b6817fd6__aws__local
question: 'Explain: Manage data for AI at scale — IBM DataStax'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:29-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a team that had to ingest **10 TB/day** of sensor data from IoT devices and feed it into an ML pipeline for real‑time anomaly detection. The existing batch ETL was lagging, causing stale predictions and a 15 % drop in customer uptime.

**Action**  
I scoped the problem with *Dive Deep* and *Ownership*. I chose **DataStax Enterprise (Cassandra)** for its horizontal scalability, tunable consistency, and native support for time‑series workloads.  
1. **Schema design**: partitioned by device ID + hour, using composite keys to avoid hotspotting.  
2. **Ingestion pipeline**: built a Kafka Connect sink that writes directly into DataStax, leveraging the *Kafka Connector* for low latency.  
3. **Feature store**: exposed a REST API via AWS AppSync backed by DynamoDB Global Tables for cross‑region reads, ensuring 99.9 % availability.  
4. **Batch extraction**: used Spark on EMR to materialize feature vectors into S3 (Parquet) for offline training, then triggered SageMaker endpoints for inference.

I monitored throughput with DataStax OpsCenter and reduced ingestion latency from 15 min to under 2 s, cutting prediction lag by **80 %**. Cost per GB dropped 30 % thanks to auto‑scaling clusters and spot instances.  

**Result**  
The new architecture delivered near‑real‑time alerts, improving customer uptime from 85 % to **97 %** and driving a 12 % increase in subscription renewals. The project earned the *Customer Obsession* badge at my quarterly review.  

**Bar‑raiser note** – I took full ownership of the end‑to‑end data flow, dove into Cassandra internals to tune performance, quantified impact with clear metrics, and iterated on failure modes (e.g., retry logic for network partitions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
