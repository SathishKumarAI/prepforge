---
qid: ing_53389beb0b__aws__local
question: 'Explain: Core APIs — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 375
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:57-05:00'
sources: []
---

**Situation** – At my last role I was asked to build a global URL‑shortening service that could serve > 10 M requests/day with < 50 ms latency.  
**Task** – Design the core APIs (create, redirect) and ensure cost efficiency while meeting SLAs.

**Action** –  
1. **API Gateway + Lambda** for request routing; *serverless* gives instant scalability & pay‑per‑invoke pricing.  
2. **DynamoDB** stores `{shortId → longUrl}` with a global secondary index on `createdAt` for analytics. Provisioned capacity is auto‑scaled (10 k RCU/WCU) to keep latency < 30 ms.  
3. **CloudFront** caches redirects; edge TTL = 1 h, reducing DynamoDB read traffic by ~70 %.  
4. **SQS + Lambda** batch writes for analytics and monitoring, keeping the write path lightweight.  
5. **SNS/SQS** for throttling and dead‑letter handling – ensures reliability under burst traffic.  

**Result** – Deployed in 2 weeks; handled 12 M req/day with 99.999% availability, cost <$500/month vs $3k on a traditional EC2 stack.  
**Learnings** – Leveraged *Ownership* by iterating on metrics (latency, error rate) and *Dive Deep* into DynamoDB hot‑partition patterns; failure in initial tests taught me to add TTLs to prevent stale keys.

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
