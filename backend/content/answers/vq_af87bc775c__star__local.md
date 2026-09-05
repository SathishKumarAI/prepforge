---
qid: vq_af87bc775c__star__local
question: How to read the parquet file format in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:57-05:00'
sources: []
---

**Situation:**  
At my previous company we had a data lake that stored millions of customer transactions in Parquet for cost‑effective storage and fast analytics. The BI team needed to ingest these files into Spark nightly ETL jobs, but the job kept timing out because the schema was evolving with each new batch.

**Task:**  
I had to build a robust ingestion pipeline that could automatically read any version of the Parquet schema, map it to our canonical data model, and write back cleaned data without manual intervention, all within a 30‑minute window.

**Action:**  
First I used Spark’s `spark.read.parquet` API with the option `mergeSchema=true` so the job would union columns across partitions. Then I wrote a schema‑registry lookup that compared the incoming Parquet schema to our canonical Avro schema, generating a mapping table. Using DataFrame transformations (`selectExpr`, `withColumnRenamed`) I realigned columns and filled missing fields with defaults. To avoid shuffling, I applied `repartition` based on a hash of the customer ID before writing back as a compacted Parquet set. Finally, I scheduled the job with Airflow and added metrics to Spark UI for monitoring.

**Result:**  
The nightly pipeline now completes in 18 minutes on average, handling up to 200 GB per run without failures. We reduced storage costs by 15% through compaction and improved BI query latency by 40%. This experience taught me how to leverage Spark’s schema‑merge feature and dynamic mapping to keep ETL resilient to evolving data sources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
