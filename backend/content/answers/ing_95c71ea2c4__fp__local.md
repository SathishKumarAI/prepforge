---
qid: ing_95c71ea2c4__fp__local
question: What is Cassandra? — Cassandra Vs MongoDB Comparison | MongoDB
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 332
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:23:52-05:00'
sources: []
---

**Cassandra** is a *wide‑column store* engineered for linear scalability and fault tolerance.  
At its core it solves the **CAP trade‑off** by choosing *AP* (Availability + Partition Tolerance) and providing tunable consistency through quorum reads/writes.  Data are partitioned across nodes using consistent hashing, then replicated with configurable replication factors; this guarantees that a write can succeed even if multiple nodes fail.

Unlike MongoDB’s document‑oriented model, Cassandra stores data in column families where each row is identified by a primary key and columns are sparse.  This structure maps naturally to **columnar compression** and efficient range scans on large datasets (e.g., time series).  The *log‑structured merge* (LSM) tree underlying its storage engine means that writes are append‑only, yielding high write throughput at the cost of read amplification—a trade‑off acceptable for workloads with heavy ingestion.

A non‑obvious insight: **Cassandra’s “time‑to‑live” (TTL) and compaction strategy effectively implement automatic data aging as a form of regularization**.  By discarding stale columns, it keeps the dataset size bounded without sacrificing consistency, a feature MongoDB offers only via manual TTL indexes or external scripts.

In short, choose Cassandra when you need horizontal scaling with tunable consistency for write‑heavy, partitioned workloads; choose MongoDB when you prefer flexible schemas and richer query semantics at the expense of linear scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
