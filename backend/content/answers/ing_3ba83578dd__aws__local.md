---
qid: ing_3ba83578dd__aws__local
question: 'Explain: So let''s say if there was a — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 495
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:17-05:00'
sources: []
---

**Situation (S)** – I led the redesign of our *Location‑Based Recommendation* service for a global travel app that serves ~50 M daily active users. The legacy monolith hit 5 % latency spikes during peak traffic and couldn’t scale beyond 200 k requests/sec.

**Task (T)** – Build a highly available, low‑latency system that can ingest real‑time GPS streams, compute nearest points of interest (POIs), and serve personalized recommendations with <50 ms response time at scale.

**Action (A)** –  
1. **Architecture**:  
   * Ingest GPS data via **Amazon Kinesis Data Streams** → buffer → **AWS Lambda** for lightweight enrichment.  
   * Persist enriched events in **DynamoDB Global Tables** (partitioned by region) for fast read/write and multi‑AZ replication.  
   * Precompute nearest POIs with a scheduled **EMR Spark** job that writes distance matrices to **S3**; serve them via **Amazon CloudFront** + **API Gateway** endpoints.  
   * Use **Amazon SageMaker Endpoint** (Auto Scaling) for the recommendation model, wrapped in **Lambda@Edge** to keep latency <30 ms.  
2. **Scalability/Availability**: Auto‑scaling groups on Lambda and SageMaker ensure 99.999% uptime; DynamoDB’s provisioned throughput + auto‑scaling handles burst traffic.  
3. **Cost**: Shifted from a $200k/month EC2 fleet to < $80k/month by leveraging serverless and spot instances for batch jobs.

**Result (R)** – Latency dropped from 120 ms to 45 ms, throughput increased to 1 M req/sec, and cost decreased by **60 %**. Customer satisfaction scores rose 12 points (NPS).  

> *Leadership Principles*: **Ownership** – drove end‑to‑end solution; **Dive Deep** – analyzed latency bottlenecks; **Deliver Results** – quantifiable performance & cost gains.  
> *Bar‑raiser signals*: clear ownership, deep technical trade‑offs, measurable impact, and post‑mortem learning from the previous monolith failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
