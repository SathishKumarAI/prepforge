---
qid: ing_cc04a1d5fa__aws__local
question: 'Explain: Authentication and Authorization — What is an API Gateway? - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 493
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:14-05:00'
sources: []
---

**Answer (Amazon style)**  

> **S**ituation: At my previous role I led a team that built a server‑less e‑commerce platform on AWS. The front‑end and mobile apps needed a single entry point for all microservices, while ensuring only authenticated users could access sensitive endpoints.  
> **T**ask: Design an API Gateway that authenticates JWTs from Cognito, authorizes role‑based access, logs traffic, and scales to millions of requests per day.  
> **A**ction: I chose **Amazon API Gateway (REST/HTTP)** + **AWS Lambda Authorizer** for custom logic.  
> 1️⃣ **Authentication** – Integrated with Amazon Cognito User Pools; tokens are validated in the authorizer before routing.  
> 2️⃣ **Authorization** – The authorizer maps JWT claims to IAM policies, enabling fine‑grained access (e.g., `/orders/*` only for `customer` role).  
> 3️⃣ **Scalability & Availability** – API Gateway is fully managed; it auto‑scales and has a built‑in 99.95% SLA. I enabled caching (TTL 300s) to reduce downstream calls, cutting Lambda invocations by ~40%.  
> 4️⃣ **Cost** – With caching and throttling (10k req/s burst, 5k steady), monthly spend stayed under $2k while handling 50M requests/month.  
> 5️⃣ **Observability** – Vended CloudWatch metrics + X-Ray traces for latency analysis; set alerts on >200 ms average latency.

> **R**esult: After rollout, we saw a **55% reduction in API latency** and **30% lower backend costs**, while user‑reported errors dropped from 0.8% to <0.1%.  

---

### Leadership Principles Highlighted
- **Customer Obsession:** Built a gateway that protects user data and delivers fast responses.  
- **Ownership / Dive Deep:** Took full responsibility for security, performance, and cost; iterated on metrics until SLA goals were met.  

*Bar‑raiser focus:* depth of design (service choices & trade‑offs), quantifiable impact, and clear ownership narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
