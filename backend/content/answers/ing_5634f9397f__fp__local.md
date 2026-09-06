---
qid: ing_5634f9397f__fp__local
question: 'Explain: Difference between DynamoDB, MongoDB & Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 610
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:55-05:00'
sources: []
---

**From first principles**  
All three systems answer the *“how to store and retrieve a collection of key‑value documents at scale”* problem. They differ in how they trade **consistency, availability, partition tolerance (CAP)** and **storage‑level geometry**.

| Feature | DynamoDB | MongoDB | Cassandra |
|---------|----------|---------|-----------|
| Consistency model | *Eventual* by default; configurable *strong* via conditional writes. | *Strong* per document with *replica set* acknowledgements (writes can be tuned). | *Eventual* by design, tunable read/write consistency across nodes. |
| Partitioning | Hash‑based *sharding* inside Amazon’s infrastructure; each item is a row in a single table. | Automatic *sharding* on a chosen key; shards are MongoDB instances or clusters. | **Peer‑to‑peer** ring (Consistent Hashing). Each node owns a token range; data is replicated to `N` successors. |
| Storage model | Column‑family store with *secondary indexes* as separate tables. | Document store (BSON) with rich indexing and aggregation pipelines. | Wide‑column store; each row has an arbitrary set of column families, each with time‑ordered cells. |
| Use‑case geometry | Low‑latency key‑value lookups + managed scaling (no admin). | Flexible schema evolution, ad‑hoc queries, analytics via MapReduce or Aggregation Framework. | High write throughput, linear scalability, time‑series workloads. |

**Why it must work that way**

- **DynamoDB** is built on the *key‑value* abstraction of Amazon’s own Dynamo paper: to keep writes fast and avoid single points of failure, each item lives in a single partition; consistency is achieved via *optimistic concurrency control* (compare‑and‑set) rather than locking.

- **MongoDB** embraces *schema flexibility*: documents are stored as BSON trees, so indexing can target nested fields. The replica set guarantees *strong consistency* for a primary node, yet allows reads from secondaries for read‑scaling.

- **Cassandra** is the embodiment of *partition tolerance + linear write scaling*. Its ring topology eliminates master nodes; writes propagate asynchronously to replicas with hinted handoff and Merkle trees for repair. The wide‑column model lets you append new columns without schema changes, essential for evolving time‑series data.

**Non‑obvious insight**  
All three systems expose *tunable consistency* as a *resource*: the more replicas you read from (or write to), the less latency you pay but the higher your *staleness budget*. Choosing between them is not about which is “better” but about aligning that trade‑off with the *shape of your workload’s data access pattern* and the *operations cost* of maintaining a particular consistency level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
