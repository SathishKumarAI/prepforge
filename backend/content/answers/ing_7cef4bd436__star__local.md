---
qid: ing_7cef4bd436__star__local
question: 'Explain: Building Software Systems At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 326
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:41-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team on the AdWords recommendation engine, we had to deploy a new deep‑learning model that could process real‑time click streams at scale. The existing batch pipeline was too slow for our 10 million daily requests.

**Task** – Build an end‑to‑end streaming inference system in Go and TensorFlow Serving that would reduce latency by 70% and support 99.9% uptime, all while keeping the codebase maintainable for future models.

**Action** – I first mapped out a dataflow diagram using Apache Beam on Google Cloud Dataflow to ingest Pub/Sub events, normalise features, and feed them into a TensorFlow model exported as a SavedModel. I wrapped the serving logic in a microservice with gRPC endpoints, deployed it via Kubernetes Engine with horizontal pod autoscaling, and added Prometheus metrics for latency and error rates. To keep the system robust, we implemented A/B testing with traffic splitting, wrote chaos‑testing scripts to simulate node failures, and set up automated rollback pipelines.

**Result** – The new streaming pipeline cut inference latency from 350 ms to 90 ms, increased click‑through‑rate by 4%, and reduced operational incidents by 60%. I learned that early integration of observability, scalable architecture patterns, and rigorous testing is essential when moving ML models into production at Google’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
