---
qid: ing_4cf7ea231b__star__local
question: 'Explain: Spotify System Design: High Level Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 322
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:02:12-05:00'
sources: []
---

**Situation:** At my previous startup we were tasked with building a music streaming service that could handle millions of concurrent users while providing personalized recommendations in real time.

**Task:** I needed to design the overall system so it would support high availability, low latency for playback and recommendation requests, and scale horizontally as user base grew from 10k to 1M+ listeners.

**Action:** I chose a microservices architecture with Docker/Kubernetes for deployment. The core services were: (1) **Catalog Service** – a PostgreSQL + ElasticSearch cluster for metadata; (2) **Playback Service** – stateless gRPC endpoints backed by a Redis cache and a CDN edge layer to serve audio chunks; (3) **Recommendation Engine** – an online inference service built on TensorFlow Serving, fed real‑time user interaction events from Kafka streams. I added a **Feature Store** using Feast to keep feature vectors up‑to‑date, and used a Cassandra cluster for session logs. For resilience, each service ran in multiple AZs with load balancers and auto‑scaling groups; health checks triggered blue/green deployments.

**Result:** The platform achieved 99.9% uptime during the first year, dropped average playback latency from 350 ms to under 120 ms, and boosted recommendation click‑through rate by 18%. I learned that coupling ML inference with a robust feature store and streaming pipeline is key to keeping models fresh without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
