---
qid: ing_8955659ab2__faang__local
question: What Is a Distributed Counter? — Distributed Counter System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:52-05:00'
sources: []
---

## Clarify  
A *distributed counter* is a shared integer that multiple clients can read or increment concurrently across a cluster of nodes.  
Assumptions to confirm:  
1. **Consistency model** – eventual vs linearizable?  
2. **Fault tolerance** – how many node failures must be tolerated?  
3. **Operation mix** – predominantly increments, occasional reads, and whether batch updates are allowed.  

## Approach  
1. Partition the counter into *shards* (one per node).  
2. Clients perform local increments on a shard; periodic *gossip* or write‑to‑all to keep shards in sync.  
3. For linearizable reads, use a leader or quorum read that aggregates all shards.  

## Depth  
- **Data model**: each shard stores `local_count`.  
- **Write path**: `increment()` updates local shard → asynchronously replicate delta to others (e.g., via Kafka).  
- **Read path**:  
  - *Eventual*: return local + latest known deltas.  
  - *Linearizable*: leader aggregates all shards, returns sum, and updates a stable storage.  
- **Consistency guarantees**: CRDT‑style G-Counter ensures eventual consistency without conflict; for strict consistency use Paxos/RAFT to elect a primary that serializes increments.  
- **Complexity**: O(1) per increment locally; read cost is O(n_shards) for linearizable reads.  

## Edge Cases  
- Network partitions → divergent counts; resolved on merge by max or sum.  
- Node failures → stale shards; use heartbeats to detect and rebuild.  
- Clock skew not an issue because counters are integer deltas, not timestamps.  

## Optimize & Communicate  
To reduce read latency in linearizable mode, maintain a *global counter* at the leader updated on every commit; reads can be served from this cache with O(1).  
Explain trade‑offs: CRDT gives high availability but only eventual consistency; RAFT gives strong consistency at cost of write throughput.  

**TL;DR:** Use sharded G-Counters for high‑throughput, eventual consistency, and switch to a leader‑based RAFT aggregation when linearizable reads are required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
