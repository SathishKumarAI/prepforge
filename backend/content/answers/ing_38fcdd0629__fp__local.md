---
qid: ing_38fcdd0629__fp__local
question: 'Explain: Functional Requirements — Distributed Counter System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 353
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:06:02-05:00'
sources: []
---

**Functional Requirements – Distributed Counter System**

A distributed counter must expose a *consistent, linearizable view* of an integer that can be incremented concurrently by many clients across unreliable nodes.  
1. **Atomicity & Idempotence**: Every `inc()` call must either succeed once or not at all; duplicate messages (e.g., due to retries) should not double‑count. This follows from the *concurrency control* principle that ensures operations are indivisible.  
2. **Strong Consistency**: Reads return the most recent incremented value, which requires a global ordering of events—often achieved by a consensus protocol (Paxos/Raft). The deeper insight is that without an agreed leader or quorum, linearizability collapses to eventual consistency.  
3. **Fault Tolerance & Availability**: The system must survive node failures and network partitions while still allowing increments. This invokes *CAP trade‑off*: we choose consistency + partition tolerance (CP), so during a split the counter is temporarily unavailable but never corrupted.  
4. **Scalability & Latency**: To keep latency low, counters can be sharded; each shard owns a range of IDs and maintains its own local replica set. The non‑obvious insight: *sharding reduces contention* not by distributing data, but by allowing parallel consensus rounds that do not interfere.  

Together these requirements enforce that the counter behaves like a single logical register, even though it lives on many machines, mirroring the fundamental optimization of “one source of truth” in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
