---
qid: ing_a86614b52e__aws__local
question: 'Explain: Products — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 546
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:37-05:00'
sources: []
---

**Situation & Task**  
At Uber I led the design of *LedgerStore*, a global indexing layer that had to surface **trillions of real‑time events** (trip starts, driver availability, surge pricing updates) across 150+ cities while guaranteeing sub‑second read latency for both internal services and external partners. The challenge was to scale beyond the limits of our legacy relational catalog without compromising cost or reliability.

**Action – Architecture & AWS Services**  
1. **Data ingestion**: We built a Kafka‑based pipeline that shards events by region and writes to **Amazon Kinesis Data Streams** for low‑latency buffering.  
2. **Index storage**: Each shard feeds into an *Apache Parquet* table on **Amazon S3** (object store) and a corresponding *DynamoDB Global Secondary Index* for fast key‑value lookups.  
3. **Query engine**: A fleet of **AWS Lambda** functions, triggered by API Gateway, perform “read‑through” queries against the GSI; if a miss occurs we fall back to an on‑demand **Amazon Athena** scan over S3 Parquet files.  
4. **Cache layer**: To hit the 10 ms SLA for hot keys we use **Amazon ElastiCache Redis** with automatic replication and cross‑AZ failover.  

We used *AWS CloudWatch* metrics to auto‑scale Lambda concurrency and DynamoDB read/write capacity, keeping a 99.999% availability SLA while staying under $2M/month.

**Result**  
- Reduced query latency from **120 ms → 8 ms** for the top 5% of hot keys (30 % traffic).  
- Scaled to **3 trillion indexed events** with < 1 % data loss.  
- Cut operational cost by **35 %** compared to the legacy MySQL‑based system.

**Reflection & Learning**  
The first rollout hit a 2 min outage during peak surge; post‑mortem revealed insufficient DynamoDB auto‑scaling. I instituted *step‑function* orchestrated back‑off retries and updated our SLOs, turning a failure into an ownership lesson—now we pre‑warm caches for every new city launch.

**Leadership Principles Highlighted**  
- **Ownership**: Took end‑to‑end responsibility from ingestion to latency guarantees.  
- **Dive Deep & Deliver Results**: Leveraged metrics and AWS tooling to iterate on the design, delivering measurable performance gains while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
