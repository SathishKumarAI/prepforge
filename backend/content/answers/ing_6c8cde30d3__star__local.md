---
qid: ing_6c8cde30d3__star__local
question: 'Explain: Handling Large Files — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 332
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:02-05:00'
sources: []
---

**Situation** – While leading a recommendation engine for an e‑commerce platform, we had to process nightly user click logs that grew from 50 GB to over 300 GB within three months. The existing single‑node Spark job would time out and the cluster costs doubled.

**Task** – Design a scalable ingestion pipeline that could reliably handle >500 GB files, keep latency under 4 hours, and reduce on‑premises storage footprint by at least 30%.

**Action** – I architected a two‑stage solution: first, split each large log into 1 GB chunks using an S3 multipart upload script (Python + Boto3), then stream those chunks to a Kafka topic with a producer that compresses data on the fly. On the consumer side, we deployed a Kubernetes‑managed Flink cluster that reads from Kafka, performs incremental feature extraction, and writes Parquet partitions back to S3 using AWS Glue for schema evolution. We also introduced a lightweight Bloom filter per partition to skip duplicate rows and implemented a checkpointing strategy with Apache Ranger for compliance.

**Result** – The pipeline processed 520 GB files in under 2 hours, cutting nightly costs by 32% and eliminating the single‑point failure of the old Spark job. I learned that proactive data sharding + streaming, coupled with immutable storage and schema‑aware processing, is key to scaling ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
