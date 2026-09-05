---
qid: ing_2471b8dd72__star__local
question: 'Explain: Possible Design Options — Loggingfileaggregation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 344
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:11-05:00'
sources: []
---

**Situation:**  
During the rollout of a real‑time fraud detection model at my previous fintech client, we were collecting event logs from over 150 microservices into a central S3 bucket. The ingestion rate spiked to 1 GB per minute during peak hours, and our downstream feature‑store pipeline was choking on I/O contention.

**Task:**  
I had to design a scalable file aggregation system that could reliably batch logs for the nightly training job without exceeding storage costs or violating GDPR retention limits.

**Action:**  
I evaluated three options: (1) a single‑bucket with time‑based prefixes, (2) partitioned S3 buckets per service using lifecycle policies, and (3) an event‑driven Lambda that writes to a DynamoDB stream and aggregates into Parquet files on EFS. I chose option 3 because it gave us fine‑grained control over file size, enabled parallel compression with Apache Spark, and let us enforce a 30‑day retention policy via TTL. I built the Lambda in Python using boto3, added retry logic with exponential backoff, and instrumented CloudWatch metrics to monitor latency.

**Result:**  
The new aggregation pipeline cut nightly training start time from 90 minutes to 25 minutes, reduced S3 storage costs by 35%, and ensured GDPR compliance through automated deletion. I learned that coupling event streams with stateful storage (EFS) can provide both scalability and auditability for high‑velocity ML data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
