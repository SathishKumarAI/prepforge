---
qid: ing_d2f4750510__star__local
question: 'Explain: Step 1 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 386
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:26-05:00'
sources: []
---

**Situation** – I was leading the launch of a recommendation engine for an e‑commerce platform that had just hit 2 million daily active users after a viral marketing push. The existing monolith could only serve ~10 k concurrent requests before latency spiked to 1.5 seconds, well above our SLA.

**Task** – Redesign the infrastructure so the ML inference service could handle 500 k requests per second with <200 ms latency, while keeping cost under $50K/month and ensuring zero downtime during migration.

**Action** – First, I split the monolith into microservices: a REST API gateway, a stateless inference container, and a data‑fetcher. I containerized the inference model (TensorFlow Serving) and deployed it on Kubernetes with horizontal pod autoscaling driven by CPU+memory thresholds. To reduce round‑trips, I introduced Redis‑based caching for the top 10k most frequent user–item pairs and used CDN edge functions to pre‑compute cold starts. For data ingestion, I switched from batch ETL to a Kafka stream that fed the model in real time, enabling online learning. I also implemented circuit breakers and a blue/green deployment pipeline to guarantee zero‑downtime rollouts.

**Result** – After rollout, we achieved 450 k RPS with average latency 120 ms, exceeding our SLA by 40%. Monthly ops cost stayed at $42K, a 15% savings over the legacy system. I learned that coupling scalable infrastructure (autoscaling + caching) with real‑time data pipelines is key to supporting millions of users in ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
