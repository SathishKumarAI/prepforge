---
qid: ing_087da45c83__fp__local
question: 'Explain: Log Retention — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 467
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:47-05:00'
sources: []
---

**Why a CDC log must be retained**

The core problem is *continuous consistency*: downstream systems (analytics, search indexes, fraud engines) need every change that occurred in the source database **exactly once and in order**, even if they are temporarily offline or a batch job fails. A CDC system therefore has to expose an append‑only stream of events that can be replayed arbitrarily long.

**Fundamental guarantees**

1. **Atomicity & ordering** – Each transaction’s events must appear together and in the same sequence as committed.  
2. **Durability** – Once written, the event cannot be lost; otherwise a consumer would miss data.  
3. **Bounded growth** – The log cannot grow unbounded; it must prune old records without compromising replayability.

These guarantees map naturally to *append‑only logs* backed by a *distributed commit protocol* (e.g., Raft or Kafka’s replication). Each log entry is a *tuple* ⟨transaction id, LSN, operation type, payload⟩. The transaction id ensures atomicity; the Log Sequence Number (LSN) enforces ordering.

**Retention policy as an optimization**

Instead of naïvely keeping every record forever, we apply **event‑based compaction**: keep the latest state per key and drop intermediate snapshots that can be reconstructed from the final state. This is analogous to *differential evolution* in optimization—keeping only what changes the objective.

**Non‑obvious insight**

The *optimal retention window* is not a fixed time horizon but depends on the **consumer’s replay latency budget** and the **data distribution skew**. If most consumers request only recent data, we can aggressively compact older keys while preserving a small “hot” tail for long‑term queries. This dynamic compaction turns a linear storage cost into logarithmic with respect to active key count, leveraging the *Zipfian* nature of many real datasets.

In short, log retention in CDC is a carefully engineered balance between strict consistency guarantees and adaptive compression, grounded in principles from distributed systems, information theory, and statistical data skew.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
