---
qid: ing_c8db3d0f80__fp__local
question: 'Explain: Sharding — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 426
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:10-05:00'
sources: []
---

**Sharding: The Geometry of Scale**

At its core, a relational engine must answer  
\(Q = \{q_1,\dots ,q_k\}\) over a table \(T\) whose size is \(N\).  
The time to scan \(T\) grows linearly with \(N\); the CPU and I/O bandwidth are fixed.  
Sharding splits \(T\) into disjoint pieces \(\{S_1,\dots ,S_m\}\), each of size \(N/m\).  
Now a query touches only the shard(s) that contain its predicates, so the *expected* work per node is \(|Q|\, (N/m)\).  

Why must sharding be **partition‑aware**?  
Because any query can cross shards; if the partition key does not align with the join or filter columns, a query will fan out to all \(m\) nodes.  That defeats the purpose: you still pay \(|Q|\,N\), only spread across machines.  

The deeper principle is *locality of reference*.  By aligning partitions with hot access patterns (e.g., user‑ID ranges for social feeds), we keep most queries local, reducing network hops and contention.  

**Non‑obvious insight:**  
Sharding is not just a scalability hack; it induces a **distributed constraint satisfaction problem** on the query planner.  The planner must infer which shards to touch based on predicate selectivity—a probabilistic optimization that can be solved with Bayesian inference over historical access logs, turning what seems like an engineering trick into a principled statistical problem.  

Thus sharding is a geometric transformation of data space designed to preserve locality and turn linear‑time scans into sub‑linear work, but only if the partition key is chosen by analyzing the probability distribution of query predicates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
