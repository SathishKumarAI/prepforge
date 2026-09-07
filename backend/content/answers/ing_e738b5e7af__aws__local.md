---
qid: ing_e738b5e7af__aws__local
question: 'Explain: Features of Cassandra — Difference Between Cassandra and MongoDB
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:23-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to migrate a growing analytics pipeline from MongoDB to Cassandra because the write‑throughput had hit ~200 k ops/s and latency spiked to 300 ms. The goal: keep data model simple, preserve real‑time reporting, and cut infra costs by 20 %.

**Action**  
I first mapped key requirements:  
- **Write‑heavy, append‑only time series** – Cassandra’s partitioned row store (wide rows) handles this with constant‑time inserts.  
- **Secondary queries on non‑key attributes** – I designed a *denormalized* secondary index table in Cassandra, whereas MongoDB would need expensive `$lookup` stages.  
- **Horizontal scaling & fault tolerance** – leveraged Cassandra’s tunable consistency (`QUORUM`) and `nodetool repair` to keep 99.9 % availability; in contrast, MongoDB’s sharding requires manual balancer tuning.  

I set up a **Cassandra cluster (12 nodes)** on EC2 with DynamoDB‑style keyspace replication and used **AWS Keyspaces** for managed hosting, reducing operational overhead by 35 %. I also introduced **DataStax Enterprise**’s analytics engine to run Spark jobs directly on the data.

**Result**  
Post‑migration write latency dropped from 300 ms to <50 ms, throughput increased to 1.2 M ops/s, and costs fell by 22 % YoY. The migration was completed ahead of schedule (3 weeks vs 6 planned).  

**Reflection**  
I learned that *Customer Obsession* drives the choice of architecture: Cassandra’s strengths align with real‑time user analytics, while MongoDB’s document model is better for flexible schema needs. This experience reinforced my belief in **Ownership**—owning both design and operational cost—and taught me to *Dive Deep* into consistency trade‑offs before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
