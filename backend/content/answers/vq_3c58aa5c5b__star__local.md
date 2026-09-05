---
qid: vq_3c58aa5c5b__star__local
question: What is bucketing ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 316
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:55:37-05:00'
sources: []
---

**Situation:**  
At my previous company we migrated our nightly ETL pipeline from a single large Hive table into a partitioned data lake on S3. During the migration, query latency on the new tables spiked from under 5 s to over 30 s for typical analytics jobs.

**Task:**  
I was tasked with reducing read time while keeping storage costs low and ensuring that our BI dashboards stayed within SLA.

**Action:**  
I introduced bucketing on the most frequently joined columns—customer_id and transaction_date. Using Spark SQL, I defined a bucket count of 256 based on historical cardinality, which evenly distributed rows across files. I rewrote the ingestion job to write data in Parquet format with `spark.sql.sources.partitionOverwriteMode` set to “dynamic” so that only relevant buckets were rewritten each night. I also updated downstream queries to use `broadcast join` where appropriate and added a small index table for the bucket metadata.

**Result:**  
Query latency dropped from 30 s to 8 s, a 73% improvement, while storage increased by just 12%. The team could now run ad‑hoc reports on the fly, and we saved $1.5k per month in S3 read costs. I learned that careful bucket sizing combined with targeted indexing can dramatically improve performance without bloating storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
