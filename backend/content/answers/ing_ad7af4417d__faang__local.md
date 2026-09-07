---
qid: ing_ad7af4417d__faang__local
question: 'Explain: Single-Leader replication — Singleleaderreplication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 443
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:26:51-05:00'
sources: []
---

**Clarify**  
You’re asking about *single‑leader replication* in distributed databases—i.e., a system where one node (the **leader**) accepts all writes and propagates them to follower replicas. Confirm assumptions: is the focus on consistency guarantees, latency trade‑offs, or fault tolerance? I’ll assume we want a concise technical overview.

**Approach**  
1. Define architecture & data flow.  
2. Explain how the leader serializes writes.  
3. Discuss replication mechanics (synchronous vs asynchronous).  
4. Touch on failure handling and leader election.  

**Depth**  
In single‑leader replication, all client write requests hit the **leader** node. The leader assigns a monotonically increasing log index to each operation, appends it locally, then pushes the entry to followers. Followers apply the entry in order, ensuring *strong consistency* (e.g., linearizability) when writes are synchronous: the client receives confirmation only after at least *N‑1* replicas acknowledge. Asynchronous replication relaxes this for lower latency but risks temporary divergence.

The leader coordinates commit decisions; if it fails, a new leader is elected via a consensus protocol (Paxos/RAFT). Followers can serve reads; to avoid stale reads, readers must either read from the leader or use read‑repair mechanisms. Complexity: write throughput is bounded by the slowest follower in synchronous mode; latency scales with network RTT between leader and farthest replica.

**Edge Cases**  
- Network partitions: followers may become isolated; RAFT ensures only one term’s leader can commit.  
- Leader lag: new writes wait until lagging replicas catch up (synchronous).  
- High write volume: a single leader becomes bottleneck; sharding or multi‑leader patterns mitigate.

**Optimize & Communicate**  
Improvements include batching, log compaction, and tunable consistency levels to balance latency vs durability. When explaining, emphasize that single‑leader replication simplifies conflict resolution but limits horizontal scalability—key insight for architects evaluating CAP trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
