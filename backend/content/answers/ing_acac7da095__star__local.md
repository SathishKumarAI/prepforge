---
qid: ing_acac7da095__star__local
question: 'Explain: Ingest: — Data Pipelines Overview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 355
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:46-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the fraud‑detection model was lagging because our training set only included yesterday’s transactions. The engineering team needed a reliable way to ingest millions of daily logs from Kafka, transform them, and feed them into S3 for downstream ML pipelines.

**Task:**  
Design an end‑to‑end ingestion pipeline that could handle 2 TB/day, maintain schema evolution, and guarantee data freshness within 30 minutes while keeping costs under $5k/month.

**Action:**  
I chose Apache NiFi for orchestrating real‑time streams, coupled with AWS Glue for ETL. I set up NiFi processors to consume Kafka topics, apply Avro schemas, and write partitioned Parquet files into S3 using the “S3 Put Object” controller service. For schema evolution, I enabled Glue’s schema registry and used Spark jobs on EMR to validate and enrich data with customer metadata. To reduce costs, I scheduled nightly compaction jobs that merged small files into larger ones and set lifecycle policies to transition older partitions to Glacier.

**Result:**  
The new pipeline processed 2.3 TB/day with a 20‑minute latency, reducing model retraining time from days to hours. Storage costs dropped to $3.8k/month, and we saw a 15% improvement in fraud‑detection accuracy due to richer, fresher training data. I learned the importance of balancing real‑time ingestion speed with cost‑effective storage and the value of schema governance in large‑scale ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
