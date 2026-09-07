---
qid: ing_fd4cd8be40__faang__local
question: 'Explain: Microservices - Design Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 490
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:28:48-05:00'
sources: []
---

**Micro‑services Design Patterns for Machine Learning Systems**  
*(FAANG‑style interview response – 190 words)*  

| Section | What I’ll Cover |
|---------|-----------------|
| **Clarify** | “You’re asking how we structure ML workloads as independent services. I’ll assume we need data ingestion, model training, inference, and monitoring, all independently deployable.” |
| **Approach** | 1️⃣ Identify bounded contexts (e.g., feature store, training pipeline). <br>2️⃣ Map each to a micro‑service. <br>3️⃣ Apply patterns: *API Gateway* for unified access, *Saga* for distributed training jobs, *CQRS* for read‑heavy inference, *Event Sourcing* for model lineage, *Service Mesh* for secure telemetry. |
| **Depth** | • **Feature Store Service** – exposes a schema‑validated API; uses a time‑series DB and caches via Redis. <br>• **Training Service** – orchestrates DAGs (Airflow/KubeFlow), publishes `ModelReady` events; saga pattern rolls back partial checkpoints on failure. <br>• **Inference Service** – stateless REST/GRPC endpoints, model loaded from a shared volume; CQRS separates read‑only inference from write‑back for online learning. <br>Complexity: O(1) request latency; training is event‑driven and scales horizontally. |
| **Edge Cases** | • Model drift → trigger re‑training saga. <br>• Network partitions between services → circuit breaker pattern prevents cascading failures. <br>• Data schema changes → feature store publishes migration events. |
| **Optimize & Communicate** | “We can reduce cold starts by pre‑warming inference containers, cache recent predictions, and use a shared model registry (MLflow). I’d explain trade‑offs: tighter coupling gives lower latency but hurts resilience; loose coupling adds overhead but scales better.” |

This structured answer demonstrates clear problem framing, systematic planning, technical depth, awareness of pitfalls, and a concise narrative—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
