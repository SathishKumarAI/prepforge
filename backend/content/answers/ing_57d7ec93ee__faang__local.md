---
qid: ing_57d7ec93ee__faang__local
question: 'Explain: Stay in touch — Designing Data-Intensive Applications (DDIA) \u2014
  an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 454
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:08:07-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *“Stay in Touch”*—the chapter on data‑intensive applications from Martin Kleppmann’s **DDIA**. I’ll assume you want the core concepts, why they matter for ML workloads, and how to apply them in practice.

**Approach**  
1. Summarize the main thesis of the chapter.  
2. Highlight key patterns (event sourcing, CQRS, log‑based replication).  
3. Connect each pattern to common ML pipelines (feature stores, model serving).  
4. Mention trade‑offs and typical failure modes.  

**Depth**  
Kleppmann argues that “stay in touch” means keeping data consistent across distributed systems while preserving latency and throughput. He introduces **event sourcing**—capturing every state change as an immutable event stream—and **Command Query Responsibility Segregation (CQRS)**, which separates write paths from read‑optimized views. For ML, this translates to a **feature store** that logs raw features once, then materializes derived features in queryable tables. Log‑based replication (Kafka, Pulsar) ensures low‑latency model updates without blocking training pipelines. The chapter also covers **time‑travel queries** and **snapshot isolation**, critical for reproducible experiments.

**Edge Cases**  
- *Event ordering*: network partitions can cause out‑of‑order events; use vector clocks or Kafka’s partition guarantees.  
- *Schema evolution*: feature types change—employ schema registries to avoid breaking downstream models.  
- *Backpressure*: heavy training loads can swamp ingestion pipelines; implement rate limiting and batching.

**Optimize & Communicate**  
I’d emphasize that the chapter’s patterns reduce operational complexity: a single source of truth (event log) eliminates data duplication, while CQRS lets ML teams scale inference independently from training. In an interview I’d conclude by noting how these design choices directly improve model reliability, auditability, and deployment velocity—exactly what FAANGs prioritize in production‑grade ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
