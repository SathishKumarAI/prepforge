---
qid: ing_d22580b63a__aws__local
question: 'Explain: Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 438
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:53-05:00'
sources: []
---

**Situation / Task**  
At my previous company we had a real‑time recommendation engine that ingested 3 M events per hour from mobile devices. The downstream ML model could only handle “high‑value” events, so we needed an on‑the‑fly filtering layer to drop the 70 % noise without adding latency.

**Action**  
I designed a serverless Pub/Sub pipeline anchored in **Amazon Kinesis Data Streams** for ingestion, with **AWS Lambda** functions acting as lightweight filters. Each record is evaluated against a DynamoDB lookup table of “eligible” user IDs and event types (≈20 k entries). If the event passes, it’s published to an SNS topic that fans out to two downstream services:  
1. A SageMaker batch transform job for feature enrichment.  
2. An SQS queue feeding a Lambda‑driven ML inference microservice.  

I introduced **CloudWatch Metrics** and **X-Ray tracing** to monitor filter hit/miss ratios, latency (target < 10 ms), and cost per event (~$0.00002). The system automatically scales with Kinesis shards; we added a second shard after 8 M events/hour spikes, keeping throughput > 99.9 % SLA.

**Result**  
Filter accuracy improved to **92 % precision**, reducing downstream compute load by **45 %** and cutting inference cost from $1.20k/month to $0.65k/month. Latency dropped from 120 ms to 8 ms, enabling real‑time personalization.  

**Reflection**  
This exercise taught me that *Ownership* means iterating on the entire stack, while *Dive Deep* requires profiling every microsecond of data flow. I’ll bring that mindset to any ML pipeline you’re building.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
