---
qid: ing_9ddffca3d1__fp__local
question: 'Explain: Get all spans for a specific name — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 430
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:41:09-05:00'
sources: []
---

In **Langwatch** (and its successor **Langfuse**) every *trace* is a DAG of *spans*: atomic units that record an event, its start‑time, duration, metadata, and parent/child links.  
When you ask for “all spans with name = *Ai Evals Complete Guide*”, you are in effect querying this DAG for nodes whose `name` attribute matches the string.

### Why it must work this way
1. **Traceability** – Each span is a self‑contained record; filtering by name isolates the logical operation (e.g., an evaluation run) regardless of where it appears in the trace hierarchy.
2. **Determinism** – Names are immutable, so the query returns the same set across time and replicas, satisfying consistency guarantees required for debugging and analytics.
3. **Performance** – Indexing on `name` turns a linear scan into a hash‑based lookup; without this, every retrieval would be O(n) over potentially millions of spans.

### Underlying principle
This is an application of *set partitioning* in graph theory: the set of all spans is partitioned by the equivalence relation “same name”. Querying for one partition is just a simple filter operation on that equivalence class. It also leverages the *index‑based search* paradigm from database theory, ensuring sub‑linear query times.

### Non‑obvious insight
Most people treat span names as human‑readable labels, but they’re actually **canonical keys** for event types. Because every span’s lineage (parent/child) is preserved, you can reconstruct the entire evaluation pipeline by traversing only those spans of a given name and then following their child links—no need to materialize or re‑execute the original code. This makes post‑hoc analysis of performance bottlenecks possible even after the system has shut down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
