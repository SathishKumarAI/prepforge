---
qid: ing_a33237a04f__fp__local
question: 'Explain: Schema Evolution — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 415
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:41-05:00'
sources: []
---

### From the Problem to a Robust Solution

When a model is trained on historical data, that dataset reflects a *snapshot* of the world: column names, types, and relationships are fixed. In production, however, schemas drift—new features appear, old ones vanish or change type. If downstream pipelines ignore this drift, they will silently ingest malformed records, corrupt feature stores, or produce NaNs that propagate to predictions.  

**Schema Evolution + CDC solves two intertwined problems:**

1. **Consistency:** Every data consumer sees a *single source of truth* for the current schema.
2. **Incrementality:** Only changed rows are re‑processed, keeping latency low.

The solution treats each change event as a *partial record*—a delta that is applied to the base table in an append‑only log (e.g., Kafka). A *schema registry* stores the current version and a merge policy (additive, backward‑compatible, or replace). When a CDC consumer reads the stream, it materializes a view of the latest schema by replaying events. The key insight: **the delta can be stored once per change, not per row**, so storage grows with schema changes, not with data volume.

**Why this works:**  
- *Information‑Theoretic*: We only encode what differs from the previous state (minimal entropy).  
- *Geometric*: The space of valid records is a submanifold that shifts as the schema moves; CDC keeps us on that manifold without recomputing it entirely.  

### Non‑Obvious Insight

Most practitioners treat CDC streams as simple replication buffers. The deeper benefit is *semantic versioning*: by coupling each event to a schema version, we can retroactively query “what did feature X look like at time t?”—enabling explainable ML and audit trails without reprocessing the entire dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
