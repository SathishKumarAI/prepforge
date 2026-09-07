---
qid: ing_5519501ab6__faang__local
question: 'Explain: Replication — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 643
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:02:02-05:00'
sources: []
---

**Clarify**

You’re asking how *replication* is used to guarantee *availability* in large‑scale AI systems (e.g., model serving, training pipelines).  
Assumptions I’d confirm:  

1. We’re talking about data replication across datacenters or nodes.  
2. The goal is to keep services up even when parts of the system fail.  
3. Latency requirements are strict (ML inference must stay < 10 ms).

**Approach**

Outline the key availability patterns that use replication:

1. **Active‑Active (Multi‑Region) Replication** – all replicas serve read/write traffic.  
2. **Leader‑Follower (Primary/Secondary)** – one primary handles writes; followers replicate and can take over on failure.  
3. **Sharded + Replicated** – data is partitioned (shards) with each shard replicated for fault tolerance.  
4. **Quorum Reads/Writes** – operations succeed once a majority of replicas acknowledge.

Then map each pattern to typical AI workloads: inference, training, model registry.

**Depth**

- *Active‑Active*: Uses global load balancers and consistent hashing; writes propagate via conflict‑resolution (CRDTs or vector clocks). Latency is low but consistency can be eventual.  
- *Leader‑Follower*: Stronger consistency for updates (e.g., new model versions) with read‑through caches. Failover requires election protocols (Raft, Paxos).  
- *Sharded + Replicated*: Splits the parameter server or embedding tables; each shard has its own replicas to localize traffic and reduce cross‑region hops.  
- *Quorum*: For a 3‑node replica set, a write needs 2 acknowledgments; reads can be served from any node if linearizability isn’t critical. Complexity: O(log N) for leader election, O(1) for read/write with proper caching.

**Edge Cases**

- Network partitions → split‑brain scenarios in active‑active.  
- Write storms during model rollouts can overwhelm followers.  
- Stale replicas causing inference drift; need version tags or TTLs.  
- Consistency–latency trade‑offs when a node is temporarily offline.

**Optimize & Communicate**

Explain that the choice depends on *service level objectives* (SLOs). For low‑latency inference, active‑active with read‑only replicas is common; for model updates, leader‑follower ensures consistency.  
When narrating, emphasize:  

- “We first isolate the failure domain (region vs. node).”  
- “Then we pick a replication pattern that satisfies our latency and consistency budget.”  
- “Finally, we instrument health checks and automated failover to keep the system above 99.999% availability.”

This structured answer shows clear problem framing, methodical planning, technical depth, edge‑case awareness, and actionable trade‑off communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
