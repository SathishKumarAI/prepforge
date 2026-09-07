---
qid: ing_6ef9fb4a20__aws__local
question: 'Explain: Replication — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 511
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was leading a data‑science team that built an ML pipeline for real‑time fraud detection at a fintech startup. Our model ingested ~5 TB/day from a PostgreSQL cluster, but latency spikes during peak hours caused false negatives and revenue loss of ~$2M/month. I had to scale the database while keeping SLA ≤ 200 ms.

**Action (Ownership + Dive Deep)**  
I evaluated seven replication strategies:

| Strategy | AWS Service | Rationale |
|----------|-------------|-----------|
| 1️⃣ **Logical Replication** | RDS for PostgreSQL | Keeps schema consistent; easy to scale read replicas. |
| 2️⃣ **Physical Streaming** | Amazon Aurora Global Database | Low‑latency cross‑region reads, automatic failover. |
| 3️⃣ **Materialized Views** | Redshift Spectrum | Pre‑aggregates fraud metrics for ML inference. |
| 4️⃣ **Change Data Capture (CDC)** | AWS DMS + Kinesis | Streams changes to downstream analytics in real time. |
| 5️⃣ **Sharding** | DynamoDB Partitioning | Horizontal scale; cost‑effective for key‑value access. |
| 6️⃣ **Hybrid Multi‑Model** | Amazon Neptune + RDS | Graph queries for relationship fraud detection. |
| 7️⃣ **Event‑driven Backup** | S3 + Glacier Deep Archive | Immutable audit trail, compliance. |

I prioritized logical replication and Aurora Global to hit latency targets, then added CDC to feed a Kinesis Data Analytics job that fed the ML model.

**Result (Deliver Results)**  
After implementation:  

- Query latency dropped from 1.2 s → 180 ms (95th percentile).  
- Model precision improved by 12% due to fresher data.  
- Monthly revenue loss reduced from $2M → <$50k.  
- Cost increased only 18% ($120k/yr) versus a 70% hit if we had scaled on‑prem.

**Learning (Bias for Action + Learn & Be Curious)**  
I realized that “one size fits all” replication is suboptimal; selecting the right mix per workload saves both performance and money. I documented this in a living architecture playbook now used company‑wide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
