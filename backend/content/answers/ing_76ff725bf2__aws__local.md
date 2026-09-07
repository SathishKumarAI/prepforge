---
qid: ing_76ff725bf2__aws__local
question: Which one should you use? — REST vs GraphQL - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 450
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:19-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that had to expose an ML inference service (image classification) to both mobile and web clients. The product manager asked whether we should build a **REST** API or adopt **GraphQL** for the new endpoint.

**Action**  
- I scoped the requirements: 50 % of traffic from iOS/Android, 30 % from web dashboards, 20 % from third‑party analytics. Each client needed different subsets of fields (confidence score, tags, metadata).  
- I compared REST vs GraphQL on **latency**, **bandwidth** and **developer velocity** using a small prototype in **Amazon API Gateway** + **Lambda** (REST) and **AppSync** (GraphQL).  
- For REST we saw ~2 ms extra round‑trip, but each request was 1.8× larger due to over‑fetching. GraphQL reduced payloads by 35 % and allowed the client to request only needed fields, cutting downstream data transfer cost by ~$0.02 per 10k requests (≈$200/month).  
- I also evaluated **cost of maintenance**: GraphQL required a single resolver layer but introduced schema‑stability risks; REST had clear versioning paths.

**Result**  
We chose **GraphQL via AppSync**, achieving:
- 30 % lower total bytes per request → $250/month savings on S3 transfer and Lambda invocation costs.  
- Faster UI rendering on mobile (average 12 ms faster).  
- Reduced code churn by 40 % because clients could evolve independently.

**Reflection**  
I took full **Ownership**, performed a data‑driven **Dive Deep** into traffic patterns, and applied **Bias for Action** to prototype quickly. The bar‑raiser would note my quantitative impact (cost + latency), clear trade‑off analysis, and the lesson that choosing API style must align with client diversity and operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
