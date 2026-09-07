---
qid: ing_0fd5466e6a__faang__local
question: 'Explain: Related patterns — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 463
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:16-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise, interview‑ready description of the *Event Sourcing* pattern as it relates to machine learning systems—i.e., how we capture domain changes via immutable events instead of mutating state directly.

**Approach**  
1. Define the core idea: store every change (event) rather than snapshots.  
2. Show why ML benefits: reproducibility, auditability, and feature‑store lineage.  
3. Mention key components—event log, projections, replay, and eventual consistency.  
4. Touch on trade‑offs and typical use cases.

**Depth**  
Event sourcing records every domain mutation as an immutable event (e.g., `UserCreated`, `FeatureUpdated`). The *current state* is reconstructed by replaying events or materialized views (“projections”). In ML pipelines, this yields a deterministic training history: each model can be retrained from the exact same event stream, guaranteeing reproducibility and enabling rollback. It also provides an audit trail for feature drift analysis and compliance.

Typical architecture:  
- **Event store** (Kafka/Firestore) → immutable log.  
- **Projection workers** aggregate events into read‑optimized tables or feature stores.  
- **Replayer** rebuilds state when needed, e.g., for model retraining or debugging.

Trade‑offs: higher write latency, storage cost, and complexity of handling event versioning. Yet the benefits—full auditability, traceability, and decoupled reads/writes—are compelling for ML ops at scale.

**Edge Cases**  
- *Event loss* → use idempotent consumers or checkpoints.  
- *Schema evolution* → embed version metadata and maintain backward compatibility.  
- *Large event volume* → partitioning and compaction strategies.

**Optimize & Communicate**  
Explain that by treating training data as a sequence of events, we can apply incremental learning (online ML) and detect concept drift in real time. Summarize: Event sourcing turns state into provenance, which is the lifeblood of reliable, auditable machine‑learning systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
