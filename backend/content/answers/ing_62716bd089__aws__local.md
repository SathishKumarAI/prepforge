---
qid: ing_62716bd089__aws__local
question: 'Explain: Writing data that PySpark can read efficiently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 426
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:05-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growing fintech, we needed to ingest terabytes of transactional logs into PySpark for fraud detection. The existing CSV dumps were slow (≈ 12 hrs per 100 GB) and error‑prone. My goal: redesign the data pipeline so Spark could read 10× faster while keeping cost < $200/day.

**Action**  
1. **Format & Partitioning** – converted raw JSON to Parquet, added schema evolution support, and partitioned by `event_date` (daily).  
2. **Compression & Columnar Storage** – used Snappy compression; measured 30 % storage savings versus Gzip.  
3. **AWS Glue & S3 Lifecycle** – cataloged tables in Glue, set up lifecycle rules to archive old partitions to Glacier.  
4. **Spark Optimizations** – enabled predicate pushdown, broadcast joins for small dimension tables, and increased `spark.sql.shuffle.partitions` based on cluster size.  

These changes leveraged **Amazon S3**, **AWS Glue**, **EMR (Spark)**, and **Lake Formation** for fine‑grained IAM.

**Result**  
- Read latency dropped from 12 hrs to 45 min per 100 GB.  
- Cost decreased by 35 % due to smaller storage footprint.  
- Model training time reduced from 6 hrs to 30 min, enabling daily fraud score updates.

**Learning & Ownership**  
I owned the end‑to‑end migration, validated each step with unit tests, and documented trade‑offs (e.g., Parquet vs ORC). I also set up monitoring dashboards in CloudWatch for read throughput and error rates. This reinforced **Ownership**, **Dive Deep**, and **Deliver Results**—key bar‑raiser criteria at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
