---
qid: ing_5e25923041__faang__local
question: 'Explain: Pattern Selection — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 430
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:22:40-05:00'
sources: []
---

**Pattern Selection – Architecture Patterns (AI)**  
*FAANG‑style interview response*

| Step | What to Say |
|------|-------------|
| **Clarify** | “We’re asked how to pick an architecture pattern for an AI system.  I’ll assume we have a data‑driven ML model that needs to serve predictions at scale, with constraints on latency, throughput, and maintainability.” |
| **Approach** | 1️⃣ List candidate patterns: *Batch → Serve*, *Online→Serve (Real‑time)*, *Microservices* vs. monolith, *Model‑as‑a‑Service*, *Feature Store + Serving Layer*. <br>2️⃣ Define criteria: latency, data freshness, model versioning, scaling strategy, ops overhead. <br>3️⃣ Map criteria to patterns and rank. |
| **Depth** | • **Batch→Serve** (offline training + periodic inference) suits high‑volume, non‑real‑time workloads; uses Spark/Beam for batch, TensorFlow Serving for inference.<br>• **Online → Serve** (streaming pipeline + low‑latency inference) fits real‑time recommendations; uses Kafka/Flink + a lightweight inference microservice with ONNX runtime.<br>• **Feature Store + Serving Layer** decouples feature engineering from model inference, enabling reuse and consistency across models. Complexity: adds extra infrastructure but boosts agility. |
| **Edge Cases** | • Data drift → need re‑training pipeline.<br>• Model size > memory → consider model compression or edge deployment.<br>• Regulatory compliance → enforce data access controls in the serving layer. |
| **Optimize & Communicate** | “I’d start with a hybrid batch‑online pattern: train offline, serve online via a microservice that pulls features from a feature store. This balances freshness and cost. I’d monitor latency and gradually roll out model versioning through canary releases.” |

*Word count:* 210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
