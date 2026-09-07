---
qid: ing_fa269de565__aws__local
question: 'Explain: VIII. Concurrency — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 412
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:53-05:00'
sources: []
---

**Situation** – At my last role I was tasked with turning a monolithic recommendation engine into a scalable, cloud‑native service that could handle 10 M daily requests without downtime.  
**Task** – The key requirement was to adopt the **12‑Factor App** principles around *Concurrency* (processes, statelessness, and scaling) while keeping costs predictable on AWS.  

**Action** – I re‑architected the ML pipeline into micro‑services:  
1. **Model inference** → containerized Lambda functions behind an Application Load Balancer, auto‑scaling with request latency metrics.  
2. **Feature store** → Amazon SageMaker Feature Store (stateless caching via ElastiCache Redis).  
3. **Job orchestration** → Step Functions to coordinate training and batch scoring, ensuring each step is isolated and repeatable.  

I used **Amazon ECS Fargate** for stateless inference pods, letting the platform manage CPU/GPU allocation; this aligns with *Customer Obsession* (fast responses) and *Ownership* (end‑to‑end reliability). For concurrency control I enabled *AWS AppConfig* to toggle feature flags, guaranteeing zero‑downtime deployments.  

**Result** – Post‑migration we achieved a **30 % reduction in latency** (from 350 ms to 240 ms) and cut infra spend by **25 %** through better resource utilization. Load testing showed the system handled **20× more concurrent users** before hitting saturation, confirming our scalability assumptions.  

*Bar‑raiser focus*: I demonstrated ownership by driving the end‑to‑end refactor, dived deep into Lambda limits to avoid cold starts, quantified impact with latency and cost metrics, and learned from an initial spike in memory usage—prompting a switch to Fargate Spot for non‑critical batch jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
