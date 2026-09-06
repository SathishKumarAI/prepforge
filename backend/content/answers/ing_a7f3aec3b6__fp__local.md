---
qid: ing_a7f3aec3b6__fp__local
question: 'Explain: Secondary Indexes — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 434
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:45-05:00'
sources: []
---

## Why a “secondary index” is needed

In a key‑value store the **primary key** gives constant‑time lookup: you look up *exactly* what you asked for.  
When queries involve predicates on other columns (e.g., `WHERE age > 30`) the engine must scan the whole table – O(N).  
A secondary index trades a little storage and write overhead for logarithmic search time, turning an O(N) scan into an O(log N) lookup.

## How Cassandra implements it

Cassandra stores data in **wide rows** sorted by partition key. A secondary index is built as a *materialized view* of the indexed column:  
- Each row’s value becomes a *pointer* (partition key + clustering columns).  
- The index table is automatically updated on writes.  

Because Cassandra partitions data, the index itself is distributed across nodes; queries hit only the partitions that contain matching keys, giving linear scalability but at the cost of **write amplification** and potentially high network traffic for very selective predicates.

## How MongoDB implements it

MongoDB’s index is a **B‑tree** (or hash for sparse indexes).  
- The tree is stored locally on each node; it can be *sharded* across shards.  
- Reads traverse the B‑tree to fetch matching documents directly, with minimal network hops.  

Write overhead is lower than Cassandra’s because only the relevant leaf nodes are updated, and the engine keeps the index in memory for fast access.

## One non‑obvious insight

Cassandra’s index is **decentralized by design**; it can be rebuilt automatically if a node fails.  
MongoDB’s B‑tree is *coherent* but requires coordination to maintain consistency across shards, which can become a bottleneck under heavy write load.  

Thus, choose Cassandra when you need fault‑tolerant, write‑heavy workloads on distributed data; choose MongoDB when read latency and simple query patterns dominate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
