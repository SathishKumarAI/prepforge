---
qid: ing_6363666926__aws__local
question: 'Explain: Flow: Creating a Short URL — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 437
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:53-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a feature that let users embed *short URLs* in internal communications. The goal was to reduce click‑through latency and provide analytics while keeping the system highly available.

**Action**  
I owned the design from scratch, following **Customer Obsession** (ensure zero downtime for 99.999% of traffic) and **Ownership** (deliver a production‑ready service within two weeks).  

1. **API Gateway + Lambda** – REST endpoint that receives `POST /shorten`.  
2. **DynamoDB** – key/value store (`url_id → long_url`). Partition key = `user_id`, sort key = `url_hash`. 10 GB of data, 99.9% read/write capacity with auto‑scaling.  
3. **S3 + CloudFront** – static analytics page served globally (low cost).  
4. **EventBridge → Step Functions** – triggers a Lambda that validates the long URL and writes a *click* event to Kinesis Data Streams, then aggregates in Athena for reporting.  

I added a **rate limiter** (API Gateway usage plans) to protect against abuse and used **TTL** on DynamoDB items for 30‑day retention. Cost was ~\$0.12 per 1 M requests; latency < 20 ms average.

**Result**  
Within the first month, traffic hit 2 M requests/day with 99.998% uptime, and the click‑through analytics were available in real time. The team adopted this pattern for other micro‑services, cutting development time by 35%.

**Reflection**  
The biggest failure was an initial design that used RDS; it didn’t scale to peak loads. Switching to DynamoDB + Lambda solved the issue, teaching me to validate assumptions early with a small prototype—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
