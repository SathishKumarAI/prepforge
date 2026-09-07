---
qid: ing_6d5669c654__faang__local
question: 'Explain: New and notable — What are microservices?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 415
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:33-05:00'
sources: []
---

**Micro‑services in ML Pipelines**

| Stage | Details |
|-------|---------|
| **Clarify** | *What* you’re asking: “How do we decompose a monolithic ML system into independent, deployable units?”  Assume we need scalability, rapid iteration, and heterogeneous tech stacks. |
| **Approach** | 1. Identify bounded contexts (data ingestion, feature store, model training, inference). <br>2. Wrap each context in a containerized service exposing a REST/GRPC API. <br>3. Use an orchestrator (K8s) and a message bus (Kafka) for inter‑service communication. |
| **Depth** | • **Data Service:** streams raw logs → feature store; scales with ingestion rate. <br>• **Feature Store Service:** caches computed features, supports versioning. <br>• **Training Service:** spins GPU pods on demand, auto‑scales by training job queue length. <br>• **Inference Service:** stateless, horizontally scaled, uses model registry for zero‑downtime rollouts. <br>Complexity: O(n) per request; trade‑off is network latency vs. isolation. |
| **Edge Cases** | • Network partitions → circuit breakers. <br>• Data drift → feature store monitoring. <br>• Model rollback failures → canary deployments with A/B testing. |
| **Optimize & Communicate** | Use serverless functions for infrequent jobs, cache inference results in Redis, and instrument each service with Prometheus/ELK for observability. Explain decisions to stakeholders by mapping latency gains to SLA improvements and showing how independent scaling reduces overall cost per training epoch. |

*Result:* A modular ML stack where teams can independently iterate on features, models, or infra without breaking the entire pipeline—exactly what FAANGs look for in production‑grade systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
