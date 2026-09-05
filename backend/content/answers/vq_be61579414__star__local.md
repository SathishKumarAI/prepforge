---
qid: vq_be61579414__star__local
question: How to check the file size in Hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 363
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:09-05:00'
sources: []
---

**Situation:**  
During a quarterly data pipeline audit for our retail analytics platform, I discovered that one of the Hive tables was unexpectedly bloated—our daily sales fact table had grown to 12 GB overnight instead of the usual 3–4 GB, threatening to exceed our HDFS capacity and slow down downstream ETL jobs.

**Task:**  
I needed to identify which source files were contributing most to the size spike, quantify their impact, and recommend immediate corrective actions without disrupting ongoing batch processes.

**Action:**  
First, I used `hdfs dfs -du -s -h /user/hive/warehouse/sales_fact` to get a high‑level summary of directory sizes. Then I drilled down with `hdfs dfs -du -h /user/hive/warehouse/sales_fact/* | sort -nrk1` to list individual file sizes in descending order, revealing that a handful of 400 GB Parquet files were left from an aborted ingestion job. I cross‑checked the block reports via `hdfs fsck /user/hive/warehouse/sales_fact -files -blocks -locations` to confirm replication and locate corrupted blocks. Finally, I scripted a Hive UDF to delete orphaned files older than 7 days and scheduled a MapReduce job to compact the remaining Parquet files into smaller, evenly sized splits.

**Result:**  
The cleanup reduced the table size from 12 GB to 4 GB within two hours, restoring normal HDFS utilization. The audit also uncovered that our ingestion pipeline lacked proper rollback logic; I added transactional checks and automatic file deletion on failure. This prevented future bloating incidents and improved overall data reliability by 30%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
