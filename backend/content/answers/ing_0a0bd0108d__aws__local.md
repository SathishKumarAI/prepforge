---
qid: ing_0a0bd0108d__aws__local
question: 'Explain: Process with Workers — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 480
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:43-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of our ML inference pipeline for a real‑time recommendation engine that served 3 M active users daily. The existing monolithic worker farm had a 12 % error rate and an average latency of 1.8 s, which hurt conversion rates (–0.7 pp). My goal was to build a *serverless, webhook‑driven* system that would reduce errors by >90 %, cut latency to <300 ms, and scale elastically.

**Action & Design**  
I broke the pipeline into **stateless Lambda workers** triggered by an **Amazon API Gateway** webhook. Each worker receives a JSON payload (user context + feature vector), runs inference in a **Docker‑based container** on AWS Inferentia, and returns predictions to a **SQS FIFO queue** for downstream processing.  
Key decisions:  

| Decision | Service | Why |
|----------|---------|-----|
| Stateless Lambdas | Lambda + Layers | Auto‑scales with traffic; zero ops |
| Containerized model | Amazon SageMaker Edge | Keeps GPU inference cost low (≈$0.10/GB‑s) |
| Queueing | SQS FIFO | Guarantees order, decouples producer/consumer |
| Monitoring | CloudWatch & X-Ray | Deep tracing for latency spikes |

**Result**  
- Latency dropped from 1.8 s to **320 ms** (82 % improvement).  
- Error rate fell from 12 % to **0.9 %** (93 % reduction).  
- Cost per inference decreased by **35 %** due to efficient GPU utilization and pay‑as‑you‑go Lambda execution.

**Reflection & Learning**  
I owned the migration, coordinating with data science, security, and ops teams. A failed first rollout taught me to add a *canary* phase using API Gateway stages, which prevented a 20 % traffic spike from causing a service outage. The experience reinforced my commitment to **Customer Obsession** (improving user experience) and **Dive Deep** (profiling bottlenecks at the byte level).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
