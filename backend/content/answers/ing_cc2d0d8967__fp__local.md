---
qid: ing_cc2d0d8967__fp__local
question: 'Explain: Changing Data Structures is Complicated — Bonsai Blog | Fully
  Managed Elasticsearch & OpenSearch \u2022 Why Elasticsearch should not be your Primary
  Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 317
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:29-05:00'
sources: []
---

**Why the “Bonsai” post warns against using Elasticsearch as a primary store**

Elasticsearch is built on top of Lucene’s inverted‑index engine, optimized for *search* rather than *write consistency*.  
When you model data in a relational or document database, schema changes are usually just migrations that alter tables or columns; the system guarantees ACID semantics and automatically updates indexes.  

In Elasticsearch every field becomes an index term. Adding, removing, or changing a field’s type forces Lucene to rebuild shards: it must re‑segment all documents, rewrite posting lists, and recompute statistics. Because each shard is an append‑only log, this operation is **O(n)** in the size of the cluster and often requires downtime or heavy “reindex” jobs.  

Moreover, Elasticsearch’s mapping is *dynamic* by default; a new field can silently alter the schema for all documents, leading to subtle bugs (e.g., numeric fields stored as strings). The lack of strict typing means that a typo in a mapping can corrupt millions of documents without an obvious error.

**Non‑obvious insight:**  
Elasticsearch’s performance hinges on *immutable* indexes; once written, they are never changed. This design choice makes schema evolution a costly “batch job” rather than a lightweight migration, turning what would be trivial updates into full‑scale data re‑ingestion operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
