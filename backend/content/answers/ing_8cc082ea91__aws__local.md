---
qid: ing_8cc082ea91__aws__local
question: 'Explain: Best Practices — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 409
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:19-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a migration of our legacy transactional DB to a data‑lake for ML training. The source tables changed 10× per day and we needed near‑real‑time ingestion without locking the OLTP system.

**Action (Design)**  
I built a *Change Data Capture* pipeline that leveraged **DynamoDB Streams** (or RDS MySQL binlog via DMS) → **Amazon Kinesis Data Streams** → **AWS Lambda** for transformation → **Glue Catalog** + **S3** (partitioned by date). For batch‑backfill, I used **AWS DMS** to snapshot the tables.  
- **Scalability:** Kinesis shards auto‑scale; Lambda concurrency is burstable.  
- **Availability:** All services are multi‑AZ; we added a failover Kinesis stream for disaster recovery.  
- **Cost:** Spot‑based Lambda and on‑demand Glue jobs keep spend < $0.15 per GB ingested.

**Result**  
The CDC pipeline reduced data latency from 4 hrs to < 5 min, enabling our ML models to train with 30 % fresher data, which lifted recommendation accuracy by **12 % (MAP@10)** and cut churn by **1.8 %** in the first quarter.

**Learning & Bar‑raiser focus**  
I owned end‑to‑end delivery, diving deep into stream throttling patterns to avoid back‑pressure. The team learned that adding a small “checkpoint” table in DynamoDB mitigated data loss during transient failures—an insight we documented for future CDC projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
