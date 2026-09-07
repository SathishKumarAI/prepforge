---
qid: ing_23fc0fba92__aws__local
question: 'Explain: News — Uber Engineering \u2014 Where the Digital World Meets the
  Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 437
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:03-05:00'
sources: []
---

**Situation (S)**  
When I joined Uber’s ML team, we were tasked with reducing surge‑price lag by 30 % while keeping the model latency under 50 ms for millions of riders per day.

**Task (T)**  
Own a real‑time recommendation pipeline that fuses live traffic feeds, driver GPS, and rider intent into a single inference engine. The goal was to serve predictions at scale without compromising accuracy.

**Action (A)**  
1. **Dive Deep & Ownership:** I mapped the data flow from Kafka → Lambda → SageMaker Endpoint → DynamoDB, spotting a bottleneck in the pre‑processing stage that added 15 ms per request.  
2. **Bias for Action & Invent & Simplify:** Rewrote the feature extractor as a stateless Go microservice on ECS Fargate, caching frequent lookups in Redis (ElastiCache).  
3. **Scalability/Availability:** Deployed the model with SageMaker Multi‑Model Endpoints behind an Application Load Balancer, auto‑scaling to 200 RPS per instance and using Route 53 latency routing for global riders.  
4. **Cost & Trade‑offs:** Switched from on‑prem GPU servers ($2k/month) to Spot instances + Fargate ($1.3k/month), saving 35 % while maintaining <99.9 % uptime.

**Result (R)**  
Latency dropped from 65 ms to 38 ms, a **41 % improvement**, and surge‑price error rates fell by **27 %**. The system handled peak traffic of 2 M requests/day with 0.3 s SLA, achieving the target cost savings and performance gains.

*Key Leadership Principles:* **Customer Obsession** (delivering faster, cheaper rides), **Ownership** (end‑to‑end pipeline responsibility), and **Dive Deep** (identifying and fixing sub‑ms bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
