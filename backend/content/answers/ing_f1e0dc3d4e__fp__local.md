---
qid: ing_f1e0dc3d4e__fp__local
question: 'Explain: Examples — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 417
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:26-05:00'
sources: []
---

**CAP Theorem – why it is inevitable**

At its core, a distributed database must *replicate* data to survive failures and to keep latency low. Replication creates two competing constraints:

1. **Consistency (C)** – every read sees the most recent write.  
2. **Availability (A)** – every request receives a response without waiting for coordination.

The third dimension is **Partition tolerance (P)** – the system must keep operating when network links fail or messages are delayed.  

In a partitioned network, a node can either *wait* for other replicas to agree (ensuring C) or *serve immediately* (ensuring A). Waiting violates availability; serving without agreement violates consistency. Thus, during a split, you cannot satisfy all three simultaneously. The theorem follows from the pigeonhole principle: with \(n\) replicas and a partition that isolates a subset, at least one replica must decide between waiting for others or proceeding.

**Practical examples**

| Scenario | What is sacrificed? | Why |
|----------|---------------------|-----|
| **Cassandra (AP)** | Consistency | Uses eventual consistency; writes are acknowledged once written to local replicas. |
| **MongoDB with quorum reads/writes (CP)** | Availability | Requires a majority of nodes for every operation, blocking when the majority is unreachable. |
| **Raft‑based service** | Partition tolerance not an issue in small clusters; but if network splits, it drops availability until the majority re‑joins. |

**Non‑obvious insight:**  
*The theorem is about **decision points**, not data states.* A node’s choice to block or reply is a *policy decision*, not a physical impossibility. By changing the policy (e.g., using “tunable consistency” in Cassandra), you shift where the trade‑off lies, but you cannot eliminate it without sacrificing one of the three guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
