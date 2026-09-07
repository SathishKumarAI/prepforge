---
qid: ing_8f52096d5d__faang__local
question: 'Explain: Distributed Counter High-Level Design — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 513
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:50-05:00'
sources: []
---

**Clarify**

We need a fault‑tolerant counter that can be incremented from many clients worldwide and read consistently.  
Assumptions to confirm:  
* Read latency target (≤ 100 ms).  
* Write throughput (e.g., 10k ops/s).  
* Max staleness acceptable for reads.  
* Budget for replication / consistency guarantees.

**Approach**

1. **Partition by key** – sharding the counter into N logical shards, each responsible for a range of values or a hash bucket.  
2. **Leader‑follower replication per shard** – one leader handles writes; followers serve reads and act as failover.  
3. **Increment API** – client sends `INCR` to its nearest shard’s leader; leader persists locally (e.g., WAL) then asynchronously replicates to followers.  
4. **Read API** – read from local follower or leader; optionally return a *read‑your‑writes* snapshot if needed.  
5. **Global aggregation** – maintain a global counter view by summing shard leaders’ totals, updated via lightweight gossip.

**Depth**

- Shard count chosen to keep per‑shard write throughput < 10k ops/s and latency low.  
- Use Raft or Paxos for leader election; write latency ≈ 2× RTT.  
- Persist each increment in a WAL (O(1) disk).  
- Followers apply logs asynchronously, ensuring eventual consistency.  
- Global view refreshed every X seconds; clients can query the aggregated value with bounded staleness.

**Edge Cases**

- Leader failure → prompt election, redirect writes to new leader.  
- Network partitions → shards may diverge; resolve via conflict‑free replicated data type (CRDT) or vector clocks.  
- Clock skew on global aggregation – use logical timestamps.

**Optimize & Communicate**

- **Batching**: coalesce multiple increments before WAL flush to reduce I/O.  
- **Caching**: keep recent counter values in memcached for ultra‑fast reads.  
- **Monitoring**: expose per‑shard latency, replication lag.  

Explain trade‑offs: stronger consistency (leader writes only) yields higher write latency; relaxed consistency allows follower writes but increases divergence risk. This design balances scalability, fault tolerance, and low read latency—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
