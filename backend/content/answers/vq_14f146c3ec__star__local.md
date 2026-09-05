---
qid: vq_14f146c3ec__star__local
question: How do you optimize data partitioning in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 422
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:49:08-05:00'
sources: []
---

**Situation:**  
When we migrated our nightly ETL from on‑prem HDFS to Azure Data Lake Storage Gen2 for the retail analytics platform, our query latency spiked from 1 s to over 30 s on Spark jobs that scanned billions of rows.

**Task:**  
Redesign the partitioning scheme so that downstream dashboards could refresh in under 10 s while keeping storage costs flat and avoiding the “small‑file” problem.

**Action:**  
I first profiled the job logs and discovered most scans were filtering by `order_date` and `region`. I rewrote the ingestion pipeline to write Parquet files partitioned on a two‑level hierarchy: `/year=YYYY/month=MM/day=DD/region=REGION`. Using Databricks notebooks, I added an auto‑partitioning script that merged partitions smaller than 200 MB into larger ones and deleted orphaned zero‑byte files. I also enabled Delta Lake’s `OPTIMIZE` command to compact small files after each batch load and set a retention policy of 90 days for older data. Finally, I updated the Spark configuration (`spark.sql.files.maxPartitionBytes=268435456`) to match our target partition size.

**Result:**  
Post‑migration, query latency dropped from 30 s to 8 s (a 73% improvement), and we reduced storage costs by 18 % due to fewer small files. The team also gained confidence that the pipeline could scale with an additional 50 % data growth without hitting performance thresholds. This experience taught me the importance of aligning partition keys with query patterns and continuously monitoring file sizes in a lakehouse environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
