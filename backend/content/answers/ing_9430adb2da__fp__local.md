---
qid: ing_9430adb2da__fp__local
question: 'Explain: Main Terms - SQL vs DynamoDB vs Document-DB vs Search-Index'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 488
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:20:33-05:00'
sources: []
---

## Why the “big‑three” storage engines differ

At the core, a machine‑learning pipeline needs to **persist** features and models, then **retrieve** them quickly for inference or further training.  
The choice of backend is dictated by *how* data are queried:

| Engine | Data model | Primary access pattern | Why it works |
|--------|------------|-----------------------|--------------|
| **SQL (relational)** | Structured tables with fixed schema | Joins, ad‑hoc analytical queries | Normalisation guarantees consistency; ACID ensures safe concurrent updates—essential when feature sets evolve. |
| **DynamoDB** | Key–value + optional secondary indexes | Point look‑ups by primary key, or range scans on a single sort key | Partitioned hash table gives *constant‑time* access for the most common “lookup by ID” pattern in inference. |
| **Document‑DB (e.g., MongoDB)** | Semi‑structured JSON documents | Flexible queries on nested fields, aggregation pipelines | Schema‑on‑read lets you evolve feature shapes without migrations; powerful map‑reduce style analytics for model‑training data. |
| **Search‑Index (Elasticsearch / OpenSearch)** | Inverted index over text + structured fields | Full‑text search, faceted filtering, fuzzy matching | Indexing turns arbitrary queries into logarithmic‑time operations—critical when you need to retrieve the “most similar” examples for nearest‑neighbour inference. |

### Deep insight

All four systems are *optimised for a single cardinality of access*:  
SQL for relational joins, DynamoDB for deterministic key lookups, Document‑DB for nested field scans, and Search‑Index for pattern matching over large vocabularies.  
Choosing the wrong engine is like using a hammer to drive a screw: it works, but you waste time and degrade performance.

> **Non‑obvious tip:** In many ML pipelines, the *training* phase benefits from a document or search index (fast aggregation of similar examples), while the *serving* phase demands a key‑value store for ultra‑low latency. Hybrid architectures—e.g., keeping feature vectors in DynamoDB and an Elasticsearch copy for similarity search—often yield the best trade‑off between consistency, speed, and flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
