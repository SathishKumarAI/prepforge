---
qid: ing_803b3beec7__aws__local
question: 'Explain: Mixture-of-Experts (MoE) — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 388
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:19-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at Amazon to prototype a next‑gen recommendation engine that could scale from millions of users to billions of requests while keeping inference latency under 20 ms.

**Action (Technical)**  
We chose a *Mixture‑of‑Experts* (MoE) architecture: each request is routed by a lightweight router to one of **k=32** expert sub‑models.  
- **Model training** – SageMaker Ground Truth for labeled data, followed by distributed training on SageMaker Neo‑optimized inference containers.  
- **Serving** – AWS Lambda + API Gateway for the router, and an ECS cluster with Fargate Spot for the experts, each behind a CloudFront edge cache.  
- **Routing logic** – Redis‑based feature store for real‑time context; we added a “fallback” expert to handle cold‑start traffic.  

**Result**  
We achieved a 45 % reduction in average latency (from 35 ms to 19 ms) and a 30 % cost savings over a monolithic model, while maintaining the same accuracy (+0.3 % lift on NDCG). The system handled 1 M QPS with <99.9 % uptime during a 6‑month production run.

**Learning & Ownership**  
I drove the end‑to‑end pipeline and conducted post‑mortem analyses after two traffic spikes that exposed a router bottleneck; we added auto‑scaling for the Lambda layer, preventing future outages.  

*Leadership Principles highlighted:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
