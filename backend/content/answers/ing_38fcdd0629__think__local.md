---
qid: ing_38fcdd0629__think__local
question: 'Explain: Functional Requirements — Distributed Counter System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 526
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:40:43-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   * Ask whether “distributed counter” means a simple increment/decrement API, or if it must support persistence, fault‑tolerance, eventual consistency, etc.  
   * Assume we’re building for high throughput (thousands of ops/sec) with low latency (<10 ms).  
   * Note that counters may be sharded by key and that the system should scale horizontally.

**2. Adopt a design framework**  
   * **Functional decomposition**: Identify core functions – read, write, reconcile, monitor.  
   * **Consistency model**: Choose between strong (e.g., Raft) vs eventual consistency (vector clocks/CRDTs).  
   * **Fault‑tolerance strategy**: Replication, leader election, failure detection.

**3. Reason step‑by‑step toward the answer**  
   1. Define the API contract (GET /counter/{id}, POST /counter/{id}/inc).  
   2. Decide sharding: hash counter ID → node; each shard owns a subset of counters.  
   3. For strong consistency, use Raft per shard: leader handles writes, followers replicate logs.  
   4. For high availability, allow readers to hit any replica (read‑repair).  
   5. Add a global “counter manager” that routes requests based on hash.  
   6. Implement monitoring: metrics, heartbeats, auto‑recovery.

**4. Common traps to avoid**  
   * **Assuming single‑node consistency suffices** – ignore network partitions.  
   * **Over‑sharding** – too many shards increase coordination overhead.  
   * **Neglecting write amplification** – each increment may replicate across replicas; consider batching or log compaction.  
   * **Ignoring clock skew** – if using timestamps for conflict resolution, ensure synchronized clocks.

**5. Sanity‑check and verbalize the design**  
   * Walk through a write path: client → router → shard leader → log append → follower replication → acknowledgment.  
   * Verify latency budgets: hashing (microseconds), network hop (ms).  
   * Check edge cases: node failure, split brain, counter overflow.  
   * Summarize the trade‑offs: strong consistency + lower latency vs eventual consistency + higher throughput.

By following these steps you can systematically explain a functional distributed counter system design and justify each architectural choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
