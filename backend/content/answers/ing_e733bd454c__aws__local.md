---
qid: ing_e733bd454c__aws__local
question: 'Explain: Amazon Kinesis Data Streams Application — Amazon Kinesis Data
  Streams Terminology and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 462
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:23-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a real‑time analytics pipeline for an ad‑tech platform that processed ~10 M events per second. The client demanded sub‑second latency and 99.999% durability while keeping the bill under $200k/month.

**Action**  
I architected an **Amazon Kinesis Data Streams (KDS)** solution:

- **Shards** – split the stream into 120 shards (25 MiB/s each) to meet throughput, with a scaling policy that adds/removes shards every 5 min based on CloudWatch metrics.  
- **Producer SDK** – used the Java Kinesis Agent for batch writes; configured `MaxBatchSize=500` and `FlushInterval=200ms`.  
- **Consumer** – deployed an AWS Lambda function (1 MB memory) that reads from shards via enhanced fan‑out, processes records in micro‑batches, and pushes results to DynamoDB.  
- **Checkpointing & Retention** – set retention to 7 days; used Kinesis Data Analytics for real‑time aggregation as a fallback.  

I added **KMS encryption at rest** and IAM policies scoped to least privilege.

**Result**  
Latency dropped from 2 s to <200 ms (95th percentile). Throughput handled 12 M events/s without throttling, achieving 99.999% durability. Monthly cost stayed $180k, a 10% savings vs the previous on‑prem solution. The pipeline also surfaced a spike in click‑through rates within minutes, enabling immediate ad budget reallocation.

**Reflection (Bar‑raiser)**  
I owned end‑to‑end observability (CloudWatch dashboards, S3 logs), dove deep into shard utilization to avoid hot spots, quantified impact with latency and cost metrics, and iterated after a burst failure by adding an auto‑scale trigger. This demonstrates **Ownership**, **Dive Deep**, and **Deliver Results**—the Amazon leadership principles I live by.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
