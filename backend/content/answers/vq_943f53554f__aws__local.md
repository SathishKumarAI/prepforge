---
qid: vq_943f53554f__aws__local
question: what is static and dynamic partition in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 415
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:05-05:00'
sources: []
---

**Situation (S)** – In my last role I was tasked to redesign the nightly ETL pipeline for a retail analytics platform that processed **1 TB of log data daily**. The existing Hive tables were monolithic and caused query slowness during peak reporting windows.

**Task (T)** – My goal was to reduce query latency by 70% while keeping costs below $2K/month.

**Action (A)** – I introduced *static* and *dynamic* partitioning in Hive:

- **Static partitions**: Fixed keys (e.g., `country='US'`, `date='2024‑08‑01'`) added at table creation. They let the optimizer prune data early, eliminating unnecessary scans.
- **Dynamic partitions**: Derived from incoming records (`INSERT … PARTITION (country, date) SELECT …`). I used a two-step job: first a lightweight mapper to generate partition values, then a reducer that writes each partition separately.

I leveraged AWS Glue for orchestration, S3 for storage, and EMR with Hive on Spark. By adding **2 static partitions** per day and enabling **dynamic partitioning** for new regions, the catalog metadata shrank from 10 k to 1 k entries. Query performance improved from **12 s → 3 s** (average SELECT * FROM sales WHERE country='US' AND date='2024‑08‑01').

**Result (R)** – The pipeline now runs in under 5 min, saving $1.2K/month and freeing the BI team to focus on new dashboards.  

> **Leadership Principles:**  
> - *Customer Obsession* – Delivered faster insights for analysts.  
> - *Ownership & Dive Deep* – Investigated partitioning mechanics, tuned Hive configs, and validated performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
