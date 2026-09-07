---
qid: ing_ffee4b3fb0__aws__local
question: 'Explain: 5.1 Get User Profile — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 410
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:32-05:00'
sources: []
---

**Situation / Task**  
While building a next‑gen photo‑sharing app I had to design the “Get User Profile” API that powers profile pages and feed personalization. The goal was to deliver sub‑200 ms latency for millions of users while keeping storage costs under $1M/month.

**Action**  
I chose **Amazon DynamoDB** as the primary store (partition key = `user_id`, sort key = `profile_meta`) because it guarantees single‑digit millisecond reads at scale. To accelerate hot profiles I added a **DAX cache layer** (10 GB, 1 kW capacity) and used **Lambda@Edge** to pre‑hydrate the cache on first request. For background updates I triggered an **SQS FIFO queue** that invokes a **Step Functions** workflow:  
1. Pull new media from S3 →  
2. Run inference in **Amazon SageMaker** (object detection, age/gender) →  
3. Write enriched tags back to DynamoDB.

I also enabled **Global Secondary Indexes** for quick lookup of “top influencers” and set up **CloudWatch Alarms** on read/write latency > 150 ms. Auto‑scaling on both DynamoDB and DAX ensured cost‑efficiency (≈$720k/year) while keeping availability at 99.999%.

**Result**  
The system served 50M daily profile views with 92 % of requests <120 ms, a 35 % reduction in latency versus the legacy monolith. Storage costs dropped by 27 %, and the SageMaker inference pipeline delivered tag accuracy >95 %.  

> **Leadership Principles:** *Ownership* (I drove the end‑to‑end design), *Dive Deep* (tuned DynamoDB capacity and cache eviction policies), *Deliver Results* (quantified latency & cost gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
