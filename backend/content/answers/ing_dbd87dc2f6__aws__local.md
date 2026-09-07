---
qid: ing_dbd87dc2f6__aws__local
question: 'Explain: Precious Jewellery — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 443
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:46-05:00'
sources: []
---

**Answer – “Precious Jewellery: Designing Data‑Intensive Applications”**

*Situation & Task*:  
I led the redesign of a legacy catalog for an online jewellery retailer that served 12 M users/month. The existing monolith could not handle real‑time inventory updates or personalized recommendations, causing a 3 % conversion drop.

*Action (AWS & Design)*:  
- **Ownership** – I scoped the project, defined SLAs, and secured a $1.2 M budget.  
- **Dive Deep** – Analyzed query logs; latency spikes were due to a single‑table join on 200 GB of unsharded data.  
- Decomposed into micro‑services:  
  - *Catalog Service* (Amazon DynamoDB + DAX) for low‑latency reads.  
  - *Recommendation Engine* (AWS SageMaker + Lambda batch jobs) feeding a pre‑computed feature store in S3.  
  - *Search* (OpenSearch on ECS) with auto‑scaling based on query volume.  
- Employed **EventBridge** to stream inventory changes into Kinesis Data Streams, triggering real‑time cache invalidation via Redis‑Elasticache.  
- Adopted **Infrastructure as Code** (CDK) for reproducible deployments.

*Result*:  
- 70 % reduction in API latency (from 350 ms to 105 ms).  
- Conversion rate increased by 4.8 %, translating to an additional $2.1 M annual revenue.  
- Operational cost dropped 25 % due to serverless Lambda and auto‑scaling.

*Reflection*:  
I learned that early observability (CloudWatch metrics + X-Ray traces) prevented a potential outage during peak sales. This showcases **Bias for Action**—acting fast, measuring impact, and iterating based on data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
