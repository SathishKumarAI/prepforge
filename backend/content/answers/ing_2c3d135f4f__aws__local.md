---
qid: ing_2c3d135f4f__aws__local
question: 'Explain: More partitions requires more open file handles'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 381
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:15-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation & Task** – While redesigning a real‑time recommendation pipeline for an e‑commerce platform, the data lake grew from 50 GB to 500 GB daily. The existing Spark job failed with “Too many open files” because each partition opened its own HDFS file handle. I was tasked with scaling the job without increasing cluster cost.

> **Action** –  
> *Ownership & Dive Deep*: I profiled the executor logs, discovered that the number of partitions (~10k) far exceeded the OS limit (1024).  
> *Bias for Action*: I rewrote the ingestion step to coalesce partitions to 2k and switched from HDFS to **Amazon S3** with **S3 Select** for filtering. This reduced open file handles by ~90 % while preserving parallelism.  
> *Invent & Simplify*: Implemented a **Lambda‑driven** pre‑aggregation layer that writes compact Parquet files to S3, eliminating the need for per‑partition file creation during downstream ML training.

> **Result** –  
> • Runtime dropped from 45 min to 12 min (70 % faster).  
> • Cost decreased by $1.2k/month due to fewer EC2 instances and reduced I/O.  
> • The new design scales linearly: with 50 TB data we expect only a 5 % increase in runtime.

> **Bar‑raiser cues** – Demonstrated end‑to‑end ownership, deep technical dive into file‑handle limits, quantified performance & cost gains, and learned that partition strategy is a critical lever for scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
