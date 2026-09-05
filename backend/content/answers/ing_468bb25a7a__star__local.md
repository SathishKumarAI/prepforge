---
qid: ing_468bb25a7a__star__local
question: 'Explain: Split Services Carefully — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:47-05:00'
sources: []
---

**Situation** – While leading a recommendation engine for an e‑commerce platform, our monolithic service was choking during peak traffic: latency rose from 120 ms to over 1.5 s and CPU usage hit 95%. The team needed a scalable solution that could handle personalized model inference at scale.

**Task** – Redesign the architecture so that the heavy ML inference runs in isolated micro‑services, while the lightweight API layer handles request routing, authentication, and caching. I had to decide how to split responsibilities without breaking existing business logic or introducing excessive latency.

**Action** – I mapped out a clear separation of concerns: (1) a stateless REST gateway built on FastAPI for routing; (2) a gRPC‑based inference service running TensorFlow Serving behind an NGINX load balancer; (3) a Redis cache layer to store the top 10 predictions per user. I used Docker Compose for local dev and Helm charts for Kubernetes deployment, applying circuit breakers via Istio to protect the gateway from downstream failures. I also introduced asynchronous message queues (RabbitMQ) for batch feature updates, decoupling them from real‑time inference.

**Result** – After rollout, average latency dropped to 140 ms, CPU utilization fell below 35%, and we handled a 4× increase in concurrent users without any downtime. The modular design also cut release cycles from weeks to days, and I learned that careful service boundaries coupled with proper observability are key to scaling ML at production level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
