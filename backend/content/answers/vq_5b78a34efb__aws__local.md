---
qid: vq_5b78a34efb__aws__local
question: How to combine dataframes in Pandas?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 428
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:52-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** In a recent data‑engineering sprint for the Ad‑Analytics platform I had to merge ~30 M rows of click logs with ~2 M rows of user profiles. The goal was to generate a daily cohort report that fed into the recommendation engine, and we were on a tight 48‑hour deadline.  
> **Task:** Build a scalable, fault‑tolerant pipeline that combined the two dataframes while keeping memory usage below 4 GB per node.  
> **Action:**  
> * Used **`pd.merge()`** with `how='inner'`, keying on `user_id`.  
> * To avoid OOM I streamed each dataframe from S3 using **AWS Glue**’s dynamic frames, converting to Spark DataFrames and performing the join in **PySpark** (`spark.join`). This leveraged distributed memory.  
> * Configured the job as a **Glue ETL job** on an **Apache Spark 3.x cluster** (2 worker nodes, 8 vCPU each).  
> * Employed **partitioning by `date`** and **broadcast join** for the smaller user profile table to reduce shuffle.  
> * Wrote results back to S3 in Parquet with gzip compression, enabling cost‑efficient storage (~$0.05/GB) and fast downstream reads.  
> **Result:** The job completed in 1 h 45 min—30 % faster than the previous batch process—and produced a clean, ready‑to‑use dataframe that reduced recommendation latency by 15 %. Post‑mortem revealed that using Spark over Pandas prevented memory spikes and improved scalability.  
> **Leadership Principles:** *Ownership* (I took full responsibility for end‑to‑end performance), *Dive Deep* (analyzed resource metrics, tuned partitioning, chose broadcast join).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
