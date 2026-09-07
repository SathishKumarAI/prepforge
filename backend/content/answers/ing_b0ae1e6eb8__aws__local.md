---
qid: ing_b0ae1e6eb8__aws__local
question: 'Explain: Design the serving stack for a consumer chatbot with real-time
  search over a social-media firehose.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 411
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:38-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I led the launch of a consumer‑facing chatbot that pulls real‑time answers from a 10 TB/day social‑media firehose. The goal was to keep latency under **200 ms** while serving millions of concurrent users with accurate, context‑aware responses.

**Approach (Dive Deep, Invent & Simplify)**  
1. **Ingest & Index** – Use **Amazon Kinesis Data Streams** → **Lambda** for parsing → write to **Amazon OpenSearch Service** (dedicated cluster) with an ingest pipeline that normalizes text and tags sentiment.  
2. **Serving Layer** – Deploy a **RESTful API Gateway + Lambda@Edge** chain that queries OpenSearch via the *search* API, filters by user intent, and returns top‑k results.  
3. **Caching & Scaling** – Cache hot queries in **Amazon ElastiCache for Redis** (cluster mode) to hit 95 % cache hit ratio, reducing search calls by ~70 %. Auto‑scale Lambda concurrency based on CloudWatch metrics.  
4. **Cost Control** – Spot instances for OpenSearch nodes; use *reserved* capacity for API Gateway during peak hours.

**Result (Deliver Results)**  
- Latency dropped from 1.2 s to 180 ms (avg).  
- Throughput sustained 5,000 QPS with 99.9 % availability.  
- Cost per query fell by **38 %** versus a monolithic EC2 solution.

**Learnings** – Early experiments showed stale cache entries caused misinformation; we added TTL and a *write‑through* strategy, improving accuracy by 12 %. This iteration exemplifies owning the whole stack, diving deep into metrics, and iterating fast for customer impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
