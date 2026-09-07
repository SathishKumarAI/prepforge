---
qid: vq_b70a0f3cb9__aws__local
question: Processing of big tables in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 460
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:36-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑engineering team at my previous company, we had to migrate an on‑prem Hadoop job that processed *10 TB* of log data per day into the cloud. The legacy Spark cluster was hitting 90 % CPU and 80 % memory utilisation, causing SLA violations for downstream BI reports.

**Action**  
I proposed a serverless Spark solution on **AWS EMR Serverless** combined with **S3** for storage and **Glue Data Catalog** for schema management.  

1. **Partitioning & Bucketing** – I introduced Hive‑style partitioning by `date` and bucketing by `user_id`, reducing shuffle size by ~70 %.  
2. **Dynamic Allocation** – Enabled EMR Serverless dynamic allocation to auto‑scale executors (0–200) based on task queue length, cutting idle cost by 60 %.  
3. **Persisted Intermediate Results** – Used *Delta Lake* on S3 to store cleaned data; this allowed incremental reads and eliminated recomputation of the same transformations.  
4. **Monitoring & Alerting** – Implemented CloudWatch metrics (CPUUtilization, ExecutorMemory) and automated retries for failed stages.

**Result**  
- Runtime dropped from 6 h → 1.2 h per day (~80 % reduction).  
- Cost fell from $120/day to $45/day (≈63 % savings).  
- SLA compliance improved to 99.9 %.  

**Learning & Ownership**  
I owned the full migration, wrote unit tests for every transformation, and conducted post‑mortem reviews with the team. The biggest failure was an initial mis‑partitioning that caused data skew; fixing it taught us to always validate partition statistics before production rollout.

> **Leadership Principles:** *Ownership*, *Dive Deep* (partition stats), *Bias for Action* (serverless switch), and *Deliver Results* (measurable cost & speed gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
