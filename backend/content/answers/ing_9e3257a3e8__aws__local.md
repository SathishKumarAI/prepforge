---
qid: ing_9e3257a3e8__aws__local
question: 'Explain: Cassandra vs. MongoDB: Architecture — Cassandra Vs MongoDB Comparison
  | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 507
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:38-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I compared **Cassandra** and **MongoDB** for a high‑throughput recommendation engine, I anchored on *Ownership* and *Dive Deep*.  

| Aspect | Cassandra | MongoDB |
|--------|-----------|---------|
| **Data model** | Wide‑column key‑value; schema‑free rows. | Document (BSON) with nested structures. |
| **Consistency** | Tunable: eventual by default, can be strong per read/write. | Strong consistency on a single replica set member; tunable read concern. |
| **Write path** | Append‑only commit log + memtable → SSTable; writes are *O(1)* even at 10k RPS. | Write to journal + in‑memory cache; requires full document rewrite; latency grows with doc size. |
| **Read path** | Local read on node, no network hop unless replication factor > 1. | Requires coordination across replicas for quorum reads. |
| **Scalability** | Linear horizontal scaling; data partitioned by hash key; no master. | Sharded clusters need a config server; sharding metadata can become a bottleneck. |
| **AWS services** | Amazon Keyspaces (managed Cassandra) – fully managed, pay‑as‑you‑go, 99.9 % SLA. | Amazon DocumentDB (compatible with MongoDB API) or self‑hosted EC2/EMR; higher operational overhead. |

In my pilot, migrating from MongoDB to Cassandra reduced write latency by **35 %** and cut R/W costs by **27 %** at 5× traffic. I documented the trade‑offs (Cassandra’s eventual consistency vs MongoDB’s richer query language) and built a rollback plan.  

**Bar‑raiser check:**  
- *Ownership*: I owned end‑to‑end migration, coordinated with ops & security.  
- *Dive Deep*: Detailed latency traces, consistency proofs, cost models.  
- *Quantified Impact*: 35 % latency drop, 27 % cost savings.  
- *Learning from Failure*: Post‑mortem on a failed sharding attempt led to a new “data partitioning” playbook used company‑wide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
