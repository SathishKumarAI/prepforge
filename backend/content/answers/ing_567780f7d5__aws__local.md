---
qid: ing_567780f7d5__aws__local
question: 'Explain: Availability patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 410
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:45-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was asked to design a public‑facing ML inference service that could serve 1 M requests per second with <50 ms latency while keeping cost below $200k/month. The goal was to give developers “instant model scoring” without managing infrastructure.

**Action (Dive Deep + Bias for Action)**  
1. **Front‑end** – API Gateway + Lambda@Edge for request routing, ensuring 99.9% availability and zero cold starts by pre‑warming a pool of containers.  
2. **Model hosting** – SageMaker Neo on GPU‑based EC2 Spot instances (p3.8xlarge) auto‑scaled with CloudWatch metrics; fallback to CPU (c5.large) for low‑traffic periods.  
3. **Caching layer** – ElastiCache Redis cluster (cluster mode enabled) for 80% of repeat predictions, reducing GPU usage by ~70%.  
4. **Observability** – CloudWatch Alarms + X-Ray tracing; automated Lambda to roll back a model if latency >100 ms or error rate >1%.

**Result (Deliver Results)**  
- Achieved 99.95% uptime and 45 ms average latency during peak load.  
- Cost was $180k/month, 10% below target.  
- Model roll‑back latency <5 s due to automated rollback scripts.

**Bar‑raiser takeaways**  
*Ownership*: I owned the full cost/latency trade‑off loop.  
*Dive Deep*: Chose Neo for quantifiable inference speed gains and Spot instances after profiling CPU vs GPU costs.  
*Learning from failure*: Initial prototype hit 120 ms latency; adding Redis cache cut it to 45 ms, proving the value of caching in ML inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
