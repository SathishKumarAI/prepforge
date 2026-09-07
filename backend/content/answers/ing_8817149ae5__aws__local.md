---
qid: ing_8817149ae5__aws__local
question: 'Explain: Approach #3: Orchestration — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 419
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:32:01-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the redesign of a data‑ingestion pipeline that fed our recommendation engine. The old monolithic crawler was hitting latency limits and cost‑projections were spiraling.

**Action (Orchestration Approach)**  
I architected a *serverless, event‑driven orchestration* using **Amazon EventBridge**, **Step Functions**, and **Lambda** as orchestrators. Each crawl job is a state machine that:  

1. **EventBridge** receives a “crawl request” with seed URLs.  
2. A **Lambda** worker launches parallel **AWS Glue Crawlers** (or custom Lambda crawlers) to fetch pages, storing raw HTML in **S3** and metadata in **DynamoDB**.  
3. Once all shards finish, another Lambda triggers **Amazon Comprehend** for NLP enrichment.  

This decouples discovery, fetching, and processing, enabling horizontal scaling via SQS queues (10k messages/second) and eliminating idle EC2 instances.

**Result**  
- Crawl latency dropped from 12 min to **<3 min** per seed set.  
- Cost fell 35% by shifting from on‑demand EC2 to pay‑as‑you‑go Lambdas (≈$0.0000167/req).  
- Data freshness improved, boosting recommendation click‑through rate by **12%**.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end flow, *dived deep* into each service’s limits, and quantified impact with real metrics. The failure mode—Lambda timeouts—led me to add a retry policy and X-Ray tracing, turning a risk into an early detection system.  

**Leadership Principles**: **Ownership**, **Dive Deep**, **Customer Obsession**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
