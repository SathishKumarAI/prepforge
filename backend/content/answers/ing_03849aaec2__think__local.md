---
qid: ing_03849aaec2__think__local
question: 'Explain: Terminology — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 452
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:58:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   • Define *Distributed Counter* (a counter whose state is replicated across nodes).  
   • Assume typical constraints: low latency, high throughput, eventual consistency, and crash‑fault tolerance.  
   • Decide whether to model read/write semantics (linearizable vs. quorum) and network partitioning.

**2️⃣ Adopt a system‑design framework**  
   • *Requirements*: functional (increment/lookup), non‑functional (scalability, fault‑tolerance).  
   • *Architecture*: client → load balancer → shards/replicas → consensus layer (e.g., Raft) → storage.  
   • *Data model*: key/value with version vectors or Lamport timestamps.

**3️⃣ Step‑by‑step reasoning**  
   1. **Partitioning strategy**: hash the counter ID to a shard; each shard owns a contiguous set of counters.  
   2. **Replication & consensus**: within a shard, elect a leader (Raft) that serializes increments and propagates log entries to followers.  
   3. **Write path**: client → load balancer → shard leader → append entry → commit on majority → ack.  
   4. **Read path**: read from leader for strong consistency or from any replica with a staleness bound.  
   5. **Failure handling**: leader election, log compaction, anti‑entropy between replicas.

**4️⃣ Common traps to avoid**  
   • Assuming linearizability automatically guarantees performance; it often introduces latency.  
   • Overlooking the *split brain* problem when network partitions occur.  
   • Neglecting write amplification due to replication logs.  

**5️⃣ Sanity‑check & communicate**  
   • Verify that each increment is stored exactly once (no lost updates).  
   • Demonstrate how a counter value converges after a node crash and recovery.  
   • Present sample latency numbers for read/write under typical loads, showing trade‑offs between consistency level and throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
