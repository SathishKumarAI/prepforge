---
qid: ing_32ca67a5c8__faang__local
question: 'Explain: High Availability — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 492
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:41-05:00'
sources: []
---

**Clarify**  
*Problem*: How do we design a vector database that remains highly available (HA) in the face of failures?  
*Assumptions to confirm*: 1) We’re dealing with high‑dimensional embeddings stored at scale; 2) Latency targets are sub‑ms for read, moderate for write; 3) The system must support eventual consistency across geo‑regions; 4) Failure modes include node crash, network partition, and disk corruption.

**Approach**  
1. Partition vectors into shards (by ID or hash).  
2. Replicate each shard *k* times across distinct availability zones (AZs).  
3. Use a consensus protocol (Raft/Etcd) for primary election within a zone; cross‑zone replication via asynchronous log shipping.  
4. Expose a quorum‑based query API that can read from any replica while writes go to the leader.

**Depth**  
- *Replication*: 3× replicas → 99.999% uptime (five nines).  
- *Consensus*: Raft ensures linearizability for writes; reads can be served by any node, trading consistency for latency.  
- *Vector index*: Each shard hosts an ANN structure (IVF/PQ) built locally; on failover we rebuild the index from logs.  
- *Complexity*: Write O(log n) for Raft log append + index update; read O(1) to fetch vector + O(k) for ANN search within shard.

**Edge Cases**  
- Network partition: one zone may lose quorum → write stalls, but reads can continue with stale data.  
- Simultaneous node failures across zones: fallback to a secondary zone’s leader.  
- Disk corruption: use checksums and automatic rebuild from logs.

**Optimize & Communicate**  
- *Performance*: Cache hot vectors in memory; batch index updates during low traffic windows.  
- *Observability*: Emit metrics on replication lag, shard health, and query latency.  
- *Narrative*: “By decoupling storage, indexing, and consensus, we achieve both strong durability (through Raft) and low‑latency reads (via local ANN), while the multi‑AZ replication guarantees HA even under catastrophic failures.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
