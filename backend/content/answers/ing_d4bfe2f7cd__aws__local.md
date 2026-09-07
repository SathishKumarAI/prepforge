---
qid: ing_d4bfe2f7cd__aws__local
question: 'Explain: Assumptions: — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 446
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:02-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was tasked with designing a global URL‑shortening service for an e‑commerce platform that needed to support > 10M daily clicks while keeping latency < 50 ms and cost <$0.01 per request.

**Action (Ownership, Dive Deep, Bias for Action)**  
1. **Requirements** – One‑to‑one mapping, click analytics, geo‑aware redirection, and A/B testing of landing pages.  
2. **Design** –  
   * **API Gateway + Lambda** for request handling (serverless → instant scaling).  
   * **DynamoDB** with a composite key (`shortId:PK`, `region:SK`) stores destination URL, click count, and feature flags. Partition by region to reduce hot‑partitioning.  
   * **Global Accelerator + Route 53 latency routing** for sub‑second global reach.  
   * **CloudWatch + Kinesis Data Streams** ingest click events → Lambda aggregates into **Redshift** for analytics.  
3. **Scalability/Availability** – DynamoDB auto‑scales; Multi‑AZ; Global Accelerator gives 99.999% uptime.  
4. **Cost** – Serverless compute + pay‑per‑request reduces idle capacity; DynamoDB on-demand pricing keeps spend <$0.02M/month for the projected traffic.

**Result (Deliver Results)**  
- Deployed to production in 3 weeks, handling 12 M clicks/day with < 30 ms avg latency.  
- Cost fell 35% vs. a monolithic EC2 solution; click‑through analytics drove a 7% lift in conversion for targeted campaigns.

**Bar‑raiser notes** – I owned the end‑to‑end pipeline, dove deep into DynamoDB partitioning to avoid bottlenecks, quantified latency and cost reductions, and iterated after a cold‑start spike by adding provisioned concurrency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
