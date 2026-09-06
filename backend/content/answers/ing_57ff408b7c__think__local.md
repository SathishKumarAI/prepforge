---
qid: ing_57ff408b7c__think__local
question: 'Explain: Distributed Counter Data Storage — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 576
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:48:56-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Build a highly‑available, scalable counter (e.g., likes, views).  
- *Assumptions*: read/write latency < 5 ms, linearizable reads for “current” value, eventual consistency acceptable for increments, data center spread, no single point of failure.

**2️⃣ Adopt a mental model**  
Treat the counter as an **append‑only log of increment events** that can be *partitioned* and *merged*. Think in terms of:  
- **Write path** (recording an increment) → **Shard** → **Replication**.  
- **Read path** (aggregating partial counts).  

Use a *CRDT* (Conflict‑Free Replicated Data Type) or *log‑based approach* so merges are deterministic.

**3️⃣ Step‑by‑step reasoning**

1. **Sharding strategy**: hash the counter key to N shards; each shard holds a local count.  
2. **Write flow**: client → API gateway → shard node → append “+1” event → persist to local log + replicate asynchronously to other replicas of that shard.  
3. **Replication**: use quorum (e.g., 2/3) for writes; async replication for others.  
4. **Read flow**: read from local replica if close enough; otherwise, aggregate across all shards’ latest values (fetching from nearest replicas).  
5. **Merge policy**: each shard’s log is totally ordered; merging sums counts. If using CRDT, simply add local counts.  
6. **Failure handling**: on node failure, another replica takes over; counters never lost because events are persisted before ack.

**4️⃣ Common traps to avoid**

- *Over‑synchronizing*: waiting for all replicas on every write kills latency.  
- *Ignoring partitioned reads*: reading stale shards leads to double counting.  
- *Tight coupling of counter value to a single node*: violates HA.  
- *Not handling out‑of‑order events*: can corrupt total count.

**5️⃣ Sanity checks & verbalizing**

- Verify **linearizability** for “current” reads: does your read path always reflect the latest acknowledged writes?  
- Check **write amplification**: are we replicating more than necessary?  
- Think of edge cases: network partitions, node crashes.  
- Communicate clearly: start with high‑level diagram → detail shard/replica layout → explain write/read protocols → discuss consistency guarantees and failure scenarios.

This structured approach keeps the explanation focused, defensible, and easy to adapt for other distributed counters or aggregates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
