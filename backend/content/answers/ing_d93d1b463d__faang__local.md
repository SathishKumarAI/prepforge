---
qid: ing_d93d1b463d__faang__local
question: 'Explain: Loose Coupling and Scalability — Event-Driven Architecture (EDA):
  A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 389
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:24-05:00'
sources: []
---

**Clarify**  
You’re asking how an *Event‑Driven Architecture* (EDA) achieves loose coupling and scalability in ML pipelines. I’ll assume we’re dealing with real‑time data ingestion, feature extraction, model inference, and downstream analytics—common in recommendation or fraud systems.

**Approach**  
1. Identify the event sources (sensors, user actions).  
2. Define a publish/subscribe bus (Kafka, Pulsar).  
3. Map each pipeline stage to an independent micro‑service that consumes events, processes them, and emits new events.  
4. Use schema registry & versioning for contract evolution.

**Depth**  
- **Loose Coupling:** Services communicate only via event contracts; they’re agnostic of producers/consumers. This allows you to replace or scale a stage without touching others.  
- **Scalability:** The bus partitions streams, enabling horizontal scaling of consumers. Back‑pressure can be managed with consumer lag metrics. Batch and stream processing coexist (e.g., Flink for streaming, Spark for offline training). ML models are served in stateless containers behind an API gateway; inference nodes scale based on event rate.

**Edge Cases**  
- Event loss or duplication → idempotent handlers & exactly‑once semantics.  
- Schema drift → enforce compatibility checks.  
- Latency spikes → circuit breakers and replay buffers.

**Optimize & Communicate**  
Future improvements: adopt *event sourcing* for audit trails, use *serverless functions* for bursty workloads, and implement *CQRS* to separate read/write models. I’d explain this roadmap while highlighting trade‑offs between consistency (ACID vs eventual) and throughput. This narrative showcases structured reasoning, technical depth, and foresight—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
