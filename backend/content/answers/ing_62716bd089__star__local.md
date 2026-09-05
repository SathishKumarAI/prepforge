---
qid: ing_62716bd089__star__local
question: 'Explain: Writing data that PySpark can read efficiently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 317
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:57-05:00'
sources: []
---

**Situation**  
In a recent retail analytics project we had to process 2 TB of daily click‑stream logs stored in S3 for a recommendation engine. The raw data was in semi‑structured JSON, and reading it directly with PySpark was slowness—each job took over an hour.

**Task**  
I needed to redesign the ingestion pipeline so that Spark could read the data in under 10 minutes while preserving schema accuracy and enabling incremental updates.

**Action**  
First I flattened the nested JSON into a canonical table, then used Apache Parquet as the storage format. I added partitioning on `date` and bucketing on `user_id` to reduce scan size. While writing, I enabled Snappy compression and set the `spark.sql.parquet.compression.codec` to `snappy`. To ensure schema evolution was handled gracefully, I configured Spark’s `mergeSchema` option and used a separate “schema registry” table in Glue. Finally, I scheduled the write jobs via Airflow with retries and added metrics to Datadog.

**Result**  
Read times dropped from 60 minutes to just 8 minutes per job—a 86% reduction—while query latency for downstream ML training fell below 2 seconds. The cost savings on EC2 spot instances were roughly $1,200/month. I learned that thoughtful partitioning and compression are as critical as the code itself when scaling PySpark workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
