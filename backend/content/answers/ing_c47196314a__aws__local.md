---
qid: ing_c47196314a__aws__local
question: 'Explain: 1.4. Cacheable — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 449
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:02-05:00'
sources: []
---

**Situation (S)**  
I led a project to expose the company’s recommendation engine to third‑party partners via a public REST API. The partners complained that latency was >300 ms and that repeated requests for the same user profile cost us $0.02 per call.

**Task (T)**  
Design an API that is **cacheable**, reduces operational cost, and still delivers fresh data when necessary.

**Action (A)**  
1. **RESTful design** – I defined resources (`/users/{id}/recommendations`) with proper HTTP verbs and status codes.  
2. **Cache‑ability** – Added `ETag` and `Last-Modified` headers; used Amazon API Gateway to enable *Caching* with a 5‑minute TTL.  
3. **Backend** – Deployed the recommendation microservice on ECS Fargate behind an Application Load Balancer, integrated it with DynamoDB (global secondary index for user ID) and an in‑memory cache layer (Amazon ElastiCache Redis).  
4. **Monitoring** – Wrote CloudWatch dashboards that track cache hit ratio, API latency, and cost per request.

**Result (R)**  
- Cache hit ratio rose from 15 % to **92 %**, cutting API latency from 300 ms to <50 ms.  
- Operational cost dropped by **$12k/month** (≈ 30 % of previous spend).  
- Partner satisfaction score improved from 3.2/5 to **4.8/5**.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a faster, cheaper API that partners love.  
- **Ownership & Dive Deep** – Took end‑to‑end ownership and dissected every layer (API, cache, compute) for cost‑effective scaling.  

*Bar‑raiser notes*: I quantified impact, showed deep technical trade‑offs, and learned that even a small TTL tweak can dramatically change the economics of an API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
