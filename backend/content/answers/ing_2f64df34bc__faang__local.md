---
qid: ing_2f64df34bc__faang__local
question: 'Explain: Performance — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 417
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:58-05:00'
sources: []
---

**Clarify**

You’re asking how the choice between a relational (SQL) store and a document/graph key‑value (NoSQL) store impacts ML pipeline performance—specifically data ingestion, feature lookup, model serving, and batch analytics.  
Assumptions: *Data volume > 10 GB, low latency read/write (< 10 ms), need ACID for transactional ops, but also flexible schema for evolving features.

**Approach**

1. **Ingestion & ETL** – batch pipelines → SQL (structured joins, constraints).  
2. **Feature Store** – real‑time lookup → NoSQL (low latency key‑value, horizontal scaling).  
3. **Model Serving** – read‑heavy → NoSQL for fast access; write‑heavy monitoring → SQL.

**Depth**

- *SQL*: ACID guarantees reduce data drift but sharding is complex; joins cost O(n) per query. Ideal for pre‑training analytics where consistency matters.  
- *NoSQL*: Schema‑less, can store dense vectors as blobs; key‑based retrieval is O(1). Supports partitioning and replication out of the box. However, lack of transactions means you must handle eventual consistency in feature pipelines.

**Edge Cases**

- Highly relational features (many-to-many) → NoSQL may need denormalization, risking duplication.  
- Large vector embeddings (> 10 k dims) → storing as binary blobs in SQL may hit row‑size limits; consider object store + pointer.

**Optimize & Communicate**

Explain trade‑offs: “We use PostgreSQL for nightly feature engineering because joins are cheap and we need strict schema. For serving, we switch to Cassandra to get 1 ms lookups at scale.”  
Mention monitoring (latency dashboards) and fallbacks (cache layers). Conclude that a hybrid architecture balances consistency with low‑latency ML inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
