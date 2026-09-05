---
qid: ing_39c007e602__fp__local
question: 'Explain: Cardinality — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 433
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:41-05:00'
sources: []
---

**Why a single database can’t grow forever**

A relational database is a *monolithic* table of tuples, indexed by keys.  
When the amount of data \(N\) exceeds what one machine’s RAM, CPU and disk can
handle, every query must scan more rows or read from slower storage.  The cost
of a query scales roughly linearly with \(N\); latency becomes unacceptable.
Moreover, if you add a second node you still need to coordinate writes across
all nodes—this is the *write‑through* bottleneck.

**Sharding solves the scaling problem by dividing the data into independent
fragments.**

1. **Partitioning (shard key)** – Pick an attribute \(k\) that distributes rows
   evenly (e.g., user id, geographic region).  
2. **Placement** – Each shard is stored on a distinct node or cluster.  
3. **Routing** – The application routes a request to the node whose shard key
   range contains the target row.

Because each node now handles only \(N/|S|\) rows, queries are \( |S| \) times faster in
parallel; writes no longer need cross‑node coordination (unless you require
strong consistency).  The system’s capacity scales *linearly* with the number of shards.

**Non‑obvious insight:**  
Sharding is not just a mechanical split; it turns a *global* table into a
collection of *local* tables.  This localizes contention and allows each shard to
tune its own storage engine, cache size, or even schema variant.  In practice,
you can give hot shards more memory while keeping cold shards on cheaper disks,
something impossible in a monolithic database.

---

> **AWS DynamoDB** implements this idea with *partition keys* and *global secondary indexes*, automatically distributing data across thousands of partitions while presenting a single, consistent API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
