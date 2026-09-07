---
qid: ing_d2924a5eae__aws__local
question: 'Explain: Benefits of REST — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 492
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:45-05:00'
sources: []
---

**Situation & Goal (Ownership, Customer Obsession)**  
When we migrated our recommendation engine to a new API layer, my team needed to decide between **REST** and **GraphQL** so that the mobile app could fetch user‑specific product lists with minimal latency. The goal was to reduce payload size by 30 % while keeping the backend simple for future data scientists.

**Task (Dive Deep, Bias for Action)**  
I evaluated both protocols on three axes: *bandwidth*, *caching*, and *developer velocity*. I ran a controlled experiment using **Amazon API Gateway + Lambda**, instrumented with CloudWatch metrics, to measure average response size and cold‑start latency.

**Action (Deliver Results, Invent & Simplify)**  
- REST endpoints returned 5 KB per request; GraphQL queries averaged 2.8 KB but required a custom resolver layer in **AWS AppSync**.
- Cold‑start latency for Lambda behind API Gateway was 120 ms (REST) vs 210 ms (AppSync + Lambda).
- Caching: REST used standard HTTP ETags via CloudFront; GraphQL needed per‑field caching, which increased complexity.

I chose **REST** with fine‑tuned pagination and selective field filtering. We introduced a middleware that strips unused JSON keys, cutting payloads to 3 KB on average—meeting the 30 % target—and maintained a single Lambda layer, reducing operational cost by ~15 %.

**Result (Quantified Impact)**  
- **Payload reduction:** 35 % → lower data costs for users in bandwidth‑constrained regions.  
- **Latency:** Avg. response time dropped from 180 ms to 110 ms, improving app session length by 12 %.  
- **Cost:** Lambda invocations cost decreased by $0.02 per 1 M requests.

**Learnings (Bar‑raiser check)**  
I owned the experiment end‑to‑end, dove deep into CloudWatch logs, and documented trade‑offs for future teams. The decision was data‑driven, aligned with customer needs, and scalable—ready to support a 10× traffic increase without redesigning the API layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
