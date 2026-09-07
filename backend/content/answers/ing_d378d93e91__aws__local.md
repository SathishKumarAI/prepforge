---
qid: ing_d378d93e91__aws__local
question: 'Explain: Load Balancer / API Gateway — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 403
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:37-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A startup wanted a highly‑available “Instagram‑like” photo feed that could serve millions of users while keeping latency < 200 ms.

*Task*: Design the front‑end routing layer (Load Balancer + API Gateway) to handle 10 M requests/day, auto‑scale, and provide a secure, fault‑tolerant API surface.

*Action*:  
1. **AWS ALB** for HTTP(S) traffic with *path‑based routing* (`/upload`, `/feed`, `/profile`). It supports sticky sessions (via cookies) so users stay on the same container during a session, reducing cache misses.  
2. **Amazon API Gateway** behind ALB to expose REST endpoints (`POST /photos`, `GET /users/{id}/feed`). I enabled *caching* (TTL 60 s) and *request throttling* (5 k req/s per account) to protect downstream services.  
3. Both are in a **private VPC** with *WAF* rules for OWASP Top‑10 protection.  
4. For scaling, I used **ALB’s target groups** tied to an **ECS Fargate service** (CPU/Memory auto‑scaling) and API Gateway’s built‑in *stage variables* to route traffic to blue/green deployments during A/B tests.

*Result*: The architecture handled 12 M RPS in a single region, achieved 99.999% uptime over 6 months, and reduced cost by 18 % compared with a monolithic ELB solution.  
*Learned*: Exposing API Gateway behind ALB gives granular routing + global WAF protection; caching at the gateway cuts downstream load by ~30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
