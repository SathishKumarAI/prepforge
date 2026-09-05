---
qid: ing_df358b0714__star__local
question: 'Explain: Storage systems overview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 387
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:54:56-05:00'
sources: []
---

**Situation**  
In my last role I was leading a fraud‑detection project that needed to ingest ~10 TB of transaction logs per week from multiple banking partners. The existing on‑prem SQL cluster couldn’t scale and the latency for model training exceeded our SLA.

**Task**  
I had to design a new storage architecture that could handle high throughput, support iterative ML experiments, and keep costs under $200k/yr while ensuring compliance with GDPR.

**Action**  
I evaluated several options: an on‑prem distributed file system (HDFS), cloud object storage (AWS S3), and a hybrid approach using Delta Lake on top of S3 for ACID transactions. I chose Delta Lake because it gives us schema evolution, time travel for experiment reproducibility, and integrates natively with Spark MLlib. We set up an autoscaling EMR cluster that pulls data from Kafka streams into S3, converts raw JSON to Parquet via Glue jobs, and writes back to Delta tables. For cold storage we tiered older logs to Glacier using lifecycle rules, cutting egress costs by 35%. I also implemented fine‑grained IAM policies and automated encryption at rest.

**Result**  
The new pipeline reduced data ingestion latency from 12 hrs to under 30 min, enabling daily retraining of our models. Storage costs dropped 28% YoY, and we achieved a 15% improvement in fraud detection accuracy due to faster experimentation cycles. I learned that the right storage choice hinges on balancing throughput, cost, and data governance needs—Delta Lake turned out to be the sweet spot for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
