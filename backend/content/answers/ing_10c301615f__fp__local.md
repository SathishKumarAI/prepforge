---
qid: ing_10c301615f__fp__local
question: Hold on—what is consensus? — Raft Consensus Algorithm
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 384
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:24-05:00'
sources: []
---

**Raft** is a distributed consensus protocol that guarantees all servers in a cluster agree on the same sequence of state‑machine updates, even when some nodes fail or messages are lost.  
The *fundamental problem* it solves is **state replication under asynchrony**: how can many independent processes maintain a single, linear log of commands without coordinating every step?  

Raft reduces this to three simple primitives that together satisfy the properties of *consistency*, *availability*, and *partition tolerance* (the CAP theorem).  
1. **Leader election** – only one node may append entries at any time. By voting on a term number, Raft ensures that a majority of honest nodes agree on who the leader is. This reduces coordination to a single point for writes while still allowing reads from followers.  
2. **Log replication** – the leader appends client commands to its log and streams them to followers. If a follower lags, it requests only missing entries; if it diverges, the leader overwrites it by sending newer indices. This incremental diff is an efficient *information‑theoretic* solution: each follower learns exactly what it lacks, not the whole history.  
3. **Safety via term consistency** – every log entry carries its term. A node will never accept an older entry that conflicts with a committed one, ensuring that once a value is agreed upon it can’t be lost.

The non‑obvious insight: **Raft’s safety hinges on *term numbers* rather than timestamps**. Because terms are monotonic and tied to elections, they provide a *total order of leadership changes* without relying on clock synchrony, which is impossible in distributed systems. This simple ordering guarantees that the most recent commit prevails, making Raft robust even under severe network partitions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
