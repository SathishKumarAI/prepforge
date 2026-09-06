---
qid: ing_aaec540142__fp__local
question: 'Explain: Interviewer — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 540
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:57-05:00'
sources: []
---

**Why a counter needs to be *distributed***  
In a global service the same logical “counter” (e.g., page views) must be updated by millions of clients that are spread across data‑center regions. A single write‑to‑disk database would become a bottleneck and a single point of failure, so we shard the counter into many independent replicas that can accept updates locally and later reconcile.

**Fundamental problem – consistency vs. availability**  
The system must guarantee *exactly‑once* counting while still tolerating network partitions. By relaxing strict serializability to **eventual consistency**, each replica can process writes in isolation (high availability) and merge results asynchronously (ensuring correctness).

**Key design choice – log‑based, append‑only updates**  
Each write is appended to a local write‑ahead log (`Δ += 1`). Logs are immutable, so they can be replicated efficiently over the network without coordination. The counter’s value at any point is simply the sum of all logged deltas.

**Merging strategy – delta aggregation + conflict‑free commutative operation**  
Because addition is **commutative and associative**, merging two replicas reduces to adding their local totals. This satisfies the *CRDT* (Conflict‑Free Replicated Data Type) property: no merge ever “loses” updates, and all replicas converge regardless of merge order.

**Non‑obvious insight – use of probabilistic counting for scalability**  
When the counter’s cardinality is enormous, storing every `Δ` becomes infeasible. A *HyperLogLog* or *Count‑Min Sketch* can be distributed similarly: each replica maintains a sketch locally and periodically merges sketches using bitwise OR (for HLL) or min‑per‑bucket operations. This trades an infinitesimal error for orders‑of‑magnitude storage savings, while still guaranteeing eventual convergence.

**Putting it together**  
1. **Local write path:** append `Δ` to log → update local sum.  
2. **Replication:** push log entries to a subset of replicas (e.g., quorum).  
3. **Merge loop:** periodically pull logs from peers, aggregate sums or sketches.  
4. **Read path:** serve the latest local sum; optionally, read‑repair by querying a random peer if stale.

This design respects the CAP trade‑off: *available* and *partition tolerant*, with *eventual consistency* ensured by an algebraic merge that is both simple and provably correct.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
