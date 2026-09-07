---
qid: ing_3714ba6b03__aws__local
question: 'Explain: Live Commenting API Design — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 473
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:09-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the design of a *Live Commenting API* for a streaming platform that reached 4 M concurrent viewers during peak events. The goal was to deliver sub‑200 ms comment latency, support 10k comments per second, and keep costs below $5K/month while ensuring no data loss.

**Action – Architecture & AWS Services**  
1. **API Gateway + Lambda (Authorizer)** – Front‑end calls hit API Gateway; a Cognito authorizer validates JWTs.  
2. **Amazon Kinesis Data Streams** – Each comment is published to a shard per channel; this guarantees ordering and scales horizontally (up to 100 k records/s).  
3. **Lambda + DynamoDB Streams** – A consumer Lambda writes to a *Comments* table (partition key: `channel#timestamp`) and triggers a DynamoDB Stream to a *RealTimeFeed* table for instant reads.  
4. **Amazon ElastiCache‑Redis** – Acts as a hot cache for the latest 5 k comments per channel, reducing read latency below 50 ms.  
5. **S3 + Glacier** – Historical comments are archived nightly; lifecycle rules move to Glacier after 90 days.

**Result**  
- Latency: 180 ± 30 ms average comment delivery during a 2‑hour match.  
- Throughput: Sustained 12 k comments/s with zero dropped events.  
- Cost: $4,200/month (70% lower than the previous on‑prem solution).  

**Ownership & Dive Deep**  
I wrote the Lambda retry logic to guarantee at‑least‑once delivery and ran chaos tests that exposed a race condition in the cache invalidation; I fixed it by switching to Redis *WATCH/MULTI* transactions. The bar‑raiser will notice my end‑to‑end ownership, deep analysis of failure modes, and quantitative impact on latency & cost.

**Leadership Principles**  
- **Customer Obsession** – Delivered a real‑time experience that kept viewers engaged for 35% longer.  
- **Ownership** – Took full responsibility from design through ops, including post‑incident root cause analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
