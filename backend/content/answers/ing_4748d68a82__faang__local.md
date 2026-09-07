---
qid: ing_4748d68a82__faang__local
question: 'Explain: Common Mistakes — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 458
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:49-05:00'
sources: []
---

**Clarify**  
The question asks why developers often pick the wrong database type (SQL vs NoSQL) when designing a ML‑data pipeline. I’ll assume we’re dealing with typical ML workloads: high‑volume ingestion, schema evolution, and analytical queries.

**Approach**  
1. List key differences between relational and document/column stores.  
2. Map those to common ML use cases (training data, feature store, model artefacts).  
3. Highlight pitfalls that arise when the mismatch is ignored.

**Depth**  
- **Schema rigidity vs flexibility:** SQL enforces ACID but struggles with evolving feature sets; NoSQL offers schemaless storage but weak transactional guarantees.  
- **Join cost:** ML pipelines often need to merge features from multiple tables—joins in SQL are natural, whereas NoSQL requires denormalization or expensive map‑reduce steps.  
- **Query patterns:** Feature retrieval is read‑heavy and often key‑based; NoSQL shines here, but analytics (group by, aggregations) favor columnar SQL stores.  
- **Consistency vs latency:** Real‑time feature serving needs low latency; many NoSQL engines sacrifice strong consistency, leading to stale data in models.

**Edge cases**  
- *Schema evolution*: In SQL a new feature may require ALTER TABLEs that lock the table, breaking real‑time pipelines.  
- *Cross‑region replication*: NoSQL can offer faster reads but may lag on writes, corrupting training labels.  
- *Data volume spikes*: If a NoSQL cluster is underprovisioned, read latency explodes during model retraining.

**Optimize & communicate**  
Explain that the optimal design often mixes both: use a relational DB for metadata and model artefacts, a columnar store (e.g., BigQuery) for training data, and a key‑value or document store for real‑time feature serving. Emphasize trade‑offs—transactional integrity vs scalability—and conclude by stressing continuous monitoring to detect drift caused by the chosen storage layer. This structured reasoning showcases problem understanding, technical depth, and pragmatic system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
