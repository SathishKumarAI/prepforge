---
qid: ing_f00a1345e9__fp__local
question: 'Explain: So what happened on a PC or — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 322
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:29:37-05:00'
sources: []
---

### Choosing the “right” NoSQL store

At re:Invent 2021 the key problem was *matching data‑access patterns to a storage engine that guarantees latency, scale and consistency on demand*.  
A **document** model (MongoDB, DynamoDB) is optimal when queries traverse nested JSON, because each document can be fetched atomically in one round‑trip.  
A **wide‑column** store (Cassandra, Scylla) shines when a schema‑free table with high write throughput and linear scalability is required; its partition key drives consistent hashing so that any node can serve any key without hot‑spots.  
Graph engines (Neo4j, Neptune) solve the *relational* part of ML pipelines—feature propagation, link prediction—by storing edges as first‑class citizens, thus avoiding costly join emulations.

The deeper principle is **information locality**: a query should touch only the data that contains its answer. If you over‑normalize (many small tables) you pay for cross‑node lookups; if you under‑normalize (large blobs) you waste I/O and memory.  
A non‑obvious insight: *use the same database that your ML model’s inference pipeline will run on*. This eliminates serialization overhead, keeps feature vectors in place, and lets you evolve schema without costly data migration—critical when models retrain nightly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
