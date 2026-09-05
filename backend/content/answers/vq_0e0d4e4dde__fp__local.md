---
qid: vq_0e0d4e4dde__fp__local
question: What are the types of views?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 458
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:22:35-05:00'
sources: []
---

### Why a “view” matters in data engineering

At its core, a view is **a virtual table that resolves a set of rows on demand**.  
When we ingest raw data, the *physical* storage (parquet files, column‑store tables, etc.) is optimized for bulk writes and compression. Yet downstream consumers—BI dashboards, ML pipelines, or ad‑hoc analysts—need *logical* representations tailored to their workloads. A view lets us **re‑express the same underlying facts** without duplicating data, preserving storage efficiency while offering different semantics.

### The three canonical types

| Type | Purpose | When it shines |
|------|---------|----------------|
| **Materialized View** | Stores a pre‑computed snapshot of a query. | Workloads that read frequently but write rarely; latency‑critical dashboards. |
| **Logical (or Virtual) View** | Computes its result on every read, referencing underlying tables directly. | Ad‑hoc analysis where up‑to‑date data is required and recomputation cost is acceptable. |
| **Incremental/Delta View** | Keeps only the changes since the last refresh, applying them to a base view. | Streaming ETL or near‑real‑time analytics where full recomputation would be prohibitive. |

### Deeper insight

The choice among these views is an *optimization problem* over two axes: **write cost vs read latency**. A materialized view trades storage and maintenance for instant reads; a virtual view trades compute time for zero storage overhead. Incremental views sit in the middle, exploiting *differential updates* to keep the trade‑off balanced.

#### Non‑obvious takeaway

Many practitioners treat all “materialized” solutions as identical. In practice, **the refresh strategy (full vs incremental) is often the decisive factor**. A full refresh can dominate cost when data volumes grow, whereas an incremental delta—if correctly engineered—keeps the same logical view at a fraction of the compute. Choosing the right refresh policy is therefore as critical as selecting the view type itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
