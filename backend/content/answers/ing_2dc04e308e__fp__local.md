---
qid: ing_2dc04e308e__fp__local
question: 'Explain: Failover Mechanisms — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 440
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:05-05:00'
sources: []
---

**Fail‑over in a high‑traffic social platform**

The fundamental problem is *continuous availability* under inevitable node failures.  
When a user requests a post, the system must deliver it within a few milliseconds even if one or more storage or compute nodes are down. The solution is to **replicate data across independent datacenters** and to route traffic through an **elastic load balancer** that monitors health.

1. **Replication & partitioning** – A *sharded* key space (e.g., `user_id → shard`) ensures each request touches a single node, but every shard has *N* replicas.  
2. **Leader‑follower protocol** – One replica is elected leader; writes go to it and are asynchronously replicated. If the leader fails, an in‑flight election (Raft/Etcd) promotes a follower.  
3. **Health checks & automatic switchover** – Heartbeats expose node status; if a heartbeat drops, traffic is rerouted by the balancer before the failure propagates.  
4. **Quorum reads/writes** – A *majority* of replicas must acknowledge a write (ensuring durability) while reads can be served from any replica for low latency, achieving tunable consistency.

> **Non‑obvious insight:**  
The *quorum size* is the lever that balances *latency* against *durability*. In a 3‑replica setup, reading from all three guarantees the freshest data but doubles response time; reading from one keeps latency minimal but risks stale reads. By exposing this parameter to the application layer (e.g., “read‑your‑writes” flag), Instagram can dynamically adjust consistency per operation type—critical for features like stories (high latency tolerance) versus direct messages (strong consistency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
