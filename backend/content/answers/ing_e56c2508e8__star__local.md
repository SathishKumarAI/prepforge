---
qid: ing_e56c2508e8__star__local
question: 'Explain: High-level design — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 349
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:36-05:00'
sources: []
---

**Situation** – In my last role, a client needed to launch an online recommendation engine that could handle 10 k concurrent users while delivering predictions in under 200 ms. The existing monolith was choking on traffic and had no clear scaling path.

**Task** – I was tasked with designing a high‑level architecture that would support real‑time inference, easy model updates, and fault tolerance, all within the budget constraints of a mid‑size startup.

**Action** – First, I broke down the system into three layers: data ingestion (Kafka + Spark for batch training pipelines), feature store (Redis + Parquet on S3 for low‑latency lookup), and inference service (TensorFlow Serving behind an NGINX load balancer). I chose a microservice pattern so new models could be deployed independently. For scaling, I used Kubernetes autoscaling with CPU/latency thresholds and set up Prometheus/Grafana dashboards to monitor prediction latency and error rates. To reduce model weight, I applied knowledge distillation before serving, cutting inference time by 35 % without sacrificing accuracy.

**Result** – The new architecture handled peak traffic of 15 k users with an average response time of 145 ms (up from 350 ms) and a 99.9 % uptime over the first month. Model rollouts became continuous, cutting deployment time from weeks to days. I learned that a clean separation between training, feature storage, and inference is key for maintainable ML systems, and that monitoring must be baked into the design from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
