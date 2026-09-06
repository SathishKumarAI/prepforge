---
qid: ing_d36abae071__fp__local
question: 'Explain: Availability — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 483
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:29-05:00'
sources: []
---

**Availability – Cassandra vs MongoDB**

At its core, a database must keep serving requests while nodes fail.  
The *availability* of a system is the probability that a request can be
answered given the current state of its replicas.  

1. **Replication model**  
   - *Cassandra*: each keyspace is replicated to *N* nodes (replication factor).  
     Writes are sent to all replicas, but the coordinator only waits for a
     quorum (*W*) before returning success.  
   - *MongoDB*: writes go to a primary; secondary replicas pull updates via
     oplog replication. The primary can be down only if an election succeeds.

2. **Tunable consistency**  
   In Cassandra you choose *R* (read quorum) and *W* (write quorum).  
   For high availability, set *W = 1*; the system will accept writes even if
   most replicas are offline, at the cost of potential stale reads (*R = 1*).  
   MongoDB’s consistency is fixed: a write must reach the primary,
   so a single‑node failure blocks all writes until failover completes.

3. **Failure handling**  
   - Cassandra uses *hinted handoff*: if a replica is down, the coordinator
     stores a hint and delivers it later; thus writes are never lost.  
   - MongoDB relies on an election to promote a new primary; during this
     window the cluster’s write availability drops to zero.

**Non‑obvious insight:**  
Cassandra’s quorum logic guarantees *eventual* consistency, but its
availability curve is smoother because even with many replicas offline,
the system can still satisfy *W = 1*. MongoDB’s single‑primary model creates a hard
availability cliff: once the primary fails, all writes stall until an election.
Thus, for workloads where continuous write traffic under partial outages
is critical, Cassandra’s design inherently offers higher availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
