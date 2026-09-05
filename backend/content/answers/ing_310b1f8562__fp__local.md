---
qid: ing_310b1f8562__fp__local
question: 'Explain: Features of MongoDB — Difference Between Cassandra and MongoDB
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 368
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:49:08-05:00'
sources: []
---

### Why the distinction matters  
Both **Cassandra** (wide‑column) and **MongoDB** (document) are NoSQL stores, but they solve different *consistency vs. flexibility* problems.  

| Feature | Cassandra | MongoDB |
|---------|-----------|--------|
| **Data model** | Column families with flexible schema; rows are sorted by a primary key. | BSON documents; nested arrays/objects per collection. |
| **Write path** | Append‑only, log‑structured storage + LSM tree → high write throughput, minimal disk seeks. | WiredTiger buffer pool + B‑tree index → balanced reads/writes. |
| **Consistency** | Tunable *eventual* consistency; quorum writes for stronger guarantees. | Strong consistency per document (single‑node ACID), with tunable replication. |
| **Scaling** | Peer‑to‑peer ring; linear scaling by adding nodes, no master node. | Master‑slave (primary/replica set) or sharded cluster; requires coordination but simplifies transactions. |
| **Use case fit** | Time‑series logs, telemetry where writes dominate and eventual consistency is acceptable. | Content management, user profiles, or any workload needing rich queries on nested data. |

#### Non‑obvious insight  
Cassandra’s “wide column” layout is not just a storage trick; it turns the *primary key* into an implicit partitioning key, guaranteeing that all rows with the same key are stored together. This design eliminates random seeks for range scans on a key—an advantage often overlooked when people choose MongoDB for its flexible schema but neglect its performance penalties for large unindexed collections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
