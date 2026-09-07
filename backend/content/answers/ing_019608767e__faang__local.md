---
qid: ing_019608767e__faang__local
question: 'Explain: Software — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 411
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:43-05:00'
sources: []
---

**Clarify**  
The question asks me to explain *“Software – Designing Data‑Intensive Applications”* (by Martin Kleppmann). I’ll assume the interviewer wants a concise overview of its core ideas and how they apply to ML pipelines, not a line‑for‑line summary.

**Approach**  
1. Outline the book’s three pillars: data modeling, storage/processing, and distributed systems.  
2. Highlight key concepts (event sourcing, CQRS, sharding, consistency models).  
3. Connect each pillar to typical ML workloads (feature stores, model serving, training pipelines).

**Depth**  
Kleppmann builds a taxonomy of *data‑intensive* problems: high volume, velocity, variety, and veracity.  
- **Data modeling** teaches schema evolution and the trade‑off between normalization and denormalization—critical when defining feature schemas that evolve over time.  
- **Storage & processing** covers batch vs. stream (e.g., Kafka + Spark) and consistency guarantees (strong vs. eventual), which influence how we version training data and serve predictions with low latency.  
- **Distributed systems** introduces partitioning, replication, CAP theorem, and consensus (Raft/ Paxos). For ML, these principles govern fault‑tolerant model serving clusters and distributed training across GPUs.

**Edge cases**  
- Highly skewed feature distributions → need custom sharding strategies.  
- Real‑time inference with strict SLA → requires deterministic consistency or read‑through caches.  
- Model drift detection → relies on event sourcing to replay data streams.

**Optimize & communicate**  
I’d stress that the book’s strength lies in marrying theoretical guarantees with pragmatic design patterns, which is exactly what ML teams need when scaling pipelines from prototype to production. Mentioning concrete tools (Kafka, Cassandra, Flink) shows familiarity and keeps the answer actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
