---
qid: ing_0f909fe69f__fp__local
question: 'Explain: Master-Slave Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 434
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:38:36-05:00'
sources: []
---

**Master‑Slave replication (primary‑secondary)**

The *fundamental problem* is to keep a large dataset available and consistent while handling many concurrent reads.  
A single database instance cannot scale read traffic: every query locks the same storage engine, so throughput plateaus.  Replication solves this by *duplicating* data across nodes.

1. **Write path (master)** – All updates originate at the master.  
   The master records each transaction in a write‑ahead log and applies it to its local store.  
2. **Propagation** – The log is shipped asynchronously to one or more slaves.  
   Each slave replays the log, ensuring *strong consistency* from the master's point of view.  
3. **Read path (slaves)** – Clients can read from any slave; reads are isolated because each slave has a full copy.

Why must it work this way?  
- **Linearizability**: By serializing writes at one point, we avoid write conflicts that would otherwise require complex locking or MVCC across nodes.  
- **Availability vs consistency trade‑off (CAP)**: The system sacrifices *immediate* consistency for higher read availability; eventual convergence is guaranteed by the log replay.

A deeper principle is **information flow**: the master acts as a single source of truth, and slaves are deterministic observers that reconstruct the same state from a fixed stream.  This guarantees that no matter how many replicas exist, they all converge to the same data set.

> **Non‑obvious insight:**  
> The *log* is not just an audit trail; it is the *only* thing that needs to be transferred over the network.  By encoding changes as a stream of operations rather than full snapshots, replication bandwidth scales with write volume, not table size.  This is why systems like MySQL’s binlog or PostgreSQL’s WAL are central to efficient master‑slave designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
