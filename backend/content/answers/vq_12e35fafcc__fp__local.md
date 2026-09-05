---
qid: vq_12e35fafcc__fp__local
question: How will you update the rows that are already exported?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 392
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:36-05:00'
sources: []
---

**Why updating “already‑exported” rows matters**

In a streaming pipeline, the exporter is essentially an *immutable write* that guarantees *exactly‑once* semantics for downstream consumers. If the source record changes after export (e.g., late‑arrival corrections or GDPR updates), we must reconcile those changes without breaking the consumer’s view of history.

**Fundamental principle: idempotent “patch” streams**

Treat each exported row as a key–value pair identified by a stable primary key. The exporter emits *events* rather than snapshots:

1. **Insert event** – full record on first export.  
2. **Patch event** – delta for any later change, keyed by the same ID.

Consumers apply events in order (or via a log‑based CDC tool). Because each patch is idempotent and self‑contained, reprocessing or replaying the stream never corrupts state; the latest event becomes the authoritative value.

**Why this works**

* **Optimisation:** We avoid rewriting large tables by only emitting small deltas.  
* **Information theory:** The sequence of patches is a lossless compression of the record’s evolution—no data is lost, just encoded efficiently.  
* **Geometry (state space):** Each patch moves the point representing the row along a vector in attribute space; the final state is simply the sum of all vectors applied to the origin.

**Non‑obvious insight**

Many engineers treat patches as “updates” that overwrite the table directly. The deeper trick is *decoupling the export from the write*. By exporting changes as events, you can replay or branch history (e.g., for audits) without touching the original storage layer. This preserves immutability of the exported stream while still enabling updates downstream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
