---
qid: vq_af87bc775c__aws__local
question: How to read the parquet file format in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 484
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:09:17-05:00'
sources: []
---

**Situation & Task**  
In my previous role at a fintech company we had to ingest terabytes of log data stored in Parquet on S3 and feed it into downstream analytics pipelines daily. The requirement was to read the files efficiently with Spark, preserve schema evolution, and keep costs under $0.10 per GB processed.

**Action & Design**  
I leveraged **Amazon EMR** (Spark 3.x) and used the built‑in Parquet reader (`spark.read.parquet`). To respect schema evolution I enabled `mergeSchema=true` and set `spark.sql.parquet.mergeSchema.numFilesPerBatch=100`. For performance, I partitioned the data on `event_date` and added a column pruning filter:  
```scala
val df = spark.read
  .option("mergeSchema", "true")
  .parquet(s"s3://bucket/logs/")
  .select($"user_id", $"action", $"timestamp")
  .where($"event_date" >= lit(startDate) && $"event_date" <= lit(endDate))
```
I also set `spark.sql.files.maxPartitionBytes=128MB` and `spark.executor.memory=4g` to balance shuffle size. To reduce S3 read costs, I enabled **S3 Select** by converting the Parquet files to columnar format with `df.write.parquet(s"s3://bucket/processed/", mode="overwrite")` and later used `s3selectParquet`.  

**Result**  
The pipeline processed 5 TB of data in under 30 minutes, achieving a 70% reduction in run time compared to the legacy Hive approach. Cost per job dropped from $120 to $35 (≈ $0.007/GB). The solution also handled new columns without breaking downstream jobs, proving robust schema evolution handling.

**Leadership Principles Reflected**  
- **Customer Obsession:** Delivered faster, cheaper analytics for data scientists.  
- **Ownership & Dive Deep:** I took full responsibility for the end‑to‑end pipeline, tuned low‑level Spark configs, and validated cost impacts with real metrics.  

*Bar‑raiser takeaways:* clear ownership narrative, quantified impact (time & cost), deep technical tuning, and evidence of learning from prior failures (switching from Hive to EMR).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
