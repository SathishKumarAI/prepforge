---
qid: ing_0141eb4b8d__fp__local
question: 'Explain: Runtime fields — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 359
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:07:56-05:00'
sources: []
---

### Why Runtime Fields Exist

When you ingest data into an index, every document is parsed once and stored on disk as a fixed schema.  
If later you need a new field—say “price\_after‑tax”—you would normally have to reindex all documents.  
The **runtime field** mechanism solves this by letting the engine compute a value *on‑the‑fly* during search, without touching the stored data.

### How It Works

A runtime field is defined in a mapping with `type: "runtime"`.  
At query time, Elasticsearch executes a small script (Painless or other) for each document that accesses only the fields you reference.  
The result is treated like any other field: it can be used in filters, aggregations, sorting, etc., but it never occupies storage.

### Deeper Principle

This is an instance of **lazy evaluation** from functional programming, combined with *partial evaluation* in compilers: compute only what’s needed for the current query.  
It trades a tiny CPU cost per document for huge savings in storage and indexing time—an embodiment of the space‑time trade‑off in algorithm design.

### Non‑Obvious Insight

Because runtime fields are evaluated per document, they can *see* other runtime fields defined earlier in the same mapping.  
Thus you can build chains of derived values without reindexing, enabling dynamic feature engineering that would otherwise require materialized views or pre‑computed columns. This hidden composability is often overlooked when people treat runtime fields as one‑off “calculated columns.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
