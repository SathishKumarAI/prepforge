---
qid: ing_6292d311d1__fp__local
question: 'Explain: Cassandra — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 434
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:53-05:00'
sources: []
---

**Why the choice matters**

Both Cassandra (wide‑column) and MongoDB (document) are NoSQL stores, but they solve *different* scalability problems.

| Problem | Cassandra | MongoDB |
|---------|-----------|---------|
| **Write‑heavy, linear scaling** | Stores data as immutable SSTables. A write is a sequential append to one node; replication is achieved by hashing the key and sending only that partition to replicas. This guarantees *O(1)* writes regardless of cluster size. | Writes are logged to an in‑memory journal then flushed to disk. Each write touches all shards that hold the key’s hash, so throughput degrades when many nodes participate. |
| **Strong consistency** | Uses tunable consistency (Cassandra = Quorum/All). All replicas receive the same mutation before it is considered committed. | Defaults to *eventual* consistency; read‑repair only triggers on conflict. |
| **Schema flexibility** | Columns are optional per row; new columns appear in a partition without affecting others. | Documents can have arbitrary fields, but indexes are built per collection, and adding new keys forces index rebuilds if not sparse. |

**Core principle**

Cassandra’s design is *log‑structured* and *partitioned by key*, making it a *write‑optimized hash table on disk*. MongoDB is a *B‑tree‑based document store* optimized for flexible queries.

**Non‑obvious insight**

Because Cassandra writes are append‑only, the *read* path requires merging multiple SSTables (a merge sort). This leads to higher read latency unless you keep the data “hot” in memory or use compaction strategies. MongoDB’s B‑tree allows fast point reads but suffers when many shards must be queried for a single key. Thus, choose Cassandra when you need *linear write scaling* and tolerate slightly higher read costs; choose MongoDB when you require rich ad‑hoc queries on semi‑structured data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
