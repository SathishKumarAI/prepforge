---
qid: ing_f6d107ad3b__star__local
question: 'Explain: Pros — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 346
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:02-05:00'
sources: []
---

**Situation**  
At my last job we were building a recommendation engine for an e‑commerce platform that served 15 million active users daily. Our prototype, built in Python with TensorFlow, could only handle a few thousand predictions per second and was running on a single GPU instance.

**Task**  
I had to redesign the inference pipeline so it could scale horizontally, reduce latency below 100 ms per request, and support real‑time model updates without downtime.

**Action**  
First I profiled the bottlenecks: data loading (batching), model serialization, and network round‑trips. I switched to TensorFlow Serving with a gRPC API, wrapped the model in a Docker container, and deployed it behind a Kubernetes cluster using HPA based on CPU utilization. For feature lookup I replaced an in‑memory dictionary with Redis Streams, allowing us to cache user embeddings and serve them in <5 ms. To enable zero‑downtime updates I implemented a blue/green rollout strategy via Istio, and added a lightweight validation layer that ran the new model against live traffic for 10 % of requests before full switch.

**Result**  
Latency dropped from ~600 ms to 80 ms per request, throughput increased to 120k predictions/sec across 12 GPU nodes, and we achieved 99.9 % uptime during a major holiday sale. I learned that thoughtful orchestration—profiling, containerization, caching, and progressive rollouts—is key to scaling ML systems reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
