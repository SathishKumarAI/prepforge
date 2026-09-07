---
qid: ing_6c9503fc8b__aws__local
question: 'Explain: Sharding (Partitioning) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 566
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:12-05:00'
sources: []
---

**Situation & Task**

I was hired by a fintech startup that had built an ML‑based fraud detection pipeline on a single PostgreSQL instance. Within 3 months the volume of transaction logs doubled, and query latency for model inference rose from 120 ms to >1 s—well beyond our SLA of 200 ms. The leadership asked me to scale the data layer without compromising data freshness or consistency.

**Action**

1. **Requirement Clarification & Dive Deep**  
   *Read‑only analytics* (model scoring) needed sub‑second latency, while *write‑heavy ingestion* could tolerate a few seconds of lag. I mapped out read/write patterns and identified that the table’s primary key (`transaction_id`) was highly skewed.

2. **Design – Sharding by Customer Region**  
   - **Horizontal partitioning (sharding)** on `region_code` so each shard contains only ~10 % of rows.  
   - Deployed **Amazon RDS Aurora PostgreSQL** in *Multi‑AZ* for each shard; leveraged **Aurora Serverless v2** to auto‑scale read replicas during peak fraud bursts.  
   - Used **AWS Lambda** + **Kinesis Data Streams** for ingestion, routing records to the appropriate shard via a deterministic hash of `region_code`.  
   - Implemented **Amazon DynamoDB Global Tables** as a cache layer for hot transaction IDs, reducing cross‑shard lookups.

3. **Scalability & Availability**  
   *Horizontal scaling* achieved by adding shards; each Aurora cluster automatically scales up to 64 GB of RAM.  
   *High availability* ensured with Multi‑AZ failover (≤30 s).  
   *Cost trade‑off*: paid for idle capacity on under‑utilized regions, but overall 35 % cheaper than a single monolithic instance due to targeted scaling.

4. **Result**  
   - Latency dropped from 1.2 s → 140 ms (≈ 88 % reduction).  
   - Throughput increased from 5k TPS → 45k TPS (+800 %).  
   - Cost per query fell by ~25 %.  

**Reflection & Learning**

I owned the migration, coordinated with Data Engineering and DevOps, and documented rollback plans. The biggest failure was an initial mis‑shard key that caused data hotspots; after re‑hashing and adding a secondary `customer_id` partition, performance stabilized. This project reinforced my belief in *Ownership* (owning end‑to‑end), *Dive Deep* (profiling the bottleneck), and *Bias for Action* (rolling out incremental shards).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
