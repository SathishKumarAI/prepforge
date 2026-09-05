---
qid: ing_2944a50f70__fp__local
question: 'Explain: Joins and Transactions Across Shards — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 406
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:33:00-05:00'
sources: []
---

**Why we need joins/transactions across shards**

In a sharded system each node holds only a subset of the table’s rows.  
A query that “joins” two tables or an operation that must be *atomic* across
shards is essentially a **constraint coupling data that lives on different
processes**. The fundamental problem is that a single machine cannot see all
the relevant tuples, so it must coordinate with others.

**Derivation from first principles**

1. **Consistency requirement** – A transaction must leave the database in a state
   that satisfies every invariant. If an invariant references rows on two shards,
   both shards must agree before any commit.
2. **Atomicity as a global lock** – The only way to guarantee atomicity is to have a
   *global locking* or *two‑phase commit (2PC)* protocol: each shard locks its
   rows, a coordinator gathers votes, and then either all commit or all abort.
3. **Join semantics** – A join is just “fetch rows from shard A that match keys in
   shard B”. The cost is the *network round‑trips* needed to pull matching tuples,
   plus any ordering/aggregation required by the query engine.

Thus, joins and cross‑shard transactions are solved by *coordination protocols*
that trade latency for consistency.  

**Non‑obvious insight**

The real bottleneck isn’t the amount of data transferred but the *entropy* of
the keys: if most join predicates involve highly skewed keys (e.g., a single
customer ID), sharding on that key collapses to a single shard and removes any
parallelism. Therefore, effective sharding schemes must consider **information
gain** of the partition key to keep joins inexpensive while preserving load
balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
