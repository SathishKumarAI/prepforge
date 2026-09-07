---
qid: ing_de7510e97b__faang__local
question: 'Explain: Master-slave and master-master — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 520
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:16:24-05:00'
sources: []
---

**Clarify**

You’re asking about *master‑slave* vs. *master‑master* replication models used in distributed data stores (e.g., databases, cache layers).  
Assumptions to confirm:  
1. We’re focusing on write‑through consistency and fault tolerance.  
2. The system needs high availability and low latency across geo‑regions.

**Approach**

1. Define each topology.  
2. Compare read/write patterns, failover paths, data consistency guarantees, and operational complexity.  
3. Summarize trade‑offs for a typical large‑scale web service.

**Depth**

| Aspect | Master‑Slave (Primary‑Replica) | Master‑Master (Multi‑primary) |
|--------|------------------------------|--------------------------------|
| **Writes** | Single source → sequential propagation to replicas. | Any node can accept writes; changes are merged or conflict‑resolved. |
| **Reads** | Can be served from any replica for low latency, but must handle eventual consistency. | Reads can hit any node, offering true read scalability. |
| **Consistency** | Strong (if synchronous) or eventual (async). | Often eventual; requires conflict resolution logic (vector clocks, CRDTs). |
| **Failover** | Promote a replica → downtime of writes until promotion. | Automatic failover; remaining masters keep serving without pause. |
| **Operational Complexity** | Simpler to reason about state and replication lag. | Higher due to merge conflicts, split‑brain avoidance, and stronger consistency protocols (e.g., Raft). |

**Edge Cases**

- Network partitions: master‑master can suffer split‑brain; need consensus algorithms.  
- Heavy write workloads: master‑slave may become a bottleneck unless sharding is applied.  
- Schema changes: easier on single‑primary systems.

**Optimize & Communicate**

For an e‑commerce platform with >10k writes/sec, a *master‑master* cluster with conflict‑free replicated data types (CRDTs) and a global consensus layer gives high availability while keeping latency low. If write conflicts are rare and consistency is paramount, a *master‑slave* design with synchronous replication across primary regions may be preferable.

**Bottom line:** Master‑slave offers simplicity and strong consistency; master‑master delivers higher availability and read scalability at the cost of added complexity in conflict resolution. Choose based on your system’s write patterns, latency tolerance, and operational bandwidth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
