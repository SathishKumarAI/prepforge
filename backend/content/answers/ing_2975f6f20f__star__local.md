---
qid: ing_2975f6f20f__star__local
question: 'Explain: Apache HDFS vs Amazon S3 — Hdfsvss3'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 314
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:20-05:00'
sources: []
---

**Situation**  
In my last role I was leading a data‑engineering team that had to move our nightly fraud‑detection model from on‑prem Hadoop to the cloud for better scalability and cost control.

**Task**  
I needed to decide whether to keep using Apache HDFS in EMR or switch to Amazon S3 as the underlying storage, while ensuring minimal downtime and compliance with our data retention policy.

**Action**  
I started by benchmarking read/write throughput: a 200 GB daily ingest of raw transaction logs. On HDFS I hit ~250 MB/s but incurred 15 % higher network traffic costs on EC2. S3 offered ~350 MB/s with a flat storage rate and automatic lifecycle policies. I also evaluated consistency models; for our use case we needed eventual consistency, which S3 provided after the 2020 update, so I rewrote the ETL to tolerate a few seconds of lag. We migrated data using AWS DataSync, monitored latency with CloudWatch, and added S3 Select to reduce shuffle during model training.

**Result**  
The switch cut storage costs by 30 % and reduced ingest time from 45 min to 25 min. The models’ accuracy stayed unchanged (AUC 0.97). I learned that choosing between HDFS and S3 hinges on cost, consistency requirements, and the ability to adapt pipelines to cloud-native services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
