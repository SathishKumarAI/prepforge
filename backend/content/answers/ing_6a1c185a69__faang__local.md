---
qid: ing_6a1c185a69__faang__local
question: 'Explain: Architecture Decision Tree — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 531
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:50:52-05:00'
sources: []
---

**Clarify**  
The interview asks for an *Architecture Decision Tree* (ADT) that maps high‑level architecture patterns to concrete design decisions for AI systems—e.g., when to use a microservice, event‑driven, or serverless stack. I’ll assume the goal is to choose scalable, maintainable AI pipelines (model training, inference, monitoring) under typical constraints: latency, throughput, data volume, and operational cost.

**Approach**  
1. **Define decision nodes**: Scope (batch vs. real‑time), data velocity, model complexity, regulatory needs, team expertise.  
2. **Map to patterns**: For each node, list candidate patterns (e.g., *Batch ETL + Lambda* for offline training; *Event‑driven with Kafka + Kinesis* for streaming inference).  
3. **Assign trade‑offs**: Latency vs. cost, consistency vs. scalability, DevOps overhead.

**Depth**  
- **Root**: “Is the workload batch or stream?”  
  - *Batch*: → ETL → Spark/Databricks → Model training on GPU cluster (K8s). Use *data‑centric microservices* for feature store; deploy model via *model server* (TorchServe) behind an API gateway.  
  - *Stream*: → Ingest with Kafka → Stream processing (Flink/Beam) → Real‑time inference on a lightweight container (TensorRT). Wrap as *function‑as‑a‑service* (AWS Lambda or Cloud Run) for autoscaling.  
- **Secondary node**: “Is low latency critical?”  
  - Yes → Edge deployment, ONNX runtime, local caching.  
  - No → Centralized inference cluster with batch scoring.

**Edge Cases**  
- Model drift requiring frequent retraining: add *continuous integration* pipeline.  
- Regulatory constraints (GDPR): enforce data locality and audit trails.  
- Sudden traffic spikes: test auto‑scaling limits, cold start latency.

**Optimize & Communicate**  
Iterate the tree by benchmarking latency vs. cost for each leaf. Present findings with a concise diagram and a decision matrix summarizing trade‑offs. Highlight that the ADT is modular—new patterns (e.g., *AI‑as‑a‑Service* on Azure) can be plugged in without rewriting the entire tree. This showcases structured reasoning, clear communication, and depth—all key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
