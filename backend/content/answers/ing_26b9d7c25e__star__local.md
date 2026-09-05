---
qid: ing_26b9d7c25e__star__local
question: 'Explain: Scalable System Design Patterns — Pragmatic Programming Techniques:
  Scalable System Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 336
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:05-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had an online fraud‑detection model that processed 1.2 million transaction events per day. Our real‑time inference latency was hovering around 350 ms, which exceeded the 200 ms SLA and caused customer complaints.  

**Task** – I needed to redesign the serving layer so it could handle a 3× traffic spike during peak hours while keeping latency below 150 ms and maintaining model accuracy.

**Action** – I introduced an event‑driven microservice architecture using Apache Kafka for buffering, coupled with Kubernetes autoscaling for inference pods. Each pod ran TensorFlow Serving behind Envoy sidecars to enable request routing based on feature set size. To reduce cold starts, I containerized the models with NVIDIA GPU support and pre‑warmed them via a scheduled job. For stateful features, we added Redis Streams to cache per‑user embeddings, cutting redundant model calls by 40 %. Finally, I implemented a circuit breaker pattern that rerouted traffic to a fallback rule‑based engine when latency thresholds were breached.

**Result** – After deployment, average inference latency dropped to 95 ms and the system handled up to 4.5 million events per day without any SLA violations. The cost of GPU resources fell by 18 % due to better utilization. I learned that combining asynchronous messaging, container orchestration, and graceful degradation is key to building resilient ML serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
