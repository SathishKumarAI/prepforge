---
qid: ing_7b089a98d4__star__local
question: 'Explain: System Design - Tech Stack — Hld System Designs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 341
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:01-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time fraud detection platform for a fintech client that had just hit $150 M in annual revenue and needed to reduce false positives by 30% while maintaining latency below 50 ms per transaction.

**Task** – Design the high‑level tech stack: data ingestion, feature pipeline, model serving, monitoring, and A/B testing infrastructure, all within a single microservice ecosystem that could scale to millions of events per day.

**Action** – I chose Kafka for streaming ingestion, Spark Structured Streaming for feature enrichment (using Redis cache for session features), and TensorFlow Serving behind an Envoy API gateway. Models were containerized with Docker and orchestrated via Kubernetes on GKE, using Istio for traffic routing. For real‑time scoring, I deployed a lightweight inference engine (ONNX Runtime) in a sidecar pattern to keep latency low. I also built a Grafana‑Prometheus stack for monitoring model drift, and set up an internal A/B test harness that automatically rolled out new models based on precision/recall thresholds.

**Result** – The platform processed 4 M events/day with average latency of 38 ms, cut false positives from 12% to 8%, and improved detection accuracy by 18%. I learned the importance of separating concerns (ingestion vs. scoring) and how lightweight inference containers can dramatically reduce latency while keeping a robust monitoring pipeline for continuous model health checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
