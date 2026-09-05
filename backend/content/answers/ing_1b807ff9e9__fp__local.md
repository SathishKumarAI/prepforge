---
qid: ing_1b807ff9e9__fp__local
question: 'Explain: Audit and Compliance — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 413
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:34-05:00'
sources: []
---

**Change‑Data‑Capture for Auditable ML Pipelines**

At its core, a machine‑learning system must *prove* that every input that influenced a model’s prediction was captured and stored exactly as it existed in the source.  
The problem is: data streams are high‑velocity, schema‑evolving, and often distributed across heterogeneous sources (SQL, NoSQL, streaming).  The solution is to materialise a *temporal log* of each mutation—insert, update, delete—together with the transaction’s causal metadata (commit timestamp, source id, user id).  

Why this must work as a **log‑structured append**?  
1. **Idempotence & replayability**: In compliance audits we need to reconstruct the model state at any historical point.  Append‑only guarantees that re‑playing the log yields the same data regardless of how many times it is processed, satisfying *deterministic reproducibility*.  
2. **Temporal isolation**: By tagging each change with a logical clock (e.g., vector timestamp or Lamport tick), we preserve partial order without imposing global locks—an optimisation that balances consistency and throughput.  
3. **Immutable audit trail**: The log itself becomes the *source of truth*; any tampering would require altering the immutable sequence, which is detectable by cryptographic hash chaining (Merkle trees).  

A non‑obvious insight: **Schema evolution can be treated as another “change” event**.  By versioning the schema in the same CDC stream, downstream consumers automatically see the correct data layout for each record’s timestamp, eliminating manual migration scripts and reducing drift between training and production datasets.  

Thus, CDC is not a peripheral feature but the *geometric backbone* that ensures every ML decision can be traced back to its precise, tamper‑evident origin.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
