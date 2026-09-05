---
qid: ing_ce7b868814__star__local
question: 'Explain: Scalability and Performance — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 346
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:00-05:00'
sources: []
---

**Situation** – While leading a data‑science team at a fintech startup, we were asked to build a real‑time fraud detection service that had to process ~10 M transactions per day with <50 ms latency for the first prediction.

**Task** – Design an end‑to‑end system that scales horizontally, keeps model inference fast, and supports A/B testing of new models without downtime.

**Action** – I chose a microservices architecture: a streaming layer on Kafka to ingest events, a stateless inference service on TensorFlow Serving behind NGINX, and a Redis cache for feature lookup. For scaling, I used Kubernetes autoscaling based on CPU/memory thresholds and implemented horizontal pod autoscaler with custom metrics (request latency). To keep performance high, I deployed model shards using ONNX Runtime on GPU nodes, sharded by user ID hash to reduce contention. We added an async post‑processing queue for retraining pipelines and used feature flags in LaunchDarkly to roll out new models gradually. Monitoring was set up with Prometheus/Grafana; we tuned batch sizes and pre‑warming strategies after load tests.

**Result** – The system handled 15 M tx/day with average latency 32 ms, a 35% reduction over the legacy batch system. We achieved zero downtime during model rollouts and cut inference cost by 20% through GPU utilization. I learned that coupling container orchestration with a fine‑grained feature store and proactive monitoring is key to scalable ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
