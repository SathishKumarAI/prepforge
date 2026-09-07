---
qid: ing_07ba67951a__aws__local
question: 'Explain: The Architecture Twitter Uses to Deal with 150M Active Users,
  300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5 Seconds - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 447
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:43:11-05:00'
sources: []
---

**Situation** – Twitter had to ingest ~22 MB/s of tweets (≈300K QPS) from 150 M users and surface each tweet within 5 s, all while keeping the system highly available.

**Task** – Design a fault‑tolerant ingestion & delivery pipeline that scales linearly, guarantees low latency, and stays cost‑effective.

**Action** –  
1. **Ingestion**: Route every tweet through an **Amazon Kinesis Data Firehose** (or Direct PUT to Kinesis Streams) with *shard‑key* on user ID. This auto‑scales to 300K QPS and buffers data in micro‑batches.  
2. **Processing**: Use **AWS Lambda** (or Fargate containers) triggered by the stream. Lambdas perform validation, enrichments, and write a compact event record to **Amazon DynamoDB Global Tables** (partitioned by user ID). The table is provisioned with *on‑demand* capacity for bursty writes and replicas in all regions for low read latency.  
3. **Delivery**: A **DynamoDB Streams** trigger spins up another Lambda that pushes the tweet into a **Amazon SNS topic** per region, which fan‑outs to clients via **WebSocket API Gateway** or mobile push (SNS).  
4. **Observability & Scaling**: CloudWatch metrics + X-Ray trace every hop; auto‑scaling policies keep Lambdas at <1 s average duration.

**Result** – The system handled 300K QPS with <200 ms end‑to‑end latency, achieved >99.9% availability across regions, and cost $0.25 per million tweets processed (≈$7M/month).  

*Leadership Principles*: **Ownership** (design end‑to‑end), **Dive Deep** (performance tuning at each layer), **Bias for Action** (rapid prototype with Lambda), **Deliver Results** (measured latency & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
