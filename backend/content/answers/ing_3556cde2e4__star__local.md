---
qid: ing_3556cde2e4__star__local
question: 'Explain: Overview — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 355
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:51-05:00'
sources: []
---

**Situation:** In my last role I led a team building an end‑to‑end recommendation system. We had four services – data ingestion, feature store, model inference, and analytics – all exposed via REST APIs. The product manager asked us to expose them behind a single entry point while keeping latency under 100 ms.

**Task:** Design and implement an API gateway that could route requests to the correct microservice, provide basic rate limiting, and allow for easy rollout of new model versions without downtime.

**Action:** I chose Spring Cloud Netflix Zuul for legacy services because it supports dynamic routing and has a rich plugin ecosystem. For newer services I switched to Spring Cloud Gateway, which uses Project Reactor for non‑blocking IO and offers declarative route definitions in YAML. I wrote a custom filter that inspected the “X‑Model‑Version” header; if missing it defaulted to v1, otherwise routed to the corresponding service instance. I also added a circuit breaker (Resilience4j) around the inference service to fail fast during model retraining windows. Finally, I automated route updates via Consul discovery so new instances were picked up instantly.

**Result:** Traffic latency dropped from 180 ms to 65 ms on average. The gateway allowed us to deploy a new model version in 30 seconds with zero user impact. I learned that combining Zuul for backward compatibility and Gateway for reactive performance gives the best of both worlds, especially when scaling ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
