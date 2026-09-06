---
qid: ing_a865915f14__fp__local
question: 'Explain: Consistency — The CAP Theorem in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 406
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:41-05:00'
sources: []
---

### Consistency – the “all or nothing” rule of distributed data

At its core, a database is an information‑theoretic system that stores a *single* truth about every key at any instant.  
When you read a value, you expect it to be the result of all writes that have logically finished before your request—otherwise the read is meaningless. This requirement is **consistency**: “every read sees the most recent write.”

Why must this hold?  
In a distributed setting, each node may accept writes locally and propagate them asynchronously. If a client reads from a replica that has not yet received an update, it will see stale data. From an optimization point of view, allowing such staleness means the system can trade off *latency* or *availability* for *throughput*. But if the application demands correctness (e.g., banking), any violation is catastrophic: two accounts could be overdrawn simultaneously because each node thinks it holds a different balance.

The CAP theorem formalizes this trade‑off. Consistency, Availability, and Partition tolerance cannot all coexist; you must drop one when a network partition occurs.  
**Non‑obvious insight:** *Consistency is not merely “data equality” but a guarantee that the system’s state space collapses to a single linear order of events.* This ordering is enforced by consensus protocols (Paxos, Raft) or by strict serialization in RDBMSs. If you think of consistency as a geometric constraint—every replica lies on the same hyperplane of state—the only way to maintain it under partitions is to restrict which replicas can accept writes (partition tolerance → availability trade‑off). Thus, consistency forces an architectural *bottleneck* that shapes every distributed DBMS design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
